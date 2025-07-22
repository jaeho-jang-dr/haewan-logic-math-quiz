// React Hook 사용을 위한 destructuring
const { useState, useEffect } = React;

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
    
    if (!user) {
        return React.createElement('div', {
            className: "max-w-md mx-auto bg-white rounded-lg shadow-lg p-8"
        }, [
            React.createElement('div', {
                key: 'header',
                className: "text-center mb-8"
            }, [
                React.createElement('div', {
                    key: 'emoji',
                    className: "text-6xl mb-4 animate-bounce"
                }, '🎯'),
                React.createElement('h2', {
                    key: 'title',
                    className: "text-3xl font-bold text-gray-800 mb-2"
                }, '환영해요!'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: "text-gray-600"
                }, '논리수학 퀴즈를 시작해볼까요?')
            ]),
            React.createElement('form', {
                key: 'form',
                onSubmit: handleSubmit,
                className: "space-y-6"
            }, [
                React.createElement('div', { key: 'name-field' }, [
                    React.createElement('label', {
                        key: 'name-label',
                        className: "block text-sm font-medium text-gray-700 mb-2"
                    }, '이름을 알려주세요 ✏️'),
                    React.createElement('input', {
                        key: 'name-input',
                        type: "text",
                        value: name,
                        onChange: (e) => setName(e.target.value),
                        className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                        placeholder: "이름을 입력하세요",
                        required: true
                    })
                ]),
                React.createElement('div', { key: 'education-field' }, [
                    React.createElement('label', {
                        key: 'education-label',
                        className: "block text-sm font-medium text-gray-700 mb-2"
                    }, '학력을 선택해주세요 🎓'),
                    React.createElement('select', {
                        key: 'education-select',
                        value: education,
                        onChange: (e) => setEducation(e.target.value),
                        className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                        required: true
                    }, [
                        React.createElement('option', {
                            key: 'default-option',
                            value: ""
                        }, '학력을 선택하세요'),
                        ...educationOptions.map(option => 
                            React.createElement('option', {
                                key: option.value,
                                value: option.value
                            }, option.label)
                        )
                    ])
                ]),
                React.createElement('button', {
                    key: 'submit-button',
                    type: "submit",
                    className: "w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
                }, '게임 시작! 🚀')
            ])
        ]);
    }
    
    return React.createElement('div', {
        className: "max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
    }, [
        React.createElement('div', {
            key: 'welcome-header',
            className: "text-center mb-8"
        }, [
            React.createElement('div', {
                key: 'welcome-emoji',
                className: "text-6xl mb-4"
            }, '🎉'),
            React.createElement('h2', {
                key: 'welcome-title',
                className: "text-3xl font-bold text-gray-800 mb-2"
            }, `안녕하세요, ${user.name}님!`),
            React.createElement('p', {
                key: 'welcome-subtitle',
                className: "text-gray-600"
            }, '준비가 되셨다면 아래 버튼을 눌러주세요')
        ]),
        React.createElement('div', {
            key: 'difficulty-buttons',
            className: "grid grid-cols-1 md:grid-cols-3 gap-4"
        }, [
            React.createElement('button', {
                key: 'easy-button',
                onClick: () => onStartGame('easy'),
                className: "bg-green-500 hover:bg-green-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
            }, [
                React.createElement('div', {
                    key: 'easy-emoji',
                    className: "text-4xl mb-2"
                }, '😊'),
                React.createElement('div', {
                    key: 'easy-title',
                    className: "font-semibold"
                }, '쉬움'),
                React.createElement('div', {
                    key: 'easy-desc',
                    className: "text-sm opacity-90"
                }, '기초 문제')
            ]),
            React.createElement('button', {
                key: 'medium-button',
                onClick: () => onStartGame('medium'),
                className: "bg-yellow-500 hover:bg-yellow-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
            }, [
                React.createElement('div', {
                    key: 'medium-emoji',
                    className: "text-4xl mb-2"
                }, '🤔'),
                React.createElement('div', {
                    key: 'medium-title',
                    className: "font-semibold"
                }, '보통'),
                React.createElement('div', {
                    key: 'medium-desc',
                    className: "text-sm opacity-90"
                }, '응용 문제')
            ]),
            React.createElement('button', {
                key: 'hard-button',
                onClick: () => onStartGame('hard'),
                className: "bg-red-500 hover:bg-red-600 text-white py-6 px-6 rounded-lg transition-colors text-center"
            }, [
                React.createElement('div', {
                    key: 'hard-emoji',
                    className: "text-4xl mb-2"
                }, '😤'),
                React.createElement('div', {
                    key: 'hard-title',
                    className: "font-semibold"
                }, '어려움'),
                React.createElement('div', {
                    key: 'hard-desc',
                    className: "text-sm opacity-90"
                }, '심화 문제')
            ])
        ]),
        React.createElement('div', {
            key: 'logout-section',
            className: "mt-8 text-center"
        }, [
            React.createElement('button', {
                key: 'logout-button',
                onClick: () => {
                    setUser(null);
                    onUserSubmit(null);
                },
                className: "text-gray-500 hover:text-gray-700 underline"
            }, '다른 사용자로 로그인')
        ])
    ]);
}

// 게임 페이지 컴포넌트 (간단한 버전)
function GamePage({ question, stepIndex, questionNumber, totalQuestions, score, onSubmitAnswer, onQuit }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answered, setAnswered] = useState(false);
    
    useEffect(() => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswered(false);
    }, [question, stepIndex]);
    
    if (!question) {
        return React.createElement('div', {
            className: "text-center py-16"
        }, [
            React.createElement('div', {
                key: 'loading-emoji',
                className: "text-4xl mb-4 animate-pulse"
            }, '⏳'),
            React.createElement('div', {
                key: 'loading-text',
                className: "text-xl"
            }, '문제를 로딩 중...')
        ]);
    }
    
    const currentStep = question.steps[stepIndex];
    const progress = ((questionNumber - 1) * question.steps.length + stepIndex + 1) / (totalQuestions * question.steps.length) * 100;
    
    const handleAnswerSubmit = () => {
        if (selectedAnswer === null) return;
        
        setAnswered(true);
        setShowExplanation(true);
        
        setTimeout(() => {
            onSubmitAnswer(selectedAnswer);
        }, 3000);
    };
    
    return React.createElement('div', {
        className: "max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
    }, [
        // 상단 정보바
        React.createElement('div', {
            key: 'header',
            className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4"
        }, [
            React.createElement('div', {
                key: 'info-bar',
                className: "flex justify-between items-center mb-2"
            }, [
                React.createElement('div', {
                    key: 'info-left',
                    className: "flex items-center space-x-4"
                }, [
                    React.createElement('span', {
                        key: 'question-num',
                        className: "font-semibold"
                    }, `문제 ${questionNumber}/${totalQuestions}`),
                    React.createElement('span', {
                        key: 'step-num',
                        className: "font-semibold"
                    }, `단계 ${stepIndex + 1}/${question.steps.length}`),
                    React.createElement('span', {
                        key: 'score',
                        className: "bg-white text-purple-500 px-3 py-1 rounded-full font-bold"
                    }, `🏆 ${score}점`)
                ]),
                React.createElement('button', {
                    key: 'quit-button',
                    onClick: onQuit,
                    className: "bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition-colors"
                }, '그만하기')
            ]),
            // 진행률 바
            React.createElement('div', {
                key: 'progress-container',
                className: "w-full bg-white bg-opacity-30 rounded-full h-3"
            }, [
                React.createElement('div', {
                    key: 'progress-bar',
                    className: "bg-white h-3 rounded-full transition-all duration-300",
                    style: { width: `${progress}%` }
                })
            ])
        ]),
        
        // 문제 영역
        React.createElement('div', {
            key: 'content',
            className: "p-8"
        }, [
            // 주 문제 표시 (첫 번째 단계에만)
            stepIndex === 0 && React.createElement('div', {
                key: 'main-question',
                className: "mb-6 p-4 bg-blue-50 rounded-lg"
            }, [
                React.createElement('h2', {
                    key: 'main-title',
                    className: "text-xl font-bold text-blue-800 mb-2"
                }, '📝 주 문제'),
                React.createElement('p', {
                    key: 'main-text',
                    className: "text-lg text-blue-700"
                }, question.question)
            ]),
            
            // 현재 단계 문제
            React.createElement('div', {
                key: 'current-step',
                className: "mb-8"
            }, [
                React.createElement('h3', {
                    key: 'step-title',
                    className: "text-2xl font-bold mb-6 text-center"
                }, `${stepIndex === 0 ? "🤔" : stepIndex === 1 ? "🔍" : "✨"} ${currentStep.question}`),
                
                // 선택지
                React.createElement('div', {
                    key: 'options',
                    className: "grid grid-cols-2 gap-4 max-w-2xl mx-auto"
                }, currentStep.options.map((option, index) => 
                    React.createElement('button', {
                        key: `option-${index}`,
                        onClick: () => !answered && setSelectedAnswer(index),
                        disabled: answered,
                        className: `
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
                        `
                    }, [
                        React.createElement('div', {
                            key: 'option-letter',
                            className: "text-2xl mb-2"
                        }, String.fromCharCode(65 + index) + '.'),
                        option
                    ])
                ))
            ]),
            
            // 설명 영역
            showExplanation && React.createElement('div', {
                key: 'explanation',
                className: `
                    mt-6 p-6 rounded-lg text-center animate-fadeIn
                    ${selectedAnswer === currentStep.correct 
                        ? 'bg-green-100 border-2 border-green-500' 
                        : 'bg-red-100 border-2 border-red-500'
                    }
                `
            }, [
                React.createElement('div', {
                    key: 'result-emoji',
                    className: "text-4xl mb-4"
                }, selectedAnswer === currentStep.correct ? "🎉" : "😅"),
                React.createElement('div', {
                    key: 'result-title',
                    className: "text-xl font-bold mb-2"
                }, selectedAnswer === currentStep.correct ? "정답이에요!" : "다시 생각해보세요!"),
                React.createElement('div', {
                    key: 'explanation-text',
                    className: "text-lg text-gray-700"
                }, currentStep.explanation),
                React.createElement('div', {
                    key: 'next-info',
                    className: "mt-4 text-sm text-gray-500"
                }, '3초 후 다음 단계로 넘어가요...')
            ]),
            
            // 답안 제출 버튼
            !answered && React.createElement('div', {
                key: 'submit-section',
                className: "text-center mt-8"
            }, [
                React.createElement('button', {
                    key: 'submit-button',
                    onClick: handleAnswerSubmit,
                    disabled: selectedAnswer === null,
                    className: `
                        px-8 py-4 text-lg font-bold rounded-lg transition-all
                        ${selectedAnswer !== null
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }
                    `
                }, '답안 제출 ✅')
            ])
        ])
    ]);
}

// 결과 페이지 컴포넌트 (간단한 버전)
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
    
    return React.createElement('div', {
        className: "max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
    }, [
        React.createElement('div', {
            key: 'result-emoji',
            className: "text-8xl mb-6 animate-bounce"
        }, getGradeEmoji(accuracy)),
        
        React.createElement('h2', {
            key: 'result-title',
            className: "text-3xl font-bold text-gray-800 mb-4"
        }, '퀴즈 완료!'),
        
        React.createElement('div', {
            key: 'result-message',
            className: "text-xl text-gray-600 mb-8"
        }, getGradeMessage(accuracy)),
        
        React.createElement('div', {
            key: 'stats',
            className: "bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-8"
        }, [
            React.createElement('div', {
                key: 'stats-grid',
                className: "grid grid-cols-2 gap-6"
            }, [
                React.createElement('div', { key: 'score-stat' }, [
                    React.createElement('div', {
                        key: 'score-value',
                        className: "text-3xl font-bold text-purple-600"
                    }, score),
                    React.createElement('div', {
                        key: 'score-label',
                        className: "text-sm text-gray-600"
                    }, '총 점수')
                ]),
                React.createElement('div', { key: 'accuracy-stat' }, [
                    React.createElement('div', {
                        key: 'accuracy-value',
                        className: "text-3xl font-bold text-pink-600"
                    }, `${accuracy}%`),
                    React.createElement('div', {
                        key: 'accuracy-label',
                        className: "text-sm text-gray-600"
                    }, '정답률')
                ]),
                React.createElement('div', { key: 'correct-stat' }, [
                    React.createElement('div', {
                        key: 'correct-value',
                        className: "text-3xl font-bold text-blue-600"
                    }, correctAnswers),
                    React.createElement('div', {
                        key: 'correct-label',
                        className: "text-sm text-gray-600"
                    }, '맞은 문제')
                ]),
                React.createElement('div', { key: 'total-stat' }, [
                    React.createElement('div', {
                        key: 'total-value',
                        className: "text-3xl font-bold text-green-600"
                    }, totalSteps),
                    React.createElement('div', {
                        key: 'total-label',
                        className: "text-sm text-gray-600"
                    }, '전체 문제')
                ])
            ])
        ]),
        
        React.createElement('div', {
            key: 'action-buttons',
            className: "flex flex-col sm:flex-row gap-4 justify-center"
        }, [
            React.createElement('button', {
                key: 'home-button',
                onClick: onReturnHome,
                className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            }, '🏠 다시 하기'),
            React.createElement('button', {
                key: 'scoreboard-button',
                onClick: onViewScoreboard,
                className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            }, '🏆 순위표 보기')
        ])
    ]);
}

// 간단한 스코어보드 페이지
function ScoreboardPage({ database, onReturnHome }) {
    return React.createElement('div', {
        className: "max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
    }, [
        React.createElement('h2', {
            key: 'title',
            className: "text-3xl font-bold mb-8"
        }, '🏆 스코어보드'),
        React.createElement('div', {
            key: 'message',
            className: "text-xl text-gray-600 mb-8"
        }, '스코어보드 기능을 개발 중입니다...'),
        React.createElement('button', {
            key: 'home-button',
            onClick: onReturnHome,
            className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        }, '🏠 홈으로 돌아가기')
    ]);
}

// 간단한 관리자 페이지
function AdminPage({ database, onReturnHome }) {
    return React.createElement('div', {
        className: "max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
    }, [
        React.createElement('h2', {
            key: 'title',
            className: "text-3xl font-bold mb-8"
        }, '⚙️ 관리자 페이지'),
        React.createElement('div', {
            key: 'message',
            className: "text-xl text-gray-600 mb-8"
        }, '관리자 기능을 개발 중입니다...'),
        React.createElement('button', {
            key: 'home-button',
            onClick: onReturnHome,
            className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        }, '🏠 홈으로 돌아가기')
    ]);
}

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
            
            // 문제 데이터 로드
            if (typeof loadQuestions === 'function') {
                const existingQuestions = await db.getQuestionsByDifficulty('easy', 1);
                if (existingQuestions.length === 0) {
                    await loadQuestions(db);
                }
            }
        } catch (error) {
            console.error('앱 초기화 중 오류:', error);
        }
    };
    
    const startGame = async (difficulty) => {
        if (!database || !user) return;
        
        try {
            const gameQuestions = await database.getQuestionsByDifficulty(difficulty, 10);
            if (gameQuestions.length === 0) {
                alert('해당 난이도의 문제가 없습니다. 관리자에게 문의하세요.');
                return;
            }
            
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
            alert('게임 시작 중 오류가 발생했습니다.');
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
            setScore(prev => prev + 10);
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
                totalQuestions: questions.length * 3
            });
            
            await database.addScore(gameSession.id, score, {
                answers,
                completedAt: Date.now(),
                difficulty: gameSession.difficulty
            });
            
            setCurrentPage('result');
        } catch (error) {
            console.error('게임 종료 중 오류:', error);
            setCurrentPage('result'); // 에러가 있어도 결과 화면으로
        }
    };
    
    const quitGame = () => {
        endGame();
    };

    // 페이지별 컴포넌트 렌더링
    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return React.createElement(HomePage, {
                    onUserSubmit: setUser, 
                    onStartGame: startGame,
                    database: database
                });
            case 'game':
                return React.createElement(GamePage, {
                    question: questions[currentQuestionIndex],
                    stepIndex: currentStepIndex,
                    questionNumber: currentQuestionIndex + 1,
                    totalQuestions: questions.length,
                    score: score,
                    onSubmitAnswer: submitAnswer,
                    onQuit: quitGame
                });
            case 'result':
                return React.createElement(ResultPage, {
                    score: score,
                    totalQuestions: questions.length,
                    answers: answers,
                    onReturnHome: () => setCurrentPage('home'),
                    onViewScoreboard: () => setCurrentPage('scoreboard')
                });
            case 'scoreboard':
                return React.createElement(ScoreboardPage, {
                    database: database,
                    onReturnHome: () => setCurrentPage('home')
                });
            case 'admin':
                return React.createElement(AdminPage, {
                    database: database,
                    onReturnHome: () => setCurrentPage('home')
                });
            default:
                return React.createElement(HomePage, {
                    onUserSubmit: setUser, 
                    onStartGame: startGame,
                    database: database
                });
        }
    };
    
    return React.createElement('div', {
        className: "min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
    }, [
        React.createElement('nav', {
            key: 'navigation',
            className: "bg-white shadow-lg p-4"
        }, [
            React.createElement('div', {
                key: 'nav-content',
                className: "max-w-6xl mx-auto flex justify-between items-center"
            }, [
                React.createElement('h1', {
                    key: 'nav-title',
                    className: "text-2xl font-bold text-purple-600 cursor-pointer",
                    onClick: () => setCurrentPage('home')
                }, '🧠 혜완이의 논리수학 퀴즈'),
                React.createElement('div', {
                    key: 'nav-buttons',
                    className: "space-x-4"
                }, [
                    React.createElement('button', {
                        key: 'scoreboard-nav',
                        onClick: () => setCurrentPage('scoreboard'),
                        className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    }, '🏆 스코어보드'),
                    React.createElement('button', {
                        key: 'admin-nav',
                        onClick: () => setCurrentPage('admin'),
                        className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                    }, '⚙️ 관리자')
                ])
            ])
        ]),
        
        React.createElement('main', {
            key: 'main-content',
            className: "container mx-auto px-4 py-8"
        }, renderPage())
    ]);
}

// 앱 렌더링
ReactDOM.render(React.createElement(App), document.getElementById('root'));