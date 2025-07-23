// 보물 데이터 로드 함수
async function loadTreasures(database) {
    console.log('보물 데이터 로딩 시작...');
    
    try {
        // treasuresDatabase가 정의되어 있는지 확인
        if (typeof window.treasuresDatabase === 'undefined') {
            console.error('treasuresDatabase가 정의되지 않았습니다.');
            return;
        }
        
        const treasures = window.treasuresDatabase;
        console.log(`${treasures.length}개의 보물 데이터 발견`);
        
        // 데이터베이스에 보물 추가
        for (const treasure of treasures) {
            try {
                await database.addTreasure(treasure);
            } catch (error) {
                console.error(`보물 추가 실패 (${treasure.name}):`, error);
            }
        }
        
        console.log('보물 데이터 로딩 완료');
        
        // 통계 출력
        const categories = {};
        treasures.forEach(treasure => {
            categories[treasure.category] = (categories[treasure.category] || 0) + 1;
        });
        
        console.log('카테고리별 보물 수:');
        Object.entries(categories).forEach(([category, count]) => {
            console.log(`  ${category}: ${count}개`);
        });
        
    } catch (error) {
        console.error('보물 데이터 로딩 중 오류:', error);
    }
}

// 전역 스코프에 함수 등록
window.loadTreasures = loadTreasures;