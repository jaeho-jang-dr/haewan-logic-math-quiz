// 완전한 논리수학 퀴즈 애플리케이션
const { useState, useEffect } = React;

// 홈페이지 컴포넌트 (개선된 버전)
function HomePage({ onUserSubmit, onStartGame, database, onNavigateToTreasures, userTreasureCount }) {
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
                    totalQuestions: 0 // 문제 개수 표시하지 않음
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
            className: "safe-area game-container min-h-screen"
        }, [
            React.createElement('div', {
                key: 'main-card',
                className: "iphone-card p-6 mb-4"
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
                            React.createElement('span', { key: 'text1' }, '다양한 문제')
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
                            className: "touch-input w-full",
                            placeholder: "이름을 입력하세요",
                            required: true
                        })
                    ]),
                    
                    React.createElement('div', { key: 'education-field' }, [
                        React.createElement('label', {
                            key: 'education-label',
                            className: "block text-sm font-medium text-gray-700 mb-2"
                        }, '🎓 학년을 선택해주세요'),
                        React.createElement('select', {
                            key: 'education-select',
                            value: education,
                            onChange: (e) => setEducation(e.target.value),
                            className: "touch-input w-full",
                            required: true
                        }, [
                            React.createElement('option', {
                                key: 'default-option',
                                value: ""
                            }, '학년을 선택하세요'),
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
                        className: "touch-button w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                    }, '게임 시작! 🚀')
                ])
            ]),

            // 게임 안내 
            React.createElement('div', {
                key: 'game-info',
                className: "bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-4 border-2 border-green-200 mb-6"
            }, [
                React.createElement('div', {
                    key: 'info-content',
                    className: "text-center"
                }, [
                    React.createElement('div', {
                        key: 'info-icon',
                        className: "text-2xl mb-2"
                    }, '💡'),
                    React.createElement('h4', {
                        key: 'info-title',
                        className: "text-lg font-bold text-green-800 mb-2"
                    }, '게임 방식'),
                    React.createElement('p', {
                        key: 'info-text',
                        className: "text-sm text-green-700"
                    }, '한 번에 3문제씩 풀어보세요! 각 문제마다 3단계로 단계별 학습이 진행됩니다. ✨')
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
                        key: 'learning-type',
                        className: "text-center"
                    }, [
                        React.createElement('div', {
                            key: 'icon',
                            className: "text-2xl font-bold text-purple-600"
                        }, '🧠'),
                        React.createElement('div', {
                            key: 'label',
                            className: "text-sm text-gray-600"
                        }, '논리수학')
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
                className: "space-y-4"
            }, [
                React.createElement('button', {
                    key: 'easy-button',
                    onClick: () => onStartGame('easy'),
                    className: `touch-button w-full relative ${
                        recommendedDifficulty === 'easy' 
                            ? 'bg-gradient-to-br from-green-400 to-green-600 ring-4 ring-green-300' 
                            : 'bg-gradient-to-br from-green-400 to-green-500'
                    } text-white text-center border-0`
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
                    className: `touch-button w-full relative ${
                        recommendedDifficulty === 'medium' 
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-300' 
                            : 'bg-gradient-to-br from-yellow-400 to-yellow-500'
                    } text-white text-center border-0`
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
                    className: `touch-button w-full relative ${
                        recommendedDifficulty === 'hard' 
                            ? 'bg-gradient-to-br from-red-400 to-red-600 ring-4 ring-red-300' 
                            : 'bg-gradient-to-br from-red-400 to-red-500'
                    } text-white text-center border-0`
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
        
        // 보물 컬렉션 접근 버튼
        React.createElement('div', {
            key: 'treasure-section',
            className: "mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg border-2 border-purple-200"
        }, [
            React.createElement('div', {
                key: 'treasure-header',
                className: "text-center mb-4"
            }, [
                React.createElement('div', {
                    key: 'treasure-icon',
                    className: "text-4xl mb-2"
                }, '🏠'),
                React.createElement('h3', {
                    key: 'treasure-title',
                    className: "text-lg font-bold text-purple-800 mb-2"
                }, '나의 보물 컬렉션'),
                React.createElement('p', {
                    key: 'treasure-desc',
                    className: "text-sm text-purple-600"
                }, `수집한 보물: ${userTreasureCount}개`)
            ]),
            React.createElement('button', {
                key: 'view-treasures-button',
                onClick: onNavigateToTreasures,
                className: "touch-button w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            }, '💎 보물 컬렉션 보기')
        ]),
        
        React.createElement('div', {
            key: 'user-actions',
            className: "text-center mt-4"
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

// 결과 페이지 컴포넌트
function ResultPage({ score, totalQuestions, answers, onReturnHome, onViewScoreboard, onRestartGame, sessionReward }) {
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
        
        // 세션 완료 상품 표시 (빵파레 효과)
        sessionReward && React.createElement('div', {
            key: 'session-reward',
            className: "mb-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-4 border-yellow-300 animate-pulse"
        }, [
            React.createElement('div', {
                key: 'fanfare',
                className: "text-6xl mb-4 animate-bounce"
            }, '🎉'),
            React.createElement('h3', {
                key: 'reward-title',
                className: "text-2xl font-bold text-yellow-800 mb-3"
            }, '🏆 세션 완료 보상! 🏆'),
            React.createElement('div', {
                key: 'reward-treasure',
                className: "flex items-center justify-center space-x-4 p-4 bg-white rounded-lg"
            }, [
                React.createElement('div', {
                    key: 'treasure-icon',
                    className: "text-5xl"
                }, sessionReward.emoji || '🏠'),
                React.createElement('div', {
                    key: 'treasure-info',
                    className: "text-left"
                }, [
                    React.createElement('h4', {
                        key: 'treasure-name',
                        className: "text-xl font-bold text-gray-800"
                    }, sessionReward.name),
                    React.createElement('p', {
                        key: 'treasure-brand',
                        className: "text-gray-600"
                    }, `${sessionReward.brand} - ${sessionReward.category}`)
                ])
            ]),
            React.createElement('p', {
                key: 'reward-message',
                className: "text-yellow-700 font-bold mt-3"
            }, '3문제 모두 정답! 축하합니다! 🎊')
        ]),
        
        React.createElement('div', {
            key: 'action-buttons',
            className: "flex flex-col sm:flex-row gap-4 justify-center"
        }, [
            React.createElement('button', {
                key: 'restart-button',
                onClick: onRestartGame,
                className: "bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            }, '🔄 다시 게임하기'),
            React.createElement('button', {
                key: 'home-button',
                onClick: onReturnHome,
                className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            }, '🏠 홈으로'),
            React.createElement('button', {
                key: 'scoreboard-button',
                onClick: onViewScoreboard,
                className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            }, '🏆 순위표 보기')
        ])
    ]);
}

// 개선된 게임 페이지 컴포넌트 (기존과 동일하지만 향상된 UI)
function GamePage({ question, stepIndex, questionNumber, totalQuestions, score, onSubmitAnswer, onQuit, onSkipQuestion, skipUsed }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [showQuestionPopup, setShowQuestionPopup] = useState(false);
    
    useEffect(() => {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswered(false);
        setShowQuestionPopup(false);
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
        className: "safe-area game-container min-h-screen"
    }, [
        React.createElement('div', {
            key: 'game-card',
            className: "question-card"
        }, [
        // 상단 정보바 (iPhone 최적화)
        React.createElement('div', {
            key: 'header',
            className: "iphone-navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4"
        }, [
            React.createElement('div', {
                key: 'info-bar',
                className: "flex justify-between items-center mb-4"
            }, [
                React.createElement('div', {
                    key: 'info-left',
                    className: "flex items-center space-x-3 md:space-x-6"
                }, [
                    React.createElement('div', {
                        key: 'question-info',
                        className: "bg-white bg-opacity-20 px-3 py-2 rounded-lg text-center min-w-0"
                    }, [
                        React.createElement('div', {
                            key: 'question-num',
                            className: "text-xs opacity-90"
                        }, '문제'),
                        React.createElement('div', {
                            key: 'question-val',
                            className: "font-bold text-sm md:text-lg"
                        }, `${questionNumber}/${totalQuestions}`)
                    ]),
                    React.createElement('div', {
                        key: 'step-info',
                        className: "bg-white bg-opacity-20 px-3 py-2 rounded-lg text-center min-w-0"
                    }, [
                        React.createElement('div', {
                            key: 'step-num',
                            className: "text-xs opacity-90"
                        }, '단계'),
                        React.createElement('div', {
                            key: 'step-val',
                            className: "font-bold text-sm md:text-lg"
                        }, `${stepIndex + 1}/${question.steps.length}`)
                    ]),
                    React.createElement('div', {
                        key: 'score-info',
                        className: "score-display px-3 py-2 rounded-lg text-center min-w-0"
                    }, [
                        React.createElement('div', {
                            key: 'score-label',
                            className: "text-xs opacity-90"
                        }, '점수'),
                        React.createElement('div', {
                            key: 'score-val',
                            className: "font-bold text-sm md:text-lg"
                        }, `${score}점`)
                    ])
                ]),
                React.createElement('div', {
                    key: 'action-buttons',
                    className: "flex space-x-2"
                }, [
                    !skipUsed && React.createElement('button', {
                        key: 'skip-button',
                        onClick: onSkipQuestion,
                        className: "touch-button bg-orange-500 hover:bg-orange-600 text-white border-0 text-sm px-3 py-2"
                    }, '🔄 건너뛰기'),
                    React.createElement('button', {
                        key: 'quit-button',
                        onClick: onQuit,
                        className: "touch-button bg-red-500 hover:bg-red-600 text-white border-0 text-sm px-4 py-2"
                    }, '⏹️ 종료')
                ])
            ]),
            
            // 진행률 바
            React.createElement('div', {
                key: 'progress-container',
                className: "progress-bar"
            }, [
                React.createElement('div', {
                    key: 'progress-fill',
                    className: "progress-fill",
                    style: { width: `${progress}%` }
                })
            ]),
            React.createElement('div', {
                key: 'progress-text',
                className: "text-center text-sm mt-2 opacity-90"
            }, `진행률: ${Math.round(progress)}%`)
        ]),
        
        // 문제 영역 (iPhone 최적화)
        React.createElement('div', {
            key: 'content',
            className: "p-4 md:p-8"
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
                        className: "text-2xl font-bold text-gray-800 mb-4"
                    }, currentStep.question),
                    // 문제 다시보기 버튼 (첫 번째 단계가 아닐 때만 표시)
                    stepIndex > 0 && React.createElement('button', {
                        key: 'show-question-button',
                        onClick: () => setShowQuestionPopup(true),
                        className: "touch-button bg-blue-500 hover:bg-blue-600 text-white border-0 text-sm px-4 py-2 mb-4"
                    }, '📝 문제 다시보기')
                ]),
                
                // 선택지 (iPhone 최적화)
                React.createElement('div', {
                    key: 'options',
                    className: "space-y-3"
                }, currentStep.options.map((option, index) => 
                    React.createElement('button', {
                        key: `option-${index}`,
                        onClick: () => !answered && setSelectedAnswer(index),
                        disabled: answered,
                        className: `
                            option-button relative
                            ${selectedAnswer === index 
                                ? (answered
                                    ? (index === currentStep.correct 
                                        ? 'bg-green-500 border-green-500 text-white'
                                        : 'bg-red-500 border-red-500 text-white'
                                    )
                                    : 'bg-purple-500 border-purple-500 text-white'
                                )
                                : (answered && index === currentStep.correct
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : ''
                                )
                            }
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
        ]),
        
        // 문제 다시보기 팝업
        showQuestionPopup && React.createElement('div', {
            key: 'question-popup',
            className: "iphone-modal",
            onClick: (e) => {
                if (e.target === e.currentTarget) {
                    setShowQuestionPopup(false);
                }
            }
        }, [
            React.createElement('div', {
                key: 'popup-content',
                className: "iphone-modal-content"
            }, [
                React.createElement('div', {
                    key: 'popup-header',
                    className: "flex justify-between items-center mb-4"
                }, [
                    React.createElement('h3', {
                        key: 'popup-title',
                        className: "text-xl font-bold text-gray-800"
                    }, '📝 원래 문제'),
                    React.createElement('button', {
                        key: 'close-button',
                        onClick: () => setShowQuestionPopup(false),
                        className: "touch-button bg-gray-200 text-gray-600 border-0 text-sm px-3 py-1"
                    }, '✕')
                ]),
                React.createElement('div', {
                    key: 'popup-question',
                    className: "text-lg text-gray-700 leading-relaxed mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200"
                }, question.question),
                React.createElement('button', {
                    key: 'close-bottom-button',
                    onClick: () => setShowQuestionPopup(false),
                    className: "touch-button w-full bg-blue-500 hover:bg-blue-600 text-white border-0"
                }, '확인')
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
    const [skipUsed, setSkipUsed] = useState(false); // 문제 건너뛰기 사용 여부
    const [userTreasureCount, setUserTreasureCount] = useState(0);
    const [newTreasureEarned, setNewTreasureEarned] = useState(null);
    const [sessionCompletedQuestions, setSessionCompletedQuestions] = useState(0);
    const [sessionCorrectQuestions, setSessionCorrectQuestions] = useState(0); // 정답 맞춘 문제 수
    const [sessionTreasureAwarded, setSessionTreasureAwarded] = useState(false);
    const [sessionReward, setSessionReward] = useState(null);
    const [playerELO, setPlayerELO] = useState(1200); // 기본 ELO 점수
    const [totalScore, setTotalScore] = useState(0); // 누적 점수
    const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false); // 현재 문제 정답 여부
    const [showFanfare, setShowFanfare] = useState(false); // 빵파레 효과 표시 여부
    const [fanfareTreasure, setFanfareTreasure] = useState(null); // 빵파레에서 표시할 보물
    
    useEffect(() => {
        initializeApp();
    }, []);

    useEffect(() => {
        if (user && database) {
            loadUserTreasureCount();
        }
    }, [user, database]);
    
    const loadUserTreasureCount = async () => {
        try {
            if (user && database) {
                const count = await database.getUserTreasureCount(user.id);
                setUserTreasureCount(count);
            }
        } catch (error) {
            console.error('보물 수 로드 중 오류:', error);
        }
    };

    // ELO 점수 계산 함수
    const calculateELO = (currentELO, difficulty, isCorrect, timeSpent, questionComplexity) => {
        const K = 32; // ELO K-factor
        let expectedScore = 0.5; // 기본 예상 점수
        
        // 문제 난이도에 따른 예상 점수 조정
        switch(difficulty) {
            case 'easy': expectedScore = 0.8; break;
            case 'medium': expectedScore = 0.6; break;
            case 'hard': expectedScore = 0.4; break;
        }
        
        // AI 판단 복잡도에 따른 조정
        expectedScore -= questionComplexity * 0.1;
        
        // 시간에 따른 조정 (빠를수록 높은 점수)
        const timeBonus = Math.max(0, (30 - timeSpent) / 30 * 0.2);
        
        const actualScore = isCorrect ? 1 : 0;
        const newELO = currentELO + K * (actualScore - expectedScore) + (timeBonus * 100);
        
        return Math.round(Math.max(800, Math.min(2400, newELO))); // 800-2400 범위 제한
    };
    
    // AI 난이도 판단 함수
    const getAIComplexity = (question) => {
        // 문제 텍스트 길이
        const textLength = question.question.length;
        
        // 단계 수
        const stepCount = question.steps ? question.steps.length : 1;
        
        // 수학적 복잡도 키워드 검사
        const complexKeywords = ['곱셈', '나눗셈', '분수', '소수', '비율', '면적', '부피', '속도', '확률'];
        const keywordCount = complexKeywords.filter(keyword => 
            question.question.includes(keyword)
        ).length;
        
        // 0-1 사이의 복잡도 점수 반환
        let complexity = 0;
        complexity += Math.min(textLength / 200, 0.3); // 텍스트 길이 (최대 0.3)
        complexity += Math.min(stepCount / 5, 0.4); // 단계 수 (최대 0.4)
        complexity += Math.min(keywordCount / 3, 0.3); // 키워드 (최대 0.3)
        
        return Math.min(complexity, 1.0);
    };

    const awardRandomTreasure = async (isSessionReward = false) => {
        try {
            if (!user || !database) return null;
            
            // 전체 보물 목록에서 랜덤 선택
            let allTreasures = [];
            if (typeof treasuresDatabase !== 'undefined') {
                allTreasures = [...allTreasures, ...treasuresDatabase];
            }
            
            if (allTreasures.length === 0) return null;
            
            const randomTreasure = allTreasures[Math.floor(Math.random() * allTreasures.length)];
            
            // 중복 수집 허용 - 사용자 요청사항
            
            // 보물 추가
            await database.addTreasureToUser(user.id, randomTreasure.id);
            
            // 보물 수 업데이트
            loadUserTreasureCount();
            
            if (isSessionReward) {
                // 세션 완료 보상으로 설정
                setSessionReward(randomTreasure);
            } else {
                // 일반 획득한 보물 정보 설정
                setNewTreasureEarned(randomTreasure);
                
                // 3초 후 팝업 자동 닫기
                setTimeout(() => {
                    setNewTreasureEarned(null);
                }, 3000);
            }
            
            return randomTreasure;
            
        } catch (error) {
            console.error('보물 획득 중 오류:', error);
            return null;
        }
    };
    
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
            
            // 세션 상태 초기화
            setSessionCompletedQuestions(0);
            setSessionCorrectQuestions(0);
            setSessionTreasureAwarded(false);
            setSessionReward(null);
            setCurrentQuestionCorrect(false);
            
            // 해당 난이도의 문제 가져오기 (한 세션에 3문제로 제한)
            let gameQuestions = await database.getQuestionsByDifficulty(difficulty, 3);
            
            // 데이터베이스에서 3문제를 가져올 수 없으면 메모리에서 가져오기
            if (gameQuestions.length < 3) {
                console.log('데이터베이스에서 문제를 찾을 수 없음, 메모리에서 가져오는 중...');
                
                let questionSource = [];
                switch(difficulty) {
                    case 'easy':
                        if (typeof easyQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...easyQuestions];
                        }
                        if (typeof easyNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...easyNatureQuestions];
                        }
                        break;
                    case 'medium':
                        if (typeof mediumQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...mediumQuestions];
                        }
                        if (typeof mediumNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...mediumNatureQuestions];
                        }
                        break;
                    case 'hard':
                        if (typeof hardQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...hardQuestions];
                        }
                        if (typeof hardNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...hardNatureQuestions];
                        }
                        break;
                    default:
                        questionSource = [];
                }
                
                if (questionSource.length > 0) {
                    // 최소 3문제 보장
                    if (questionSource.length < 3) {
                        alert('충분한 문제가 없습니다. 페이지를 새로고침해 보세요.');
                        return;
                    }
                    
                    // 4-5단계 힌트 문제를 최소 하나 포함시키기
                    const multiStepQuestions = questionSource.filter(q => q.steps && q.steps.length >= 4);
                    const otherQuestions = questionSource.filter(q => !q.steps || q.steps.length < 4);
                    
                    let finalQuestionsList = [];
                    
                    // 4-5단계 문제 최소 1개 포함 (있는 경우에만)
                    if (multiStepQuestions.length > 0) {
                        const selectedMultiStep = multiStepQuestions[Math.floor(Math.random() * multiStepQuestions.length)];
                        finalQuestionsList.push(selectedMultiStep);
                        
                        // 나머지 2개 문제는 전체에서 랜덤 선택 (중복 방지)
                        const remainingQuestions = questionSource.filter(q => q !== selectedMultiStep);
                        const shuffled = remainingQuestions.sort(() => Math.random() - 0.5);
                        finalQuestionsList = [...finalQuestionsList, ...shuffled.slice(0, 2)];
                    } else {
                        // 4-5단계 문제가 없으면 전체에서 3개 랜덤 선택
                        const shuffled = questionSource.sort(() => Math.random() - 0.5);
                        finalQuestionsList = shuffled.slice(0, 3);
                    }
                    
                    // 최종 섞기
                    gameQuestions = finalQuestionsList.sort(() => Math.random() - 0.5);
                    console.log(`메모리에서 ${gameQuestions.length}개 문제 로드됨`);
                    
                    // 3문제가 없으면 에러
                    if (gameQuestions.length < 3) {
                        alert('3문제를 불러올 수 없습니다. 페이지를 새로고침해 보세요.');
                        return;
                    }
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
            setSkipUsed(false); // 건너뛰기 초기화
            
            // 세션 관련 상태 초기화 - 버그 수정
            setSessionCompletedQuestions(0);
            setSessionCorrectQuestions(0);
            setCurrentQuestionCorrect(false);
            setSessionTreasureAwarded(false);
            setShowFanfare(false);
            setFanfareTreasure(null);
            
            setCurrentPage('game');
            
            console.log('게임 시작 완료');
        } catch (error) {
            console.error('게임 시작 중 오류:', error);
            alert('게임을 시작할 수 없습니다. 다시 시도해주세요.');
        }
    };
    
    const submitAnswer = async (selectedAnswer, timeSpent = 15) => {
        const currentQuestion = questions[currentQuestionIndex];
        const currentStep = currentQuestion.steps[currentStepIndex];
        const isCorrect = selectedAnswer === currentStep.correct;
        
        // AI 복잡도 판단
        const questionComplexity = getAIComplexity(currentQuestion);
        
        // ELO 점수 계산 (숨겨진 계산)
        const newELO = calculateELO(playerELO, gameSession?.difficulty || 'easy', isCorrect, timeSpent, questionComplexity);
        setPlayerELO(newELO);
        
        // 기본 점수 계산 (AI 난이도와 ELO 보정 포함)
        let baseScore = 10;
        
        // AI 복잡도에 따른 점수 조정
        baseScore += Math.round(questionComplexity * 15); // 0-15점 추가
        
        // ELO 변화량에 따른 보정 (숨겨진 보정)
        const eloChange = newELO - playerELO;
        if (eloChange > 0) {
            baseScore += Math.round(eloChange / 10); // ELO 상승시 추가 점수
        }
        
        // 시간 보너스
        if (timeSpent < 15) {
            baseScore += Math.round((15 - timeSpent) / 3);
        }
        
        // 답안 기록
        const answerRecord = {
            questionId: currentQuestion.id,
            stepIndex: currentStepIndex,
            selectedAnswer,
            correct: currentStep.correct,
            isCorrect,
            timestamp: Date.now(),
            score: isCorrect ? baseScore : 0,
            complexity: questionComplexity,
            timeSpent
        };
        
        setAnswers(prev => [...prev, answerRecord]);
        
        if (isCorrect) {
            setScore(prev => prev + baseScore);
            setTotalScore(prev => prev + baseScore); // 누적 점수에도 추가
            setCurrentQuestionCorrect(true); // 현재 문제에서 정답 맞춤
            console.log(`✅ 정답! 현재 문제 정답 상태: true`);
        } else {
            console.log(`❌ 오답! 현재 문제 정답 상태: ${currentQuestionCorrect}`);
        }
        
        // 다음 단계 또는 다음 문제로 이동
        if (currentStepIndex < currentQuestion.steps.length - 1) {
            // 다음 단계로 이동
            setCurrentStepIndex(prev => prev + 1);
        } else if (currentQuestionIndex < questions.length - 1) {
            // 다음 문제로 이동 (현재 문제 완료)
            const newCompletedCount = sessionCompletedQuestions + 1;
            setSessionCompletedQuestions(newCompletedCount);
            
            // 현재 문제에서 정답을 맞췄는지 확인
            let newCorrectCount = sessionCorrectQuestions;
            if (currentQuestionCorrect) {
                newCorrectCount = sessionCorrectQuestions + 1;
                setSessionCorrectQuestions(newCorrectCount);
            }
            
            console.log(`문제 ${newCompletedCount} 완료! 정답 수: ${newCorrectCount}/3`);
            
            // 다음 문제로 이동
            setCurrentQuestionIndex(prev => prev + 1);
            setCurrentStepIndex(0);
            setCurrentQuestionCorrect(false); // 새 문제 시작
            
        } else {
            // 마지막 문제도 완료된 경우
            const newCompletedCount = sessionCompletedQuestions + 1;
            setSessionCompletedQuestions(newCompletedCount);
            
            // 마지막 문제에서 정답을 맞췄는지 확인
            let newCorrectCount = sessionCorrectQuestions;
            if (currentQuestionCorrect) {
                newCorrectCount = sessionCorrectQuestions + 1;
                setSessionCorrectQuestions(newCorrectCount);
            }
            
            console.log(`모든 문제 완료! 총 정답 수: ${newCorrectCount}/3`);
            
            // 3문제 전부 정답인 경우에만 보물 지급
            if (newCorrectCount === 3 && !sessionTreasureAwarded) {
                console.log('🎉 3문제 전부 정답! 보물 지급!');
                setSessionTreasureAwarded(true);
                
                // 빵파레 효과와 함께 보물 지급
                awardRandomTreasure(true).then(awardedTreasure => {
                    console.log('보물 지급 완료:', awardedTreasure);
                    
                    // 빵파레 효과 시작
                    if (awardedTreasure) {
                        setShowFanfare(true);
                        setFanfareTreasure(awardedTreasure);
                        
                        // 5초 후 빵파레 효과 종료
                        setTimeout(() => {
                            setShowFanfare(false);
                            setFanfareTreasure(null);
                        }, 5000);
                    }
                }).catch(error => {
                    console.error('보물 지급 중 오류:', error);
                });
            } else {
                console.log(`정답 수가 부족합니다: ${newCorrectCount}/3`);
            }
            
            // 게임 종료
            setTimeout(() => {
                endGame();
            }, 100);
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
    
    const restartGame = (difficulty) => {
        if (!user) return;
        
        // 현재 세션의 난이도로 다시 시작하거나 새로운 난이도로 시작
        const gameDifficulty = difficulty || gameSession?.difficulty || 'easy';
        
        // 점수는 초기화하지 않고 누적 유지
        setScore(0); // 세션 점수만 초기화
        setSessionReward(null); // 세션 보상 초기화
        
        // 새 게임 시작
        startGame(gameDifficulty);
    };

    const skipQuestion = async () => {
        if (skipUsed) {
            alert('❌ 문제 건너뛰기는 한 게임에 한 번만 사용할 수 있어요!');
            return;
        }

        if (!confirm('🔄 이 문제를 건너뛰고 다른 문제를 가져올까요?\n\n한 게임에 한 번만 사용할 수 있습니다.')) {
            return;
        }

        try {
            // 현재 게임세션의 난이도로 새로운 문제 1개 가져오기
            let newQuestion = null;
            if (database && gameSession) {
                const newQuestions = await database.getQuestionsByDifficulty(gameSession.difficulty, 1);
                if (newQuestions.length > 0) {
                    // 현재 문제와 다른 문제인지 확인
                    const currentQuestionId = questions[currentQuestionIndex].id;
                    newQuestion = newQuestions.find(q => q.id !== currentQuestionId) || newQuestions[0];
                }
            }
            
            // 데이터베이스에서 가져올 수 없으면 메모리에서 가져오기
            if (!newQuestion) {
                let questionSource = [];
                switch(gameSession.difficulty) {
                    case 'easy':
                        if (typeof easyQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...easyQuestions];
                        }
                        if (typeof easyNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...easyNatureQuestions];
                        }
                        break;
                    case 'medium':
                        if (typeof mediumQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...mediumQuestions];
                        }
                        if (typeof mediumNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...mediumNatureQuestions];
                        }
                        break;
                    case 'hard':
                        if (typeof hardQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...hardQuestions];
                        }
                        if (typeof hardNatureQuestions !== 'undefined') {
                            questionSource = [...questionSource, ...hardNatureQuestions];
                        }
                        break;
                }
                
                if (questionSource.length > 0) {
                    // 현재 문제와 다른 문제 선택
                    const currentQuestionId = questions[currentQuestionIndex].id;
                    const availableQuestions = questionSource.filter(q => q.id !== currentQuestionId);
                    if (availableQuestions.length > 0) {
                        newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
                    }
                }
            }

            if (newQuestion) {
                // 현재 문제를 새 문제로 교체
                const updatedQuestions = [...questions];
                updatedQuestions[currentQuestionIndex] = newQuestion;
                setQuestions(updatedQuestions);
                setCurrentStepIndex(0); // 첫 번째 단계로 초기화
                setSkipUsed(true); // 건너뛰기 사용 표시
                
                alert('✅ 새로운 문제로 바뀌었습니다!');
            } else {
                alert('❌ 새로운 문제를 가져올 수 없습니다. 현재 문제를 계속 풀어주세요.');
            }
        } catch (error) {
            console.error('문제 건너뛰기 중 오류:', error);
            alert('❌ 문제 건너뛰기 중 오류가 발생했습니다.');
        }
    };

    // 페이지별 컴포넌트 렌더링
    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return React.createElement(HomePage, {
                    onUserSubmit: setUser, 
                    onStartGame: startGame,
                    database: database,
                    onNavigateToTreasures: () => setCurrentPage('treasures'),
                    userTreasureCount: userTreasureCount
                });
            case 'game':
                return React.createElement(GamePage, {
                    question: questions[currentQuestionIndex],
                    stepIndex: currentStepIndex,
                    questionNumber: currentQuestionIndex + 1,
                    totalQuestions: questions.length,
                    score: score,
                    onSubmitAnswer: submitAnswer,
                    onQuit: quitGame,
                    onSkipQuestion: skipQuestion,
                    skipUsed: skipUsed
                });
            case 'result':
                return React.createElement(ResultPage, {
                    score: score,
                    totalQuestions: questions.length,
                    answers: answers,
                    onReturnHome: () => setCurrentPage('home'),
                    onViewScoreboard: () => setCurrentPage('scoreboard'),
                    onRestartGame: () => restartGame(),
                    sessionReward: sessionReward
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
            case 'treasures':
                // 보물 컬렉션 페이지
                if (typeof TreasureCollectionPage !== 'undefined') {
                    return React.createElement(TreasureCollectionPage, {
                        database: database,
                        user: user,
                        onReturnHome: () => setCurrentPage('home')
                    });
                } else {
                    return React.createElement('div', {
                        className: 'text-center py-16'
                    }, [
                        React.createElement('h2', {
                            key: 'title',
                            className: 'text-3xl font-bold mb-8'
                        }, '🏠 보물 컬렉션'),
                        React.createElement('p', {
                            key: 'message',
                            className: 'text-xl text-gray-600 mb-8'
                        }, '보물 컬렉션을 불러오는 중...'),
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
        className: "min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 safe-area"
    }, [
        React.createElement('nav', {
            key: 'navigation',
            className: "iphone-navbar safe-area"
        }, [
            React.createElement('div', {
                key: 'nav-content',
                className: "max-w-7xl mx-auto px-4"
            }, [
                React.createElement('div', {
                    key: 'nav-flex',
                    className: "flex justify-between items-center h-16"
                }, [
                    React.createElement('div', {
                        key: 'nav-left',
                        className: "flex items-center min-w-0 flex-1"
                    }, [
                        React.createElement('h1', {
                            key: 'nav-title',
                            className: "text-lg md:text-2xl font-bold text-purple-600 cursor-pointer flex items-center space-x-2 min-w-0",
                            onClick: () => setCurrentPage('home')
                        }, [
                            React.createElement('span', {
                                key: 'nav-emoji',
                                className: 'text-2xl md:text-3xl'
                            }, '🧠'),
                            React.createElement('span', {
                                key: 'nav-text',
                                className: 'truncate'
                            }, '혜완이의 논리수학 퀴즈')
                        ])
                    ]),
                    React.createElement('div', {
                        key: 'nav-buttons',
                        className: "flex items-center space-x-2"
                    }, [
                        user && React.createElement('button', {
                            key: 'treasure-count',
                            onClick: () => setCurrentPage('treasures'),
                            className: "touch-button bg-green-500 text-white border-0 px-3 py-2 text-sm flex items-center space-x-1"
                        }, [
                            React.createElement('span', { key: 'icon' }, '🏠'),
                            React.createElement('span', { key: 'count' }, userTreasureCount),
                            React.createElement('span', { key: 'text', className: 'hidden sm:inline' }, '가전')
                        ]),
                        React.createElement('button', {
                            key: 'scoreboard-nav',
                            onClick: () => setCurrentPage('scoreboard'),
                            className: "touch-button bg-blue-500 text-white border-0 px-3 py-2 text-sm flex items-center space-x-1"
                        }, [
                            React.createElement('span', { key: 'icon' }, '🏆'),
                            React.createElement('span', { key: 'text', className: 'hidden sm:inline' }, '순위표')
                        ]),
                        React.createElement('button', {
                            key: 'admin-nav',
                            onClick: () => setCurrentPage('admin'),
                            className: "touch-button bg-gray-500 text-white border-0 px-3 py-2 text-sm flex items-center space-x-1"
                        }, [
                            React.createElement('span', { key: 'icon' }, '⚙️'),
                            React.createElement('span', { key: 'text', className: 'hidden sm:inline' }, '관리')
                        ])
                    ])
                ])
            ])
        ]),
        
        React.createElement('main', {
            key: 'main-content',
            className: "container mx-auto px-4 py-4 md:py-8"
        }, renderPage()),
        
        // 보물 획득 팝업
        newTreasureEarned && React.createElement('div', {
            key: 'treasure-popup',
            className: "iphone-modal"
        }, [
            React.createElement('div', {
                key: 'popup-content',
                className: "iphone-modal-content text-center animate-scaleIn"
            }, [
                React.createElement('div', {
                    key: 'congratulations',
                    className: "text-6xl mb-4 animate-bounce"
                }, '🎉'),
                React.createElement('h3', {
                    key: 'title',
                    className: "text-2xl font-bold text-green-600 mb-2"
                }, '새 보물 획득!'),
                React.createElement('div', {
                    key: 'treasure-info',
                    className: "bg-gradient-to-r from-green-50 to-emerald-100 p-6 rounded-lg border-2 border-green-200 mb-4"
                }, [
                    React.createElement('div', {
                        key: 'treasure-emoji',
                        className: "text-4xl mb-2"
                    }, newTreasureEarned.emoji || '🏠'),
                    React.createElement('div', {
                        key: 'treasure-name',
                        className: "text-xl font-bold text-gray-800 mb-1"
                    }, newTreasureEarned.name),
                    React.createElement('div', {
                        key: 'treasure-brand',
                        className: "text-sm text-gray-600"
                    }, `${newTreasureEarned.brand} - ${newTreasureEarned.category}`)
                ]),
                React.createElement('div', {
                    key: 'collection-info',
                    className: "text-lg text-gray-700 mb-4"
                }, `총 수집한 보물: ${userTreasureCount}개`),
                React.createElement('button', {
                    key: 'close-button',
                    onClick: () => setNewTreasureEarned(null),
                    className: "touch-button w-full bg-green-500 hover:bg-green-600 text-white border-0"
                }, '확인')
            ])
        ]),
        
        // 빵파레 효과 (3문제 전부 정답시)
        showFanfare && fanfareTreasure && React.createElement('div', {
            key: 'fanfare-overlay',
            className: "fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        }, [
            React.createElement('div', {
                key: 'fanfare-content',
                className: "relative bg-white rounded-lg p-8 max-w-sm mx-4 text-center transform animate-bounceIn"
            }, [
                // 축하 문구
                React.createElement('div', {
                    key: 'fanfare-title',
                    className: "text-4xl font-bold text-yellow-600 mb-4 animate-pulse"
                }, '🎊 완벽한 성과! 🎊'),
                
                React.createElement('div', {
                    key: 'fanfare-subtitle',
                    className: "text-xl text-green-600 font-bold mb-6"
                }, '3문제 전부 정답! 특별 상품 획득!'),
                
                // 상품 표시
                React.createElement('div', {
                    key: 'fanfare-treasure',
                    className: "bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-4 border-yellow-300 mb-4 relative overflow-hidden"
                }, [
                    // 반짝임 효과
                    React.createElement('div', {
                        key: 'sparkle-1',
                        className: "absolute top-2 left-2 text-2xl animate-ping"
                    }, '✨'),
                    React.createElement('div', {
                        key: 'sparkle-2',
                        className: "absolute top-2 right-2 text-2xl animate-ping",
                        style: { animationDelay: '0.5s' }
                    }, '⭐'),
                    React.createElement('div', {
                        key: 'sparkle-3',
                        className: "absolute bottom-2 left-2 text-2xl animate-ping",
                        style: { animationDelay: '1s' }
                    }, '🌟'),
                    React.createElement('div', {
                        key: 'sparkle-4',
                        className: "absolute bottom-2 right-2 text-2xl animate-ping",
                        style: { animationDelay: '1.5s' }
                    }, '💫'),
                    
                    // 상품 정보
                    React.createElement('div', {
                        key: 'treasure-emoji',
                        className: "text-6xl mb-3 animate-bounce"
                    }, fanfareTreasure.emoji || '🏠'),
                    React.createElement('div', {
                        key: 'treasure-name',
                        className: "text-2xl font-bold text-gray-800 mb-2"
                    }, fanfareTreasure.name),
                    React.createElement('div', {
                        key: 'treasure-brand',
                        className: "text-lg text-gray-600"
                    }, `${fanfareTreasure.brand} - ${fanfareTreasure.category}`)
                ]),
                
                // 축하 메시지
                React.createElement('div', {
                    key: 'fanfare-message',
                    className: "text-lg text-purple-600 font-semibold mb-4"
                }, '🎉 빵파레! 놀라운 실력입니다! 🎉'),
                
                React.createElement('div', {
                    key: 'fanfare-timer',
                    className: "text-sm text-gray-500 mb-4"
                }, '잠시 후 자동으로 닫힙니다...'),
                
                React.createElement('button', {
                    key: 'fanfare-close',
                    onClick: () => {
                        setShowFanfare(false);
                        setFanfareTreasure(null);
                    },
                    className: "touch-button bg-yellow-500 hover:bg-yellow-600 text-white border-0 px-6 py-2 text-lg font-bold"
                }, '🎊 멋져요!')
            ])
        ])
    ]);
}

// 앱 렌더링 - DOM과 React가 모두 로드된 후 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(React.createElement(App));
    });
} else {
    // DOM이 이미 로드된 경우
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
}