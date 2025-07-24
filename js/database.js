// SQLite 데이터베이스 관리 클래스
class MathQuizDatabase {
    constructor() {
        this.dbName = 'mathQuizDB';
        this.version = 1;
        this.db = null;
        this.initDatabase();
    }

    async initDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);
            
            request.onerror = () => reject(request.error);
            
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // 문제 테이블
                if (!db.objectStoreNames.contains('questions')) {
                    const questionStore = db.createObjectStore('questions', { keyPath: 'id', autoIncrement: true });
                    questionStore.createIndex('difficulty', 'difficulty', { unique: false });
                    questionStore.createIndex('category', 'category', { unique: false });
                }
                
                // 사용자 테이블
                if (!db.objectStoreNames.contains('users')) {
                    const userStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                    userStore.createIndex('name', 'name', { unique: false });
                }
                
                // 게임 세션 테이블
                if (!db.objectStoreNames.contains('sessions')) {
                    const sessionStore = db.createObjectStore('sessions', { keyPath: 'id', autoIncrement: true });
                    sessionStore.createIndex('userId', 'userId', { unique: false });
                    sessionStore.createIndex('date', 'date', { unique: false });
                }
                
                // 스코어 테이블
                if (!db.objectStoreNames.contains('scores')) {
                    const scoreStore = db.createObjectStore('scores', { keyPath: 'id', autoIncrement: true });
                    scoreStore.createIndex('sessionId', 'sessionId', { unique: false });
                    scoreStore.createIndex('totalScore', 'totalScore', { unique: false });
                }
                
                // 가전제품 수집 테이블
                if (!db.objectStoreNames.contains('treasure_collection')) {
                    const treasureStore = db.createObjectStore('treasure_collection', { keyPath: 'id', autoIncrement: true });
                    treasureStore.createIndex('userId', 'userId', { unique: false });
                    treasureStore.createIndex('treasureId', 'treasureId', { unique: false });
                    treasureStore.createIndex('userId_treasureId', ['userId', 'treasureId'], { unique: true });
                }
            };
        });
    }

    async addQuestion(question) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['questions'], 'readwrite');
            const store = transaction.objectStore('questions');
            const request = store.add(question);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getQuestionsByDifficulty(difficulty, limit = 50) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['questions'], 'readonly');
            const store = transaction.objectStore('questions');
            const index = store.index('difficulty');
            const request = index.getAll(difficulty);
            
            request.onsuccess = () => {
                const results = request.result;
                const shuffled = results.sort(() => Math.random() - 0.5);
                resolve(shuffled.slice(0, limit));
            };
            request.onerror = () => reject(request.error);
        });
    }

    async addUser(name, education) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['users'], 'readwrite');
            const store = transaction.objectStore('users');
            const user = {
                name,
                education,
                createdAt: new Date().toISOString()
            };
            const request = store.add(user);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async createSession(userId, difficulty) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['sessions'], 'readwrite');
            const store = transaction.objectStore('sessions');
            const session = {
                userId,
                difficulty,
                startTime: new Date().toISOString(),
                status: 'active',
                currentQuestionIndex: 0,
                correctAnswers: 0,
                totalQuestions: 0
            };
            const request = store.add(session);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async updateSession(sessionId, updates) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['sessions'], 'readwrite');
            const store = transaction.objectStore('sessions');
            
            const getRequest = store.get(sessionId);
            getRequest.onsuccess = () => {
                const session = getRequest.result;
                Object.assign(session, updates);
                const updateRequest = store.put(session);
                
                updateRequest.onsuccess = () => resolve();
                updateRequest.onerror = () => reject(updateRequest.error);
            };
            getRequest.onerror = () => reject(getRequest.error);
        });
    }

    async addScore(sessionId, score, details) {
        return new Promise(async (resolve, reject) => {
            try {
                // 세션에서 userId 가져오기
                const transaction = this.db.transaction(['sessions', 'scores'], 'readwrite');
                const sessionStore = transaction.objectStore('sessions');
                const scoreStore = transaction.objectStore('scores');
                
                const sessionRequest = sessionStore.get(sessionId);
                sessionRequest.onsuccess = () => {
                    const session = sessionRequest.result;
                    if (!session) {
                        reject(new Error('Session not found'));
                        return;
                    }
                    
                    const scoreRecord = {
                        sessionId,
                        userId: session.userId,
                        totalScore: score,
                        details,
                        completedAt: new Date().toISOString()
                    };
                    
                    const scoreRequest = scoreStore.add(scoreRecord);
                    scoreRequest.onsuccess = () => resolve(scoreRequest.result);
                    scoreRequest.onerror = () => reject(scoreRequest.error);
                };
                sessionRequest.onerror = () => reject(sessionRequest.error);
            } catch (error) {
                reject(error);
            }
        });
    }

    async getTopScores(limit = 10) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['scores', 'sessions', 'users'], 'readonly');
            const scoreStore = transaction.objectStore('scores');
            const sessionStore = transaction.objectStore('sessions');
            const userStore = transaction.objectStore('users');
            
            const request = scoreStore.getAll();
            request.onsuccess = async () => {
                const scores = request.result;
                const enrichedScores = [];
                
                for (const score of scores) {
                    // userId가 직접 저장되어 있으면 사용, 아니면 세션에서 가져오기
                    let userId = score.userId;
                    let session = null;
                    
                    if (!userId) {
                        session = await new Promise((res) => {
                            const req = sessionStore.get(score.sessionId);
                            req.onsuccess = () => res(req.result);
                        });
                        userId = session?.userId;
                    }
                    
                    if (!userId) continue; // userId가 없으면 건너뛰기
                    
                    const user = await new Promise((res) => {
                        const req = userStore.get(userId);
                        req.onsuccess = () => res(req.result);
                    });
                    
                    if (!user) continue; // 사용자 정보가 없으면 건너뛰기
                    
                    // 세션 정보가 필요한 경우 가져오기
                    if (!session) {
                        session = await new Promise((res) => {
                            const req = sessionStore.get(score.sessionId);
                            req.onsuccess = () => res(req.result);
                        });
                    }
                    
                    enrichedScores.push({
                        ...score,
                        userId: userId,
                        userName: user.name,
                        education: user.education,
                        difficulty: session?.difficulty || 'easy'
                    });
                }
                
                enrichedScores.sort((a, b) => b.totalScore - a.totalScore);
                resolve(enrichedScores.slice(0, limit));
            };
            request.onerror = () => reject(request.error);
        });
    }

    // 가전제품 수집 관련 메서드들
    async addTreasureToUser(userId, treasureId) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['treasure_collection'], 'readwrite');
            const store = transaction.objectStore('treasure_collection');
            
            const treasureRecord = {
                userId: userId,
                treasureId: treasureId,
                collectedAt: new Date().toISOString(),
                dateCollected: Date.now()  // 타임스탬프로도 저장
            };
            
            const request = store.add(treasureRecord);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => {
                // 이미 수집한 가전제품인 경우 무시
                if (request.error.name === 'ConstraintError') {
                    resolve(null);
                } else {
                    reject(request.error);
                }
            };
        });
    }

    async getUserTreasures(userId) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['treasure_collection'], 'readonly');
            const store = transaction.objectStore('treasure_collection');
            const index = store.index('userId');
            
            const request = index.getAll(userId);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async getUserTreasureCount(userId) {
        return new Promise((resolve, reject) => {
            this.getUserTreasures(userId).then(treasures => {
                resolve(treasures.length);
            }).catch(reject);
        });
    }

    async hasUserTreasure(userId, treasureId) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['treasure_collection'], 'readonly');
            const store = transaction.objectStore('treasure_collection');
            const index = store.index('userId_treasureId');
            
            const request = index.get([userId, treasureId]);
            
            request.onsuccess = () => resolve(request.result !== undefined);
            request.onerror = () => reject(request.error);
        });
    }

    // 사용자의 보물 총 가치 계산
    async getUserTreasureValue(userId) {
        return new Promise(async (resolve, reject) => {
            try {
                const userTreasures = await this.getUserTreasures(userId);
                let totalValue = 0;
                
                if (typeof window.treasuresDatabase !== 'undefined') {
                    userTreasures.forEach(record => {
                        const treasure = window.treasuresDatabase.find(t => t.id === record.treasureId);
                        if (treasure && treasure.monetaryValue) {
                            totalValue += treasure.monetaryValue;
                        }
                    });
                }
                
                resolve(totalValue);
            } catch (error) {
                reject(error);
            }
        });
    }

    // 사용자의 보물 상세 정보 가져오기
    async getUserTreasureDetails(userId) {
        return new Promise(async (resolve, reject) => {
            try {
                const userTreasures = await this.getUserTreasures(userId);
                const treasureDetails = [];
                
                if (typeof window.treasuresDatabase !== 'undefined') {
                    userTreasures.forEach(record => {
                        const treasure = window.treasuresDatabase.find(t => t.id === record.treasureId);
                        if (treasure) {
                            treasureDetails.push({
                                ...treasure,
                                collectedAt: record.collectedAt,
                                dateCollected: record.dateCollected
                            });
                        }
                    });
                }
                
                resolve(treasureDetails);
            } catch (error) {
                reject(error);
            }
        });
    }
}

window.MathQuizDatabase = MathQuizDatabase;