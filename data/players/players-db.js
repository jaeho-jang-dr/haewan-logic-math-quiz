// 25명 게임 선수 데이터베이스 및 리더보드 시스템
const initialPlayers = [
    // 1-5위: 최상위 플레이어들
    {
        id: 1,
        name: "김수학",
        age: 12,
        grade: "초6",
        school: "서울초등학교",
        avatar: "👦",
        totalScore: 2850,
        gamesPlayed: 15,
        bestScore: 300,
        averageScore: 190,
        favoriteCategory: "방정식",
        achievements: ["수학천재", "완벽주의자", "스피드마스터"],
        joinDate: "2024-01-15",
        lastPlayed: "2024-07-20",
        level: "마스터"
    },
    {
        id: 2,
        name: "이논리",
        age: 11,
        grade: "초5",
        school: "부산초등학교",
        avatar: "👧",
        totalScore: 2720,
        gamesPlayed: 18,
        bestScore: 290,
        averageScore: 151,
        favoriteCategory: "논리추론",
        achievements: ["논리마스터", "꾸준한학습자", "문제해결왕"],
        joinDate: "2024-02-03",
        lastPlayed: "2024-07-21",
        level: "마스터"
    },
    {
        id: 3,
        name: "박계산",
        age: 10,
        grade: "초4",
        school: "대구초등학교",
        avatar: "🧒",
        totalScore: 2580,
        gamesPlayed: 20,
        bestScore: 280,
        averageScore: 129,
        favoriteCategory: "사칙연산",
        achievements: ["계산왕", "인내의아이콘", "성실한학습자"],
        joinDate: "2024-01-20",
        lastPlayed: "2024-07-19",
        level: "고급"
    },
    {
        id: 4,
        name: "정도형",
        age: 12,
        grade: "초6",
        school: "인천초등학교",
        avatar: "👦",
        totalScore: 2460,
        gamesPlayed: 16,
        bestScore: 270,
        averageScore: 154,
        favoriteCategory: "도형",
        achievements: ["도형마스터", "시각적천재", "공간지각왕"],
        joinDate: "2024-02-14",
        lastPlayed: "2024-07-22",
        level: "고급"
    },
    {
        id: 5,
        name: "최확률",
        age: 11,
        grade: "초5",
        school: "광주초등학교",
        avatar: "👧",
        totalScore: 2340,
        gamesPlayed: 19,
        bestScore: 260,
        averageScore: 123,
        favoriteCategory: "확률",
        achievements: ["확률마스터", "운빨좋은아이", "전략가"],
        joinDate: "2024-01-28",
        lastPlayed: "2024-07-18",
        level: "고급"
    },

    // 6-15위: 중위권 플레이어들
    {
        id: 6,
        name: "강분수",
        age: 10,
        grade: "초4",
        school: "대전초등학교",
        avatar: "🧒",
        totalScore: 2180,
        gamesPlayed: 22,
        bestScore: 250,
        averageScore: 99,
        favoriteCategory: "분수",
        achievements: ["분수달인", "꼼꼼한계산", "차근차근"],
        joinDate: "2024-03-05",
        lastPlayed: "2024-07-17",
        level: "중급"
    },
    {
        id: 7,
        name: "윤소수",
        age: 9,
        grade: "초3",
        school: "울산초등학교",
        avatar: "👶",
        totalScore: 2050,
        gamesPlayed: 25,
        bestScore: 240,
        averageScore: 82,
        favoriteCategory: "소수",
        achievements: ["소수마니아", "끈기의화신", "열정적학습"],
        joinDate: "2024-03-12",
        lastPlayed: "2024-07-21",
        level: "중급"
    },
    {
        id: 8,
        name: "임시간",
        age: 11,
        grade: "초5",
        school: "창원초등학교",
        avatar: "👦",
        totalScore: 1920,
        gamesPlayed: 17,
        bestScore: 230,
        averageScore: 113,
        favoriteCategory: "시간",
        achievements: ["시간관리왕", "정확한계산", "시계마스터"],
        joinDate: "2024-03-20",
        lastPlayed: "2024-07-20",
        level: "중급"
    },
    {
        id: 9,
        name: "한평균",
        age: 12,
        grade: "초6",
        school: "전주초등학교",
        avatar: "👧",
        totalScore: 1840,
        gamesPlayed: 21,
        bestScore: 220,
        averageScore: 88,
        favoriteCategory: "평균",
        achievements: ["평균의달인", "균형잡힌사고", "안정적성과"],
        joinDate: "2024-04-01",
        lastPlayed: "2024-07-19",
        level: "중급"
    },
    {
        id: 10,
        name: "오백분율",
        age: 10,
        grade: "초4",
        school: "청주초등학교",
        avatar: "🧒",
        totalScore: 1760,
        gamesPlayed: 24,
        bestScore: 210,
        averageScore: 73,
        favoriteCategory: "백분율",
        achievements: ["백분율킹", "꾸준한노력", "성장형인재"],
        joinDate: "2024-04-15",
        lastPlayed: "2024-07-18",
        level: "중급"
    },
    {
        id: 11,
        name: "신측정",
        age: 9,
        grade: "초3",
        school: "춘천초등학교",
        avatar: "👶",
        totalScore: 1680,
        gamesPlayed: 19,
        bestScore: 200,
        averageScore: 88,
        favoriteCategory: "측정",
        achievements: ["측정마스터", "정밀한관찰", "세심한학습자"],
        joinDate: "2024-04-28",
        lastPlayed: "2024-07-17",
        level: "초급"
    },
    {
        id: 12,
        name: "유집합",
        age: 11,
        grade: "초5",
        school: "포항초등학교",
        avatar: "👦",
        totalScore: 1590,
        gamesPlayed: 16,
        bestScore: 190,
        averageScore: 99,
        favoriteCategory: "집합",
        achievements: ["집합론자", "분류의천재", "체계적사고"],
        joinDate: "2024-05-10",
        lastPlayed: "2024-07-22",
        level: "초급"
    },
    {
        id: 13,
        name: "조순열",
        age: 12,
        grade: "초6",
        school: "목포초등학교",
        avatar: "👧",
        totalScore: 1520,
        gamesPlayed: 23,
        bestScore: 180,
        averageScore: 66,
        favoriteCategory: "순열조합",
        achievements: ["순열마스터", "조합의달인", "경우의수왕"],
        joinDate: "2024-05-22",
        lastPlayed: "2024-07-21",
        level: "초급"
    },
    {
        id: 14,
        name: "주그래프",
        age: 10,
        grade: "초4",
        school: "안양초등학교",
        avatar: "🧒",
        totalScore: 1450,
        gamesPlayed: 20,
        bestScore: 170,
        averageScore: 73,
        favoriteCategory: "그래프",
        achievements: ["그래프달인", "시각화마스터", "데이터분석가"],
        joinDate: "2024-06-03",
        lastPlayed: "2024-07-20",
        level: "초급"
    },
    {
        id: 15,
        name: "차패턴",
        age: 9,
        grade: "초3",
        school: "성남초등학교",
        avatar: "👶",
        totalScore: 1380,
        gamesPlayed: 26,
        bestScore: 160,
        averageScore: 53,
        favoriteCategory: "규칙찾기",
        achievements: ["패턴인식왕", "규칙발견자", "논리적사고"],
        joinDate: "2024-06-15",
        lastPlayed: "2024-07-19",
        level: "초급"
    },

    // 16-25위: 하위권 플레이어들
    {
        id: 16,
        name: "카연산",
        age: 8,
        grade: "초2",
        school: "수원초등학교",
        avatar: "👶",
        totalScore: 1290,
        gamesPlayed: 18,
        bestScore: 150,
        averageScore: 72,
        favoriteCategory: "덧셈",
        achievements: ["신참용사", "기초탄탄", "성장잠재력"],
        joinDate: "2024-06-28",
        lastPlayed: "2024-07-18",
        level: "초급"
    },
    {
        id: 17,
        name: "태뺄셈",
        age: 8,
        grade: "초2",
        school: "고양초등학교",
        avatar: "🧒",
        totalScore: 1210,
        gamesPlayed: 15,
        bestScore: 140,
        averageScore: 81,
        favoriteCategory: "뺄셈",
        achievements: ["뺄셈달인", "차근차근", "꾸준한노력"],
        joinDate: "2024-07-01",
        lastPlayed: "2024-07-17",
        level: "초급"
    },
    {
        id: 18,
        name: "하곱셈",
        age: 9,
        grade: "초3",
        school: "용인초등학교",
        avatar: "👦",
        totalScore: 1140,
        gamesPlayed: 21,
        bestScore: 130,
        averageScore: 54,
        favoriteCategory: "곱셈",
        achievements: ["곱셈연습생", "반복학습왕", "인내의아이"],
        joinDate: "2024-07-05",
        lastPlayed: "2024-07-21",
        level: "초급"
    },
    {
        id: 19,
        name: "허나눗셈",
        age: 10,
        grade: "초4",
        school: "화성초등학교",
        avatar: "👧",
        totalScore: 1070,
        gamesPlayed: 14,
        bestScore: 120,
        averageScore: 76,
        favoriteCategory: "나눗셈",
        achievements: ["나눗셈도전자", "새로운시작", "희망의새싹"],
        joinDate: "2024-07-08",
        lastPlayed: "2024-07-22",
        level: "초급"
    },
    {
        id: 20,
        name: "고비교",
        age: 7,
        grade: "초1",
        school: "파주초등학교",
        avatar: "👶",
        totalScore: 990,
        gamesPlayed: 12,
        bestScore: 110,
        averageScore: 83,
        favoriteCategory: "비교",
        achievements: ["막내용사", "비교의달인", "귀여운수학자"],
        joinDate: "2024-07-10",
        lastPlayed: "2024-07-20",
        level: "초급"
    },
    {
        id: 21,
        name: "노세기",
        age: 7,
        grade: "초1",
        school: "김포초등학교",
        avatar: "🧒",
        totalScore: 920,
        gamesPlayed: 16,
        bestScore: 100,
        averageScore: 58,
        favoriteCategory: "수세기",
        achievements: ["세기마스터", "기초의왕", "순수한열정"],
        joinDate: "2024-07-12",
        lastPlayed: "2024-07-19",
        level: "초급"
    },
    {
        id: 22,
        name: "도분류",
        age: 8,
        grade: "초2",
        school: "의정부초등학교",
        avatar: "👦",
        totalScore: 850,
        gamesPlayed: 13,
        bestScore: 90,
        averageScore: 65,
        favoriteCategory: "분류",
        achievements: ["분류달인", "체계적아이", "정리의신"],
        joinDate: "2024-07-14",
        lastPlayed: "2024-07-18",
        level: "초급"
    },
    {
        id: 23,
        name: "라색깔",
        age: 6,
        grade: "초1",
        school: "남양주초등학교",
        avatar: "👶",
        totalScore: 780,
        gamesPlayed: 10,
        bestScore: 80,
        averageScore: 78,
        favoriteCategory: "색깔인식",
        achievements: ["색깔마스터", "예술적감각", "창의적아이"],
        joinDate: "2024-07-16",
        lastPlayed: "2024-07-21",
        level: "초급"
    },
    {
        id: 24,
        name: "마모양",
        age: 6,
        grade: "초1",
        school: "구리초등학교",
        avatar: "👧",
        totalScore: 710,
        gamesPlayed: 8,
        bestScore: 70,
        averageScore: 89,
        favoriteCategory: "도형인식",
        achievements: ["모양박사", "관찰의달인", "집중력왕"],
        joinDate: "2024-07-18",
        lastPlayed: "2024-07-22",
        level: "초급"
    },
    {
        id: 25,
        name: "바처음",
        age: 5,
        grade: "유치원",
        school: "하늘유치원",
        avatar: "👶",
        totalScore: 640,
        gamesPlayed: 6,
        bestScore: 60,
        averageScore: 107,
        favoriteCategory: "기초수학",
        achievements: ["새싹수학자", "처음의용기", "미래의천재"],
        joinDate: "2024-07-20",
        lastPlayed: "2024-07-22",
        level: "초급"
    }
];

// 리더보드 시스템
class LeaderboardSystem {
    constructor() {
        this.players = [...initialPlayers];
        this.maxPlayers = 25;
    }

    // 새 플레이어 추가 (25명 제한)
    addPlayer(playerData) {
        if (this.players.length >= this.maxPlayers) {
            // 가장 낮은 점수의 플레이어 제거
            this.players.sort((a, b) => b.totalScore - a.totalScore);
            if (playerData.totalScore > this.players[this.maxPlayers - 1].totalScore) {
                this.players[this.maxPlayers - 1] = {
                    ...playerData,
                    id: Date.now(),
                    joinDate: new Date().toISOString().split('T')[0],
                    lastPlayed: new Date().toISOString().split('T')[0]
                };
            }
        } else {
            this.players.push({
                ...playerData,
                id: Date.now(),
                joinDate: new Date().toISOString().split('T')[0],
                lastPlayed: new Date().toISOString().split('T')[0]
            });
        }
        this.sortByScore();
    }

    // 점수별 정렬
    sortByScore() {
        this.players.sort((a, b) => b.totalScore - a.totalScore);
    }

    // 상위 N명 가져오기
    getTopPlayers(count = 10) {
        this.sortByScore();
        return this.players.slice(0, count);
    }

    // 플레이어 검색
    findPlayer(id) {
        return this.players.find(p => p.id === id);
    }

    // 플레이어 점수 업데이트
    updatePlayerScore(id, newScore) {
        const player = this.findPlayer(id);
        if (player) {
            player.totalScore += newScore;
            player.gamesPlayed += 1;
            player.averageScore = Math.round(player.totalScore / player.gamesPlayed);
            player.lastPlayed = new Date().toISOString().split('T')[0];
            
            if (newScore > player.bestScore) {
                player.bestScore = newScore;
            }
            
            this.sortByScore();
        }
    }

    // 레벨 업데이트
    updatePlayerLevel(id) {
        const player = this.findPlayer(id);
        if (player) {
            if (player.totalScore >= 2500) player.level = "마스터";
            else if (player.totalScore >= 2000) player.level = "고급";
            else if (player.totalScore >= 1500) player.level = "중급";
            else player.level = "초급";
        }
    }

    // 업적 추가
    addAchievement(id, achievement) {
        const player = this.findPlayer(id);
        if (player && !player.achievements.includes(achievement)) {
            player.achievements.push(achievement);
        }
    }

    // 통계 정보
    getStatistics() {
        const totalGames = this.players.reduce((sum, p) => sum + p.gamesPlayed, 0);
        const averageScore = Math.round(this.players.reduce((sum, p) => sum + p.averageScore, 0) / this.players.length);
        
        return {
            totalPlayers: this.players.length,
            totalGames: totalGames,
            averageScore: averageScore,
            highestScore: Math.max(...this.players.map(p => p.totalScore)),
            levels: {
                초급: this.players.filter(p => p.level === "초급").length,
                중급: this.players.filter(p => p.level === "중급").length,
                고급: this.players.filter(p => p.level === "고급").length,
                마스터: this.players.filter(p => p.level === "마스터").length
            },
            schools: [...new Set(this.players.map(p => p.school))].length,
            ages: {
                min: Math.min(...this.players.map(p => p.age)),
                max: Math.max(...this.players.map(p => p.age)),
                average: Math.round(this.players.reduce((sum, p) => sum + p.age, 0) / this.players.length)
            }
        };
    }

    // 랭킹 정보 (순위와 함께)
    getRankings() {
        this.sortByScore();
        return this.players.map((player, index) => ({
            ...player,
            rank: index + 1,
            rankChange: this.calculateRankChange(player.id), // 이전 순위와 비교
            medal: this.getMedal(index + 1)
        }));
    }

    // 메달 정보
    getMedal(rank) {
        if (rank === 1) return "🥇";
        if (rank === 2) return "🥈";
        if (rank === 3) return "🥉";
        if (rank <= 10) return "🏆";
        if (rank <= 20) return "🎖️";
        return "🎯";
    }

    // 순위 변화 계산 (간단한 버전)
    calculateRankChange(playerId) {
        // 실제로는 이전 데이터와 비교해야 하지만, 여기서는 랜덤으로
        const changes = [-2, -1, 0, 0, 0, 1, 2];
        return changes[Math.floor(Math.random() * changes.length)];
    }

    // 오늘의 랭킹 변화
    getTodayChanges() {
        return this.players
            .filter(p => p.lastPlayed === new Date().toISOString().split('T')[0])
            .map(p => ({
                name: p.name,
                scoreChange: Math.floor(Math.random() * 100) + 50, // 오늘 얻은 점수
                gamesPlayed: Math.floor(Math.random() * 3) + 1 // 오늘 플레이한 게임 수
            }));
    }

    // 주간 베스트 플레이어
    getWeeklyBest() {
        // 최근 7일간 가장 많이 향상된 플레이어 (간단한 시뮬레이션)
        const weeklyBest = [...this.players]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(p => ({
                ...p,
                weeklyImprovement: Math.floor(Math.random() * 200) + 100
            }));
        
        return weeklyBest.sort((a, b) => b.weeklyImprovement - a.weeklyImprovement);
    }
}

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.initialPlayers = initialPlayers;
    window.LeaderboardSystem = LeaderboardSystem;
}