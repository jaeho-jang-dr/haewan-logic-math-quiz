// 혜완이를 위한 전 세계 특별한 선풍기 컬렉션
window.fansDatabase = [
    // === 빈티지 클래식 선풍기 ===
    {
        id: 'fan_001',
        name: 'GE Vortalex 12인치 오실레이팅',
        brand: 'General Electric',
        category: '선풍기',
        subcategory: '빈티지 탁상형',
        emoji: '🌀',
        icon: '🏛️',
        releaseYear: 1948,
        countryOfOrigin: '미국',
        description: '아르데코 디자인의 걸작. 황동 날개와 크롬 도금 몸체',
        specialFeature: '원형 황동 케이지, 12인치 알루미늄 4엽 날개',
        electricalSpecs: {
            voltage: '110V',
            wattage: '75W',
            speed: '3단계',
            rpm: '1200 RPM'
        },
        blades: {
            count: 4,
            material: '알루미늄',
            diameter: '12인치'
        },
        switchType: '로터리 다이얼 스위치',
        oscillation: true,
        monetaryValue: 850000,
        rarity: 4,
        educationalValue: 9,
        popularity: 8
    },
    {
        id: 'fan_002',
        name: 'Westinghouse Whirlwind',
        brand: 'Westinghouse',
        category: '선풍기',
        subcategory: '빈티지 스탠드형',
        emoji: '💨',
        icon: '🎭',
        releaseYear: 1935,
        countryOfOrigin: '미국',
        description: '아트데코 시대의 상징적인 선풍기. 유선형 디자인',
        specialFeature: '크롬 도금 스탠드, 틸트 조절 가능',
        electricalSpecs: {
            voltage: '120V',
            wattage: '100W',
            speed: '4단계',
            rpm: '1400 RPM'
        },
        blades: {
            count: 6,
            material: '스틸',
            diameter: '16인치'
        },
        switchType: '푸시 버튼 4단계',
        oscillation: true,
        monetaryValue: 1200000,
        rarity: 5,
        educationalValue: 10,
        popularity: 9
    },
    {
        id: 'fan_003',
        name: 'Emerson Silver Swan',
        brand: 'Emerson Electric',
        category: '선풍기',
        subcategory: '빈티지 탁상형',
        emoji: '🦢',
        icon: '✨',
        releaseYear: 1952,
        countryOfOrigin: '미국',
        description: '우아한 백조 목 디자인의 오실레이팅 선풍기',
        specialFeature: '360도 회전 가능한 헤드, 크롬 마감',
        electricalSpecs: {
            voltage: '115V',
            wattage: '65W',
            speed: '3단계',
            rpm: '1100 RPM'
        },
        blades: {
            count: 4,
            material: '알루미늄 합금',
            diameter: '10인치'
        },
        switchType: '슬라이드 스위치',
        oscillation: true,
        monetaryValue: 950000,
        rarity: 4,
        educationalValue: 8,
        popularity: 9
    },

    // === 일본 프리미엄 선풍기 ===
    {
        id: 'fan_004',
        name: 'Balmuda GreenFan',
        brand: 'Balmuda',
        category: '선풍기',
        subcategory: '프리미엄 DC모터',
        emoji: '🍃',
        icon: '🎌',
        releaseYear: 2010,
        countryOfOrigin: '일본',
        description: '자연바람을 재현한 혁신적인 이중 날개 구조',
        specialFeature: '독특한 이중 날개로 자연스러운 바람 생성',
        electricalSpecs: {
            voltage: '100-240V',
            wattage: '20W (최대)',
            speed: '4단계',
            rpm: '800 RPM'
        },
        blades: {
            count: '14 (내부 9개 + 외부 5개)',
            material: 'ABS 플라스틱',
            diameter: '30cm'
        },
        switchType: '터치 컨트롤 + 리모컨',
        oscillation: true,
        monetaryValue: 450000,
        rarity: 3,
        educationalValue: 10,
        popularity: 10
    },
    {
        id: 'fan_005',
        name: 'Panasonic F-CWP3000',
        brand: 'Panasonic',
        category: '선풍기',
        subcategory: '프리미엄 DC모터',
        emoji: '🌸',
        icon: '🗾',
        releaseYear: 2021,
        countryOfOrigin: '일본',
        description: '나노이X 기술 탑재, 7엽 날개의 고급 선풍기',
        specialFeature: '나노이X로 공기 정화 기능',
        electricalSpecs: {
            voltage: '100V',
            wattage: '22W',
            speed: '8단계',
            rpm: '1350 RPM'
        },
        blades: {
            count: 7,
            material: '항균 처리 플라스틱',
            diameter: '35cm'
        },
        switchType: 'LED 터치 패널 + 음성 제어',
        oscillation: true,
        monetaryValue: 680000,
        rarity: 3,
        educationalValue: 9,
        popularity: 8
    },
    {
        id: 'fan_006',
        name: 'Mitsubishi R30J-RV',
        brand: 'Mitsubishi Electric',
        category: '선풍기',
        subcategory: '리빙 선풍기',
        emoji: '🎐',
        icon: '⛩️',
        releaseYear: 2020,
        countryOfOrigin: '일본',
        description: '조용한 작동과 강력한 바람의 조화',
        specialFeature: '3D 입체 회전, 초저소음 설계',
        electricalSpecs: {
            voltage: '100V',
            wattage: '30W',
            speed: '5단계',
            rpm: '1200 RPM'
        },
        blades: {
            count: 5,
            material: 'PP 수지',
            diameter: '30cm'
        },
        switchType: '다이얼 + 리모컨',
        oscillation: '3D 입체 회전',
        monetaryValue: 320000,
        rarity: 2,
        educationalValue: 7,
        popularity: 7
    },

    // === 다이슨 혁신 선풍기 ===
    {
        id: 'fan_007',
        name: 'Dyson AM09 Hot+Cool',
        brand: 'Dyson',
        category: '선풍기',
        subcategory: '날개 없는 선풍기',
        emoji: '🔮',
        icon: '🇬🇧',
        releaseYear: 2014,
        countryOfOrigin: '영국',
        description: '날개 없는 혁신적인 에어 멀티플라이어 기술',
        specialFeature: '냉온풍 겸용, 제트 포커스 기술',
        electricalSpecs: {
            voltage: '220-240V',
            wattage: '2000W (히터), 40W (팬)',
            speed: '10단계',
            airflow: '500L/s'
        },
        blades: {
            count: 0,
            material: '날개 없음',
            technology: 'Air Multiplier™'
        },
        switchType: '자석 부착 리모컨',
        oscillation: true,
        monetaryValue: 580000,
        rarity: 3,
        educationalValue: 10,
        popularity: 9
    },
    {
        id: 'fan_008',
        name: 'Dyson Pure Cool TP04',
        brand: 'Dyson',
        category: '선풍기',
        subcategory: '공기청정 선풍기',
        emoji: '💠',
        icon: '🌬️',
        releaseYear: 2018,
        countryOfOrigin: '영국',
        description: 'HEPA 필터 탑재 공기청정 기능 일체형',
        specialFeature: '실시간 공기질 모니터링 LCD',
        electricalSpecs: {
            voltage: '220-240V',
            wattage: '40W',
            speed: '10단계',
            airflow: '290L/s'
        },
        blades: {
            count: 0,
            material: '날개 없음',
            technology: 'Air Multiplier™ + HEPA'
        },
        switchType: 'WiFi 앱 제어 + 리모컨',
        oscillation: '350도 회전',
        monetaryValue: 890000,
        rarity: 3,
        educationalValue: 10,
        popularity: 10
    },

    // === 한국 프리미엄 선풍기 ===
    {
        id: 'fan_009',
        name: '신일 SIF-35EWSK 에어서큘레이터',
        brand: '신일전자',
        category: '선풍기',
        subcategory: '서큘레이터',
        emoji: '🌪️',
        icon: '🇰🇷',
        releaseYear: 2022,
        countryOfOrigin: '한국',
        description: 'BLDC 모터 탑재 초절전 서큘레이터',
        specialFeature: '35단계 초미세 풍량 조절',
        electricalSpecs: {
            voltage: '220V',
            wattage: '25W',
            speed: '35단계',
            rpm: '2000 RPM'
        },
        blades: {
            count: 5,
            material: 'PP 플라스틱',
            diameter: '20cm'
        },
        switchType: 'LED 터치 + 리모컨',
        oscillation: '상하좌우 3D',
        monetaryValue: 180000,
        rarity: 2,
        educationalValue: 7,
        popularity: 8
    },
    {
        id: 'fan_010',
        name: '한일 EF-1250R 리모컨선풍기',
        brand: '한일전기',
        category: '선풍기',
        subcategory: '스탠드형',
        emoji: '🎯',
        icon: '🏆',
        releaseYear: 2023,
        countryOfOrigin: '한국',
        description: '12엽 날개로 부드러운 자연풍 구현',
        specialFeature: '초미풍 모드, 수면풍 기능',
        electricalSpecs: {
            voltage: '220V',
            wattage: '45W',
            speed: '12단계',
            rpm: '1100 RPM'
        },
        blades: {
            count: 12,
            material: 'AS 수지',
            diameter: '35cm'
        },
        switchType: 'LED 디스플레이 + 리모컨',
        oscillation: true,
        monetaryValue: 120000,
        rarity: 1,
        educationalValue: 6,
        popularity: 7
    },

    // === 독일 공업용 선풍기 ===
    {
        id: 'fan_011',
        name: 'Vornado 660 에어서큘레이터',
        brand: 'Vornado',
        category: '선풍기',
        subcategory: '서큘레이터',
        emoji: '🌀',
        icon: '🇩🇪',
        releaseYear: 2015,
        countryOfOrigin: '미국(독일 기술)',
        description: '보텍스 기술로 30m까지 공기 순환',
        specialFeature: '특허받은 보텍스 액션 기술',
        electricalSpecs: {
            voltage: '120V',
            wattage: '90W',
            speed: '4단계',
            airflow: '최대 30m 도달'
        },
        blades: {
            count: 3,
            material: '강화 플라스틱',
            diameter: '29cm',
            design: '깊은 피치 프로펠러'
        },
        switchType: '푸시 버튼 컨트롤',
        oscillation: false,
        monetaryValue: 250000,
        rarity: 2,
        educationalValue: 9,
        popularity: 8
    },
    {
        id: 'fan_012',
        name: 'Stadler Form Q 스위스 디자인',
        brand: 'Stadler Form',
        category: '선풍기',
        subcategory: '디자인 선풍기',
        emoji: '🎨',
        icon: '🇨🇭',
        releaseYear: 2019,
        countryOfOrigin: '스위스',
        description: '미니멀리즘 큐브 디자인의 혁신',
        specialFeature: '360도 회전 큐브 디자인',
        electricalSpecs: {
            voltage: '220-240V',
            wattage: '45W',
            speed: '3단계',
            rpm: '1800 RPM'
        },
        blades: {
            count: 5,
            material: '알루미늄',
            diameter: '40cm',
            hidden: true
        },
        switchType: '터치 센서',
        oscillation: '360도',
        monetaryValue: 380000,
        rarity: 3,
        educationalValue: 8,
        popularity: 7
    },

    // === 산업용 대형 선풍기 ===
    {
        id: 'fan_013',
        name: 'Big Ass Fans Haiku',
        brand: 'Big Ass Fans',
        category: '선풍기',
        subcategory: '천장형 대형',
        emoji: '🏭',
        icon: '💪',
        releaseYear: 2012,
        countryOfOrigin: '미국',
        description: '세계에서 가장 효율적인 천장 선풍기',
        specialFeature: '특허 에어포일 날개, IoT 통합',
        electricalSpecs: {
            voltage: '100-240V',
            wattage: '30W',
            speed: '7단계',
            coverage: '232㎡'
        },
        blades: {
            count: 3,
            material: '항공기급 알루미늄',
            diameter: '152cm',
            airfoil: true
        },
        switchType: 'WiFi 앱 + 음성 제어',
        oscillation: false,
        monetaryValue: 2500000,
        rarity: 4,
        educationalValue: 10,
        popularity: 9
    },
    {
        id: 'fan_014',
        name: 'Hunter Original 52인치',
        brand: 'Hunter Fan Company',
        category: '선풍기',
        subcategory: '천장형 클래식',
        emoji: '🏛️',
        icon: '⚙️',
        releaseYear: 1886,
        countryOfOrigin: '미국',
        description: '130년 전통의 오리지널 천장 선풍기',
        specialFeature: '평생 보증, 오일 배스 윤활 시스템',
        electricalSpecs: {
            voltage: '120V',
            wattage: '75W',
            speed: '3단계',
            rpm: '200 RPM'
        },
        blades: {
            count: 5,
            material: '천연 목재',
            diameter: '132cm',
            reversible: true
        },
        switchType: '풀 체인 + 벽면 스위치',
        oscillation: false,
        monetaryValue: 680000,
        rarity: 3,
        educationalValue: 9,
        popularity: 8
    },

    // === 특수 목적 선풍기 ===
    {
        id: 'fan_015',
        name: 'O2COOL 10인치 배터리 선풍기',
        brand: 'O2COOL',
        category: '선풍기',
        subcategory: '휴대용',
        emoji: '🔋',
        icon: '🏕️',
        releaseYear: 2020,
        countryOfOrigin: '미국',
        description: '캠핑과 아웃도어를 위한 충전식 선풍기',
        specialFeature: 'D셀 배터리 8개 또는 AC/DC 어댑터',
        electricalSpecs: {
            voltage: '12V DC / 120V AC',
            wattage: '7.5W',
            speed: '2단계',
            runtime: '72시간 (저속)'
        },
        blades: {
            count: 5,
            material: 'PP 플라스틱',
            diameter: '25cm'
        },
        switchType: '슬라이드 2단계',
        oscillation: false,
        monetaryValue: 65000,
        rarity: 1,
        educationalValue: 6,
        popularity: 8
    },
    {
        id: 'fan_016',
        name: 'Lasko 4924 하이벨로시티',
        brand: 'Lasko',
        category: '선풍기',
        subcategory: '고속 블로워',
        emoji: '💨',
        icon: '🌪️',
        releaseYear: 2018,
        countryOfOrigin: '미국',
        description: '산업 현장용 초고속 블로워 팬',
        specialFeature: '피벗 기능, 3개 속도 설정',
        electricalSpecs: {
            voltage: '120V',
            wattage: '110W',
            speed: '3단계',
            cfm: '3460 CFM'
        },
        blades: {
            count: 3,
            material: '강철',
            diameter: '50cm',
            enclosed: true
        },
        switchType: '로터리 스위치',
        oscillation: false,
        monetaryValue: 180000,
        rarity: 2,
        educationalValue: 7,
        popularity: 6
    },

    // === 아시아 특수 선풍기 ===
    {
        id: 'fan_017',
        name: 'Xiaomi Mi Smart Standing Fan 2',
        brand: 'Xiaomi',
        category: '선풍기',
        subcategory: '스마트 선풍기',
        emoji: '📱',
        icon: '🇨🇳',
        releaseYear: 2021,
        countryOfOrigin: '중국',
        description: 'IoT 스마트홈 연동 AI 선풍기',
        specialFeature: 'Mi Home 앱 연동, AI 음성 제어',
        electricalSpecs: {
            voltage: '220V',
            wattage: '25W',
            speed: '100단계',
            noise: '26.6dB'
        },
        blades: {
            count: 7,
            material: '항균 ABS',
            diameter: '33cm',
            doubleLayer: true
        },
        switchType: 'WiFi + 블루투스 + 음성',
        oscillation: '140도',
        monetaryValue: 95000,
        rarity: 2,
        educationalValue: 8,
        popularity: 9
    },
    {
        id: 'fan_018',
        name: 'Usha Maxx Air 400mm',
        brand: 'Usha',
        category: '선풍기',
        subcategory: '테이블 팬',
        emoji: '🪷',
        icon: '🇮🇳',
        releaseYear: 2022,
        countryOfOrigin: '인도',
        description: '열대 기후 최적화 고풍량 선풍기',
        specialFeature: '에어로다이나믹 날개, 구리 모터',
        electricalSpecs: {
            voltage: '230V',
            wattage: '55W',
            speed: '3단계',
            rpm: '1280 RPM'
        },
        blades: {
            count: 3,
            material: 'ABS 플라스틱',
            diameter: '40cm',
            aerodynamic: true
        },
        switchType: '피아노 키 타입',
        oscillation: true,
        monetaryValue: 45000,
        rarity: 1,
        educationalValue: 6,
        popularity: 7
    },

    // === 레트로 & 컬렉터 에디션 ===
    {
        id: 'fan_019',
        name: 'Fanimation Brewmaster',
        brand: 'Fanimation',
        category: '선풍기',
        subcategory: '테마 천장형',
        emoji: '🍺',
        icon: '🏺',
        releaseYear: 2016,
        countryOfOrigin: '미국',
        description: '맥주통 모양의 유니크한 천장 선풍기',
        specialFeature: '실제 맥주통 디자인, LED 조명 내장',
        electricalSpecs: {
            voltage: '120V',
            wattage: '70W',
            speed: '6단계',
            rpm: '180 RPM'
        },
        blades: {
            count: 3,
            material: '합성 목재',
            diameter: '132cm',
            style: '맥주통 날개'
        },
        switchType: '벽면 컨트롤 + 리모컨',
        oscillation: false,
        monetaryValue: 780000,
        rarity: 4,
        educationalValue: 7,
        popularity: 9
    },
    {
        id: 'fan_020',
        name: 'Matthews Atlas Irene-3H',
        brand: 'Matthews Fan Company',
        category: '선풍기',
        subcategory: '럭셔리 천장형',
        emoji: '💎',
        icon: '✨',
        releaseYear: 2019,
        countryOfOrigin: '미국',
        description: '목재 날개의 미니멀 럭셔리 디자인',
        specialFeature: '수제 월넛 날개, 초저소음 DC 모터',
        electricalSpecs: {
            voltage: '120-240V',
            wattage: '31W',
            speed: '6단계',
            rpm: '110-210 RPM'
        },
        blades: {
            count: 3,
            material: '천연 월넛',
            diameter: '152cm',
            handCrafted: true
        },
        switchType: '벽면 스마트 컨트롤',
        oscillation: false,
        monetaryValue: 1850000,
        rarity: 5,
        educationalValue: 8,
        popularity: 8
    },

    // === 미래형 컨셉 선풍기 ===
    {
        id: 'fan_021',
        name: 'Exhale Bladeless Ceiling Fan',
        brand: 'Exhale Fans',
        category: '선풍기',
        subcategory: '날개없는 천장형',
        emoji: '🛸',
        icon: '🔄',
        releaseYear: 2012,
        countryOfOrigin: '미국',
        description: '360도 전방향 기류를 만드는 혁신적 디자인',
        specialFeature: '보텍스 기류, 날개 없는 천장 선풍기',
        electricalSpecs: {
            voltage: '120-240V',
            wattage: '50W',
            speed: '6단계',
            coverage: '150㎡'
        },
        blades: {
            count: 0,
            material: '없음',
            technology: 'Vortex 360°'
        },
        switchType: 'RF 리모컨 + 앱',
        oscillation: '360도 전방향',
        monetaryValue: 1200000,
        rarity: 4,
        educationalValue: 10,
        popularity: 8
    },
    {
        id: 'fan_022',
        name: 'Minka Aire Light Wave',
        brand: 'Minka Aire',
        category: '선풍기',
        subcategory: 'LED 일체형',
        emoji: '💡',
        icon: '🌟',
        releaseYear: 2020,
        countryOfOrigin: '미국',
        description: 'LED 조명과 선풍기의 완벽한 통합',
        specialFeature: '52W LED 조명 내장, 디밍 가능',
        electricalSpecs: {
            voltage: '120V',
            wattage: '75W (팬+조명)',
            speed: '6단계',
            lumens: '3500lm'
        },
        blades: {
            count: 3,
            material: 'ABS 플라스틱',
            diameter: '132cm',
            transparent: true
        },
        switchType: '스마트폰 앱 + 음성 제어',
        oscillation: false,
        monetaryValue: 980000,
        rarity: 3,
        educationalValue: 9,
        popularity: 9
    },

    // === 특별 한정판 ===
    {
        id: 'fan_023',
        name: 'Vornado VFAN Sr. Chrome',
        brand: 'Vornado',
        category: '선풍기',
        subcategory: '복고 리미티드',
        emoji: '🏆',
        icon: '🥈',
        releaseYear: 2022,
        countryOfOrigin: '미국',
        description: '1945년 오리지널 디자인의 크롬 한정판',
        specialFeature: '전체 크롬 도금, 시리얼 넘버 각인',
        electricalSpecs: {
            voltage: '120V',
            wattage: '85W',
            speed: '3단계',
            rpm: '1650 RPM'
        },
        blades: {
            count: 3,
            material: '알루미늄',
            diameter: '38cm',
            chrome: true
        },
        switchType: '클래식 로터리',
        oscillation: false,
        monetaryValue: 450000,
        rarity: 4,
        educationalValue: 8,
        popularity: 9
    },
    {
        id: 'fan_024',
        name: 'Casablanca Panama',
        brand: 'Casablanca',
        category: '선풍기',
        subcategory: '트로피컬 천장형',
        emoji: '🌴',
        icon: '🏝️',
        releaseYear: 2021,
        countryOfOrigin: '미국',
        description: '야자수 잎 모양의 열대 스타일 천장 선풍기',
        specialFeature: '방수 처리된 야외용, 습도 저항',
        electricalSpecs: {
            voltage: '120V',
            wattage: '65W',
            speed: '5단계',
            rpm: '185 RPM'
        },
        blades: {
            count: 5,
            material: 'ABS 방수 플라스틱',
            diameter: '137cm',
            shape: '야자수 잎'
        },
        switchType: '방수 벽면 스위치',
        oscillation: false,
        monetaryValue: 580000,
        rarity: 3,
        educationalValue: 7,
        popularity: 8
    },

    // === 아동용 특별 선풍기 ===
    {
        id: 'fan_025',
        name: 'Hunter Kids Bayport',
        brand: 'Hunter',
        category: '선풍기',
        subcategory: '어린이 천장형',
        emoji: '✈️',
        icon: '🎨',
        releaseYear: 2023,
        countryOfOrigin: '미국',
        description: '비행기 프로펠러 디자인의 어린이 방 선풍기',
        specialFeature: '야광 별 스티커, 컬러 LED 조명',
        electricalSpecs: {
            voltage: '120V',
            wattage: '45W',
            speed: '3단계',
            rpm: '240 RPM'
        },
        blades: {
            count: 3,
            material: '안전 플라스틱',
            diameter: '107cm',
            design: '비행기 프로펠러'
        },
        switchType: '리모컨 + 야간 조명',
        oscillation: false,
        monetaryValue: 320000,
        rarity: 2,
        educationalValue: 8,
        popularity: 9
    },
    {
        id: 'fan_026',
        name: 'Craftmade Tiger Shark',
        brand: 'Craftmade',
        category: '선풍기',
        subcategory: '테마 천장형',
        emoji: '🦈',
        icon: '🌊',
        releaseYear: 2022,
        countryOfOrigin: '미국',
        description: '상어 테마의 재미있는 어린이 선풍기',
        specialFeature: '상어 지느러미 날개, 물결 소리 효과',
        electricalSpecs: {
            voltage: '120V',
            wattage: '50W',
            speed: '3단계',
            rpm: '200 RPM'
        },
        blades: {
            count: 4,
            material: '폼 안전 소재',
            diameter: '122cm',
            shape: '상어 지느러미'
        },
        switchType: '리모컨 + 소리 효과',
        oscillation: false,
        monetaryValue: 420000,
        rarity: 3,
        educationalValue: 8,
        popularity: 10
    },

    // === 초특급 컬렉터 아이템 ===
    {
        id: 'fan_027',
        name: 'Marelli Brise 1890 복원품',
        brand: 'Ercole Marelli',
        category: '선풍기',
        subcategory: '앤티크',
        emoji: '🏛️',
        icon: '🇮🇹',
        releaseYear: 1890,
        countryOfOrigin: '이탈리아',
        description: '세계 최초의 전기 선풍기 중 하나',
        specialFeature: '황동 케이지, 수작업 복원품',
        electricalSpecs: {
            voltage: '110V (개조)',
            wattage: '60W',
            speed: '1단계',
            rpm: '950 RPM'
        },
        blades: {
            count: 6,
            material: '황동',
            diameter: '30cm',
            handForged: true
        },
        switchType: '나이프 스위치',
        oscillation: false,
        monetaryValue: 3500000,
        rarity: 5,
        educationalValue: 10,
        popularity: 10
    },
    {
        id: 'fan_028',
        name: 'Tesla Coil Fan Prototype',
        brand: 'Custom Build',
        category: '선풍기',
        subcategory: '실험용',
        emoji: '⚡',
        icon: '🔬',
        releaseYear: 2019,
        countryOfOrigin: '미국',
        description: '테슬라 코일 원리를 이용한 이온풍 선풍기',
        specialFeature: '플라즈마 생성, 오존 발생',
        electricalSpecs: {
            voltage: '10,000V (승압)',
            wattage: '200W',
            frequency: '100kHz',
            ionization: true
        },
        blades: {
            count: 0,
            material: '없음',
            technology: '이온 추진'
        },
        switchType: '안전 인터록 시스템',
        oscillation: false,
        monetaryValue: 2800000,
        rarity: 5,
        educationalValue: 10,
        popularity: 9
    },

    // === 미니어처 & USB 선풍기 ===
    {
        id: 'fan_029',
        name: 'Arctic Breeze USB',
        brand: 'Arctic',
        category: '선풍기',
        subcategory: 'USB 선풍기',
        emoji: '💻',
        icon: '❄️',
        releaseYear: 2020,
        countryOfOrigin: '스위스',
        description: '유연한 목으로 조절 가능한 USB 선풍기',
        specialFeature: '저소음 설계, 구즈넥 조절',
        electricalSpecs: {
            voltage: '5V USB',
            wattage: '2.5W',
            speed: '1단계',
            rpm: '1800 RPM'
        },
        blades: {
            count: 4,
            material: '소프트 실리콘',
            diameter: '9.2cm'
        },
        switchType: 'USB 전원 온/오프',
        oscillation: false,
        monetaryValue: 25000,
        rarity: 1,
        educationalValue: 5,
        popularity: 8
    },
    {
        id: 'fan_030',
        name: 'Jisulife Handheld F8',
        brand: 'Jisulife',
        category: '선풍기',
        subcategory: '핸드헬드',
        emoji: '🤳',
        icon: '🌸',
        releaseYear: 2023,
        countryOfOrigin: '중국',
        description: '4000mAh 배터리 내장 휴대용 선풍기',
        specialFeature: '최대 20시간 사용, 보조배터리 기능',
        electricalSpecs: {
            voltage: '5V USB-C',
            wattage: '5W',
            speed: '5단계',
            battery: '4000mAh'
        },
        blades: {
            count: 7,
            material: 'PP 플라스틱',
            diameter: '10cm'
        },
        switchType: '터치 버튼',
        oscillation: false,
        monetaryValue: 35000,
        rarity: 1,
        educationalValue: 6,
        popularity: 9
    }
];

// 선풍기 데이터를 보물 데이터베이스에 추가
if (typeof window.treasuresDatabase !== 'undefined') {
    window.treasuresDatabase = [...window.treasuresDatabase, ...window.fansDatabase];
} else {
    window.treasuresDatabase = window.fansDatabase;
}

console.log('선풍기 데이터베이스 로드 완료:', window.fansDatabase.length, '개의 특별한 선풍기');