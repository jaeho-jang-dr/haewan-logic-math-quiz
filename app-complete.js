// 완전한 논리수학 퀴즈 애플리케이션
const { useState, useEffect } = React;

// 홈페이지 컴포넌트 (개선된 버전)
function HomePage({ onUserSubmit, onStartGame, database }) {
    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [user, setUser] = useState(null);
    const [stats, setStats] = useState(null);
    
    const educationOptions = [
        { value: 'preschool', label: '유치원' },
        { value: 'elementary1-2', label: '초등 1-2학년' },
        { value: 'elementary3-4', label: '초등 3-4학년' },
        { value: 'elementary5-6', label: '초등 5-6학년' },
        { value: 'middle', label: '중학생' },
        { value: 'high', label: '고등학생' }
    ];

    useEffect(() => {
        loadSystemStats();
    }, [database]);

    const loadSystemStats = async () => {
        try {
            if (database) {
                const scores = await database.getTopScores(100);
                setStats({
                    totalGames: scores.length,
                    averageScore: Math.round(scores.reduce((sum, s) => sum + s.totalScore, 0) / scores.length || 0),
                    highestScore: Math.max(...scores.map(s => s.totalScore), 0),
                    totalQuestions: 150 // 50 x 3 난이도
                });
            }
        } catch (error) {
            console.error('통계 로드 중 오류:', error);
        }
    };
    
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
            alert('사용자 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const getDifficultyRecommendation = (education) => {
        switch(education) {
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
        return React.createElement('div', {
            className: "max-w-4xl mx-auto"
        }, [
            React.createElement('div', {
                key: 'main-card',
                className: "bg-white rounded-lg shadow-lg p-8 mb-8"
            }, [
                React.createElement('div', {
                    key: 'header',
                    className: "text-center mb-8"
                }, [
                    React.createElement('div', {
                        key: 'emoji',
                        className: "text-8xl mb-4 animate-bounce"
                    }, '🎯'),
                    React.createElement('h2', {
                        key: 'title',
                        className: "text-4xl font-bold text-gray-800 mb-4"
                    }, '환영합니다! 🎉'),
                    React.createElement('p', {
                        key: 'subtitle',
                        className: "text-xl text-gray-600 mb-6"
                    }, '논리수학 퀴즈로 재미있게 공부해요!'),
                    React.createElement('div', {
                        key: 'features',
                        className: "flex justify-center space-x-8 text-sm text-gray-500 mb-6"
                    }, [
                        React.createElement('div', {
                            key: 'feature1',
                            className: "flex items-center space-x-2"
                        }, [
                            React.createElement('span', { key: 'icon1' }, '📚'),
                            React.createElement('span', { key: 'text1' }, '150개 문제')
                        ]),
                        React.createElement('div', {
                            key: 'feature2',
                            className: "flex items-center space-x-2"
                        }, [
                            React.createElement('span', { key: 'icon2' }, '🏆'),
                            React.createElement('span', { key: 'text2' }, '실시간 순위')
                        ]),
                        React.createElement('div', {
                            key: 'feature3',
                            className: "flex items-center space-x-2"
                        }, [
                            React.createElement('span', { key: 'icon3' }, '🎮'),
                            React.createElement('span', { key: 'text3' }, '단계별 학습')
                        ])
                    ])
                ]),
                
                React.createElement('form', {
                    key: 'form',
                    onSubmit: handleSubmit,
                    className: "space-y-6 max-w-md mx-auto"
                }, [
                    React.createElement('div', { key: 'name-field' }, [
                        React.createElement('label', {
                            key: 'name-label',
                            className: "block text-sm font-medium text-gray-700 mb-2"
                        }, '✏️ 이름을 알려주세요'),
                        React.createElement('input', {
                            key: 'name-input',
                            type: "text",
                            value: name,
                            onChange: (e) => setName(e.target.value),
                            className: "w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg",
                            placeholder: "이름을 입력하세요",
                            required: true
                        })
                    ]),
                    
                    React.createElement('div', { key: 'education-field' }, [
                        React.createElement('label', {
                            key: 'education-label',
                            className: "block text-sm font-medium text-gray-700 mb-2"
                        }, '🎓 학력을 선택해주세요'),
                        React.createElement('select', {
                            key: 'education-select',
                            value: education,
                            onChange: (e) => setEducation(e.target.value),
                            className: "w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg",
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
                        className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold text-lg transform hover:scale-105"
                    }, '게임 시작! 🚀')
                ])
            ]),

            // 시스템 통계 표시
            stats && React.createElement('div', {
                key: 'stats-card',
                className: "bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6 border-2 border-blue-200"
            }, [
                React.createElement('h3', {
                    key: 'stats-title',
                    className: "text-xl font-bold text-center text-blue-800 mb-4"
                }, '🏆 지금까지의 기록'),
                React.createElement('div', {
                    key: 'stats-grid',
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4"
                }, [
                    React.createElement('div', {
                        key: 'total-games',
                        className: "text-center"
                    }, [
                        React.createElement('div', {
                            key: 'number',
                            className: "text-2xl font-bold text-blue-600"
                        }, stats.totalGames),
                        React.createElement('div', {
                            key: 'label',
                            className: "text-sm text-gray-600"
                        }, '총 게임')
                    ]),
                    React.createElement('div', {
                        key: 'avg-score',
                        className: "text-center"
                    }, [
                        React.createElement('div', {
                            key: 'number',
                            className: "text-2xl font-bold text-green-600"
                        }, stats.averageScore),
                        React.createElement('div', {
                            key: 'label',
                            className: "text-sm text-gray-600"
                        }, '평균점수')
                    ]),
                    React.createElement('div', {
                        key: 'highest-score',
                        className: "text-center"
                    }, [
                        React.createElement('div', {
                            key: 'number',
                            className: "text-2xl font-bold text-red-600"
                        }, stats.highestScore),
                        React.createElement('div', {
                            key: 'label',
                            className: "text-sm text-gray-600"
                        }, '최고점수')
                    ]),
                    React.createElement('div', {
                        key: 'total-questions',
                        className: "text-center"
                    }, [
                        React.createElement('div', {
                            key: 'number',
                            className: "text-2xl font-bold text-purple-600"
                        }, stats.totalQuestions),
                        React.createElement('div', {
                            key: 'label',
                            className: "text-sm text-gray-600"
                        }, '총 문제')
                    ])
                ])
            ])
        ]);
    }
    
    const recommendedDifficulty = getDifficultyRecommendation(user.education);
    
    return React.createElement('div', {
        className: "max-w-4xl mx-auto"
    }, [
        React.createElement('div', {
            key: 'welcome-card',
            className: "bg-white rounded-lg shadow-lg p-8 mb-8"
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
                }, `안녕하세요, ${user.name}님! 👋`),
                React.createElement('p', {
                    key: 'welcome-subtitle',
                    className: "text-lg text-gray-600"
                }, '준비가 되셨다면 난이도를 선택해주세요')
            ]),
            
            React.createElement('div', {
                key: 'difficulty-buttons',
                className: "grid grid-cols-1 md:grid-cols-3 gap-6"
            }, [
                React.createElement('button', {
                    key: 'easy-button',
                    onClick: () => onStartGame('easy'),
                    className: `relative p-8 rounded-lg transition-all transform hover:scale-105 ${
                        recommendedDifficulty === 'easy' 
                            ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg ring-4 ring-green-300' 
                            : 'bg-gradient-to-br from-green-400 to-green-500 hover:shadow-lg'
                    } text-white text-center`
                }, [
                    recommendedDifficulty === 'easy' && React.createElement('div', {
                        key: 'recommended',
                        className: "absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
                    }, '추천'),
                    React.createElement('div', {
                        key: 'easy-emoji',
                        className: "text-5xl mb-3"
                    }, '😊'),
                    React.createElement('div', {
                        key: 'easy-title',
                        className: "text-xl font-bold mb-2"
                    }, '쉬움'),
                    React.createElement('div', {
                        key: 'easy-desc',
                        className: "text-sm opacity-90"
                    }, '기초 사칙연산'),
                    React.createElement('div', {
                        key: 'easy-level',
                        className: "text-xs mt-2 opacity-75"
                    }, '초등 1-2학년')
                ]),
                
                React.createElement('button', {
                    key: 'medium-button',
                    onClick: () => onStartGame('medium'),
                    className: `relative p-8 rounded-lg transition-all transform hover:scale-105 ${
                        recommendedDifficulty === 'medium' 
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg ring-4 ring-yellow-300' 
                            : 'bg-gradient-to-br from-yellow-400 to-yellow-500 hover:shadow-lg'
                    } text-white text-center`
                }, [
                    recommendedDifficulty === 'medium' && React.createElement('div', {
                        key: 'recommended',
                        className: "absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
                    }, '추천'),
                    React.createElement('div', {
                        key: 'medium-emoji',
                        className: "text-5xl mb-3"
                    }, '🤔'),
                    React.createElement('div', {
                        key: 'medium-title',
                        className: "text-xl font-bold mb-2"
                    }, '보통'),
                    React.createElement('div', {
                        key: 'medium-desc',
                        className: "text-sm opacity-90"
                    }, '분수, 도형, 시간'),
                    React.createElement('div', {
                        key: 'medium-level',
                        className: "text-xs mt-2 opacity-75"
                    }, '초등 3-4학년')
                ]),
                
                React.createElement('button', {
                    key: 'hard-button',
                    onClick: () => onStartGame('hard'),
                    className: `relative p-8 rounded-lg transition-all transform hover:scale-105 ${
                        recommendedDifficulty === 'hard' 
                            ? 'bg-gradient-to-br from-red-400 to-red-600 shadow-lg ring-4 ring-red-300' 
                            : 'bg-gradient-to-br from-red-400 to-red-500 hover:shadow-lg'
                    } text-white text-center`
                }, [
                    recommendedDifficulty === 'hard' && React.createElement('div', {
                        key: 'recommended',
                        className: "absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
                    }, '추천'),
                    React.createElement('div', {
                        key: 'hard-emoji',
                        className: "text-5xl mb-3"
                    }, '😤'),
                    React.createElement('div', {
                        key: 'hard-title',
                        className: "text-xl font-bold mb-2"
                    }, '어려움'),
                    React.createElement('div', {
                        key: 'hard-desc',
                        className: "text-sm opacity-90"
                    }, '방정식, 확률, 논리'),
                    React.createElement('div', {
                        key: 'hard-level',
                        className: "text-xs mt-2 opacity-75"
                    }, '초등 5-6학년')
                ])
            ])
        ]),
        
        React.createElement('div', {
            key: 'user-actions',
            className: "text-center"
        }, [
            React.createElement('button', {
                key: 'logout-button',
                onClick: () => {
                    setUser(null);
                    onUserSubmit(null);
                },
                className: "text-gray-500 hover:text-gray-700 underline"
            }, '👤 다른 사용자로 로그인')
        ])
    ]);
}

// 개선된 게임 페이지 컴포넌트 (기존과 동일하지만 향상된 UI)
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
                className: "text-6xl mb-4 animate-pulse"
            }, '⏳'),
            React.createElement('div', {
                key: 'loading-text',
                className: "text-xl text-gray-600"
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
        // 상단 정보바 (기존과 동일하지만 스타일 개선)
        React.createElement('div', {
            key: 'header',
            className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6"
        }, [
            React.createElement('div', {
                key: 'info-bar',
                className: "flex justify-between items-center mb-4"
            }, [
                React.createElement('div', {
                    key: 'info-left',
                    className: "flex items-center space-x-6"
                }, [
                    React.createElement('div', {
                        key: 'question-info',
                        className: "bg-white bg-opacity-20 px-4 py-2 rounded-lg"
                    }, [
                        React.createElement('div', {
                            key: 'question-num',
                            className: "text-sm opacity-90"
                        }, '문제'),
                        React.createElement('div', {
                            key: 'question-val',
                            className: "font-bold text-lg"
                        }, `${questionNumber}/${totalQuestions}`)
                    ]),
                    React.createElement('div', {
                        key: 'step-info',
                        className: "bg-white bg-opacity-20 px-4 py-2 rounded-lg"
                    }, [
                        React.createElement('div', {
                            key: 'step-num',
                            className: "text-sm opacity-90"
                        }, '단계'),
                        React.createElement('div', {
                            key: 'step-val',
                            className: "font-bold text-lg"
                        }, `${stepIndex + 1}/${question.steps.length}`)
                    ]),
                    React.createElement('div', {
                        key: 'score-info',
                        className: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-lg"
                    }, [
                        React.createElement('div', {
                            key: 'score-label',
                            className: "text-sm opacity-90"
                        }, '점수'),
                        React.createElement('div', {
                            key: 'score-val',
                            className: "font-bold text-lg"
                        }, `${score}점`)
                    ])
                ]),
                React.createElement('button', {
                    key: 'quit-button',
                    onClick: onQuit,
                    className: "bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg transition-colors font-semibold"
                }, '⏹️ 종료')
            ]),
            
            // 진행률 바
            React.createElement('div', {
                key: 'progress-container',
                className: "w-full bg-white bg-opacity-30 rounded-full h-4"
            }, [
                React.createElement('div', {
                    key: 'progress-bar',
                    className: "bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500",
                    style: { width: `${progress}%` }
                })
            ]),
            React.createElement('div', {
                key: 'progress-text',
                className: "text-center text-sm mt-2 opacity-90"
            }, `진행률: ${Math.round(progress)}%`)
        ]),
        
        // 문제 영역 (개선된 디자인)
        React.createElement('div', {
            key: 'content',
            className: "p-8"
        }, [
            // 주 문제 표시 (첫 번째 단계에만, 스타일 개선)
            stepIndex === 0 && React.createElement('div', {
                key: 'main-question',
                className: "mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border-2 border-blue-200"
            }, [
                React.createElement('div', {
                    key: 'main-header',
                    className: "flex items-center space-x-3 mb-3"
                }, [
                    React.createElement('div', {
                        key: 'main-icon',
                        className: "text-3xl"
                    }, '📝'),
                    React.createElement('h2', {
                        key: 'main-title',
                        className: "text-xl font-bold text-blue-800"
                    }, '주요 문제')
                ]),
                React.createElement('p', {
                    key: 'main-text',
                    className: "text-lg text-blue-700 leading-relaxed"
                }, question.question)
            ]),
            
            // 현재 단계 문제 (스타일 개선)
            React.createElement('div', {
                key: 'current-step',
                className: "mb-8"
            }, [
                React.createElement('div', {
                    key: 'step-header',
                    className: "text-center mb-8"
                }, [
                    React.createElement('div', {
                        key: 'step-icon',
                        className: "text-4xl mb-3"
                    }, stepIndex === 0 ? "🤔" : stepIndex === 1 ? "🔍" : "✨"),
                    React.createElement('h3', {
                        key: 'step-title',
                        className: "text-2xl font-bold text-gray-800"
                    }, currentStep.question)
                ]),
                
                // 선택지 (개선된 그리드 레이아웃)
                React.createElement('div', {
                    key: 'options',
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
                }, currentStep.options.map((option, index) => 
                    React.createElement('button', {
                        key: `option-${index}`,
                        onClick: () => !answered && setSelectedAnswer(index),
                        disabled: answered,
                        className: `
                            relative p-6 text-lg font-semibold rounded-lg border-2 transition-all duration-300
                            ${selectedAnswer === index 
                                ? (answered
                                    ? (index === currentStep.correct 
                                        ? 'bg-green-100 border-green-500 text-green-800 shadow-lg scale-105'
                                        : 'bg-red-100 border-red-500 text-red-800 shadow-lg'
                                    )
                                    : 'bg-purple-100 border-purple-500 text-purple-800 shadow-lg scale-105'
                                )
                                : (answered && index === currentStep.correct
                                    ? 'bg-green-100 border-green-500 text-green-800 shadow-lg scale-105'
                                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow-md'
                                )
                            }
                            ${answered ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                        `
                    }, [
                        React.createElement('div', {
                            key: 'option-letter',
                            className: "absolute top-2 left-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                        }, String.fromCharCode(65 + index)),
                        React.createElement('div', {
                            key: 'option-text',
                            className: "pt-4"
                        }, option),
                        // 정답/오답 표시
                        answered && React.createElement('div', {
                            key: 'result-icon',
                            className: "absolute top-2 right-2 text-2xl"
                        }, selectedAnswer === index 
                            ? (index === currentStep.correct ? '✅' : '❌')
                            : (index === currentStep.correct ? '✅' : ''))
                    ])
                ))
            ]),
            
            // 설명 영역 (개선된 애니메이션)
            showExplanation && React.createElement('div', {
                key: 'explanation',
                className: `
                    mt-8 p-8 rounded-lg text-center animate-fadeIn shadow-lg
                    ${selectedAnswer === currentStep.correct 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300' 
                        : 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300'
                    }
                `
            }, [
                React.createElement('div', {
                    key: 'result-emoji',
                    className: "text-6xl mb-4 animate-bounce"
                }, selectedAnswer === currentStep.correct ? "🎉" : "😅"),
                React.createElement('div', {
                    key: 'result-title',
                    className: "text-2xl font-bold mb-4"
                }, selectedAnswer === currentStep.correct ? "정답입니다! 🌟" : "아쉽지만 틀렸어요 🤗"),
                React.createElement('div', {
                    key: 'explanation-text',
                    className: "text-lg text-gray-700 mb-4 leading-relaxed"
                }, currentStep.explanation),
                React.createElement('div', {
                    key: 'next-info',
                    className: "text-sm text-gray-500 flex items-center justify-center space-x-2"
                }, [
                    React.createElement('div', {
                        key: 'spinner',
                        className: "animate-spin text-lg"
                    }, '⏳'),
                    React.createElement('span', {
                        key: 'text'
                    }, '3초 후 다음 단계로 넘어가요...')
                ])
            ]),
            
            // 답안 제출 버튼 (개선된 디자인)
            !answered && React.createElement('div', {
                key: 'submit-section',
                className: "text-center mt-8"
            }, [
                React.createElement('button', {
                    key: 'submit-button',
                    onClick: handleAnswerSubmit,
                    disabled: selectedAnswer === null,
                    className: `
                        px-12 py-4 text-xl font-bold rounded-lg transition-all transform
                        ${selectedAnswer !== null
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }
                    `
                }, [
                    React.createElement('span', {
                        key: 'submit-icon',
                        className: 'mr-2'
                    }, '✅'),
                    '답안 제출'
                ])
            ])
        ])
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
            console.log('앱 초기화 시작...');
            const db = new MathQuizDatabase();
            await new Promise(resolve => setTimeout(resolve, 500));
            setDatabase(db);
            console.log('데이터베이스 초기화 완료');
            
            // 문제 데이터 로드
            try {
                const existingQuestions = await db.getQuestionsByDifficulty('easy', 1);
                if (existingQuestions.length === 0) {
                    console.log('문제 데이터 로딩 시작...');
                    if (typeof loadQuestions === 'function') {
                        await loadQuestions(db);
                        console.log('문제 데이터 로딩 완료');
                    } else {
                        console.log('loadQuestions 함수를 찾을 수 없습니다.');
                    }
                } else {
                    console.log('기존 문제 데이터가 존재합니다.');
                }
            } catch (error) {
                console.error('문제 데이터 로드 중 오류:', error);
            }
            
        } catch (error) {
            console.error('앱 초기화 중 오류:', error);
        }
    };
    
    const startGame = async (difficulty) => {
        if (!database || !user) {
            alert('데이터베이스나 사용자 정보가 없습니다.');
            return;
        }
        
        try {
            console.log(`게임 시작 - 난이도: ${difficulty}`);
            
            // 해당 난이도의 문제 가져오기
            let gameQuestions = await database.getQuestionsByDifficulty(difficulty, 10);
            
            // 데이터베이스에서 문제를 가져올 수 없으면 메모리에서 가져오기
            if (gameQuestions.length === 0) {
                console.log('데이터베이스에서 문제를 찾을 수 없음, 메모리에서 가져오는 중...');
                
                let questionSource;
                switch(difficulty) {
                    case 'easy':
                        questionSource = typeof easyQuestions !== 'undefined' ? easyQuestions : [];
                        break;
                    case 'medium':
                        questionSource = typeof mediumQuestions !== 'undefined' ? mediumQuestions : [];
                        break;
                    case 'hard':
                        questionSource = typeof hardQuestions !== 'undefined' ? hardQuestions : [];
                        break;
                    default:
                        questionSource = [];
                }
                
                if (questionSource.length > 0) {
                    // 문제들을 섞고 10개 선택
                    const shuffled = [...questionSource].sort(() => Math.random() - 0.5);
                    gameQuestions = shuffled.slice(0, 10);
                    console.log(`메모리에서 ${gameQuestions.length}개 문제 로드됨`);
                } else {
                    alert('문제를 불러올 수 없습니다. 페이지를 새로고침해 보세요.');
                    return;
                }
            }
            
            const sessionId = await database.createSession(user.id, difficulty);
            
            setQuestions(gameQuestions);
            setGameSession({ id: sessionId, difficulty, startTime: Date.now() });
            setCurrentQuestionIndex(0);
            setCurrentStepIndex(0);
            setScore(0);
            setAnswers([]);
            setCurrentPage('game');
            
            console.log('게임 시작 완료');
        } catch (error) {
            console.error('게임 시작 중 오류:', error);
            alert('게임을 시작할 수 없습니다. 다시 시도해주세요.');
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
                // 새로운 완전한 스코어보드 사용
                if (typeof CompleteScoreboardPage !== 'undefined') {
                    return React.createElement(CompleteScoreboardPage, {
                        database: database,
                        onReturnHome: () => setCurrentPage('home')
                    });
                } else {
                    return React.createElement('div', {
                        className: 'text-center py-16'
                    }, [
                        React.createElement('h2', {
                            key: 'title',
                            className: 'text-3xl font-bold mb-8'
                        }, '🏆 스코어보드'),
                        React.createElement('p', {
                            key: 'message',
                            className: 'text-xl text-gray-600 mb-8'
                        }, '스코어보드를 불러오는 중...'),
                        React.createElement('button', {
                            key: 'home-button',
                            onClick: () => setCurrentPage('home'),
                            className: 'bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg'
                        }, '홈으로')
                    ]);
                }
            case 'admin':
                // 새로운 완전한 관리자 페이지 사용
                if (typeof CompleteAdminPage !== 'undefined') {
                    return React.createElement(CompleteAdminPage, {
                        database: database,
                        onReturnHome: () => setCurrentPage('home')
                    });
                } else {
                    return React.createElement('div', {
                        className: 'text-center py-16'
                    }, [
                        React.createElement('h2', {
                            key: 'title',
                            className: 'text-3xl font-bold mb-8'
                        }, '⚙️ 관리자 페이지'),
                        React.createElement('p', {
                            key: 'message',
                            className: 'text-xl text-gray-600 mb-8'
                        }, '관리자 페이지를 불러오는 중...'),
                        React.createElement('button', {
                            key: 'home-button',
                            onClick: () => setCurrentPage('home'),
                            className: 'bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg'
                        }, '홈으로')
                    ]);
                }
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
            className: "bg-white shadow-lg"
        }, [
            React.createElement('div', {
                key: 'nav-content',
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            }, [
                React.createElement('div', {
                    key: 'nav-flex',
                    className: "flex justify-between items-center h-16"
                }, [
                    React.createElement('div', {
                        key: 'nav-left',
                        className: "flex items-center"
                    }, [
                        React.createElement('h1', {
                            key: 'nav-title',
                            className: "text-2xl font-bold text-purple-600 cursor-pointer flex items-center space-x-2",
                            onClick: () => setCurrentPage('home')
                        }, [
                            React.createElement('span', {
                                key: 'nav-emoji',
                                className: 'text-3xl'
                            }, '🧠'),
                            React.createElement('span', {
                                key: 'nav-text'
                            }, '혜완이의 논리수학 퀴즈')
                        ])
                    ]),
                    React.createElement('div', {
                        key: 'nav-buttons',
                        className: "flex items-center space-x-4"
                    }, [
                        React.createElement('button', {
                            key: 'scoreboard-nav',
                            onClick: () => setCurrentPage('scoreboard'),
                            className: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                        }, [
                            React.createElement('span', { key: 'icon' }, '🏆'),
                            React.createElement('span', { key: 'text' }, '순위표')
                        ]),
                        React.createElement('button', {
                            key: 'admin-nav',
                            onClick: () => setCurrentPage('admin'),
                            className: "bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
                        }, [
                            React.createElement('span', { key: 'icon' }, '⚙️'),
                            React.createElement('span', { key: 'text' }, '관리')
                        ])
                    ])
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