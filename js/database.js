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
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['scores'], 'readwrite');
            const store = transaction.objectStore('scores');
            const scoreRecord = {
                sessionId,
                totalScore: score,
                details,
                completedAt: new Date().toISOString()
            };
            const request = store.add(scoreRecord);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
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
                    const session = await new Promise((res) => {
                        const req = sessionStore.get(score.sessionId);
                        req.onsuccess = () => res(req.result);
                    });
                    
                    const user = await new Promise((res) => {
                        const req = userStore.get(session.userId);
                        req.onsuccess = () => res(req.result);
                    });
                    
                    enrichedScores.push({
                        ...score,
                        userName: user.name,
                        education: user.education,
                        difficulty: session.difficulty
                    });
                }
                
                enrichedScores.sort((a, b) => b.totalScore - a.totalScore);
                resolve(enrichedScores.slice(0, limit));
            };
            request.onerror = () => reject(request.error);
        });
    }
}

window.MathQuizDatabase = MathQuizDatabase;