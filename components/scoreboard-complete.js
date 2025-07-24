// 완전한 스코어보드 컴포넌트
function CompleteScoreboardPage({ database, onReturnHome }) {
    const [scores, setScores] = useState([]);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('rankings'); // rankings, statistics, weekly
    const [leaderboard, setLeaderboard] = useState(null);

    useEffect(() => {
        initializeScoreboard();
    }, [database]);

    const initializeScoreboard = async () => {
        try {
            // 리더보드 시스템 초기화
            const leaderboardSystem = new LeaderboardSystem();
            setLeaderboard(leaderboardSystem);

            // 실제 데이터베이스에서 점수 가져오기
            if (database) {
                const topScores = await database.getTopScores(25);
                
                // 각 플레이어의 보물 정보 추가
                const scoresWithTreasures = await Promise.all(topScores.map(async (score) => {
                    try {
                        const treasureCount = await database.getUserTreasureCount(score.userId);
                        const treasureValue = await database.getUserTreasureValue(score.userId);
                        return {
                            ...score,
                            treasureCount,
                            treasureValue
                        };
                    } catch (error) {
                        return {
                            ...score,
                            treasureCount: 0,
                            treasureValue: 0
                        };
                    }
                }));
                
                setScores(scoresWithTreasures);
            }

            // 실제 데이터와 가상의 플레이어 데이터 병합
            const combinedPlayers = [];
            
            // 실제 데이터베이스의 점수를 먼저 추가
            if (scoresWithTreasures.length > 0) {
                scoresWithTreasures.forEach((score, index) => {
                    combinedPlayers.push({
                        id: score.userId,
                        name: score.userName || '익명',
                        totalScore: score.totalScore,
                        rank: index + 1,
                        medal: leaderboardSystem.getMedal(index + 1),
                        education: score.education || 'unknown',
                        treasureCount: score.treasureCount || 0,
                        treasureValue: score.treasureValue || 0,
                        isRealPlayer: true
                    });
                });
            }
            
            // 가상 플레이어 추가 (실제 플레이어 수가 부족한 경우)
            const virtualPlayers = leaderboardSystem.getRankings();
            const realPlayerCount = combinedPlayers.length;
            
            if (realPlayerCount < 25) {
                if (realPlayerCount === 0) {
                    // 실제 플레이어가 없는 경우 모든 가상 플레이어 표시
                    virtualPlayers.slice(0, 25).forEach((vp, index) => {
                        combinedPlayers.push({
                            ...vp,
                            rank: index + 1,
                            medal: leaderboardSystem.getMedal(index + 1),
                            isRealPlayer: false
                        });
                    });
                } else {
                    // 실제 플레이어가 있는 경우, 그보다 낮은 점수의 가상 플레이어만 추가
                    const lowestRealScore = combinedPlayers[realPlayerCount - 1].totalScore;
                    const filteredVirtualPlayers = virtualPlayers
                        .filter(vp => vp.totalScore < lowestRealScore)
                        .slice(0, 25 - realPlayerCount);
                        
                    filteredVirtualPlayers.forEach((vp, index) => {
                        combinedPlayers.push({
                            ...vp,
                            rank: realPlayerCount + index + 1,
                            medal: leaderboardSystem.getMedal(realPlayerCount + index + 1),
                            isRealPlayer: false
                        });
                    });
                }
            }
            
            setPlayers(combinedPlayers);

        } catch (error) {
            console.error('스코어보드 초기화 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const getDifficultyColor = (difficulty) => {
        const colors = {
            easy: "bg-green-100 text-green-800 border-green-200",
            medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
            hard: "bg-red-100 text-red-800 border-red-200"
        };
        return colors[difficulty] || colors.easy;
    };

    const getRankChangeIcon = (change) => {
        if (change > 0) return React.createElement('span', { className: 'text-green-500' }, `⬆️ +${change}`);
        if (change < 0) return React.createElement('span', { className: 'text-red-500' }, `⬇️ ${change}`);
        return React.createElement('span', { className: 'text-gray-500' }, '➖ 0');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ko-KR', {
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return React.createElement('div', {
            className: 'text-center py-16'
        }, [
            React.createElement('div', {
                key: 'loading-spinner',
                className: 'text-6xl mb-4 animate-pulse'
            }, '⏳'),
            React.createElement('div', {
                key: 'loading-text',
                className: 'text-xl text-gray-600'
            }, '스코어보드를 불러오는 중...')
        ]);
    }

    // 랭킹 뷰
    const renderRankings = () => {
        return React.createElement('div', {
            className: 'space-y-4'
        }, [
            React.createElement('div', {
                key: 'header',
                className: 'flex justify-between items-center mb-6'
            }, [
                React.createElement('h3', {
                    key: 'title',
                    className: 'text-2xl font-bold text-gray-800'
                }, '🏆 실시간 랭킹'),
                React.createElement('div', {
                    key: 'live-indicator',
                    className: 'flex items-center space-x-2'
                }, [
                    React.createElement('div', {
                        key: 'dot',
                        className: 'w-3 h-3 bg-green-400 rounded-full animate-pulse'
                    }),
                    React.createElement('span', {
                        key: 'text',
                        className: 'text-sm text-gray-600'
                    }, 'LIVE')
                ])
            ]),

            // 탑 3 특별 표시
            React.createElement('div', {
                key: 'top-3',
                className: 'grid grid-cols-3 gap-4 mb-8'
            }, players.slice(0, 3).map((player, index) => 
                React.createElement('div', {
                    key: `top-${player.id}`,
                    className: `text-center p-6 rounded-lg ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400' :
                        index === 1 ? 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-400' :
                        'bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-400'
                    }`
                }, [
                    React.createElement('div', {
                        key: 'medal',
                        className: 'text-4xl mb-2'
                    }, player.medal),
                    React.createElement('div', {
                        key: 'avatar',
                        className: 'text-3xl mb-2'
                    }, player.avatar),
                    React.createElement('div', {
                        key: 'name',
                        className: 'font-bold text-lg'
                    }, player.name),
                    React.createElement('div', {
                        key: 'score',
                        className: `text-2xl font-bold ${
                            index === 0 ? 'text-yellow-700' :
                            index === 1 ? 'text-gray-700' :
                            'text-orange-700'
                        }`
                    }, `${player.totalScore.toLocaleString()}점`),
                    React.createElement('div', {
                        key: 'treasures',
                        className: 'text-sm text-purple-600 font-medium'
                    }, player.treasureCount ? `💎 ${player.treasureCount}개 보물` : ''),
                    React.createElement('div', {
                        key: 'grade',
                        className: 'text-sm text-gray-600'
                    }, `${player.grade} • ${player.school}`)
                ])
            )),

            // 전체 랭킹 리스트
            React.createElement('div', {
                key: 'rankings-list',
                className: 'space-y-3'
            }, players.map((player, index) => 
                React.createElement('div', {
                    key: `rank-${player.id}`,
                    className: `flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                        index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' :
                        index < 10 ? 'bg-blue-50 border-blue-200' :
                        'bg-gray-50 border-gray-200'
                    }`
                }, [
                    React.createElement('div', {
                        key: 'left',
                        className: 'flex items-center space-x-4'
                    }, [
                        React.createElement('div', {
                            key: 'rank-medal',
                            className: 'flex items-center space-x-2'
                        }, [
                            React.createElement('span', {
                                key: 'rank',
                                className: `text-2xl font-bold ${
                                    index < 3 ? 'text-yellow-600' : 
                                    index < 10 ? 'text-blue-600' : 'text-gray-600'
                                }`
                            }, `${index + 1}`),
                            React.createElement('span', {
                                key: 'medal-emoji',
                                className: 'text-xl'
                            }, player.medal)
                        ]),
                        React.createElement('div', {
                            key: 'avatar',
                            className: 'text-2xl'
                        }, player.avatar),
                        React.createElement('div', {
                            key: 'info'
                        }, [
                            React.createElement('div', {
                                key: 'name',
                                className: 'font-bold text-lg'
                            }, player.name),
                            React.createElement('div', {
                                key: 'details',
                                className: 'text-sm text-gray-600 flex items-center space-x-2'
                            }, [
                                React.createElement('span', {
                                    key: 'grade'
                                }, player.grade),
                                React.createElement('span', {
                                    key: 'separator'
                                }, '•'),
                                React.createElement('span', {
                                    key: 'level',
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                                        player.level === '마스터' ? 'bg-purple-100 text-purple-800' :
                                        player.level === '고급' ? 'bg-blue-100 text-blue-800' :
                                        player.level === '중급' ? 'bg-green-100 text-green-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`
                                }, player.level),
                                React.createElement('span', {
                                    key: 'games'
                                }, `${player.gamesPlayed}게임`)
                            ])
                        ])
                    ]),
                    React.createElement('div', {
                        key: 'right',
                        className: 'text-right'
                    }, [
                        React.createElement('div', {
                            key: 'total-score',
                            className: 'text-2xl font-bold text-purple-600'
                        }, `${player.totalScore.toLocaleString()}점`),
                        player.treasureCount > 0 && React.createElement('div', {
                            key: 'treasure-info',
                            className: 'text-sm font-medium text-purple-600 mt-1'
                        }, [
                            React.createElement('span', {key: 'icon'}, '💎 '),
                            React.createElement('span', {key: 'count'}, `${player.treasureCount}개`),
                            player.treasureValue > 0 && React.createElement('span', {
                                key: 'value',
                                className: 'ml-2 text-green-600'
                            }, `(₩${player.treasureValue.toLocaleString()})`)
                        ]),
                        React.createElement('div', {
                            key: 'details-right',
                            className: 'text-sm text-gray-500 flex items-center justify-end space-x-2'
                        }, [
                            React.createElement('span', {
                                key: 'average'
                            }, `평균 ${player.averageScore}점`),
                            getRankChangeIcon(player.rankChange || 0)
                        ])
                    ])
                ])
            ))
        ]);
    };

    // 통계 뷰
    const renderStatistics = () => {
        const stats = leaderboard ? leaderboard.getStatistics() : {};
        
        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800 mb-6'
            }, '📊 상세 통계'),

            React.createElement('div', {
                key: 'stats-grid',
                className: 'grid grid-cols-2 md:grid-cols-4 gap-4'
            }, [
                React.createElement('div', {
                    key: 'total-players',
                    className: 'bg-blue-100 p-6 rounded-lg text-center border-2 border-blue-200'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-blue-600'
                    }, stats.totalPlayers || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600 mt-1'
                    }, '총 플레이어')
                ]),
                React.createElement('div', {
                    key: 'total-games',
                    className: 'bg-green-100 p-6 rounded-lg text-center border-2 border-green-200'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-green-600'
                    }, stats.totalGames || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600 mt-1'
                    }, '총 게임 수')
                ]),
                React.createElement('div', {
                    key: 'avg-score',
                    className: 'bg-purple-100 p-6 rounded-lg text-center border-2 border-purple-200'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-purple-600'
                    }, stats.averageScore || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600 mt-1'
                    }, '평균 점수')
                ]),
                React.createElement('div', {
                    key: 'highest-score',
                    className: 'bg-red-100 p-6 rounded-lg text-center border-2 border-red-200'
                }, [
                    React.createElement('div', {
                        key: 'number',
                        className: 'text-3xl font-bold text-red-600'
                    }, stats.highestScore || 0),
                    React.createElement('div', {
                        key: 'label',
                        className: 'text-sm text-gray-600 mt-1'
                    }, '최고 점수')
                ])
            ]),

            // 레벨별 분포
            React.createElement('div', {
                key: 'level-distribution',
                className: 'bg-white p-6 rounded-lg border'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold mb-4'
                }, '🎯 레벨별 분포'),
                React.createElement('div', {
                    key: 'levels',
                    className: 'grid grid-cols-4 gap-4'
                }, [
                    React.createElement('div', {
                        key: 'beginner',
                        className: 'text-center'
                    }, [
                        React.createElement('div', {
                            key: 'emoji',
                            className: 'text-3xl mb-2'
                        }, '🌱'),
                        React.createElement('div', {
                            key: 'count',
                            className: 'text-2xl font-bold text-gray-600'
                        }, stats.levels?.초급 || 0),
                        React.createElement('div', {
                            key: 'label',
                            className: 'text-sm text-gray-600'
                        }, '초급')
                    ]),
                    React.createElement('div', {
                        key: 'intermediate',
                        className: 'text-center'
                    }, [
                        React.createElement('div', {
                            key: 'emoji',
                            className: 'text-3xl mb-2'
                        }, '🎯'),
                        React.createElement('div', {
                            key: 'count',
                            className: 'text-2xl font-bold text-green-600'
                        }, stats.levels?.중급 || 0),
                        React.createElement('div', {
                            key: 'label',
                            className: 'text-sm text-gray-600'
                        }, '중급')
                    ]),
                    React.createElement('div', {
                        key: 'advanced',
                        className: 'text-center'
                    }, [
                        React.createElement('div', {
                            key: 'emoji',
                            className: 'text-3xl mb-2'
                        }, '⭐'),
                        React.createElement('div', {
                            key: 'count',
                            className: 'text-2xl font-bold text-blue-600'
                        }, stats.levels?.고급 || 0),
                        React.createElement('div', {
                            key: 'label',
                            className: 'text-sm text-gray-600'
                        }, '고급')
                    ]),
                    React.createElement('div', {
                        key: 'master',
                        className: 'text-center'
                    }, [
                        React.createElement('div', {
                            key: 'emoji',
                            className: 'text-3xl mb-2'
                        }, '👑'),
                        React.createElement('div', {
                            key: 'count',
                            className: 'text-2xl font-bold text-purple-600'
                        }, stats.levels?.마스터 || 0),
                        React.createElement('div', {
                            key: 'label',
                            className: 'text-sm text-gray-600'
                        }, '마스터')
                    ])
                ])
            ])
        ]);
    };

    // 주간 베스트 뷰
    const renderWeekly = () => {
        const weeklyBest = leaderboard ? leaderboard.getWeeklyBest() : [];
        const todayChanges = leaderboard ? leaderboard.getTodayChanges() : [];

        return React.createElement('div', {
            className: 'space-y-6'
        }, [
            React.createElement('h3', {
                key: 'title',
                className: 'text-2xl font-bold text-gray-800 mb-6'
            }, '📅 이번 주 하이라이트'),

            React.createElement('div', {
                key: 'weekly-best',
                className: 'bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold mb-4 text-purple-800'
                }, '🔥 이번 주 가장 발전한 플레이어'),
                React.createElement('div', {
                    key: 'list',
                    className: 'space-y-3'
                }, weeklyBest.map((player, index) => 
                    React.createElement('div', {
                        key: `weekly-${player.id}`,
                        className: 'flex items-center justify-between p-3 bg-white rounded-lg'
                    }, [
                        React.createElement('div', {
                            key: 'left',
                            className: 'flex items-center space-x-3'
                        }, [
                            React.createElement('span', {
                                key: 'rank',
                                className: 'text-2xl'
                            }, index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'),
                            React.createElement('span', {
                                key: 'avatar',
                                className: 'text-xl'
                            }, player.avatar),
                            React.createElement('span', {
                                key: 'name',
                                className: 'font-bold'
                            }, player.name)
                        ]),
                        React.createElement('div', {
                            key: 'right',
                            className: 'text-green-600 font-bold'
                        }, `+${player.weeklyImprovement}점`)
                    ])
                ))
            ]),

            React.createElement('div', {
                key: 'today-activity',
                className: 'bg-blue-50 p-6 rounded-lg border'
            }, [
                React.createElement('h4', {
                    key: 'title',
                    className: 'text-xl font-bold mb-4 text-blue-800'
                }, '📈 오늘의 활동'),
                todayChanges.length > 0 ? 
                    React.createElement('div', {
                        key: 'activity-list',
                        className: 'space-y-2'
                    }, todayChanges.map((activity, index) => 
                        React.createElement('div', {
                            key: `today-${index}`,
                            className: 'flex justify-between items-center p-2 bg-white rounded'
                        }, [
                            React.createElement('span', {
                                key: 'name'
                            }, activity.name),
                            React.createElement('span', {
                                key: 'details',
                                className: 'text-sm text-gray-600'
                            }, `${activity.gamesPlayed}게임 • +${activity.scoreChange}점`)
                        ])
                    )) :
                    React.createElement('p', {
                        key: 'no-activity',
                        className: 'text-gray-500 text-center'
                    }, '오늘 아직 활동한 플레이어가 없습니다.')
            ])
        ]);
    };

    return React.createElement('div', {
        className: 'max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'
    }, [
        // 헤더
        React.createElement('div', {
            key: 'header',
            className: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6'
        }, [
            React.createElement('div', {
                key: 'header-content',
                className: 'text-center'
            }, [
                React.createElement('div', {
                    key: 'emoji',
                    className: 'text-6xl mb-4'
                }, '🏆'),
                React.createElement('h2', {
                    key: 'title',
                    className: 'text-3xl font-bold'
                }, '명예의 전당'),
                React.createElement('p', {
                    key: 'subtitle',
                    className: 'text-lg opacity-90 mt-2'
                }, '최고의 논리수학 마스터들!')
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
                    key: 'rankings-tab',
                    onClick: () => setViewMode('rankings'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        viewMode === 'rankings' 
                            ? 'border-b-2 border-yellow-500 text-yellow-600 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '🏆 랭킹'),
                React.createElement('button', {
                    key: 'statistics-tab',
                    onClick: () => setViewMode('statistics'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        viewMode === 'statistics' 
                            ? 'border-b-2 border-yellow-500 text-yellow-600 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '📊 통계'),
                React.createElement('button', {
                    key: 'weekly-tab',
                    onClick: () => setViewMode('weekly'),
                    className: `px-6 py-4 font-semibold transition-colors ${
                        viewMode === 'weekly' 
                            ? 'border-b-2 border-yellow-500 text-yellow-600 bg-white' 
                            : 'text-gray-600 hover:text-gray-800'
                    }`
                }, '📅 주간')
            ])
        ]),

        // 컨텐츠 영역
        React.createElement('div', {
            key: 'content',
            className: 'p-6'
        }, [
            viewMode === 'rankings' && renderRankings(),
            viewMode === 'statistics' && renderStatistics(),
            viewMode === 'weekly' && renderWeekly()
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
    window.CompleteScoreboardPage = CompleteScoreboardPage;
}