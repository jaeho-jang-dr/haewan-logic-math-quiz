// 가전제품 데이터베이스 50개
const appliancesData = [
    // 주방 가전 (1-15)
    {
        id: 1,
        name: "냉장고",
        category: "주방가전",
        brand: "삼성",
        price: 1200000,
        energyRating: "1등급",
        features: ["양문형", "무선조절", "디스펜서"],
        emoji: "🧊",
        description: "신선한 식품 보관을 위한 대용량 냉장고"
    },
    {
        id: 2,
        name: "전자레인지",
        category: "주방가전",
        brand: "LG",
        price: 180000,
        energyRating: "2등급",
        features: ["자동요리", "해동기능", "그릴기능"],
        emoji: "🍽️",
        description: "간편한 요리와 음식 데우기에 최적"
    },
    {
        id: 3,
        name: "식기세척기",
        category: "주방가전",
        brand: "삼성",
        price: 800000,
        energyRating: "1등급",
        features: ["자동세척", "건조기능", "살균모드"],
        emoji: "🍴",
        description: "깨끗한 설거지를 자동으로 해주는 편리한 기기"
    },
    {
        id: 4,
        name: "전기밥솥",
        category: "주방가전",
        brand: "쿠쿠",
        price: 320000,
        energyRating: "1등급",
        features: ["압력취사", "보온기능", "예약취사"],
        emoji: "🍚",
        description: "맛있는 밥을 지어주는 스마트 밥솥"
    },
    {
        id: 5,
        name: "믹서기",
        category: "주방가전",
        brand: "필립스",
        price: 150000,
        energyRating: "3등급",
        features: ["다단계속도", "안전잠금", "용기분리"],
        emoji: "🥤",
        description: "신선한 주스와 스무디 제조기"
    },
    {
        id: 6,
        name: "토스터",
        category: "주방가전",
        brand: "브런치마스터",
        price: 80000,
        energyRating: "3등급",
        features: ["타이머설정", "온도조절", "자동팝업"],
        emoji: "🍞",
        description: "바삭한 토스트를 만드는 전용 기기"
    },
    {
        id: 7,
        name: "커피머신",
        category: "주방가전",
        brand: "네스프레소",
        price: 250000,
        energyRating: "2등급",
        features: ["원터치", "자동청소", "다양한음료"],
        emoji: "☕",
        description: "집에서 즐기는 카페 품질의 커피"
    },
    {
        id: 8,
        name: "에어프라이어",
        category: "주방가전",
        brand: "필립스",
        price: 200000,
        energyRating: "2등급",
        features: ["기름없이", "자동요리", "쉬운청소"],
        emoji: "🍟",
        description: "건강한 기름없는 요리 전문 기기"
    },
    {
        id: 9,
        name: "전기포트",
        category: "주방가전",
        brand: "타이거",
        price: 120000,
        energyRating: "1등급",
        features: ["빠른끓임", "보온기능", "안전장치"],
        emoji: "🫖",
        description: "빠르고 안전한 물 끓이기 전용"
    },
    {
        id: 10,
        name: "정수기",
        category: "주방가전",
        brand: "코웨이",
        price: 450000,
        energyRating: "1등급",
        features: ["정수필터", "냉온수", "직수형"],
        emoji: "💧",
        description: "깨끗하고 시원한 물 공급 시스템"
    },
    {
        id: 11,
        name: "인덕션",
        category: "주방가전",
        brand: "LG",
        price: 380000,
        energyRating: "1등급",
        features: ["화력조절", "타이머", "안전센서"],
        emoji: "🔥",
        description: "안전하고 효율적인 전기 조리기구"
    },
    {
        id: 12,
        name: "오븐",
        category: "주방가전",
        brand: "삼성",
        price: 650000,
        energyRating: "2등급",
        features: ["스팀기능", "그릴모드", "자동요리"],
        emoji: "🔥",
        description: "다양한 요리를 가능하게 하는 만능 조리기"
    },
    {
        id: 13,
        name: "주방후드",
        category: "주방가전",
        brand: "린나이",
        price: 280000,
        energyRating: "2등급",
        features: ["강력흡입", "LED조명", "필터교체"],
        emoji: "💨",
        description: "요리 시 연기와 냄새 제거 시스템"
    },
    {
        id: 14,
        name: "김치냉장고",
        category: "주방가전",
        brand: "삼성",
        price: 900000,
        energyRating: "1등급",
        features: ["김치모드", "온도조절", "대용량"],
        emoji: "🥬",
        description: "김치 전용 최적 보관 냉장고"
    },
    {
        id: 15,
        name: "와인쿨러",
        category: "주방가전",
        brand: "하이얼",
        price: 550000,
        energyRating: "2등급",
        features: ["온도조절", "습도관리", "진동방지"],
        emoji: "🍷",
        description: "와인 최적 보관을 위한 전용 냉장고"
    },

    // 생활 가전 (16-30)
    {
        id: 16,
        name: "세탁기",
        category: "생활가전",
        brand: "LG",
        price: 850000,
        energyRating: "1등급",
        features: ["드럼세탁", "자동세제투입", "스마트진단"],
        emoji: "👕",
        description: "깨끗한 세탁을 위한 고효율 세탁기"
    },
    {
        id: 17,
        name: "건조기",
        category: "생활가전",
        brand: "삼성",
        price: 950000,
        energyRating: "2등급",
        features: ["히트펌프", "센서건조", "구김방지"],
        emoji: "🌪️",
        description: "빠르고 효율적인 의류 건조 시스템"
    },
    {
        id: 18,
        name: "청소기",
        category: "생활가전",
        brand: "다이슨",
        price: 480000,
        energyRating: "1등급",
        features: ["무선", "강력흡입", "다양한도구"],
        emoji: "🧹",
        description: "구석구석 깨끗하게 청소하는 무선 청소기"
    },
    {
        id: 19,
        name: "로봇청소기",
        category: "생활가전",
        brand: "룸바",
        price: 680000,
        energyRating: "1등급",
        features: ["자동청소", "매핑기능", "스마트폰연동"],
        emoji: "🤖",
        description: "스스로 청소하는 똑똑한 로봇"
    },
    {
        id: 20,
        name: "가습기",
        category: "생활가전",
        brand: "다이슨",
        price: 320000,
        energyRating: "1등급",
        features: ["초음파", "자동조절", "세균억제"],
        emoji: "💨",
        description: "쾌적한 실내 습도 조절 기기"
    },
    {
        id: 21,
        name: "제습기",
        category: "생활가전",
        brand: "LG",
        price: 380000,
        energyRating: "1등급",
        features: ["자동제습", "의류건조", "공기정화"],
        emoji: "💧",
        description: "습도 제거와 곰팡이 방지 전문기기"
    },
    {
        id: 22,
        name: "공기청정기",
        category: "생활가전",
        brand: "샤오미",
        price: 250000,
        energyRating: "1등급",
        features: ["미세먼지제거", "스마트센서", "조용한동작"],
        emoji: "🌬️",
        description: "깨끗한 공기를 만드는 필수 가전"
    },
    {
        id: 23,
        name: "다리미",
        category: "생활가전",
        brand: "필립스",
        price: 95000,
        energyRating: "2등급",
        features: ["스팀기능", "온도조절", "안전장치"],
        emoji: "👔",
        description: "구김없는 옷차림을 위한 필수 도구"
    },
    {
        id: 24,
        name: "스팀다리미",
        category: "생활가전",
        brand: "테팔",
        price: 180000,
        energyRating: "2등급",
        features: ["강력스팀", "수직스팀", "자동차단"],
        emoji: "♨️",
        description: "강력한 스팀으로 완벽한 다림질"
    },
    {
        id: 25,
        name: "선풍기",
        category: "생활가전",
        brand: "신일",
        price: 120000,
        energyRating: "1등급",
        features: ["DC모터", "리모컨", "타이머"],
        emoji: "🌀",
        description: "시원한 바람을 만드는 여름 필수품"
    },
    {
        id: 26,
        name: "전기난로",
        category: "생활가전",
        brand: "한일",
        price: 150000,
        energyRating: "3등급",
        features: ["온도조절", "타이머", "과열방지"],
        emoji: "🔥",
        description: "추운 겨울을 따뜻하게 해주는 난방기"
    },
    {
        id: 27,
        name: "전기장판",
        category: "생활가전",
        brand: "경동나비엔",
        price: 80000,
        energyRating: "2등급",
        features: ["온도조절", "타이머", "전자파차단"],
        emoji: "🛏️",
        description: "따뜻한 잠자리를 위한 겨울 필수품"
    },
    {
        id: 28,
        name: "전기요",
        category: "생활가전",
        brand: "동양매직",
        price: 60000,
        energyRating: "2등급",
        features: ["안전온도", "세탁가능", "자동차단"],
        emoji: "🔥",
        description: "개인용 휴대 가능한 전기 난방기구"
    },
    {
        id: 29,
        name: "전기담요",
        category: "생활가전",
        brand: "대한전기",
        price: 70000,
        energyRating: "2등급",
        features: ["온도단계", "타이머", "안전장치"],
        emoji: "🌡️",
        description: "포근하고 따뜻한 휴식을 위한 전기 담요"
    },
    {
        id: 30,
        name: "스팀청소기",
        category: "생활가전",
        brand: "카처",
        price: 220000,
        energyRating: "2등급",
        features: ["고온스팀", "세균제거", "화학세제불필요"],
        emoji: "♨️",
        description: "스팀의 힘으로 깨끗하게 청소하는 기기"
    },

    // 개인 관리 가전 (31-40)
    {
        id: 31,
        name: "헤어드라이어",
        category: "개인관리",
        brand: "다이슨",
        price: 480000,
        energyRating: "2등급",
        features: ["음이온", "온도조절", "강풍모드"],
        emoji: "💇",
        description: "건강한 머리카락을 위한 프리미엄 드라이어"
    },
    {
        id: 32,
        name: "전기면도기",
        category: "개인관리",
        brand: "필립스",
        price: 280000,
        energyRating: "1등급",
        features: ["회전식", "방수기능", "무선충전"],
        emoji: "🪒",
        description: "깔끔한 면도를 위한 전동 면도기"
    },
    {
        id: 33,
        name: "전동칫솔",
        category: "개인관리",
        brand: "오랄비",
        price: 150000,
        energyRating: "1등급",
        features: ["진동세정", "타이머", "교체브러시"],
        emoji: "🦷",
        description: "깨끗한 양치를 위한 전동 칫솔"
    },
    {
        id: 34,
        name: "고데기",
        category: "개인관리",
        brand: "바이올렛",
        price: 80000,
        energyRating: "2등급",
        features: ["온도조절", "세라믹코팅", "자동차단"],
        emoji: "💆",
        description: "아름다운 헤어스타일링을 위한 필수품"
    },
    {
        id: 35,
        name: "스팀기",
        category: "개인관리",
        brand: "판테인",
        price: 120000,
        energyRating: "2등급",
        features: ["스팀분사", "온도조절", "휴대용"],
        emoji: "♨️",
        description: "구김제거와 살균을 동시에 하는 스팀기"
    },
    {
        id: 36,
        name: "족욕기",
        category: "개인관리",
        brand: "휴롬",
        price: 180000,
        energyRating: "2등급",
        features: ["온수순환", "마사지", "타이머"],
        emoji: "🦶",
        description: "피로한 발을 시원하게 해주는 족욕 전용기"
    },
    {
        id: 37,
        name: "마사지기",
        category: "개인관리",
        brand: "오스팀",
        price: 350000,
        energyRating: "2등급",
        features: ["진동마사지", "열안마", "리모컨"],
        emoji: "💆",
        description: "집에서 즐기는 전문가 수준의 마사지"
    },
    {
        id: 38,
        name: "체중계",
        category: "개인관리",
        brand: "샤오미",
        price: 45000,
        energyRating: "1등급",
        features: ["체성분분석", "스마트폰연동", "다중사용자"],
        emoji: "⚖️",
        description: "정확한 체중과 체성분 측정 기기"
    },
    {
        id: 39,
        name: "혈압계",
        category: "개인관리",
        brand: "옴론",
        price: 95000,
        energyRating: "1등급",
        features: ["자동측정", "기록저장", "불규칙맥박감지"],
        emoji: "🩺",
        description: "건강 관리를 위한 가정용 혈압 측정기"
    },
    {
        id: 40,
        name: "체온계",
        category: "개인관리",
        brand: "브라운",
        price: 65000,
        energyRating: "1등급",
        features: ["적외선측정", "빠른측정", "기록저장"],
        emoji: "🌡️",
        description: "정확하고 빠른 체온 측정 도구"
    },

    // 엔터테인먼트 가전 (41-50)
    {
        id: 41,
        name: "스마트TV",
        category: "엔터테인먼트",
        brand: "삼성",
        price: 1800000,
        energyRating: "1등급",
        features: ["4K해상도", "스마트OS", "음성인식"],
        emoji: "📺",
        description: "최고 화질의 스마트 텔레비전"
    },
    {
        id: 42,
        name: "사운드바",
        category: "엔터테인먼트",
        brand: "소니",
        price: 380000,
        energyRating: "2등급",
        features: ["서라운드", "무선연결", "리모컨"],
        emoji: "🔊",
        description: "영화관 같은 웅장한 사운드 시스템"
    },
    {
        id: 43,
        name: "게임콘솔",
        category: "엔터테인먼트",
        brand: "소니",
        price: 650000,
        energyRating: "2등급",
        features: ["4K게임", "온라인연결", "VR지원"],
        emoji: "🎮",
        description: "최신 게임을 즐길 수 있는 게임기"
    },
    {
        id: 44,
        name: "프로젝터",
        category: "엔터테인먼트",
        brand: "엡손",
        price: 850000,
        energyRating: "2등급",
        features: ["풀HD", "무선연결", "휴대용"],
        emoji: "📽️",
        description: "대화면으로 영상을 즐기는 프로젝터"
    },
    {
        id: 45,
        name: "블루투스스피커",
        category: "엔터테인먼트",
        brand: "JBL",
        price: 180000,
        energyRating: "1등급",
        features: ["방수기능", "고음질", "긴배터리"],
        emoji: "🎵",
        description: "어디서나 즐기는 무선 음악 스피커"
    },
    {
        id: 46,
        name: "헤드폰",
        category: "엔터테인먼트",
        brand: "소니",
        price: 320000,
        energyRating: "1등급",
        features: ["노이즈캔슬링", "무선연결", "고음질"],
        emoji: "🎧",
        description: "몰입감 높은 개인 음향 기기"
    },
    {
        id: 47,
        name: "웹캠",
        category: "엔터테인먼트",
        brand: "로지텍",
        price: 120000,
        energyRating: "1등급",
        features: ["4K녹화", "자동초점", "마이크내장"],
        emoji: "📹",
        description: "화상통화와 방송용 고화질 카메라"
    },
    {
        id: 48,
        name: "전자액자",
        category: "엔터테인먼트",
        brand: "필립스",
        price: 280000,
        energyRating: "1등급",
        features: ["WiFi연결", "클라우드", "자동재생"],
        emoji: "🖼️",
        description: "디지털 사진을 전시하는 스마트 액자"
    },
    {
        id: 49,
        name: "전자책리더기",
        category: "엔터테인먼트",
        brand: "킨들",
        price: 180000,
        energyRating: "1등급",
        features: ["전자잉크", "백라이트", "방수"],
        emoji: "📖",
        description: "편안한 독서를 위한 전용 기기"
    },
    {
        id: 50,
        name: "태블릿",
        category: "엔터테인먼트",
        brand: "애플",
        price: 450000,
        energyRating: "1등급",
        features: ["터치스크린", "고성능", "펜슬지원"],
        emoji: "📱",
        description: "다양한 용도로 사용 가능한 태블릿 PC"
    }
];

// 가전제품 검색 함수들
const applianceUtils = {
    // 카테고리별 검색
    getByCategory: (category) => {
        return appliancesData.filter(item => item.category === category);
    },

    // 브랜드별 검색
    getByBrand: (brand) => {
        return appliancesData.filter(item => item.brand === brand);
    },

    // 가격 범위별 검색
    getByPriceRange: (minPrice, maxPrice) => {
        return appliancesData.filter(item => 
            item.price >= minPrice && item.price <= maxPrice
        );
    },

    // 에너지 등급별 검색
    getByEnergyRating: (rating) => {
        return appliancesData.filter(item => item.energyRating === rating);
    },

    // 랜덤 가전제품 선택
    getRandomAppliances: (count = 5) => {
        const shuffled = [...appliancesData].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // 가전제품 ID로 검색
    getById: (id) => {
        return appliancesData.find(item => item.id === id);
    },

    // 이름으로 검색
    getByName: (name) => {
        return appliancesData.filter(item => 
            item.name.includes(name) || item.description.includes(name)
        );
    },

    // 모든 카테고리 목록
    getAllCategories: () => {
        return [...new Set(appliancesData.map(item => item.category))];
    },

    // 모든 브랜드 목록
    getAllBrands: () => {
        return [...new Set(appliancesData.map(item => item.brand))];
    },

    // 통계 정보
    getStatistics: () => {
        return {
            totalCount: appliancesData.length,
            averagePrice: Math.round(appliancesData.reduce((sum, item) => sum + item.price, 0) / appliancesData.length),
            categoryCount: applianceUtils.getAllCategories().length,
            brandCount: applianceUtils.getAllBrands().length,
            priceRange: {
                min: Math.min(...appliancesData.map(item => item.price)),
                max: Math.max(...appliancesData.map(item => item.price))
            }
        };
    }
};

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.appliancesData = appliancesData;
    window.applianceUtils = applianceUtils;
}