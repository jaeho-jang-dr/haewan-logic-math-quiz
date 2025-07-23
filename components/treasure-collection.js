// 보물 컬렉션 페이지 컴포넌트
function TreasureCollectionPage({ database, user, onReturnHome }) {
    const [userTreasures, setUserTreasures] = useState([]);
    const [allTreasures, setAllTreasures] = useState([]);
    const [selectedTreasure, setSelectedTreasure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        loadTreasureData();
    }, [database, user]);

    const loadTreasureData = async () => {
        try {
            setLoading(true);
            
            if (!user || !database) return;

            // 사용자가 수집한 보물 ID 목록
            const userTreasureRecords = await database.getUserTreasures(user.id);
            const userTreasureIds = userTreasureRecords.map(record => record.treasureId);

            // 전체 보물 목록
            let allTreasuresList = [];
            if (typeof treasuresDatabase !== 'undefined') {
                allTreasuresList = [...allTreasuresList, ...treasuresDatabase];
            }

            // 수집 여부 및 히스토리 정보 추가
            const treasuresWithCollection = allTreasuresList.map(treasure => {
                const collectionRecords = userTreasureRecords.filter(record => record.treasureId === treasure.id);
                const isCollected = collectionRecords.length > 0;
                const firstCollected = isCollected ? Math.min(...collectionRecords.map(r => r.dateCollected)) : null;
                const collectionCount = collectionRecords.length;
                
                return {
                    ...treasure,
                    isCollected,
                    firstCollectedDate: firstCollected,
                    collectionCount,
                    collectionHistory: collectionRecords
                };
            });

            setUserTreasures(userTreasureRecords);
            setAllTreasures(treasuresWithCollection);
            
            // 총 가치 계산
            const totalTreasureValue = await database.getUserTreasureValue(user.id);
            setTotalValue(totalTreasureValue);

        } catch (error) {
            console.error('보물 데이터 로드 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderTreasureCard = (treasure) => {
        return React.createElement('div', {
            key: `treasure-${treasure.id}`,
            className: `iphone-list-item cursor-pointer transform transition-all ${
                treasure.isCollected 
                    ? 'bg-white border-2 border-green-300 shadow-lg' 
                    : 'bg-gray-100 border-2 border-gray-200 opacity-60'
            }`,
            onClick: () => treasure.isCollected && setSelectedTreasure(treasure)
        }, [
            React.createElement('div', {
                key: 'card-content',
                className: "flex items-center space-x-4"
            }, [
                React.createElement('div', {
                    key: 'treasure-icon',
                    className: `text-6xl ${treasure.isCollected ? '' : 'grayscale'}`
                }, treasure.icon || treasure.emoji || '💎'),
                React.createElement('div', {
                    key: 'treasure-info',
                    className: "flex-1 min-w-0"
                }, [
                    React.createElement('h3', {
                        key: 'name',
                        className: `text-lg font-bold truncate ${
                            treasure.isCollected ? 'text-gray-800' : 'text-gray-500'
                        }`
                    }, treasure.name),
                    React.createElement('p', {
                        key: 'brand',
                        className: `text-sm truncate ${
                            treasure.isCollected ? 'text-gray-600' : 'text-gray-400'
                        }`
                    }, `${treasure.brand} - ${treasure.category}`),
                    treasure.isCollected && React.createElement('div', {
                        key: 'collection-info',
                        className: "mt-2 space-y-1"
                    }, [
                        React.createElement('div', {
                            key: 'collected-badge',
                            className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        }, [
                            React.createElement('span', {
                                key: 'check-icon',
                                className: "mr-1"
                            }, '✅'),
                            `${treasure.collectionCount}회 수집`
                        ]),
                        treasure.firstCollectedDate && React.createElement('div', {
                            key: 'first-collected',
                            className: "text-xs text-gray-500"
                        }, `첫 수집: ${new Date(treasure.firstCollectedDate).toLocaleDateString('ko-KR')}`)
                    ])
                ]),
                !treasure.isCollected && React.createElement('div', {
                    key: 'lock-icon',
                    className: "text-3xl text-gray-400"
                }, '🔒')
            ])
        ]);
    };

    if (loading) {
        return React.createElement('div', {
            className: "safe-area game-container min-h-screen"
        }, [
            React.createElement('div', {
                key: 'loading-card',
                className: "iphone-card p-6 text-center"
            }, [
                React.createElement('div', {
                    key: 'loading-spinner',
                    className: "text-6xl mb-4 animate-pulse"
                }, '💎'),
                React.createElement('div', {
                    key: 'loading-text',
                    className: "text-xl text-gray-600"
                }, '보물 컬렉션 로딩 중...')
            ])
        ]);
    }

    const collectedCount = allTreasures.filter(a => a.isCollected).length;
    const totalCount = allTreasures.length;
    const collectionProgress = totalCount > 0 ? Math.round((collectedCount / totalCount) * 100) : 0;

    return React.createElement('div', {
        className: "safe-area game-container min-h-screen"
    }, [
        React.createElement('div', {
            key: 'collection-header',
            className: "iphone-card p-6 mb-4"
        }, [
            React.createElement('div', {
                key: 'header-content',
                className: "text-center"
            }, [
                React.createElement('div', {
                    key: 'header-icon',
                    className: "text-6xl mb-4"
                }, '💎'),
                React.createElement('h2', {
                    key: 'header-title',
                    className: "text-3xl font-bold text-gray-800 mb-2"
                }, `${user.name}님의 보물 컬렉션`),
                React.createElement('div', {
                    key: 'progress-info',
                    className: "text-lg text-gray-600 mb-4"
                }, `${collectedCount}/${totalCount} 수집 완료 (${collectionProgress}%)`),
                totalValue > 0 && React.createElement('div', {
                    key: 'total-value',
                    className: "text-lg font-bold text-green-600 mb-2"
                }, `💰 총 가치: ₩${totalValue.toLocaleString()}`),
                React.createElement('div', {
                    key: 'progress-bar-container',
                    className: "progress-bar mb-4"
                }, [
                    React.createElement('div', {
                        key: 'progress-fill',
                        className: "progress-fill",
                        style: { width: `${collectionProgress}%` }
                    })
                ])
            ])
        ]),

        React.createElement('div', {
            key: 'treasures-grid',
            className: "space-y-2"
        }, allTreasures.map(renderTreasureCard)),

        // 보물 상세정보 팝업
        selectedTreasure && React.createElement('div', {
            key: 'treasure-popup',
            className: "iphone-modal",
            onClick: (e) => {
                if (e.target === e.currentTarget) {
                    setSelectedTreasure(null);
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
                        className: "text-2xl font-bold text-gray-800"
                    }, selectedTreasure.name),
                    React.createElement('button', {
                        key: 'close-button',
                        onClick: () => setSelectedTreasure(null),
                        className: "touch-button bg-gray-200 text-gray-600 border-0 text-sm px-3 py-1"
                    }, '✕')
                ]),
                
                React.createElement('div', {
                    key: 'treasure-details',
                    className: "space-y-4"
                }, [
                    React.createElement('div', {
                        key: 'treasure-main',
                        className: "text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border-2 border-blue-200"
                    }, [
                        React.createElement('div', {
                            key: 'large-icon',
                            className: "text-8xl mb-4"
                        }, selectedTreasure.emoji || '🏠'),
                        React.createElement('div', {
                            key: 'brand-category',
                            className: "text-lg text-gray-600"
                        }, `${selectedTreasure.brand} - ${selectedTreasure.category}`),
                        selectedTreasure.releaseYear && React.createElement('div', {
                            key: 'release-info',
                            className: "text-sm text-gray-500 mt-2"
                        }, `${selectedTreasure.releaseYear}년 출시 | ${selectedTreasure.countryOfOrigin || '정보없음'}`)
                    ]),

                    selectedTreasure.description && React.createElement('div', {
                        key: 'description',
                        className: "p-4 bg-gray-50 rounded-lg"
                    }, [
                        React.createElement('h4', {
                            key: 'desc-title',
                            className: "font-bold text-gray-800 mb-2"
                        }, '제품 설명'),
                        React.createElement('p', {
                            key: 'desc-text',
                            className: "text-gray-700"
                        }, selectedTreasure.description),
                        selectedTreasure.specialFeature && React.createElement('div', {
                            key: 'special-feature',
                            className: "mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400"
                        }, [
                            React.createElement('h5', {
                                key: 'special-title',
                                className: "font-bold text-yellow-800 mb-1"
                            }, '🌟 특별한 특징'),
                            React.createElement('p', {
                                key: 'special-text',
                                className: "text-yellow-700 text-sm"
                            }, selectedTreasure.specialFeature)
                        ])
                    ]),

                    selectedTreasure.specifications && React.createElement('div', {
                        key: 'specifications',
                        className: "p-4 bg-blue-50 rounded-lg"
                    }, [
                        React.createElement('h4', {
                            key: 'spec-title',
                            className: "font-bold text-gray-800 mb-3"
                        }, '제품 사양'),
                        React.createElement('div', {
                            key: 'spec-grid',
                            className: "grid grid-cols-2 gap-2 text-sm"
                        }, Object.entries(selectedTreasure.specifications).map(([key, value]) =>
                            React.createElement('div', {
                                key: `spec-${key}`,
                                className: "flex justify-between p-2 bg-white rounded"
                            }, [
                                React.createElement('span', {
                                    key: 'spec-key',
                                    className: "font-medium text-gray-600"
                                }, key),
                                React.createElement('span', {
                                    key: 'spec-value',
                                    className: "text-gray-800"
                                }, value)
                            ])
                        ))
                    ]),

                    selectedTreasure.priceNote && React.createElement('div', {
                        key: 'price-info',
                        className: "p-4 bg-green-50 rounded-lg text-center"
                    }, [
                        React.createElement('h4', {
                            key: 'price-title',
                            className: "font-bold text-gray-800 mb-2"
                        }, '가격 정보'),
                        React.createElement('p', {
                            key: 'price-text',
                            className: "text-lg font-bold text-green-600"
                        }, selectedTreasure.priceNote),
                        selectedTreasure.monetaryValue && React.createElement('p', {
                            key: 'monetary-value',
                            className: "text-md text-gray-600 mt-2"
                        }, `실제 가치: ₩${selectedTreasure.monetaryValue.toLocaleString()}`)
                    ]),
                    
                    // 수집 히스토리 (수집한 상품인 경우만)
                    selectedTreasure.isCollected && selectedTreasure.collectionHistory && React.createElement('div', {
                        key: 'collection-history',
                        className: "p-4 bg-purple-50 rounded-lg"
                    }, [
                        React.createElement('h4', {
                            key: 'history-title',
                            className: "font-bold text-gray-800 mb-3 flex items-center"
                        }, [
                            React.createElement('span', {
                                key: 'history-icon',
                                className: "mr-2"
                            }, '🏆'),
                            `수집 기록 (총 ${selectedTreasure.collectionCount}회)`
                        ]),
                        React.createElement('div', {
                            key: 'history-list',
                            className: "space-y-2 max-h-32 overflow-y-auto"
                        }, selectedTreasure.collectionHistory
                            .sort((a, b) => b.dateCollected - a.dateCollected) // 최신순 정렬
                            .map((record, index) => 
                                React.createElement('div', {
                                    key: `history-${index}`,
                                    className: "flex justify-between items-center p-2 bg-white rounded border-l-4 border-purple-300"
                                }, [
                                    React.createElement('span', {
                                        key: 'date',
                                        className: "text-sm text-gray-700"
                                    }, new Date(record.dateCollected).toLocaleString('ko-KR')),
                                    React.createElement('span', {
                                        key: 'badge',
                                        className: "text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full"
                                    }, `${index + 1}번째`)
                                ])
                            )
                        )
                    ])
                ]),

                React.createElement('button', {
                    key: 'close-bottom-button',
                    onClick: () => setSelectedTreasure(null),
                    className: "touch-button w-full bg-blue-500 hover:bg-blue-600 text-white border-0 mt-6"
                }, '확인')
            ])
        ]),

        React.createElement('div', {
            key: 'footer',
            className: "p-6 text-center"
        }, [
            React.createElement('button', {
                key: 'home-button',
                onClick: onReturnHome,
                className: "touch-button bg-purple-600 hover:bg-purple-700 text-white border-0"
            }, '🏠 홈으로 돌아가기')
        ])
    ]);
}

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.TreasureCollectionPage = TreasureCollectionPage;
}