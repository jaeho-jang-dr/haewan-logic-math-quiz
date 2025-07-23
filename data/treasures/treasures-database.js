// 아이들을 위한 보물 데이터베이스 - 가전제품 & 장난감 통합
// 카테고리: 마법의 주방도구, 미래 가전, 클래식 장난감, 과학 도구, 게임, 스포츠, 예술도구, 수집품

window.treasuresDatabase = [
    // ===== 마법의 주방 도구 (Kitchen Magic) =====
    {
        id: 'magic-fridge',
        name: '마법의 냉장고',
        brand: '꿈나라 전자',
        category: '마법의 주방도구',
        icon: '🧊',
        description: '음식을 신선하게 보관하는 마법의 상자',
        history: '북극의 얼음 요정들이 만든 최초의 냉장 마법을 현대 기술로 재현했습니다.',
        value: '신선함 유지, 음식 정리 능력, 건강한 식습관',
        price: '보물 코인 1,200개',
        monetaryValue: 120000,  // 원화 가치
        usage: '문을 열면 시원한 바람이 나와요. 음식을 넣으면 오래오래 신선해요!',
        ageRange: '모든 연령',
        popularity: 8,
        educationalValue: 7,
        rarity: 3,
        magicPower: '신선함의 마법'
    },
    {
        id: 'rainbow-microwave',
        name: '무지개 전자레인지',
        brand: '요리 마법사',
        category: '마법의 주방도구',
        icon: '🌈',
        description: '음식을 순식간에 따뜻하게 만드는 무지개 상자',
        history: '태양의 따뜻한 빛을 담아 음식을 데우는 마법 기계입니다.',
        value: '시간 절약, 요리 도우미, 따뜻한 마음',
        price: '보물 코인 180개',
        usage: '버튼을 누르면 무지개빛이 나오며 음식이 따뜻해져요!',
        ageRange: '8세 이상',
        popularity: 7,
        educationalValue: 6,
        rarity: 2,
        magicPower: '순간 가열술'
    },
    {
        id: 'bubble-dishwasher',
        name: '거품 요정 식기세척기',
        brand: '물방울 왕국',
        category: '마법의 주방도구',
        icon: '🫧',
        description: '거품 요정이 설거지를 도와주는 마법 기계',
        history: '바다의 거품 요정들이 인간을 도우려고 만든 선물입니다.',
        value: '청결함, 시간 절약, 가족 도우미',
        price: '보물 코인 800개',
        usage: '그릇을 넣고 버튼을 누르면 거품 요정이 깨끗이 씻어줘요!',
        ageRange: '모든 연령',
        popularity: 6,
        educationalValue: 8,
        rarity: 3,
        magicPower: '거품 청소술'
    },
    {
        id: 'smart-rice-cooker',
        name: '지혜로운 밥솥',
        brand: '쌀나라 마법사',
        category: '마법의 주방도구',
        icon: '🍚',
        description: '완벽한 밥을 지어주는 지혜로운 요리사',
        history: '동양의 쌀 신이 축복한 마법의 솥입니다.',
        value: '영양 가득한 밥, 요리 지혜, 가족 건강',
        price: '보물 코인 320개',
        usage: '쌀과 물을 넣으면 알아서 맛있는 밥을 지어줘요!',
        ageRange: '모든 연령',
        popularity: 9,
        educationalValue: 7,
        rarity: 2,
        magicPower: '완벽한 취사술'
    },
    {
        id: 'smoothie-wizard',
        name: '스무디 마법사 믹서',
        brand: '과일 요정',
        category: '마법의 주방도구',
        icon: '🥤',
        description: '과일을 마법의 음료로 변신시키는 믹서',
        history: '열대 과일의 정령들이 건강을 위해 만든 마법 도구입니다.',
        value: '건강한 음료, 비타민 충전, 맛있는 간식',
        price: '보물 코인 150개',
        usage: '과일을 넣고 돌리면 맛있는 주스가 완성돼요!',
        ageRange: '5세 이상',
        popularity: 8,
        educationalValue: 8,
        rarity: 2,
        magicPower: '과일 변신술'
    },

    // ===== 미래 가전 (Future Appliances) =====
    {
        id: 'robot-vacuum',
        name: '청소 로봇 친구',
        brand: '미래 기술',
        category: '미래 가전',
        icon: '🤖',
        description: '혼자서 청소하는 똑똑한 로봇',
        history: '2020년대 인공지능 기술로 탄생한 가정용 도우미입니다.',
        value: '깨끗한 환경, 시간 절약, 미래 기술 체험',
        price: '보물 코인 500개',
        usage: '버튼을 누르면 혼자서 방을 돌아다니며 청소해요!',
        ageRange: '모든 연령',
        popularity: 9,
        educationalValue: 8,
        rarity: 4,
        magicPower: '자동 청소술'
    },
    {
        id: 'air-purifier-guardian',
        name: '공기 수호자',
        brand: '바람의 전사',
        category: '미래 가전',
        icon: '🌬️',
        description: '나쁜 공기를 물리치는 수호자',
        history: '도시의 공기를 지키기 위해 만들어진 현대의 수호신입니다.',
        value: '깨끗한 공기, 건강 보호, 알레르기 예방',
        price: '보물 코인 400개',
        usage: '켜두면 나쁜 먼지를 잡아먹고 깨끗한 공기를 만들어요!',
        ageRange: '모든 연령',
        popularity: 7,
        educationalValue: 9,
        rarity: 3,
        magicPower: '공기 정화술'
    },
    {
        id: 'smart-tv-portal',
        name: '마법의 TV 포털',
        brand: '화면 마법사',
        category: '미래 가전',
        icon: '📺',
        description: '다른 세계로 통하는 마법의 창문',
        history: '평행우주를 엿볼 수 있는 차원의 문을 TV로 만들었습니다.',
        value: '상상력 자극, 지식 습득, 가족 시간',
        price: '보물 코인 1,500개',
        usage: '리모컨으로 채널을 바꾸면 다른 세계가 펼쳐져요!',
        ageRange: '모든 연령',
        popularity: 10,
        educationalValue: 7,
        rarity: 4,
        magicPower: '차원 이동술'
    },

    // ===== 클래식 장난감 (Classic Toys) =====
    {
        id: 'lego-classic',
        name: '레고 클래식 세트',
        brand: 'LEGO',
        category: '건설/조립',
        icon: '🧱',
        description: '무엇이든 만들 수 있는 마법의 블록',
        history: '1932년 덴마크에서 "잘 놀다"라는 뜻으로 시작된 창의력의 보물입니다.',
        value: '창의력 발달, 공간지각능력, 문제해결력',
        price: '보물 코인 300개',
        usage: '블록을 연결해서 성, 우주선, 동물 등 뭐든지 만들 수 있어요!',
        ageRange: '4세 이상',
        popularity: 10,
        educationalValue: 10,
        rarity: 3,
        magicPower: '창조의 힘'
    },
    {
        id: 'teddy-bear-friend',
        name: '마법의 테디베어',
        brand: 'Steiff',
        category: '인형/피규어',
        icon: '🧸',
        description: '언제나 곁에 있는 최고의 친구',
        history: '1902년 미국 대통령의 이름을 딴, 100년 넘게 사랑받는 곰 인형입니다.',
        value: '정서적 안정, 우정, 상상력',
        price: '보물 코인 200개',
        usage: '안아주고, 비밀을 말하고, 함께 모험을 떠나요!',
        ageRange: '0세 이상',
        popularity: 9,
        educationalValue: 8,
        rarity: 3,
        magicPower: '위로의 마법'
    },
    {
        id: 'rubiks-cube-puzzle',
        name: '지혜의 큐브',
        brand: 'Rubik\'s',
        category: '퍼즐/두뇌',
        icon: '🎲',
        description: '6면의 색을 맞추는 마법의 퍼즐',
        history: '1974년 헝가리 교수가 만든, 세계에서 가장 유명한 퍼즐입니다.',
        value: '논리력, 인내심, 성취감',
        price: '보물 코인 100개',
        usage: '돌리고 돌려서 각 면을 같은 색으로 맞춰요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 10,
        rarity: 2,
        magicPower: '두뇌 활성화'
    },

    // ===== 현대 인기 장난감 (Modern Popular Toys) =====
    {
        id: 'pokemon-cards-treasure',
        name: '포켓몬 카드 보물상자',
        brand: 'Pokemon Company',
        category: '수집품',
        icon: '🎴',
        description: '포켓몬 트레이너가 되는 마법의 카드',
        history: '1996년 일본에서 시작되어 전 세계 어린이들의 꿈이 된 카드게임입니다.',
        value: '전략적 사고, 수집의 즐거움, 친구와의 대전',
        price: '보물 코인 50~10,000개',
        usage: '카드를 모으고, 친구와 대전하며 최강의 트레이너가 되어요!',
        ageRange: '6세 이상',
        popularity: 10,
        educationalValue: 7,
        rarity: 5,
        magicPower: '포켓몬 소환술'
    },
    {
        id: 'nintendo-switch-portal',
        name: '닌텐도 게임 포털',
        brand: 'Nintendo',
        category: '전자기기',
        icon: '🎮',
        description: '게임 세계로 떠나는 마법의 기기',
        history: '2017년 출시된, TV와 휴대용을 합친 혁신적인 게임기입니다.',
        value: '반응속도, 문제해결, 창의적 플레이',
        price: '보물 코인 3,600개',
        usage: 'TV에 연결하거나 들고 다니며 게임 세계를 탐험해요!',
        ageRange: '7세 이상',
        popularity: 10,
        educationalValue: 6,
        rarity: 3,
        magicPower: '게임 차원 이동'
    },
    {
        id: 'beyblade-storm',
        name: '폭풍의 베이블레이드',
        brand: 'Takara Tomy',
        category: '액션토이',
        icon: '🌪️',
        description: '회전하는 전투 팽이',
        history: '1999년 일본에서 시작된, 현대판 팽이 배틀 게임입니다.',
        value: '물리학 이해, 전략, 스포츠맨십',
        price: '보물 코인 150개',
        usage: '런처로 발사해서 경기장에서 최후의 1개가 될 때까지 대전해요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 6,
        rarity: 3,
        magicPower: '회전 폭풍술'
    },

    // ===== 교육 완구 (Educational Toys) =====
    {
        id: 'microscope-explorer',
        name: '미시세계 탐험 현미경',
        brand: 'Young Scientist',
        category: '과학교구',
        icon: '🔬',
        description: '작은 세계를 크게 보는 마법의 렌즈',
        history: '과학자들이 미시세계를 탐험하기 위해 만든 도구입니다.',
        value: '과학적 탐구, 관찰력, 호기심',
        price: '보물 코인 500개',
        usage: '작은 것들을 1200배까지 크게 볼 수 있어요!',
        ageRange: '8세 이상',
        popularity: 7,
        educationalValue: 10,
        rarity: 4,
        magicPower: '미시 투시술'
    },
    {
        id: 'chemistry-magic-set',
        name: '마법사의 화학 실험실',
        brand: 'Science Wizard',
        category: '과학교구',
        icon: '🧪',
        description: '안전한 마법 실험을 하는 미니 실험실',
        history: '연금술사들의 비밀을 현대 과학으로 재현한 키트입니다.',
        value: '과학적 사고, 실험 정신, 발견의 기쁨',
        price: '보물 코인 400개',
        usage: '설명서를 따라 신기한 화학 반응을 만들어봐요!',
        ageRange: '10세 이상',
        popularity: 6,
        educationalValue: 10,
        rarity: 4,
        magicPower: '물질 변환술'
    },
    {
        id: 'telescope-stargazer',
        name: '별빛 망원경',
        brand: 'Celestron',
        category: '과학교구',
        icon: '🔭',
        description: '우주를 가까이 보는 마법의 통',
        history: '갈릴레이가 처음 만든 이후 계속 발전한 우주 관측 도구입니다.',
        value: '우주 탐구, 꿈과 상상력, 과학적 사고',
        price: '보물 코인 1,000개',
        usage: '달의 분화구와 토성의 고리를 직접 볼 수 있어요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 5,
        magicPower: '천체 관측술'
    },
    {
        id: 'coding-robot-buddy',
        name: '코딩 로봇 친구',
        brand: 'Wonder Workshop',
        category: '교육/전자',
        icon: '🤖',
        description: '프로그래밍을 가르쳐주는 똑똑한 로봇',
        history: '21세기 디지털 시대를 위한 교육용 로봇입니다.',
        value: '논리적 사고, 문제해결, 미래 기술',
        price: '보물 코인 2,000개',
        usage: '앱으로 명령을 내려서 로봇을 움직여요!',
        ageRange: '6세 이상',
        popularity: 9,
        educationalValue: 10,
        rarity: 4,
        magicPower: '디지털 마법'
    },

    // ===== 보드게임 (Board Games) =====
    {
        id: 'monopoly-kingdom',
        name: '부자왕국 모노폴리',
        brand: 'Hasbro',
        category: '보드게임',
        icon: '🎩',
        description: '부동산 왕이 되는 전략 게임',
        history: '1935년 대공황 시대에 만들어진, 경제를 배우는 게임입니다.',
        value: '경제 개념, 협상력, 전략적 사고',
        price: '보물 코인 300개',
        usage: '주사위를 굴려 땅을 사고 건물을 지어 부자가 되어요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 2,
        magicPower: '부의 축적술'
    },
    {
        id: 'chess-masters',
        name: '왕의 체스',
        brand: 'Royal Games',
        category: '보드게임',
        icon: '♟️',
        description: '왕과 여왕이 벌이는 전략 대결',
        history: '1500년 전 인도에서 시작된, 세계에서 가장 오래된 전략 게임입니다.',
        value: '전략적 사고, 계획 수립, 집중력',
        price: '보물 코인 200개',
        usage: '32개의 말로 상대방의 왕을 잡는 두뇌 게임이에요!',
        ageRange: '6세 이상',
        popularity: 7,
        educationalValue: 10,
        rarity: 3,
        magicPower: '전략의 지혜'
    },

    // ===== 스포츠 & 야외 놀이 (Sports & Outdoor) =====
    {
        id: 'magic-soccer-ball',
        name: '황금 축구공',
        brand: 'Champions',
        category: '스포츠',
        icon: '⚽',
        description: '세계 챔피언이 되는 마법의 공',
        history: '고대부터 있던 공놀이가 현대 최고의 스포츠가 되었습니다.',
        value: '팀워크, 체력, 목표 달성',
        price: '보물 코인 200개',
        usage: '친구들과 함께 골을 넣고 승리의 기쁨을 느껴요!',
        ageRange: '5세 이상',
        popularity: 10,
        educationalValue: 8,
        rarity: 2,
        magicPower: '골든 슛'
    },
    {
        id: 'flying-frisbee',
        name: '날아가는 원반',
        brand: 'Sky Masters',
        category: '스포츠',
        icon: '🥏',
        description: '하늘을 나는 마법의 원반',
        history: '1940년대 파이 접시에서 영감을 받아 만든 날리기 장난감입니다.',
        value: '손목 스냅, 거리 감각, 야외 활동',
        price: '보물 코인 100개',
        usage: '회전시켜 던지면 멀리멀리 날아가요!',
        ageRange: '6세 이상',
        popularity: 7,
        educationalValue: 6,
        rarity: 1,
        magicPower: '바람 조종술'
    },
    {
        id: 'skateboard-lightning',
        name: '번개 스케이트보드',
        brand: 'Street Legends',
        category: '스포츠',
        icon: '🛹',
        description: '도로 위를 날아다니는 보드',
        history: '1950년대 캘리포니아 서퍼들이 만든 육상 서핑입니다.',
        value: '균형감각, 도전정신, 자신감',
        price: '보물 코인 500개',
        usage: '타고 달리며 멋진 트릭을 연습해요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 6,
        rarity: 3,
        magicPower: '질주의 힘'
    },

    // ===== 예술 & 공예 (Arts & Crafts) =====
    {
        id: 'rainbow-art-set',
        name: '무지개 미술 세트',
        brand: 'Crayola',
        category: '예술/공예',
        icon: '🎨',
        description: '120가지 색으로 그리는 꿈의 세트',
        history: '1903년부터 어린이들의 창의력을 키워온 미술 도구입니다.',
        value: '창의력, 색채 감각, 표현력',
        price: '보물 코인 300개',
        usage: '크레용, 색연필, 물감으로 멋진 그림을 그려요!',
        ageRange: '3세 이상',
        popularity: 9,
        educationalValue: 9,
        rarity: 2,
        magicPower: '색채 마법'
    },
    {
        id: 'magic-playdoh',
        name: '마법의 점토',
        brand: 'Play-Doh',
        category: '예술/공예',
        icon: '🎭',
        description: '상상하는 모든 것을 만드는 말랑한 점토',
        history: '1950년대 벽지 청소제에서 어린이 장난감으로 변신한 기적의 점토입니다.',
        value: '촉감 발달, 창의력, 소근육 운동',
        price: '보물 코인 100개',
        usage: '주물럭주물럭 만지며 원하는 모양을 만들어요!',
        ageRange: '2세 이상',
        popularity: 9,
        educationalValue: 8,
        rarity: 1,
        magicPower: '형태 변환술'
    },

    // ===== 전자 장난감 (Electronic Toys) =====
    {
        id: 'digital-pet-egg',
        name: '디지털 펫 알',
        brand: 'Cyber Pet',
        category: '전자기기',
        icon: '🥚',
        description: '손 안의 작은 친구를 키우는 전자 알',
        history: '1996년 일본에서 만든 최초의 휴대용 가상 펫입니다.',
        value: '책임감, 시간 관리, 애정',
        price: '보물 코인 300개',
        usage: '먹이 주고, 놀아주고, 사랑으로 키워요!',
        ageRange: '6세 이상',
        popularity: 7,
        educationalValue: 7,
        rarity: 4,
        magicPower: '생명 육성술'
    },
    {
        id: 'talking-furby',
        name: '말하는 퍼비 친구',
        brand: 'Hasbro',
        category: '전자기기',
        icon: '🦉',
        description: '대화하고 노래하는 전자 친구',
        history: '1998년 출시되어 전 세계 어린이들의 친구가 된 전자 펫입니다.',
        value: '언어 발달, 상호작용, 정서 교감',
        price: '보물 코인 500개',
        usage: '말을 걸고 쓰다듬으면 대답하고 노래해요!',
        ageRange: '6세 이상',
        popularity: 6,
        educationalValue: 6,
        rarity: 3,
        magicPower: '대화의 마법'
    },

    // ===== 전통 놀이 & 세계 장난감 (Traditional & World Toys) =====
    {
        id: 'spinning-top-master',
        name: '회오리 팽이',
        brand: '전통 장인',
        category: '전통놀이',
        icon: '🌀',
        description: '빙글빙글 도는 전통 팽이',
        history: '삼국시대부터 전해 내려온 우리나라 전통 놀이입니다.',
        value: '손목 힘, 집중력, 전통 문화',
        price: '보물 코인 50개',
        usage: '줄을 감아 힘차게 돌려요!',
        ageRange: '7세 이상',
        popularity: 6,
        educationalValue: 7,
        rarity: 3,
        magicPower: '회전의 힘'
    },
    {
        id: 'origami-master',
        name: '종이접기 마스터 세트',
        brand: '종이 예술가',
        category: '예술/공예',
        icon: '🗾',
        description: '종이 한 장으로 만드는 예술',
        history: '6세기 일본에서 시작된 종이 예술입니다.',
        value: '집중력, 공간 지각력, 인내심',
        price: '보물 코인 50개',
        usage: '설명서를 따라 종이를 접어 동물과 꽃을 만들어요!',
        ageRange: '5세 이상',
        popularity: 7,
        educationalValue: 9,
        rarity: 2,
        magicPower: '종이 변신술'
    },

    // ===== 특별 수집품 (Special Collectibles) =====
    {
        id: 'golden-pokemon-card',
        name: '황금 피카츄 카드',
        brand: 'Pokemon',
        category: '수집품',
        icon: '⚡',
        description: '전설의 황금빛 피카츄',
        history: '포켓몬 20주년 기념으로 만든 특별한 카드입니다.',
        value: '희귀성, 수집 가치, 추억',
        price: '보물 코인 50,000개',
        usage: '특별한 보호 케이스에 보관하는 전설의 카드예요!',
        ageRange: '수집가용',
        popularity: 10,
        educationalValue: 5,
        rarity: 10,
        magicPower: '전설의 힘'
    },
    {
        id: 'millennium-falcon-lego',
        name: '은하계 최강 우주선 레고',
        brand: 'LEGO',
        category: '수집품',
        icon: '🚀',
        description: '7,541개 조각으로 만드는 거대 우주선',
        history: '스타워즈 영화의 전설적인 우주선을 레고로 재현했습니다.',
        value: '인내심, 성취감, 디테일',
        price: '보물 코인 8,000개',
        usage: '며칠에 걸쳐 조립하는 대작이에요!',
        ageRange: '14세 이상',
        popularity: 9,
        educationalValue: 8,
        rarity: 8,
        magicPower: '우주 항해술'
    },
    {
        id: 'vintage-game-console',
        name: '전설의 게임기',
        brand: 'Nintendo',
        category: '전자기기',
        icon: '🕹️',
        description: '추억의 8비트 게임기',
        history: '1980년대 게임 역사를 바꾼 전설의 콘솔입니다.',
        value: '게임 역사, 추억, 복고 문화',
        price: '보물 코인 3,000개',
        usage: '클래식 게임들을 즐겨요!',
        ageRange: '모든 연령',
        popularity: 8,
        educationalValue: 6,
        rarity: 7,
        magicPower: '시간 여행'
    },

    // ===== 미래 기술 장난감 (Future Tech Toys) =====
    {
        id: 'hologram-projector',
        name: '홀로그램 프로젝터',
        brand: 'Future Vision',
        category: '미래 기술',
        icon: '🔮',
        description: '3D 홀로그램을 만드는 미래 기기',
        history: '2020년대 최신 기술로 만든 홀로그램 장치입니다.',
        value: '미래 기술 체험, 상상력, 과학 이해',
        price: '보물 코인 2,000개',
        usage: '스마트폰을 올려놓으면 3D 영상이 떠올라요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 6,
        magicPower: '입체 영상술'
    },
    {
        id: 'smart-building-blocks',
        name: '스마트 빌딩 블록',
        brand: 'Tech Blocks',
        category: '교육/전자',
        icon: '🏗️',
        description: 'LED와 센서가 들어간 미래형 블록',
        history: 'IoT 기술을 장난감에 접목한 혁신적인 제품입니다.',
        value: '전자공학 이해, 프로그래밍, 창의력',
        price: '보물 코인 1,500개',
        usage: '블록을 연결하면 불이 켜지고 소리가 나요!',
        ageRange: '10세 이상',
        popularity: 7,
        educationalValue: 10,
        rarity: 5,
        magicPower: '전자 마법'
    },

    // ===== 음악 & 소리 장난감 (Musical Toys) =====
    {
        id: 'rainbow-xylophone',
        name: '무지개 실로폰',
        brand: 'Music Magic',
        category: '음악',
        icon: '🎹',
        description: '무지개 색깔의 아름다운 소리',
        history: '동남아시아 전통 악기를 어린이용으로 만든 타악기입니다.',
        value: '음감 발달, 리듬감, 색채 인식',
        price: '보물 코인 200개',
        usage: '막대로 두드려서 도레미파솔라시도를 연주해요!',
        ageRange: '1세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 2,
        magicPower: '멜로디 마법'
    },
    {
        id: 'karaoke-star',
        name: '노래방 스타 마이크',
        brand: 'Sing Along',
        category: '음악',
        icon: '🎤',
        description: '집에서 즐기는 노래방',
        history: '1970년대 일본에서 시작된 노래방 문화를 집으로 가져왔습니다.',
        value: '자신감, 음악성, 표현력',
        price: '보물 코인 300개',
        usage: '좋아하는 노래를 부르며 스타가 되어요!',
        ageRange: '5세 이상',
        popularity: 8,
        educationalValue: 7,
        rarity: 3,
        magicPower: '목소리 증폭술'
    },

    // ===== 과학 실험 (Science Experiments) =====
    {
        id: 'volcano-kit',
        name: '화산 폭발 실험 세트',
        brand: 'Science Explorer',
        category: '과학교구',
        icon: '🌋',
        description: '집에서 만드는 미니 화산',
        history: '지질학을 재미있게 배우기 위해 개발된 실험 키트입니다.',
        value: '과학 원리, 자연 현상 이해, 실험 정신',
        price: '보물 코인 250개',
        usage: '베이킹소다와 식초로 화산 폭발을 재현해요!',
        ageRange: '8세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 3,
        magicPower: '화산 폭발술'
    },
    {
        id: 'crystal-garden',
        name: '마법의 크리스탈 정원',
        brand: 'Crystal Magic',
        category: '과학교구',
        icon: '💎',
        description: '아름다운 결정을 키우는 정원',
        history: '화학의 아름다움을 보여주는 교육 실험 세트입니다.',
        value: '인내심, 관찰력, 화학 원리',
        price: '보물 코인 300개',
        usage: '특별한 용액에서 반짝이는 결정이 자라요!',
        ageRange: '8세 이상',
        popularity: 7,
        educationalValue: 9,
        rarity: 4,
        magicPower: '결정 성장술'
    },
    {
        id: 'solar-system-mobile',
        name: '태양계 모빌',
        brand: 'Space Academy',
        category: '과학교구',
        icon: '🪐',
        description: '방 안의 작은 태양계',
        history: '우주에 대한 꿈을 키우는 교육용 모형입니다.',
        value: '우주 지식, 과학적 호기심, 아름다움',
        price: '보물 코인 400개',
        usage: '행성들이 태양 주위를 도는 모습을 관찰해요!',
        ageRange: '6세 이상',
        popularity: 8,
        educationalValue: 9,
        rarity: 3,
        magicPower: '행성 운행술'
    },

    // ===== 퍼즐 & 두뇌 게임 (Puzzles & Brain Games) =====
    {
        id: 'world-map-puzzle',
        name: '세계 지도 퍼즐',
        brand: 'Geography Master',
        category: '퍼즐/두뇌',
        icon: '🗺️',
        description: '1000조각으로 만드는 세계',
        history: '1760년 영국에서 지리 교육을 위해 만들어진 최초의 퍼즐입니다.',
        value: '지리 지식, 인내심, 성취감',
        price: '보물 코인 250개',
        usage: '조각을 맞춰 세계 지도를 완성해요!',
        ageRange: '8세 이상',
        popularity: 7,
        educationalValue: 10,
        rarity: 3,
        magicPower: '세계 연결술'
    },
    {
        id: 'brain-teaser-set',
        name: '두뇌 퍼즐 마스터',
        brand: 'Mind Games',
        category: '퍼즐/두뇌',
        icon: '🧩',
        description: '10가지 도전적인 두뇌 퍼즐',
        history: '고대부터 전해오는 다양한 논리 퍼즐 모음입니다.',
        value: '논리력, 문제해결, IQ 향상',
        price: '보물 코인 300개',
        usage: '각각의 퍼즐을 풀어 두뇌를 단련해요!',
        ageRange: '10세 이상',
        popularity: 6,
        educationalValue: 10,
        rarity: 4,
        magicPower: '지능 향상술'
    },

    // ===== 역할놀이 (Role Play) =====
    {
        id: 'chef-kitchen-set',
        name: '꼬마 요리사 주방',
        brand: 'Little Chef',
        category: '역할놀이',
        icon: '👨‍🍳',
        description: '진짜같은 미니 주방',
        history: '요리에 대한 관심과 생활 기술을 키우는 놀이 세트입니다.',
        value: '생활 기술, 창의력, 책임감',
        price: '보물 코인 1,000개',
        usage: '요리하는 흉내를 내며 맛있는 음식을 만들어요!',
        ageRange: '3세 이상',
        popularity: 9,
        educationalValue: 8,
        rarity: 3,
        magicPower: '요리 마법'
    },
    {
        id: 'doctor-healing-kit',
        name: '마법의 의사 가방',
        brand: 'Little Doctor',
        category: '역할놀이',
        icon: '👩‍⚕️',
        description: '아픈 친구를 치료하는 의사 세트',
        history: '의사에 대한 꿈을 키우고 두려움을 없애는 놀이입니다.',
        value: '공감 능력, 돌봄, 의학 지식',
        price: '보물 코인 400개',
        usage: '청진기로 심장 소리를 듣고 주사로 치료해요!',
        ageRange: '3세 이상',
        popularity: 8,
        educationalValue: 7,
        rarity: 2,
        magicPower: '치유의 손길'
    },

    // ===== 탈것 장난감 (Vehicle Toys) =====
    {
        id: 'racing-rc-car',
        name: '번개 레이싱카',
        brand: 'Speed Master',
        category: '전자기기',
        icon: '🏎️',
        description: '시속 30km로 달리는 RC카',
        history: '1960년대부터 발전한 무선 조종 자동차의 최신 버전입니다.',
        value: '조종 실력, 반응 속도, 기계 이해',
        price: '보물 코인 800개',
        usage: '리모컨으로 조종해서 레이싱을 즐겨요!',
        ageRange: '8세 이상',
        popularity: 9,
        educationalValue: 6,
        rarity: 4,
        magicPower: '스피드 부스터'
    },
    {
        id: 'train-adventure-set',
        name: '기차 모험 세트',
        brand: 'Rail Master',
        category: '건설/조립',
        icon: '🚂',
        description: '나만의 기차 왕국',
        history: '1884년부터 이어온 기차 장난감의 전통입니다.',
        value: '계획 능력, 공간 구성, 상상력',
        price: '보물 코인 600개',
        usage: '레일을 연결하고 기차를 운행시켜요!',
        ageRange: '3세 이상',
        popularity: 8,
        educationalValue: 8,
        rarity: 3,
        magicPower: '철도 건설술'
    },

    // ===== 물놀이 장난감 (Water Toys) =====
    {
        id: 'super-water-blaster',
        name: '초강력 물대포',
        brand: 'Splash Master',
        category: '야외놀이',
        icon: '💦',
        description: '10미터까지 발사되는 물총',
        history: '1989년 발명된 압축 물총의 진화형입니다.',
        value: '야외 활동, 친구와의 놀이, 더위 해소',
        price: '보물 코인 300개',
        usage: '물을 채우고 펌프질해서 시원하게 물싸움해요!',
        ageRange: '6세 이상',
        popularity: 9,
        educationalValue: 5,
        rarity: 2,
        magicPower: '물줄기 발사'
    },
    {
        id: 'bubble-machine',
        name: '무지개 비눗방울 기계',
        brand: 'Bubble Dreams',
        category: '야외놀이',
        icon: '🫧',
        description: '수백 개의 비눗방울을 만드는 기계',
        history: '비눗방울의 아름다움을 극대화한 현대 장난감입니다.',
        value: '시각적 즐거움, 야외 활동, 파티',
        price: '보물 코인 200개',
        usage: '버튼을 누르면 무지개빛 비눗방울이 가득해요!',
        ageRange: '3세 이상',
        popularity: 8,
        educationalValue: 4,
        rarity: 2,
        magicPower: '거품 소환술'
    },

    // ===== 특별한 가전제품 (Special Appliances) =====
    {
        id: 'gaming-chair-throne',
        name: '게이머 왕좌',
        brand: 'Pro Gamer',
        category: '미래 가전',
        icon: '🪑',
        description: 'RGB 조명이 빛나는 전문 게이밍 의자',
        history: 'e스포츠 시대를 위해 만들어진 특별한 의자입니다.',
        value: '편안함, 집중력 향상, 자세 교정',
        price: '보물 코인 2,000개',
        usage: '앉으면 게임 실력이 향상되는 마법의 의자예요!',
        ageRange: '8세 이상',
        popularity: 9,
        educationalValue: 5,
        rarity: 5,
        magicPower: '집중력 강화'
    },
    {
        id: 'hologram-lamp',
        name: '홀로그램 무드등',
        brand: 'Dream Light',
        category: '미래 가전',
        icon: '💡',
        description: '방 안에 은하수를 만드는 조명',
        history: '빛의 마법으로 꿈같은 분위기를 만드는 미래형 조명입니다.',
        value: '수면 도움, 상상력 자극, 분위기',
        price: '보물 코인 500개',
        usage: '켜면 천장에 별과 은하수가 펼쳐져요!',
        ageRange: '모든 연령',
        popularity: 8,
        educationalValue: 6,
        rarity: 4,
        magicPower: '별빛 투영술'
    },
    {
        id: 'smart-speaker-buddy',
        name: 'AI 친구 스피커',
        brand: 'Tech Friend',
        category: '미래 가전',
        icon: '🔊',
        description: '대화하고 노래하는 똑똑한 스피커',
        history: '인공지능이 들어간 미래의 음성 비서입니다.',
        value: '언어 학습, 정보 검색, 음악 감상',
        price: '보물 코인 800개',
        usage: '말을 걸면 대답하고 음악도 들려줘요!',
        ageRange: '모든 연령',
        popularity: 9,
        educationalValue: 8,
        rarity: 3,
        magicPower: '음성 인식술'
    }
];

// 카테고리별 필터링 함수
window.getTreasuresByCategory = function(category) {
    return window.treasuresDatabase.filter(treasure => treasure.category === category);
};

// 희귀도별 필터링 함수
window.getTreasuresByRarity = function(minRarity) {
    return window.treasuresDatabase.filter(treasure => treasure.rarity >= minRarity);
};

// 연령별 필터링 함수
window.getTreasuresForAge = function(age) {
    return window.treasuresDatabase.filter(treasure => {
        if (treasure.ageRange === '모든 연령') return true;
        if (treasure.ageRange === '수집가용') return age >= 12;
        const minAge = parseInt(treasure.ageRange.match(/\d+/)[0]);
        return age >= minAge;
    });
};

// 랜덤 보물 선택 함수
window.getRandomTreasure = function() {
    const randomIndex = Math.floor(Math.random() * window.treasuresDatabase.length);
    return window.treasuresDatabase[randomIndex];
};

// 희귀도에 따른 가중치 랜덤 선택
window.getWeightedRandomTreasure = function() {
    // 희귀도가 낮을수록 더 자주 나옴
    const weights = window.treasuresDatabase.map(treasure => 11 - treasure.rarity);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    
    let random = Math.random() * totalWeight;
    for (let i = 0; i < window.treasuresDatabase.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return window.treasuresDatabase[i];
        }
    }
    
    return window.treasuresDatabase[0];
};

// 마법의 힘으로 필터링
window.getTreasuresByMagicPower = function(magicType) {
    return window.treasuresDatabase.filter(treasure => 
        treasure.magicPower && treasure.magicPower.includes(magicType)
    );
};

// 교육 가치가 높은 보물들
window.getEducationalTreasures = function(minValue = 8) {
    return window.treasuresDatabase.filter(treasure => 
        treasure.educationalValue >= minValue
    ).sort((a, b) => b.educationalValue - a.educationalValue);
};

// 인기도 순위
window.getMostPopularTreasures = function(limit = 10) {
    return window.treasuresDatabase
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
};

// 금액 가치 자동 계산 및 추가
window.treasuresDatabase = window.treasuresDatabase.map(treasure => {
    if (!treasure.monetaryValue) {
        // 희귀도와 교육적 가치를 기반으로 금액 계산
        const baseValue = 10000;
        const rarityMultiplier = treasure.rarity || 1;
        const educationBonus = (treasure.educationalValue || 5) * 1000;
        const popularityBonus = (treasure.popularity || 5) * 2000;
        
        treasure.monetaryValue = baseValue * rarityMultiplier + educationBonus + popularityBonus;
        
        // 특별한 아이템은 추가 가치
        if (treasure.rarity >= 8) {
            treasure.monetaryValue *= 3;
        } else if (treasure.rarity >= 6) {
            treasure.monetaryValue *= 2;
        }
    }
    return treasure;
});