const { useState, useEffect, useRef } = React;

// 메인 앱 컴포넌트
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [database, setDatabase] = useState(null);
    const [user, setUser] = useState(null);
    const [gameSession, setGameSession] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        initializeApp();
    }, []);
    
    const initializeApp = async () => {
        try {
            const db = new MathQuizDatabase();
            await new Promise(resolve => setTimeout(resolve, 100));
            setDatabase(db);
            
            // 문제 데이터 로드 (처음 실행시에만)
            const existingQuestions = await db.getQuestionsByDifficulty('easy', 1);
            if (existingQuestions.length === 0) {
                await loadQuestions(db);
            }
        } catch (error) {
            console.error('앱 초기화 중 오류:', error);
        }
    };
    
    const startGame = async (difficulty) => {
        if (!database || !user) return;
        
        try {
            const gameQuestions = await database.getQuestionsByDifficulty(difficulty, 10);
            const sessionId = await database.createSession(user.id, difficulty);
            
            setQuestions(gameQuestions);
            setGameSession({ id: sessionId, difficulty, startTime: Date.now() });
            setCurrentQuestionIndex(0);
            setCurrentStepIndex(0);
            setScore(0);
            setAnswers([]);
            setCurrentPage('game');
        } catch (error) {
            console.error('게임 시작 중 오류:', error);
        }
    };
    
    const submitAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        const currentStep = currentQuestion.steps[currentStepIndex];
        const isCorrect = selectedAnswer === currentStep.correct;
        
        // 답안 기록
        const answerRecord = {
            questionId: currentQuestion.id,
            stepIndex: currentStepIndex,
            selectedAnswer,
            correct: currentStep.correct,
            isCorrect,
            timestamp: Date.now()
        };
        
        setAnswers(prev => [...prev, answerRecord]);
        
        if (isCorrect) {
            setScore(prev => prev + 10); // 단계당 10점
        }
        
        // 다음 단계 또는 다음 문제로 이동
        if (currentStepIndex < currentQuestion.steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setCurrentStepIndex(0);
        } else {
            // 게임 종료
            endGame();
        }
    };
    
    const endGame = async () => {
        if (!database || !gameSession) return;
        
        try {
            await database.updateSession(gameSession.id, {
                status: 'completed',
                endTime: new Date().toISOString(),
                correctAnswers: answers.filter(a => a.isCorrect).length,
                totalQuestions: questions.length * 3 // 각 문제당 3단계
            });
            
            await database.addScore(gameSession.id, score, {
                answers,
                completedAt: Date.now(),
                difficulty: gameSession.difficulty
            });
            
            setCurrentPage('result');
        } catch (error) {
            console.error('게임 종료 중 오류:', error);
        }
    };
    
    const quitGame = () => {
        endGame();
    };

    // 페이지별 컴포넌트 렌더링
    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <HomePage 
                    onUserSubmit={setUser} 
                    onStartGame={startGame}
                    database={database}
                />;
            case 'game':
                return <GamePage 
                    question={questions[currentQuestionIndex]}
                    stepIndex={currentStepIndex}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    score={score}
                    onSubmitAnswer={submitAnswer}
                    onQuit={quitGame}
                />;
            case 'result':
                return <ResultPage 
                    score={score}
                    totalQuestions={questions.length}
                    answers={answers}
                    onReturnHome={() => setCurrentPage('home')}
                    onViewScoreboard={() => setCurrentPage('scoreboard')}
                />;
            case 'scoreboard':
                return <ScoreboardPage 
                    database={database}
                    onReturnHome={() => setCurrentPage('home')}
                />;
            case 'admin':
                return <AdminPage 
                    database={database}
                    onReturnHome={() => setCurrentPage('home')}
                />;
            default:
                return <HomePage onUserSubmit={setUser} onStartGame={startGame} />;
        }
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
            <nav className="bg-white shadow-lg p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-purple-600 cursor-pointer" 
                        onClick={() => setCurrentPage('home')}>
                        🧠 혜완이의 논리수학 퀴즈
                    </h1>
                    <div className="space-x-4">
                        <button 
                            onClick={() => setCurrentPage('scoreboard')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            🏆 스코어보드
                        </button>
                        <button 
                            onClick={() => setCurrentPage('admin')}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                        >
                            ⚙️ 관리자
                        </button>
                    </div>
                </div>
            </nav>
            
            <main className="container mx-auto px-4 py-8">
                {renderPage()}
            </main>
        </div>
    );
}

// 홈페이지 컴포넌트
function HomePage({ onUserSubmit, onStartGame, database }) {
    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [user, setUser] = useState(null);
    
    const educationOptions = [
        { value: 'preschool', label: '유치원' },
        { value: 'elementary1-2', label: '초등 1-2학년' },
        { value: 'elementary3-4', label: '초등 3-4학년' },
        { value: 'elementary5-6', label: '초등 5-6학년' },
        { value: 'middle', label: '중학생' },
        { value: 'high', label: '고등학생' }
    ];
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !education || !database) return;
        
        try {
            const userId = await database.addUser(name.trim(), education);
            const newUser = { id: userId, name: name.trim(), education };
            setUser(newUser);
            onUserSubmit(newUser);
        } catch (error) {
            console.error('사용자 등록 중 오류:', error);
        }
    };
    
    const getDifficultyForEducation = (edu) => {
        switch(edu) {
            case 'preschool':
            case 'elementary1-2':
                return 'easy';
            case 'elementary3-4':
                return 'medium';
            case 'elementary5-6':
            case 'middle':
            case 'high':
                return 'hard';
            default:
                return 'easy';
        }
    };
    
    if (!user) {
        return (
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4 animate-bounce">🎯</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">환영해요!</h2>
                    <p className="text-gray-600">논리수학 퀴즈를 시작해볼까요?</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            이름을 알려주세요 ✏️
                        </label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="이름을 입력하세요"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            학력을 선택해주세요 🎓
                        </label>
                        <select 
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                        >
                            <option value="">학력을 선택하세요</option>
                            {educationOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
                    >
                        게임 시작! 🚀
                    </button>
                </form>
            </div>
        );
    }
    
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    안녕하세요, {user.name}님!
                </h2>
                <p className="text-gray-600">
                    준비가 되셨다면 아래 버튼을 눌러주세요
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                    onClick={() => onStartGame('easy')}
                    className="bg-green-500 hover:bg-green-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
                >
                    <div className="text-4xl mb-2">😊</div>
                    <div className="font-semibold">쉬움</div>
                    <div className="text-sm opacity-90">기초 문제</div>
                </button>
                
                <button 
                    onClick={() => onStartGame('medium')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
                >
                    <div className="text-4xl mb-2">🤔</div>
                    <div className="font-semibold">보통</div>
                    <div className="text-sm opacity-90">응용 문제</div>
                </button>
                
                <button 
                    onClick={() => onStartGame('hard')}
                    className="bg-red-500 hover:bg-red-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
                >
                    <div className="text-4xl mb-2">😤</div>
                    <div className="font-semibold">어려움</div>
                    <div className="text-sm opacity-90">심화 문제</div>
                </button>
            </div>
            
            <div className="mt-8 text-center">
                <button 
                    onClick={() => {
                        setUser(null);
                        onUserSubmit(null);
                    }}
                    className="text-gray-500 hover:text-gray-700 underline"
                >
                    다른 사용자로 로그인
                </button>
            </div>
        </div>
    );
}

// 게임 페이지 컴포넌트는 다음 메시지에서 계속...

ReactDOM.render(<App />, document.getElementById('root'));