// 가전제품 컬렉션 페이지 컴포넌트
function ApplianceCollectionPage({ database, user, onReturnHome }) {
    const [userAppliances, setUserAppliances] = useState([]);
    const [allAppliances, setAllAppliances] = useState([]);
    const [selectedAppliance, setSelectedAppliance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadApplianceData();
    }, [database, user]);

    const loadApplianceData = async () => {
        try {
            setLoading(true);
            
            if (!user || !database) return;

            // 사용자가 수집한 가전제품 ID 목록
            const userApplianceRecords = await database.getUserAppliances(user.id);
            const userApplianceIds = userApplianceRecords.map(record => record.applianceId);

            // 전체 가전제품 목록
            let allAppliancesList = [];
            if (typeof appliancesData !== 'undefined') {
                allAppliancesList = [...allAppliancesList, ...appliancesData];
            }
            if (typeof enhancedAppliancesData !== 'undefined') {
                allAppliancesList = [...allAppliancesList, ...enhancedAppliancesData];
            }

            // 수집 여부 정보 추가
            const appliancesWithCollection = allAppliancesList.map(appliance => ({
                ...appliance,
                isCollected: userApplianceIds.includes(appliance.id)
            }));

            setUserAppliances(userApplianceRecords);
            setAllAppliances(appliancesWithCollection);

        } catch (error) {
            console.error('가전제품 데이터 로드 중 오류:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderApplianceCard = (appliance) => {
        return React.createElement('div', {
            key: `appliance-${appliance.id}`,
            className: `iphone-list-item cursor-pointer transform transition-all ${
                appliance.isCollected 
                    ? 'bg-white border-2 border-green-300 shadow-lg' 
                    : 'bg-gray-100 border-2 border-gray-200 opacity-60'
            }`,
            onClick: () => appliance.isCollected && setSelectedAppliance(appliance)
        }, [
            React.createElement('div', {
                key: 'card-content',
                className: "flex items-center space-x-4"
            }, [
                React.createElement('div', {
                    key: 'appliance-icon',
                    className: `text-6xl ${appliance.isCollected ? '' : 'grayscale'}`
                }, appliance.emoji || '🏠'),
                React.createElement('div', {
                    key: 'appliance-info',
                    className: "flex-1 min-w-0"
                }, [
                    React.createElement('h3', {
                        key: 'name',
                        className: `text-lg font-bold truncate ${
                            appliance.isCollected ? 'text-gray-800' : 'text-gray-500'
                        }`
                    }, appliance.name),
                    React.createElement('p', {
                        key: 'brand',
                        className: `text-sm truncate ${
                            appliance.isCollected ? 'text-gray-600' : 'text-gray-400'
                        }`
                    }, `${appliance.brand} - ${appliance.category}`),
                    appliance.isCollected && React.createElement('div', {
                        key: 'collected-badge',
                        className: "inline-flex items-center mt-2 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    }, [
                        React.createElement('span', {
                            key: 'check-icon',
                            className: "mr-1"
                        }, '✅'),
                        '수집완료'
                    ])
                ]),
                !appliance.isCollected && React.createElement('div', {
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
                }, '🏠'),
                React.createElement('div', {
                    key: 'loading-text',
                    className: "text-xl text-gray-600"
                }, '가전제품 컬렉션 로딩 중...')
            ])
        ]);
    }

    const collectedCount = allAppliances.filter(a => a.isCollected).length;
    const totalCount = allAppliances.length;
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
                }, '🏠'),
                React.createElement('h2', {
                    key: 'header-title',
                    className: "text-3xl font-bold text-gray-800 mb-2"
                }, `${user.name}님의 가전제품 컬렉션`),
                React.createElement('div', {
                    key: 'progress-info',
                    className: "text-lg text-gray-600 mb-4"
                }, `${collectedCount}/${totalCount} 수집 완료 (${collectionProgress}%)`),
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
            key: 'appliances-grid',
            className: "space-y-2"
        }, allAppliances.map(renderApplianceCard)),

        // 가전제품 상세정보 팝업
        selectedAppliance && React.createElement('div', {
            key: 'appliance-popup',
            className: "iphone-modal",
            onClick: (e) => {
                if (e.target === e.currentTarget) {
                    setSelectedAppliance(null);
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
                    }, selectedAppliance.name),
                    React.createElement('button', {
                        key: 'close-button',
                        onClick: () => setSelectedAppliance(null),
                        className: "touch-button bg-gray-200 text-gray-600 border-0 text-sm px-3 py-1"
                    }, '✕')
                ]),
                
                React.createElement('div', {
                    key: 'appliance-details',
                    className: "space-y-4"
                }, [
                    React.createElement('div', {
                        key: 'appliance-main',
                        className: "text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border-2 border-blue-200"
                    }, [
                        React.createElement('div', {
                            key: 'large-icon',
                            className: "text-8xl mb-4"
                        }, selectedAppliance.emoji || '🏠'),
                        React.createElement('div', {
                            key: 'brand-category',
                            className: "text-lg text-gray-600"
                        }, `${selectedAppliance.brand} - ${selectedAppliance.category}`)
                    ]),

                    selectedAppliance.description && React.createElement('div', {
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
                        }, selectedAppliance.description)
                    ]),

                    selectedAppliance.specifications && React.createElement('div', {
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
                        }, Object.entries(selectedAppliance.specifications).map(([key, value]) =>
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

                    selectedAppliance.priceNote && React.createElement('div', {
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
                        }, selectedAppliance.priceNote)
                    ])
                ]),

                React.createElement('button', {
                    key: 'close-bottom-button',
                    onClick: () => setSelectedAppliance(null),
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
    window.ApplianceCollectionPage = ApplianceCollectionPage;
}