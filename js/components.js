// 게임 페이지 컴포넌트
function GamePage({ question, stepIndex, questionNumber, totalQuestions, score, onSubmitAnswer, onQuit }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answered, setAnswered] = useState(false);
    
    useEffect(() => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswered(false);
    }, [question, stepIndex]);
    
    if (!question) return <div>문제를 로딩 중...</div>;
    
    const currentStep = question.steps[stepIndex];
    const progress = ((questionNumber - 1) * question.steps.length + stepIndex + 1) / (totalQuestions * question.steps.length) * 100;
    
    const handleAnswerSubmit = () => {
        if (selectedAnswer === null) return;
        
        setAnswered(true);
        setShowExplanation(true);
        
        setTimeout(() => {
            onSubmitAnswer(selectedAnswer);
        }, 3000); // 3초 후 자동으로 다음 문제로
    };
    
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* 상단 정보바 */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold">문제 {questionNumber}/{totalQuestions}</span>
                        <span className="font-semibold">단계 {stepIndex + 1}/{question.steps.length}</span>
                        <span className="bg-white text-purple-500 px-3 py-1 rounded-full font-bold">
                            🏆 {score}점
                        </span>
                    </div>
                    <button 
                        onClick={onQuit}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition-colors"
                    >
                        그만하기
                    </button>
                </div>
                
                {/* 진행률 바 */}
                <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
                    <div 
                        className="bg-white h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            
            {/* 문제 영역 */}
            <div className="p-8">
                {stepIndex === 0 && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">
                            📝 주 문제
                        </h2>
                        <p className="text-lg text-blue-700">{question.question}</p>
                    </div>
                )}
                
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        {stepIndex === 0 ? "🤔" : stepIndex === 1 ? "🔍" : "✨"} {currentStep.question}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {currentStep.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => !answered && setSelectedAnswer(index)}
                                disabled={answered}
                                className={`
                                    p-6 text-lg font-semibold rounded-lg border-2 transition-all duration-200
                                    ${selectedAnswer === index 
                                        ? (answered
                                            ? (index === currentStep.correct 
                                                ? 'bg-green-100 border-green-500 text-green-700'
                                                : 'bg-red-100 border-red-500 text-red-700'
                                            )
                                            : 'bg-purple-100 border-purple-500 text-purple-700'
                                        )
                                        : (answered && index === currentStep.correct
                                            ? 'bg-green-100 border-green-500 text-green-700'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                        )
                                    }
                                    ${answered ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                                `}
                            >
                                <div className="text-2xl mb-2">
                                    {String.fromCharCode(65 + index)}.
                                </div>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* 설명 영역 */}
                {showExplanation && (
                    <div className={`
                        mt-6 p-6 rounded-lg text-center animate-fadeIn
                        ${selectedAnswer === currentStep.correct 
                            ? 'bg-green-100 border-2 border-green-500' 
                            : 'bg-red-100 border-2 border-red-500'
                        }
                    `}>
                        <div className="text-4xl mb-4">
                            {selectedAnswer === currentStep.correct ? "🎉" : "😅"}
                        </div>
                        <div className="text-xl font-bold mb-2">
                            {selectedAnswer === currentStep.correct ? "정답이에요!" : "다시 생각해보세요!"}
                        </div>
                        <div className="text-lg text-gray-700">
                            {currentStep.explanation}
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            3초 후 다음 단계로 넘어가요...
                        </div>
                    </div>
                )}
                
                {/* 답안 제출 버튼 */}
                {!answered && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleAnswerSubmit}
                            disabled={selectedAnswer === null}
                            className={`
                                px-8 py-4 text-lg font-bold rounded-lg transition-all
                                ${selectedAnswer !== null
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }
                            `}
                        >
                            답안 제출 ✅
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// 결과 페이지 컴포넌트
function ResultPage({ score, totalQuestions, answers, onReturnHome, onViewScoreboard }) {
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const totalSteps = totalQuestions * 3;
    const accuracy = Math.round((correctAnswers / totalSteps) * 100);
    
    const getGradeEmoji = (accuracy) => {
        if (accuracy >= 90) return "🌟";
        if (accuracy >= 80) return "🎉";
        if (accuracy >= 70) return "👍";
        if (accuracy >= 60) return "😊";
        return "💪";
    };
    
    const getGradeMessage = (accuracy) => {
        if (accuracy >= 90) return "완벽해요! 정말 대단한걸요!";
        if (accuracy >= 80) return "훌륭해요! 열심히 했네요!";
        if (accuracy >= 70) return "잘 했어요! 계속 연습해요!";
        if (accuracy >= 60) return "좋은 시작이에요! 다시 도전해봐요!";
        return "괜찮아요! 포기하지 말고 다시 해봐요!";
    };
    
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-8xl mb-6 animate-bounce">
                {getGradeEmoji(accuracy)}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                퀴즈 완료!
            </h2>
            
            <div className="text-xl text-gray-600 mb-8">
                {getGradeMessage(accuracy)}
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-8">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="text-3xl font-bold text-purple-600">{score}</div>
                        <div className="text-sm text-gray-600">총 점수</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-pink-600">{accuracy}%</div>
                        <div className="text-sm text-gray-600">정답률</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600">{correctAnswers}</div>
                        <div className="text-sm text-gray-600">맞은 문제</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-600">{totalSteps}</div>
                        <div className="text-sm text-gray-600">전체 문제</div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={onReturnHome}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                    🏠 다시 하기
                </button>
                <button 
                    onClick={onViewScoreboard}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                    🏆 순위표 보기
                </button>
            </div>
        </div>
    );
}

// 스코어보드 페이지 컴포넌트
function ScoreboardPage({ database, onReturnHome }) {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadScores();
    }, [database]);
    
    const loadScores = async () => {
        if (!database) return;
        
        try {
            const topScores = await database.getTopScores(20);
            setScores(topScores);
        } catch (error) {
            console.error('스코어 로드 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };
    
    const getDifficultyBadge = (difficulty) => {
        const badges = {
            easy: { emoji: "😊", text: "쉬움", color: "bg-green-100 text-green-800" },
            medium: { emoji: "🤔", text: "보통", color: "bg-yellow-100 text-yellow-800" },
            hard: { emoji: "😤", text: "어려움", color: "bg-red-100 text-red-800" }
        };
        
        const badge = badges[difficulty] || badges.easy;
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                {badge.emoji} {badge.text}
            </span>
        );
    };
    
    const getRankEmoji = (index) => {
        if (index === 0) return "🥇";
        if (index === 1) return "🥈";
        if (index === 2) return "🥉";
        return `${index + 1}등`;
    };
    
    if (loading) {
        return (
            <div className="text-center py-16">
                <div className="text-4xl mb-4 animate-pulse">⏳</div>
                <div className="text-xl">스코어를 불러오는 중...</div>
            </div>
        );
    }
    
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h2 className="text-3xl font-bold">명예의 전당</h2>
                <p className="text-lg opacity-90">최고 점수를 기록한 친구들이에요!</p>
            </div>
            
            <div className="p-6">
                {scores.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📊</div>
                        <div className="text-xl text-gray-600">아직 기록된 점수가 없어요!</div>
                        <div className="text-gray-500 mt-2">첫 번째 도전자가 되어보세요!</div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {scores.map((score, index) => (
                            <div 
                                key={score.id} 
                                className={`
                                    flex items-center justify-between p-4 rounded-lg border-2 transition-all hover:shadow-md
                                    ${index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}
                                `}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-2xl font-bold min-w-12">
                                        {getRankEmoji(index)}
                                    </div>
                                    
                                    <div>
                                        <div className="font-semibold text-lg">{score.userName}</div>
                                        <div className="text-sm text-gray-500">
                                            {new Date(score.completedAt).toLocaleDateString('ko-KR', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    {getDifficultyBadge(score.difficulty)}
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {score.totalScore}점
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            정답률 {Math.round((score.details.answers?.filter(a => a.isCorrect).length || 0) / (score.details.answers?.length || 1) * 100)}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="p-6 bg-gray-50 text-center">
                <button 
                    onClick={onReturnHome}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                    🏠 홈으로 돌아가기
                </button>
            </div>
        </div>
    );
}

// 관리자 페이지 컴포넌트
function AdminPage({ database, onReturnHome }) {
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadStats();
    }, [database]);
    
    const loadStats = async () => {
        if (!database) return;
        
        try {
            // 통계 데이터 수집
            const allScores = await database.getTopScores(1000);
            const today = new Date().toDateString();
            
            const todayScores = allScores.filter(score => 
                new Date(score.completedAt).toDateString() === today
            );
            
            const difficultyStats = {
                easy: allScores.filter(s => s.difficulty === 'easy').length,
                medium: allScores.filter(s => s.difficulty === 'medium').length,
                hard: allScores.filter(s => s.difficulty === 'hard').length
            };
            
            setStats({
                totalGames: allScores.length,
                todayGames: todayScores.length,
                averageScore: Math.round(allScores.reduce((sum, s) => sum + s.totalScore, 0) / allScores.length || 0),
                highestScore: Math.max(...allScores.map(s => s.totalScore), 0),
                difficultyStats
            });
        } catch (error) {
            console.error('통계 로드 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };
    
    const clearAllData = async () => {
        if (!confirm('모든 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            return;
        }
        
        try {
            // IndexedDB 데이터베이스 삭제
            indexedDB.deleteDatabase('mathQuizDB');
            alert('모든 데이터가 삭제되었습니다. 페이지를 새로고침합니다.');
            window.location.reload();
        } catch (error) {
            console.error('데이터 삭제 중 오류:', error);
            alert('데이터 삭제 중 오류가 발생했습니다.');
        }
    };
    
    if (loading) {
        return (
            <div className="text-center py-16">
                <div className="text-4xl mb-4 animate-pulse">📊</div>
                <div className="text-xl">통계를 불러오는 중...</div>
            </div>
        );
    }
    
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-6 text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <h2 className="text-3xl font-bold">관리자 페이지</h2>
                <p className="text-lg opacity-90">시스템 통계 및 관리</p>
            </div>
            
            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">{stats.totalGames || 0}</div>
                        <div className="text-sm text-gray-600">총 게임 수</div>
                    </div>
                    
                    <div className="bg-green-100 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600">{stats.todayGames || 0}</div>
                        <div className="text-sm text-gray-600">오늘 게임 수</div>
                    </div>
                    
                    <div className="bg-purple-100 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600">{stats.averageScore || 0}</div>
                        <div className="text-sm text-gray-600">평균 점수</div>
                    </div>
                    
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-red-600">{stats.highestScore || 0}</div>
                        <div className="text-sm text-gray-600">최고 점수</div>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">난이도별 게임 수</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center border-2 border-green-200">
                            <div className="text-2xl mb-2">😊</div>
                            <div className="text-2xl font-bold text-green-600">{stats.difficultyStats?.easy || 0}</div>
                            <div className="text-sm text-gray-600">쉬움</div>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg text-center border-2 border-yellow-200">
                            <div className="text-2xl mb-2">🤔</div>
                            <div className="text-2xl font-bold text-yellow-600">{stats.difficultyStats?.medium || 0}</div>
                            <div className="text-sm text-gray-600">보통</div>
                        </div>
                        
                        <div className="bg-red-50 p-4 rounded-lg text-center border-2 border-red-200">
                            <div className="text-2xl mb-2">😤</div>
                            <div className="text-2xl font-bold text-red-600">{stats.difficultyStats?.hard || 0}</div>
                            <div className="text-sm text-gray-600">어려움</div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t pt-6">
                    <h3 className="text-xl font-bold mb-4 text-red-600">⚠️ 관리 기능</h3>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-600 mb-4">
                            아래 버튼을 클릭하면 모든 게임 데이터가 영구적으로 삭제됩니다.
                        </p>
                        <button 
                            onClick={clearAllData}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                            🗑️ 모든 데이터 삭제
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="p-6 bg-gray-50 text-center">
                <button 
                    onClick={onReturnHome}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                    🏠 홈으로 돌아가기
                </button>
            </div>
        </div>
    );
}

// 전역에서 사용할 수 있도록 설정
window.GamePage = GamePage;
window.ResultPage = ResultPage;
window.ScoreboardPage = ScoreboardPage;
window.AdminPage = AdminPage;