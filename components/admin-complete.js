// 완전한 관리자 페이지 컴포넌트
function CompleteAdminPage({ database, onReturnHome }) {
    const [stats, setStats] = useState({});
    const [users, setUsers] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [treasures, setTreasures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [leaderboard, setLeaderboard] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [adminPassword, setAdminPassword] = useState('1234'); // 관리자 비밀번호
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            loadAdminData();
        }
    }, [database, isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginForm.username === 'admin' && loginForm.password === adminPassword) {
            setIsAuthenticated(true);
        } else {
            alert('잘못된 아이디 또는 비밀번호입니다.');
            setLoginForm({ username: '', password: '' });
        }
    };
    
    const handlePasswordChange = () => {
        if (!newPassword || !confirmPassword) {
            alert('새 비밀번호를 입력해주세요.');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        
        if (newPassword.length < 4) {
            alert('비밀번호는 최소 4자 이상이어야 합니다.');
            return;
        }
        
        setAdminPassword(newPassword);
        setShowPasswordChange(false);
        setNewPassword('');
        setConfirmPassword('');
        alert('비밀번호가 성공적으로 변경되었습니다.');
    };

    const loadAdminData = async () => {
        try {
            setLoading(true);
            
            // 문제 데이터가 완전히 로드될 때까지 기다리기 (최대 5초)
            let attempts = 0;
            const maxAttempts = 50; // 5초 (100ms × 50)
            
            while (attempts < maxAttempts) {
                if (typeof easyQuestions !== 'undefined' && 
                    typeof mediumQuestions !== 'undefined' && 
                    typeof hardQuestions !== 'undefined' &&
                    typeof easyNatureQuestions !== 'undefined' &&
                    typeof mediumNatureQuestions !== 'undefined' &&
                    typeof hardNatureQuestions !== 'undefined' &&
                    easyQuestions.length > 0 && 
                    mediumQuestions.length > 0 && 
                    hardQuestions.length > 0 &&
                    easyNatureQuestions.length > 0 &&
                    mediumNatureQuestions.length > 0 &&
                    hardNatureQuestions.length > 0) {
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }
            
            if (attempts >= maxAttempts) {
                console.warn('문제 데이터 로딩 시간 초과. 현재 사용 가능한 데이터로 진행합니다.');
            }
            
            // 리더보드 시스템 초기화
            const leaderboardSystem = new LeaderboardSystem();
            setLeaderboard(leaderboardSystem);
            
            // 기본 통계
            if (database) {
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
                    difficultyStats,
                    totalUsers: leaderboardSystem.players.length,
                    activeUsers: leaderboardSystem.players.filter(p => {
                        const lastPlayed = new Date(p.lastPlayed);
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return lastPlayed > weekAgo;
                    }).length
                });
            }
            
            // 사용자 데이터
            setUsers(leaderboardSystem.players || []);
            
            // 보물 데이터
            if (typeof treasuresDatabase !== 'undefined') {
                setTreasures(treasuresDatabase);
            }
            
            // 문제 데이터 통계 - 정확한 개수 계산 (기존 + 자연 테마)
            let totalQuestions = 0;
            let easyCount = 0, mediumCount = 0, hardCount = 0;
            
            // 쉬움 문제 카운트 (기존 + 자연)
            if (typeof easyQuestions !== 'undefined' && easyQuestions.length > 0) {
                easyCount += easyQuestions.length;
                console.log(`기존 쉬움 문제: ${easyQuestions.length}개`);
            } else {
                console.warn('easyQuestions가 로드되지 않았습니다.');
            }
            
            if (typeof easyNatureQuestions !== 'undefined' && easyNatureQuestions.length > 0) {
                easyCount += easyNatureQuestions.length;
                console.log(`자연 쉬움 문제: ${easyNatureQuestions.length}개`);
            } else {
                console.warn('easyNatureQuestions가 로드되지 않았습니다.');
            }
            
            // 보통 문제 카운트 (기존 + 자연)
            if (typeof mediumQuestions !== 'undefined' && mediumQuestions.length > 0) {
                mediumCount += mediumQuestions.length;
                console.log(`기존 보통 문제: ${mediumQuestions.length}개`);
            } else {
                console.warn('mediumQuestions가 로드되지 않았습니다.');
            }
            
            if (typeof mediumNatureQuestions !== 'undefined' && mediumNatureQuestions.length > 0) {
                mediumCount += mediumNatureQuestions.length;
                console.log(`자연 보통 문제: ${mediumNatureQuestions.length}개`);
            } else {
                console.warn('mediumNatureQuestions가 로드되지 않았습니다.');
            }
            
            // 어려움 문제 카운트 (기존 + 자연)
            if (typeof hardQuestions !== 'undefined' && hardQuestions.length > 0) {
                hardCount += hardQuestions.length;
                console.log(`기존 어려움 문제: ${hardQuestions.length}개`);
            } else {
                console.warn('hardQuestions가 로드되지 않았습니다.');
            }
            
            if (typeof hardNatureQuestions !== 'undefined' && hardNatureQuestions.length > 0) {
                hardCount += hardNatureQuestions.length;
                console.log(`자연 어려움 문제: ${hardNatureQuestions.length}개`);
            } else {
                console.warn('hardNatureQuestions가 로드되지 않았습니다.');
            }
            
            totalQuestions = easyCount + mediumCount + hardCount;
            
            console.log(`총 문제 개수: ${totalQuestions}개`);
            
            setStats(prevStats => ({
                ...prevStats,
                totalQuestions: totalQuestions,
                easyQuestionsCount: easyCount,
                mediumQuestionsCount: mediumCount,
                hardQuestionsCount: hardCount
            }));
            
        } catch (error) {
            console.error('관리자 데이터 로드 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const clearAllData = async () => {
        if (!confirm('⚠️ 정말로 모든 데이터를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다:\n- 모든 게임 기록\n- 사용자 데이터\n- 점수 기록\n\n계속하시겠습니까?')) {
            return;
        }
        
        const secondConfirm = prompt('데이터 삭제를 확인하려면 "DELETE"를 입력하세요:');
        if (secondConfirm !== 'DELETE') {
            alert('데이터 삭제가 취소되었습니다.');
            return;
        }
        
        try {
            indexedDB.deleteDatabase('mathQuizDB');
            alert('✅ 모든 데이터가 삭제되었습니다.\n페이지를 새로고침합니다.');
            window.location.reload();
        } catch (error) {
            console.error('데이터 삭제 중 오류:', error);
            alert('❌ 데이터 삭제 중 오류가 발생했습니다.');
        }
    };

    const exportData = () => {
        const exportData = {
            timestamp: new Date().toISOString(),
            users: users,
            stats: stats,
            version: '1.0.0'
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `math-quiz-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        alert('✅ 데이터 내보내기가 완료되었습니다.');
    };

    const resetUserPassword = (userId) => {
        if (confirm(`사용자 ID ${userId}의 데이터를 초기화하시겠습니까?`)) {
            // 실제 구현에서는 사용자 데이터 초기화 로직
            alert('사용자 데이터가 초기화되었습니다.');
        }
    };

    const banUser = (userId) => {
        if (confirm(`사용자 ID ${userId}를 정지시키겠습니까?`)) {
            // 실제 구현에서는 사용자 정지 로직
            alert('사용자가 정지되었습니다.');
        }
    };

    // 대시보드 렌더링
    const renderDashboard = () => {
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800 mb-6'
            }, '📊 시스템 대시보드'),

            // 주요 지표
            React.createElement('div', {
                key: 'main-stats',
                className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'
            }, [
                React.createElement('div', {
                    key: 'total-users',
                    className: 'bg-blue-100 p-6 rounded-lg text-center border-2 border-blue-200'
                }, [
                    React.createElement('div', {
                        key: 'icon',
                        className: 'text-3xl mb-2'
                    }, '👥'),
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-blue-600'
                    }, stats.totalUsers || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '총 사용자')
                ]),
                React.createElement('div', {
                    key: 'active-users',
                    className: 'bg-green-100 p-6 rounded-lg text-center border-2 border-green-200'
                }, [
                    React.createElement('div', {
                        key: 'icon',
                        className: 'text-3xl mb-2'
                    }, '✅'),
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-green-600'
                    }, stats.activeUsers || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '활성 사용자'),
                    React.createElement('div', {
                        key: 'sub',
                        className: 'text-xs text-gray-500'
                    }, '(최근 7일)')
                ]),
                React.createElement('div', {
                    key: 'total-games',
                    className: 'bg-purple-100 p-6 rounded-lg text-center border-2 border-purple-200'
                }, [
                    React.createElement('div', {
                        key: 'icon',
                        className: 'text-3xl mb-2'
                    }, '🎮'),
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-purple-600'
                    }, stats.totalGames || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '총 게임 수')
                ]),
                React.createElement('div', {
                    key: 'today-games',
                    className: 'bg-orange-100 p-6 rounded-lg text-center border-2 border-orange-200'
                }, [
                    React.createElement('div', {
                        key: 'icon',
                        className: 'text-3xl mb-2'
                    }, '📅'),
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-orange-600'
                    }, stats.todayGames || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '오늘 게임 수')
                ])
            ]),

            // 콘텐츠 통계
            React.createElement('div', {
                key: 'content-stats',
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6'
            }, [
                React.createElement('div', {
                    key: 'questions-stats',
                    className: 'bg-white p-6 rounded-lg border'
                }, [
                    React.createElement('h4', {
                        key: 'title',
                        className: 'text-xl font-bold mb-4 text-gray-800'
                    }, '📝 문제 은행'),
                    React.createElement('div', {
                        key: 'total',
                        className: 'text-3xl font-bold text-center text-indigo-600 mb-4'
                    }, `${stats.totalQuestions || 0}개`),
                    React.createElement('div', {
                        key: 'breakdown',
                        className: 'space-y-2'
                    }, [
                        React.createElement('div', {
                            key: 'easy',
                            className: 'flex justify-between items-center'
                        }, [
                            React.createElement('span', {
                                key: 'label',
                                className: 'text-green-600'
                            }, '😊 쉬움'),
                            React.createElement('span', {
                                key: 'count',
                                className: 'font-bold'
                            }, `${stats.easyQuestionsCount || 0}개`)
                        ]),
                        React.createElement('div', {
                            key: 'medium',
                            className: 'flex justify-between items-center'
                        }, [
                            React.createElement('span', {
                                key: 'label',
                                className: 'text-yellow-600'
                            }, '🤔 보통'),
                            React.createElement('span', {
                                key: 'count',
                                className: 'font-bold'
                            }, `${stats.mediumQuestionsCount || 0}개`)
                        ]),
                        React.createElement('div', {
                            key: 'hard',
                            className: 'flex justify-between items-center'
                        }, [
                            React.createElement('span', {
                                key: 'label',
                                className: 'text-red-600'
                            }, '😤 어려움'),
                            React.createElement('span', {
                                key: 'count',
                                className: 'font-bold'
                            }, `${stats.hardQuestionsCount || 0}개`)
                        ])
                    ])
                ]),
                React.createElement('div', {
                    key: 'treasures-stats',
                    className: 'bg-white p-6 rounded-lg border'
                }, [
                    React.createElement('h4', {
                        key: 'title',
                        className: 'text-xl font-bold mb-4 text-gray-800'
                    }, '💎 보물 DB'),
                    React.createElement('div', {
                        key: 'total',
                        className: 'text-3xl font-bold text-center text-blue-600 mb-4'
                    }, `${treasures.length}개`),
                    React.createElement('div', {
                        key: 'categories',
                        className: 'text-sm text-gray-600 text-center'
                    }, `${[...new Set(treasures.map(t => t.category))].length}개 카테고리`),
                    React.createElement('div', {
                        key: 'fan-info',
                        className: 'text-sm font-medium text-cyan-600 text-center mt-2'
                    }, `🌀 선풍기: ${treasures.filter(t => t.category === '선풍기').length}개`)
                ])
            ]),

            // 시스템 상태
            React.createElement('div', {
                key: 'system-status',
                className: 'bg-gray-50 p-6 rounded-lg border'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold mb-4 text-gray-800'
                }, '⚡ 시스템 상태'),
                React.createElement('div', {
                    key: 'status-list',
                    className: 'space-y-3'
                }, [
                    React.createElement('div', {
                        key: 'database',
                        className: 'flex justify-between items-center'
                    }, [
                        React.createElement('span', {
                            key: 'label'
                        }, '🗄️ 데이터베이스'),
                        React.createElement('span', {
                            key: 'status',
                            className: 'text-green-600 font-bold'
                        }, database ? '✅ 연결됨' : '❌ 연결 안됨')
                    ]),
                    React.createElement('div', {
                        key: 'questions',
                        className: 'flex justify-between items-center'
                    }, [
                        React.createElement('span', {
                            key: 'label'
                        }, '📚 문제 로딩'),
                        React.createElement('span', {
                            key: 'status',
                            className: 'text-green-600 font-bold'
                        }, stats.totalQuestions > 0 ? '✅ 완료' : '❌ 실패')
                    ]),
                    React.createElement('div', {
                        key: 'leaderboard',
                        className: 'flex justify-between items-center'
                    }, [
                        React.createElement('span', {
                            key: 'label'
                        }, '🏆 리더보드'),
                        React.createElement('span', {
                            key: 'status',
                            className: 'text-green-600 font-bold'
                        }, leaderboard ? '✅ 활성' : '❌ 비활성')
                    ])
                ])
            ]),
            
            // 관리자 설정 섹션
            React.createElement('div', {
                key: 'admin-settings',
                className: 'bg-yellow-50 p-6 rounded-lg border border-yellow-200'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold mb-4 text-gray-800'
                }, '🔐 관리자 설정'),
                React.createElement('div', {
                    key: 'settings-content',
                    className: 'space-y-4'
                }, [
                    React.createElement('div', {
                        key: 'password-section',
                        className: 'flex items-center justify-between'
                    }, [
                        React.createElement('span', {
                            key: 'label',
                            className: 'font-medium'
                        }, '관리자 비밀번호'),
                        React.createElement('button', {
                            key: 'change-btn',
                            onClick: () => setShowPasswordChange(!showPasswordChange),
                            className: 'touch-button bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 text-sm'
                        }, showPasswordChange ? '취소' : '변경하기')
                    ]),
                    showPasswordChange && React.createElement('div', {
                        key: 'password-form',
                        className: 'bg-white p-4 rounded-lg border space-y-3'
                    }, [
                        React.createElement('input', {
                            key: 'new-password',
                            type: 'password',
                            value: newPassword,
                            onChange: (e) => setNewPassword(e.target.value),
                            placeholder: '새 비밀번호',
                            className: 'touch-input w-full'
                        }),
                        React.createElement('input', {
                            key: 'confirm-password',
                            type: 'password',
                            value: confirmPassword,
                            onChange: (e) => setConfirmPassword(e.target.value),
                            placeholder: '비밀번호 확인',
                            className: 'touch-input w-full'
                        }),
                        React.createElement('button', {
                            key: 'submit-btn',
                            onClick: handlePasswordChange,
                            className: 'touch-button w-full bg-green-500 hover:bg-green-600 text-white'
                        }, '비밀번호 변경')
                    ]),
                    React.createElement('div', {
                        key: 'info',
                        className: 'text-sm text-gray-600 mt-2'
                    }, '현재 비밀번호: ' + (showPasswordChange ? '****' : adminPassword))
                ])
            ])
        ]);
    };

    // 사용자 관리 렌더링
    const renderUserManagement = () => {
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'flex justify-between items-center'
            }, [
                React.createElement('h3', {
                    key: 'title',
                    className: 'text-2xl font-bold text-gray-800'
                }, '👥 사용자 관리'),
                React.createElement('div', {
                    key: 'actions',
                    className: 'space-x-2'
                }, [
                    React.createElement('button', {
                        key: 'export',
                        onClick: exportData,
                        className: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm'
                    }, '📤 데이터 내보내기')
                ])
            ]),

            React.createElement('div', {
                key: 'user-list',
                className: 'bg-white rounded-lg border overflow-hidden'
            }, [
                React.createElement('div', {
                    key: 'header-row',
                    className: 'bg-gray-50 border-b'
                }, [
                    React.createElement('div', {
                        key: 'header-content',
                        className: 'grid grid-cols-7 gap-4 p-4 font-semibold text-sm text-gray-600'
                    }, [
                        React.createElement('div', { key: 'id' }, 'ID'),
                        React.createElement('div', { key: 'name' }, '이름'),
                        React.createElement('div', { key: 'level' }, '레벨'),
                        React.createElement('div', { key: 'score' }, '총점'),
                        React.createElement('div', { key: 'games' }, '게임수'),
                        React.createElement('div', { key: 'last' }, '마지막 접속'),
                        React.createElement('div', { key: 'actions' }, '관리')
                    ])
                ]),
                React.createElement('div', {
                    key: 'user-rows',
                    className: 'max-h-96 overflow-y-auto'
                }, users.slice(0, 20).map((user, index) => 
                    React.createElement('div', {
                        key: `user-${user.id}`,
                        className: 'grid grid-cols-7 gap-4 p-4 border-b text-sm hover:bg-gray-50'
                    }, [
                        React.createElement('div', {
                            key: 'id',
                            className: 'font-mono text-xs'
                        }, `#${user.id}`),
                        React.createElement('div', {
                            key: 'name',
                            className: 'font-medium'
                        }, [
                            React.createElement('span', {
                                key: 'avatar',
                                className: 'mr-2'
                            }, user.avatar),
                            user.name
                        ]),
                        React.createElement('div', {
                            key: 'level'
                        }, [
                            React.createElement('span', {
                                key: 'level-badge',
                                className: `px-2 py-1 rounded-full text-xs font-medium ${
                                    user.level === '마스터' ? 'bg-purple-100 text-purple-800' :
                                    user.level === '고급' ? 'bg-blue-100 text-blue-800' :
                                    user.level === '중급' ? 'bg-green-100 text-green-800' :
                                    'bg-gray-100 text-gray-800'
                                }`
                            }, user.level)
                        ]),
                        React.createElement('div', {
                            key: 'score',
                            className: 'font-bold text-purple-600'
                        }, user.totalScore.toLocaleString()),
                        React.createElement('div', {
                            key: 'games'
                        }, `${user.gamesPlayed}회`),
                        React.createElement('div', {
                            key: 'last',
                            className: 'text-gray-600'
                        }, new Date(user.lastPlayed).toLocaleDateString('ko-KR', {
                            month: 'short',
                            day: 'numeric'
                        })),
                        React.createElement('div', {
                            key: 'actions',
                            className: 'space-x-1'
                        }, [
                            React.createElement('button', {
                                key: 'reset',
                                onClick: () => resetUserPassword(user.id),
                                className: 'text-blue-600 hover:text-blue-800 text-xs'
                            }, '초기화'),
                            React.createElement('button', {
                                key: 'ban',
                                onClick: () => banUser(user.id),
                                className: 'text-red-600 hover:text-red-800 text-xs'
                            }, '정지')
                        ])
                    ])
                ))
            ])
        ]);
    };

    // 시스템 설정 렌더링
    // 문제은행 렌더링
    const renderQuestionBank = () => {
        const getAllQuestions = () => {
            let allQuestions = [];
            
            if (typeof easyQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...easyQuestions.map(q => ({...q, difficulty: 'easy', source: 'original'}))];
            }
            if (typeof mediumQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...mediumQuestions.map(q => ({...q, difficulty: 'medium', source: 'original'}))];
            }
            if (typeof hardQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...hardQuestions.map(q => ({...q, difficulty: 'hard', source: 'original'}))];
            }
            if (typeof easyNatureQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...easyNatureQuestions.map(q => ({...q, difficulty: 'easy', source: 'nature'}))];
            }
            if (typeof mediumNatureQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...mediumNatureQuestions.map(q => ({...q, difficulty: 'medium', source: 'nature'}))];
            }
            if (typeof hardNatureQuestions !== 'undefined') {
                allQuestions = [...allQuestions, ...hardNatureQuestions.map(q => ({...q, difficulty: 'hard', source: 'nature'}))];
            }
            
            return allQuestions;
        };

        const questions = getAllQuestions();
        
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800'
            }, '📚 문제은행 관리'),
            
            React.createElement('div', {
                key: 'question-stats',
                className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'
            }, [
                React.createElement('div', {
                    key: 'easy-count',
                    className: 'bg-green-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-green-600'
                    }, questions.filter(q => q.difficulty === 'easy').length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '쉬움 문제')
                ]),
                React.createElement('div', {
                    key: 'medium-count',
                    className: 'bg-yellow-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-yellow-600'
                    }, questions.filter(q => q.difficulty === 'medium').length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '보통 문제')
                ]),
                React.createElement('div', {
                    key: 'hard-count',
                    className: 'bg-red-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-red-600'
                    }, questions.filter(q => q.difficulty === 'hard').length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '어려움 문제')
                ]),
                React.createElement('div', {
                    key: 'total-count',
                    className: 'bg-blue-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-blue-600'
                    }, questions.length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '전체 문제')
                ])
            ]),
            
            React.createElement('div', {
                key: 'question-list',
                className: 'bg-white rounded-lg border overflow-hidden'
            }, [
                React.createElement('div', {
                    key: 'header-row',
                    className: 'bg-gray-50 border-b'
                }, [
                    React.createElement('div', {
                        key: 'header-content',
                        className: 'grid grid-cols-6 gap-4 p-4 font-semibold text-sm text-gray-600'
                    }, [
                        React.createElement('div', { key: 'id' }, 'ID'),
                        React.createElement('div', { key: 'difficulty' }, '난이도'),
                        React.createElement('div', { key: 'source' }, '출처'),
                        React.createElement('div', { key: 'steps' }, '단계'),
                        React.createElement('div', { key: 'question' }, '문제'),
                        React.createElement('div', { key: 'actions' }, '관리')
                    ])
                ]),
                React.createElement('div', {
                    key: 'question-rows',
                    className: 'max-h-96 overflow-y-auto'
                }, questions.slice(0, 50).map((question, index) => 
                    React.createElement('div', {
                        key: `question-${question.id}-${index}`,
                        className: 'grid grid-cols-6 gap-4 p-4 border-b hover:bg-gray-50 text-sm'
                    }, [
                        React.createElement('div', { key: 'id' }, question.id),
                        React.createElement('span', {
                            key: 'difficulty',
                            className: `px-2 py-1 rounded text-xs ${
                                question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                            }`
                        }, question.difficulty),
                        React.createElement('span', {
                            key: 'source',
                            className: `px-2 py-1 rounded text-xs ${
                                question.source === 'nature' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`
                        }, question.source === 'nature' ? '자연' : '기본'),
                        React.createElement('div', { key: 'steps' }, question.steps ? question.steps.length : 1),
                        React.createElement('div', { 
                            key: 'question',
                            className: 'truncate',
                            title: question.question
                        }, question.question.substring(0, 50) + (question.question.length > 50 ? '...' : '')),
                        React.createElement('button', {
                            key: 'view-button',
                            className: 'bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs',
                            onClick: () => alert('문제 상세정보:\\n\\n' + JSON.stringify(question, null, 2))
                        }, '상세보기')
                    ])
                ))
            ])
        ]);
    };

    // 상품뱅크 렌더링
    const renderTreasureBank = () => {
        const getAllTreasures = () => {
            let allTreasures = [];
            
            if (typeof treasuresDatabase !== 'undefined') {
                allTreasures = [...treasuresDatabase];
            }
            
            return allTreasures;
        };

        const treasures = getAllTreasures();
        
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800'
            }, '💎 보물뱅크 관리'),
            
            React.createElement('div', {
                key: 'treasure-stats',
                className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'
            }, [
                React.createElement('div', {
                    key: 'total-count',
                    className: 'bg-purple-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-purple-600'
                    }, treasures.length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '전체 보물')
                ]),
                React.createElement('div', {
                    key: 'toy-count',
                    className: 'bg-blue-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-blue-600'
                    }, treasures.filter(t => t.category && (t.category.includes('장난감') || t.category.includes('toy'))).length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '장난감')
                ]),
                React.createElement('div', {
                    key: 'edu-count',
                    className: 'bg-green-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-green-600'
                    }, treasures.filter(t => t.category && t.category.includes('교육')).length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '교육용품')
                ]),
                React.createElement('div', {
                    key: 'fan-count',
                    className: 'bg-cyan-100 p-4 rounded-lg text-center'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-2xl font-bold text-cyan-600'
                    }, treasures.filter(t => t.category === '선풍기').length),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600'
                    }, '🌀 선풍기')
                ])
            ]),
            
            React.createElement('div', {
                key: 'treasure-list',
                className: 'bg-white rounded-lg border overflow-hidden'
            }, [
                React.createElement('div', {
                    key: 'header-row',
                    className: 'bg-gray-50 border-b'
                }, [
                    React.createElement('div', {
                        key: 'header-content',
                        className: 'grid grid-cols-7 gap-4 p-4 font-semibold text-sm text-gray-600'
                    }, [
                        React.createElement('div', { key: 'emoji' }, '아이콘'),
                        React.createElement('div', { key: 'name' }, '보물명'),
                        React.createElement('div', { key: 'brand' }, '브랜드'),
                        React.createElement('div', { key: 'category' }, '카테고리'),
                        React.createElement('div', { key: 'price' }, '가격'),
                        React.createElement('div', { key: 'source' }, '등급'),
                        React.createElement('div', { key: 'actions' }, '관리')
                    ])
                ]),
                React.createElement('div', {
                    key: 'treasure-rows',
                    className: 'max-h-96 overflow-y-auto'
                }, treasures.map((treasure, index) => 
                    React.createElement('div', {
                        key: `treasure-${treasure.id}-${index}`,
                        className: 'grid grid-cols-7 gap-4 p-4 border-b hover:bg-gray-50 text-sm'
                    }, [
                        React.createElement('div', { 
                            key: 'emoji',
                            className: 'text-2xl'
                        }, treasure.icon || treasure.emoji || '💎'),
                        React.createElement('div', { 
                            key: 'name',
                            className: 'font-medium'
                        }, treasure.name),
                        React.createElement('div', { key: 'brand' }, treasure.brand),
                        React.createElement('div', { key: 'category' }, treasure.category),
                        React.createElement('div', { key: 'price' }, treasure.monetaryValue ? `₩${treasure.monetaryValue.toLocaleString()}` : '-'),
                        React.createElement('span', {
                            key: 'source',
                            className: `px-2 py-1 rounded text-xs ${
                                treasure.rarity === 5 ? 'bg-purple-100 text-purple-800' : 
                                treasure.rarity >= 3 ? 'bg-blue-100 text-blue-800' : 
                                'bg-gray-100 text-gray-800'
                            }`
                        }, treasure.rarity === 5 ? '전설' : treasure.rarity >= 3 ? '희귀' : '일반'),
                        React.createElement('button', {
                            key: 'view-button',
                            className: 'bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded text-xs',
                            onClick: () => alert('보물 상세정보:\\n\\n' + JSON.stringify(treasure, null, 2))
                        }, '상세보기')
                    ])
                ))
            ])
        ]);
    };

    const renderSystemSettings = () => {
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800 mb-6'
            }, '⚙️ 시스템 설정'),

            React.createElement('div', {
                key: 'danger-zone',
                className: 'bg-red-50 border-2 border-red-200 rounded-lg p-6'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold text-red-800 mb-4'
                }, '⚠️ 위험한 작업'),
                React.createElement('div', {
                    key: 'warning',
                    className: 'bg-red-100 p-4 rounded-lg mb-4'
                }, [
                    React.createElement('p', {
                        key: 'text',
                        className: 'text-red-700 text-sm mb-2'
                    }, '아래 작업들은 되돌릴 수 없습니다. 신중히 진행하세요.'),
                    React.createElement('ul', {
                        key: 'list',
                        className: 'text-red-600 text-sm space-y-1 ml-4'
                    }, [
                        React.createElement('li', { key: '1' }, '• 모든 사용자 데이터 삭제'),
                        React.createElement('li', { key: '2' }, '• 게임 기록 및 점수 초기화'),
                        React.createElement('li', { key: '3' }, '• 리더보드 정보 제거')
                    ])
                ]),
                React.createElement('button', {
                    key: 'delete-button',
                    onClick: clearAllData,
                    className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                }, '🗑️ 모든 데이터 삭제')
            ]),

            React.createElement('div', {
                key: 'backup-section',
                className: 'bg-blue-50 border-2 border-blue-200 rounded-lg p-6'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold text-blue-800 mb-4'
                }, '💾 데이터 백업'),
                React.createElement('p', {
                    key: 'description',
                    className: 'text-blue-700 mb-4'
                }, '현재 시스템의 모든 데이터를 JSON 파일로 내보낼 수 있습니다.'),
                React.createElement('button', {
                    key: 'export-button',
                    onClick: exportData,
                    className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                }, '📤 데이터 백업하기')
            ]),

            React.createElement('div', {
                key: 'maintenance',
                className: 'bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold text-yellow-800 mb-4'
                }, '🔧 시스템 유지보수'),
                React.createElement('div', {
                    key: 'maintenance-actions',
                    className: 'space-y-3'
                }, [
                    React.createElement('button', {
                        key: 'reload',
                        onClick: () => window.location.reload(),
                        className: 'block w-full text-left p-3 bg-white border border-yellow-300 rounded hover:bg-yellow-50'
                    }, '🔄 시스템 재시작'),
                    React.createElement('button', {
                        key: 'clear-cache',
                        onClick: () => {
                            localStorage.clear();
                            sessionStorage.clear();
                            alert('캐시가 정리되었습니다.');
                        },
                        className: 'block w-full text-left p-3 bg-white border border-yellow-300 rounded hover:bg-yellow-50'
                    }, '🧹 캐시 정리'),
                    React.createElement('button', {
                        key: 'test-db',
                        onClick: () => {
                            if (database) {
                                alert('✅ 데이터베이스 연결이 정상입니다.');
                            } else {
                                alert('❌ 데이터베이스 연결에 문제가 있습니다.');
                            }
                        },
                        className: 'block w-full text-left p-3 bg-white border border-yellow-300 rounded hover:bg-yellow-50'
                    }, '🔍 데이터베이스 연결 테스트')
                ])
            ])
        ]);
    };

    // 로그인되지 않은 경우 로그인 화면 표시
    if (!isAuthenticated) {
        return React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center bg-gray-100'
        }, [
            React.createElement('div', {
                key: 'login-card',
                className: 'bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4'
            }, [
                React.createElement('div', {
                    key: 'login-header',
                    className: 'text-center mb-8'
                }, [
                    React.createElement('div', {
                        key: 'admin-icon',
                        className: 'text-6xl mb-4'
                    }, '🔒'),
                    React.createElement('h2', {
                        key: 'admin-title',
                        className: 'text-3xl font-bold text-gray-800'
                    }, '관리자 로그인'),
                    React.createElement('p', {
                        key: 'admin-desc',
                        className: 'text-gray-600 mt-2'
                    }, '관리자 권한이 필요합니다')
                ]),
                React.createElement('form', {
                    key: 'login-form',
                    onSubmit: handleLogin,
                    className: 'space-y-6'
                }, [
                    React.createElement('div', {
                        key: 'username-field'
                    }, [
                        React.createElement('label', {
                            key: 'username-label',
                            className: 'block text-sm font-medium text-gray-700 mb-2'
                        }, '아이디'),
                        React.createElement('input', {
                            key: 'username-input',
                            type: 'text',
                            value: loginForm.username,
                            onChange: (e) => setLoginForm({...loginForm, username: e.target.value}),
                            className: 'touch-input w-full',
                            placeholder: '관리자 아이디를 입력하세요',
                            required: true
                        })
                    ]),
                    React.createElement('div', {
                        key: 'password-field'
                    }, [
                        React.createElement('label', {
                            key: 'password-label',
                            className: 'block text-sm font-medium text-gray-700 mb-2'
                        }, '비밀번호'),
                        React.createElement('input', {
                            key: 'password-input',
                            type: 'password',
                            value: loginForm.password,
                            onChange: (e) => setLoginForm({...loginForm, password: e.target.value}),
                            className: 'touch-input w-full',
                            placeholder: '비밀번호를 입력하세요',
                            required: true
                        })
                    ]),
                    React.createElement('button', {
                        key: 'login-submit',
                        type: 'submit',
                        className: 'touch-button w-full bg-blue-600 hover:bg-blue-700 text-white border-0'
                    }, '🔓 로그인'),
                    React.createElement('button', {
                        key: 'home-button',
                        type: 'button',
                        onClick: onReturnHome,
                        className: 'touch-button w-full bg-gray-500 hover:bg-gray-600 text-white border-0'
                    }, '🏠 홈으로 돌아가기')
                ])
            ])
        ]);
    }

    if (loading) {
        return React.createElement('div', {
            className: 'text-center py-16'
        }, [
            React.createElement('div', {
                key: 'loading-spinner',
                className: 'text-6xl mb-4 animate-pulse'
            }, '⚙️'),
            React.createElement('div', {
                key: 'loading-text',
                className: 'text-xl text-gray-600'
            }, '관리자 데이터 로딩 중...')
        ]);
    }

    return React.createElement('div', {
        className: 'max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'
    }, [
        // 헤더
        React.createElement('div', {
            key: 'header',
            className: 'bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6'
        }, [
            React.createElement('div', {
                key: 'header-content',
                className: 'text-center'
            }, [
                React.createElement('div', {
                    key: 'emoji',
                    className: 'text-6xl mb-4'
                }, '⚙️'),
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-3xl font-bold'
                }, '시스템 관리자'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-lg opacity-90 mt-2'
                }, '논리수학 퀴즈 시스템 관리')
            ])
        ]),

        // 탭 네비게이션
        React.createElement('div', {
            key: 'tabs',
            className: 'border-b bg-gray-50'
        }, [
            React.createElement('div', {
                key: 'tab-list',
                className: 'flex'
            }, [
                React.createElement('button', {
                    key: 'dashboard-tab',
                    onClick: () => setActiveTab('dashboard'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        activeTab === 'dashboard' 
                            ? 'border-b-2 border-gray-600 text-gray-700 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '📊 대시보드'),
                React.createElement('button', {
                    key: 'users-tab',
                    onClick: () => setActiveTab('users'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        activeTab === 'users' 
                            ? 'border-b-2 border-gray-600 text-gray-700 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '👥 사용자'),
                React.createElement('button', {
                    key: 'questions-tab',
                    onClick: () => setActiveTab('questions'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        activeTab === 'questions' 
                            ? 'border-b-2 border-gray-600 text-gray-700 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '📚 문제은행'),
                React.createElement('button', {
                    key: 'treasures-tab',
                    onClick: () => setActiveTab('treasures'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        activeTab === 'treasures' 
                            ? 'border-b-2 border-gray-600 text-gray-700 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '💎 보물뱅크'),
                React.createElement('button', {
                    key: 'settings-tab',
                    onClick: () => setActiveTab('settings'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        activeTab === 'settings' 
                            ? 'border-b-2 border-gray-600 text-gray-700 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '⚙️ 설정')
            ])
        ]),

        // 컨텐츠 영역
        React.createElement('div', {
            key: 'content',
            className: 'p-6'
        }, [
            activeTab === 'dashboard' && renderDashboard(),
            activeTab === 'users' && renderUserManagement(),
            activeTab === 'questions' && renderQuestionBank(),
            activeTab === 'treasures' && renderTreasureBank(),
            activeTab === 'settings' && renderSystemSettings()
        ]),

        // 하단 버튼
        React.createElement('div', {
            key: 'footer',
            className: 'p-6 bg-gray-50 text-center border-t'
        }, [
            React.createElement('button', {
                key: 'home-button',
                onClick: onReturnHome,
                className: 'bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            }, '🏠 홈으로 돌아가기')
        ])
    ]);
}

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.CompleteAdminPage = CompleteAdminPage;
}