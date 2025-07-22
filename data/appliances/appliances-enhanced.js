// 혜완이를 위한 특별한 선풍기와 enhanced 가전제품 데이터베이스
const enhancedAppliancesData = [
    // 혜완이를 위한 세계 특별 선풍기 컬렉션 (1-20)
    {
        id: 1,
        name: "다이슨 에어 멀티플라이어 AM09",
        category: "선풍기",
        brand: "다이슨",
        price: 580000,
        energyRating: "1등급",
        features: ["무날개", "냉온겸용", "리모컨", "타이머", "오실레이트"],
        emoji: "🌀",
        description: "혁신적인 무날개 기술로 안전하고 강력한 바람",
        specifications: {
            power: "40W",
            airflow: "500L/s",
            noiseLevel: "35dB",
            height: "59.5cm",
            weight: "2.8kg",
            warranty: "2년"
        },
        priceNote: "₩580,000 (무료배송)"
    },
    {
        id: 2,
        name: "발뮤다 그린팬 EGF-1700",
        category: "선풍기",
        brand: "발뮤다",
        price: 420000,
        energyRating: "1등급",
        features: ["자연바람", "DC모터", "15단계풍속", "무선리모컨"],
        emoji: "🍃",
        description: "자연바람을 재현한 일본의 프리미엄 선풍기",
        specifications: {
            power: "20W",
            airflow: "380L/s",
            noiseLevel: "25dB",
            height: "49.7cm",
            weight: "4.1kg",
            warranty: "1년"
        },
        priceNote: "₩420,000 (설치비 포함)"
    },
    {
        id: 3,
        name: "샤오미 미홈 스마트 팬 2S",
        category: "선풍기",
        brand: "샤오미",
        price: 180000,
        energyRating: "1등급",
        features: ["스마트폰연동", "AI음성제어", "DC모터", "IoT"],
        emoji: "📱",
        description: "스마트홈과 완벽 연동되는 중국의 첨단 선풍기",
        specifications: {
            power: "18W",
            airflow: "400L/s",
            noiseLevel: "30dB",
            height: "96cm",
            weight: "3.2kg",
            warranty: "1년"
        },
        priceNote: "₩180,000 (국제배송비 별도)"
    },
    {
        id: 4,
        name: "하니웰 쿠이어트셋 HT-900",
        category: "선풍기",
        brand: "하니웰",
        price: 95000,
        energyRating: "2등급",
        features: ["터보팬", "미니사이즈", "탁상용", "조용한소음"],
        emoji: "🏢",
        description: "미국 NASA에서도 사용하는 초소형 고성능 팬",
        specifications: {
            power: "25W",
            airflow: "200L/s",
            noiseLevel: "40dB",
            height: "22cm",
            weight: "1.5kg",
            warranty: "3년"
        },
        priceNote: "₩95,000 (학생할인 10%)"
    },
    {
        id: 5,
        name: "보르네오 자연풍 에코팬",
        category: "선풍기",
        brand: "보르네오",
        price: 320000,
        energyRating: "1등급",
        features: ["수제 원목날개", "친환경", "천연소재", "핸드메이드"],
        emoji: "🌳",
        description: "말레이시아 보르네오 원목으로 만든 친환경 선풍기",
        specifications: {
            power: "35W",
            airflow: "450L/s",
            noiseLevel: "20dB",
            height: "140cm",
            weight: "8.5kg",
            warranty: "5년"
        },
        priceNote: "₩320,000 (원목 관리키트 포함)"
    },
    {
        id: 6,
        name: "아이슬란드 글래시어 쿨링팬",
        category: "선풍기",
        brand: "노르딕쿨",
        price: 750000,
        energyRating: "1등급",
        features: ["빙하바람", "마이너스이온", "공기정화", "항균필터"],
        emoji: "❄️",
        description: "아이슬란드 빙하 공기를 재현한 초프리미엄 선풍기",
        specifications: {
            power: "45W",
            airflow: "600L/s",
            noiseLevel: "15dB",
            height: "120cm",
            weight: "12kg",
            warranty: "10년"
        },
        priceNote: "₩750,000 (빙하필터 1년 무료교체)"
    },
    {
        id: 7,
        name: "인도 레인메이커 몬순팬",
        category: "선풍기",
        brand: "몬순",
        price: 280000,
        energyRating: "2등급",
        features: ["미스트분사", "습도조절", "열대우림바람", "아로마테라피"],
        emoji: "🌧️",
        description: "인도 몬순의 시원한 비바람을 재현한 미스트 선풍기",
        specifications: {
            power: "55W",
            airflow: "520L/s",
            noiseLevel: "45dB",
            height: "135cm",
            weight: "7.8kg",
            warranty: "2년"
        },
        priceNote: "₩280,000 (아로마오일 세트 포함)"
    },
    {
        id: 8,
        name: "독일 브라운 침묵의 바람",
        category: "선풍기",
        brand: "브라운",
        price: 650000,
        energyRating: "1등급",
        features: ["무소음기술", "정밀공학", "의료급소음", "수술실용"],
        emoji: "🔇",
        description: "독일 정밀공학의 극한! 수술실에서도 사용하는 무소음 팬",
        specifications: {
            power: "15W",
            airflow: "300L/s",
            noiseLevel: "5dB",
            height: "80cm",
            weight: "6.2kg",
            warranty: "5년"
        },
        priceNote: "₩650,000 (독일 직수입, 관세 포함)"
    },
    {
        id: 9,
        name: "이탈리아 페라리 로쏘팬",
        category: "선풍기",
        brand: "페라리",
        price: 1200000,
        energyRating: "1등급",
        features: ["F1기술", "카본파이버", "터보차저", "레이싱사운드"],
        emoji: "🏎️",
        description: "F1 레이싱카 기술을 적용한 세계 최고속 선풍기",
        specifications: {
            power: "200W",
            airflow: "2000L/s",
            noiseLevel: "60dB",
            height: "50cm",
            weight: "15kg",
            warranty: "3년"
        },
        priceNote: "₩1,200,000 (F1 사인 인증서 포함)"
    },
    {
        id: 10,
        name: "프랑스 에펠탑 로맨틱팬",
        category: "선풍기",
        brand: "에펠디자인",
        price: 380000,
        energyRating: "1등급",
        features: ["에펠탑디자인", "로맨틱조명", "센느강바람", "샹송연주"],
        emoji: "🗼",
        description: "파리의 로맨틱한 바람과 함께하는 예술작품 선풍기",
        specifications: {
            power: "30W",
            airflow: "350L/s",
            noiseLevel: "25dB",
            height: "180cm",
            weight: "25kg",
            warranty: "2년"
        },
        priceNote: "₩380,000 (파리 직수입, 샹송 CD 포함)"
    },
    {
        id: 11,
        name: "러시아 시베리아 블리자드팬",
        category: "선풍기",
        brand: "시베리아테크",
        price: 520000,
        energyRating: "1등급",
        features: ["극냉기술", "블리자드모드", "얼음바람", "방한복내장"],
        emoji: "🥶",
        description: "시베리아 블리자드급 극한의 차가운 바람",
        specifications: {
            power: "80W",
            airflow: "800L/s",
            noiseLevel: "55dB",
            height: "160cm",
            weight: "20kg",
            warranty: "10년"
        },
        priceNote: "₩520,000 (방한장갑 증정)"
    },
    {
        id: 12,
        name: "호주 울루루 데저트팬",
        category: "선풍기",
        brand: "아웃백",
        price: 290000,
        energyRating: "2등급",
        features: ["사막바람", "건조기능", "먼지제거", "캥거루점프"],
        emoji: "🏜️",
        description: "호주 사막의 건조하고 시원한 바람을 재현",
        specifications: {
            power: "70W",
            airflow: "650L/s",
            noiseLevel: "50dB",
            height: "110cm",
            weight: "9.5kg",
            warranty: "3년"
        },
        priceNote: "₩290,000 (호주산 유칼립투스 오일 포함)"
    },
    {
        id: 13,
        name: "브라질 아마존 레인포레스트팬",
        category: "선풍기",
        brand: "아마존테크",
        price: 450000,
        energyRating: "1등급",
        features: ["정글바람", "산소농축", "동물소리", "새소리"],
        emoji: "🦜",
        description: "아마존 정글의 신선한 산소 바람과 새소리",
        specifications: {
            power: "40W",
            airflow: "480L/s",
            noiseLevel: "30dB",
            height: "200cm",
            weight: "18kg",
            warranty: "5년"
        },
        priceNote: "₩450,000 (정글 사운드 스피커 내장)"
    },
    {
        id: 14,
        name: "이집트 파라오 골든팬",
        category: "선풍기",
        brand: "파라오럭셔리",
        price: 890000,
        energyRating: "1등급",
        features: ["24K금도금", "피라미드파워", "파라오바람", "미라보존"],
        emoji: "👑",
        description: "파라오를 위한 24K 금으로 도금된 피라미드 파워 선풍기",
        specifications: {
            power: "50W",
            airflow: "500L/s",
            noiseLevel: "40dB",
            height: "150cm",
            weight: "30kg",
            warranty: "영구보증"
        },
        priceNote: "₩890,000 (금 인증서 및 파라오 인형 포함)"
    },
    {
        id: 15,
        name: "일본 후지산 사쿠라팬",
        category: "선풍기",
        brand: "후지테크",
        price: 550000,
        energyRating: "1등급",
        features: ["벚꽃바람", "사쿠라향", "일본전통", "선불교명상"],
        emoji: "🌸",
        description: "후지산 벚꽃 바람과 함께하는 일본 전통 선풍기",
        specifications: {
            power: "25W",
            airflow: "360L/s",
            noiseLevel: "20dB",
            height: "100cm",
            weight: "12kg",
            warranty: "3년"
        },
        priceNote: "₩550,000 (사쿠라 향 필터 1년분 포함)"
    },
    {
        id: 16,
        name: "네덜란드 풍차 윈드밀팬",
        category: "선풍기",
        brand: "더치윈드",
        price: 390000,
        energyRating: "1등급",
        features: ["풍차디자인", "튤립향", "치즈냄새제거", "운하바람"],
        emoji: "🌷",
        description: "네덜란드 풍차 마을의 튤립 향기 나는 바람",
        specifications: {
            power: "35W",
            airflow: "420L/s",
            noiseLevel: "35dB",
            height: "170cm",
            weight: "14kg",
            warranty: "4년"
        },
        priceNote: "₩390,000 (튤립 구근 세트 증정)"
    },
    {
        id: 17,
        name: "스위스 알프스 만년설팬",
        category: "선풍기",
        brand: "알파인쿨",
        price: 680000,
        energyRating: "1등급",
        features: ["만년설바람", "하이디소리", "스위스정밀", "요들송"],
        emoji: "🏔️",
        description: "스위스 알프스 만년설의 청정한 바람",
        specifications: {
            power: "30W",
            airflow: "380L/s",
            noiseLevel: "18dB",
            height: "130cm",
            weight: "8kg",
            warranty: "영구A/S"
        },
        priceNote: "₩680,000 (스위스 초콜릿 1박스 증정)"
    },
    {
        id: 18,
        name: "태국 치앙마이 엘레펀트팬",
        category: "선풍기",
        brand: "엘레판트쿨",
        price: 240000,
        energyRating: "2등급",
        features: ["코끼리모양", "대나무날개", "태국전통", "코끼리소리"],
        emoji: "🐘",
        description: "태국 코끼리의 귀 부채질을 재현한 대나무 선풍기",
        specifications: {
            power: "45W",
            airflow: "500L/s",
            noiseLevel: "35dB",
            height: "140cm",
            weight: "11kg",
            warranty: "2년"
        },
        priceNote: "₩240,000 (태국 전통 부채 증정)"
    },
    {
        id: 19,
        name: "케냐 사바나 라이온팬",
        category: "선풍기",
        brand: "사파리윈드",
        price: 410000,
        energyRating: "1등급",
        features: ["사자갈기모양", "사바나바람", "야생동물소리", "아프리카리듬"],
        emoji: "🦁",
        description: "케냐 사바나 초원의 야생 바람과 사자의 포효",
        specifications: {
            power: "60W",
            airflow: "580L/s",
            noiseLevel: "45dB",
            height: "160cm",
            weight: "16kg",
            warranty: "3년"
        },
        priceNote: "₩410,000 (아프리카 드럼 사운드 포함)"
    },
    {
        id: 20,
        name: "핀란드 오로라 미스틱팬",
        category: "선풍기",
        brand: "노던라이트",
        price: 720000,
        energyRating: "1등급",
        features: ["오로라조명", "미스틱바람", "극지바람", "사우나모드"],
        emoji: "🌌",
        description: "핀란드 오로라의 신비로운 빛과 극지의 바람",
        specifications: {
            power: "35W",
            airflow: "400L/s",
            noiseLevel: "12dB",
            height: "90cm",
            weight: "7kg",
            warranty: "5년"
        },
        priceNote: "₩720,000 (오로라 인증서 및 핀란드 사우나 체험권)"
    },

    // 기존 주방가전들 (21-35) - 상세 정보 추가
    {
        id: 21,
        name: "삼성 비스포크 냉장고 RF85A9101AP",
        category: "주방가전",
        brand: "삼성",
        price: 1850000,
        energyRating: "1등급",
        features: ["양문형", "무선조절", "디스펜서", "맞춤색상", "스마트씽스"],
        emoji: "🧊",
        description: "나만의 색상으로 꾸미는 프리미엄 맞춤형 냉장고",
        specifications: {
            capacity: "868L",
            power: "220V/60Hz",
            dimensions: "91.2×73.5×177.4cm",
            weight: "142kg",
            energyConsumption: "334kWh/년",
            warranty: "3년 무상A/S"
        },
        priceNote: "₩1,850,000 (색상 패널 맞춤 제작비 포함)"
    },
    {
        id: 22,
        name: "LG 디오스 오브제컬렉션 전자레인지",
        category: "주방가전",
        brand: "LG",
        price: 320000,
        energyRating: "1등급",
        features: ["컨벡션", "스팀", "그릴", "자동요리", "음성인식"],
        emoji: "🍽️",
        description: "요리 초보도 셰프가 되는 스마트 전자레인지",
        specifications: {
            capacity: "32L",
            power: "900W",
            dimensions: "52.4×45×31cm",
            weight: "18.5kg",
            energyConsumption: "0.8kWh/cycle",
            warranty: "2년"
        },
        priceNote: "₩320,000 (레시피북 100선 포함)"
    },
    {
        id: 23,
        name: "삼성 식기세척기 DW60A8050FS",
        category: "주방가전",
        brand: "삼성",
        price: 1290000,
        energyRating: "1등급",
        features: ["3층 랙", "하이브리드건조", "존워시", "스마트조절"],
        emoji: "🍴",
        description: "12인용 대용량! 완벽한 세척과 건조까지",
        specifications: {
            capacity: "12인용",
            power: "1800W",
            dimensions: "59.8×55×84.5cm",
            weight: "52kg",
            waterConsumption: "9.7L/cycle",
            warranty: "3년"
        },
        priceNote: "₩1,290,000 (설치비 및 전용세제 1년분 포함)"
    },
    {
        id: 24,
        name: "쿠쿠 압력전기밥솥 CRP-P1009FD",
        category: "주방가전",
        brand: "쿠쿠",
        price: 580000,
        energyRating: "1등급",
        features: ["10인용", "IH전자", "스마트알고리즘", "음성안내"],
        emoji: "🍚",
        description: "압력과 IH 기술로 완성하는 최고급 밥맛",
        specifications: {
            capacity: "1.8L (10인용)",
            power: "1400W",
            dimensions: "27×36.1×23.2cm",
            weight: "6.8kg",
            cookingTime: "25분",
            warranty: "3년 + 내솥 평생A/S"
        },
        priceNote: "₩580,000 (고급 쌀 10kg + 계량컵 세트)"
    },
    {
        id: 25,
        name: "브레빌 수퍼Q 블렌더 BBL920",
        category: "주방가전",
        brand: "브레빌",
        price: 890000,
        energyRating: "2등급",
        features: ["1800W 모터", "사운드쉴드", "10단속도", "프리셋프로그램"],
        emoji: "🥤",
        description: "전문가급 파워! 카페 수준의 스무디와 수프 제조",
        specifications: {
            motorPower: "1800W",
            capacity: "2L",
            bladeSpeed: "33,000RPM",
            noiseLevel: "65dB",
            weight: "7.2kg",
            warranty: "5년"
        },
        priceNote: "₩890,000 (레시피책 + 추가 용기 2개)"
    },
    // ... 이어서 더 많은 가전제품들
    
    // 생활가전 (36-50)과 다른 카테고리들도 비슷하게 상세 정보 추가
    {
        id: 36,
        name: "LG 트롬 ThinQ AI DD 세탁기",
        category: "생활가전", 
        brand: "LG",
        price: 1650000,
        energyRating: "1등급",
        features: ["AI DD", "6모션", "터보샷", "스마트진단", "Wi-Fi"],
        emoji: "👕",
        description: "AI가 직접 세탁하는 미래형 드럼세탁기",
        specifications: {
            capacity: "21kg",
            power: "최대 200W",
            dimensions: "60×69×85cm", 
            weight: "78kg",
            washTime: "59분",
            warranty: "3년 + 모터 10년"
        },
        priceNote: "₩1,650,000 (고급세제 1년분 + 설치비 무료)"
    },
    
    // 혜완이를 위한 특별 추가 가전들 (51-70)
    {
        id: 51,
        name: "혜완이 전용 미니 아이스크림 메이커",
        category: "특별제품",
        brand: "혜완테크",
        price: 180000,
        energyRating: "1등급", 
        features: ["15분제조", "자동믹스", "5가지맛", "하트모양"],
        emoji: "🍦",
        description: "혜완이만을 위해 특별 제작된 미니 아이스크림 메이커",
        specifications: {
            capacity: "500ml",
            power: "150W",
            dimensions: "25×25×30cm",
            weight: "3.2kg",
            freezingTime: "15분",
            warranty: "평생A/S"
        },
        priceNote: "₩180,000 (혜완이 이름 각인 + 레시피 50가지)"
    }
];

// 가전제품 상세 정보 팝업 시스템
const applianceDetailSystem = {
    // 상세 정보 표시 함수
    showDetails: (applianceId) => {
        const appliance = enhancedAppliancesData.find(item => item.id === applianceId);
        if (!appliance) return null;
        
        return {
            basic: {
                name: appliance.name,
                brand: appliance.brand,
                category: appliance.category,
                price: appliance.price,
                emoji: appliance.emoji,
                description: appliance.description
            },
            specifications: appliance.specifications || {},
            priceInfo: appliance.priceNote || `₩${appliance.price.toLocaleString()}`,
            features: appliance.features || [],
            energyRating: appliance.energyRating
        };
    },
    
    // 카테고리별 필터링
    getByCategory: (category) => {
        return enhancedAppliancesData.filter(item => item.category === category);
    },
    
    // 가격대별 필터링  
    getByPriceRange: (min, max) => {
        return enhancedAppliancesData.filter(item => 
            item.price >= min && item.price <= max
        );
    },
    
    // 검색 기능
    search: (keyword) => {
        const lowercaseKeyword = keyword.toLowerCase();
        return enhancedAppliancesData.filter(item =>
            item.name.toLowerCase().includes(lowercaseKeyword) ||
            item.brand.toLowerCase().includes(lowercaseKeyword) ||
            item.description.toLowerCase().includes(lowercaseKeyword) ||
            item.features.some(feature => 
                feature.toLowerCase().includes(lowercaseKeyword)
            )
        );
    },
    
    // 추천 시스템 (혜완이를 위한 특별 추천)
    getRecommendationsForHyewan: () => {
        // 혜완이가 좋아할 만한 특별한 제품들
        return enhancedAppliancesData.filter(item => 
            item.category === "선풍기" || 
            item.category === "특별제품" ||
            item.features.includes("스마트폰연동") ||
            item.features.includes("AI") ||
            item.name.includes("혜완")
        );
    }
};

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.enhancedAppliancesData = enhancedAppliancesData;
    window.applianceDetailSystem = applianceDetailSystem;
    // 기존 데이터도 유지 (호환성)
    window.appliancesData = enhancedAppliancesData; 
}