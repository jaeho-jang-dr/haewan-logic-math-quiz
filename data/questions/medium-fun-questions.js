// 아이들이 좋아하는 재미있는 이야기로 만든 중간 난이도 문제 50개
window.mediumFunQuestions = [
    // 1-10: 해리포터 마법 테마
    {
        id: 'mf001',
        question: '호그와트 급행열차가 시속 80km로 달려요. 3시간 30분 동안 달리면 몇 km를 갈까요?',
        options: ['240km', '260km', '280km', '300km'],
        correctAnswer: 2,
        explanation: '80km × 3.5시간 = 280km를 가요!'
    },
    {
        id: 'mf002',
        question: '해리가 퀴디치 경기에서 스니치를 잡으면 150점이에요. 그리핀도르가 이미 60점을 얻었다면 총점은?',
        options: ['190점', '200점', '210점', '220점'],
        correctAnswer: 2,
        explanation: '60점 + 150점 = 210점이에요!'
    },
    {
        id: 'mf003',
        question: '마법약 수업에서 물약 1개를 만드는데 재료가 7가지 필요해요. 4개를 만들려면 재료가 모두 몇 가지?',
        options: ['24가지', '26가지', '28가지', '30가지'],
        correctAnswer: 2,
        explanation: '7가지 × 4개 = 28가지가 필요해요!'
    },
    {
        id: 'mf004',
        question: '론의 마법 체스 말이 16개예요. 상대편도 16개예요. 절반씩 잃었다면 남은 말은 모두 몇 개?',
        options: ['14개', '16개', '18개', '20개'],
        correctAnswer: 1,
        explanation: '각각 8개씩 남아서 8 + 8 = 16개예요!'
    },
    {
        id: 'mf005',
        question: '헤르미온느가 도서관에서 하루에 45쪽씩 책을 읽어요. 315쪽짜리 책을 다 읽으려면 며칠이 걸릴까요?',
        options: ['5일', '6일', '7일', '8일'],
        correctAnswer: 2,
        explanation: '315쪽 ÷ 45쪽 = 7일이 걸려요!'
    },
    {
        id: 'mf006',
        question: '올리밴더 지팡이 가게에 지팡이가 120개 있어요. 한 달에 15개씩 팔린다면 다 팔리는데 몇 달이 걸릴까요?',
        options: ['6개월', '7개월', '8개월', '9개월'],
        correctAnswer: 2,
        explanation: '120개 ÷ 15개 = 8개월이 걸려요!'
    },
    {
        id: 'mf007',
        question: '호그와트에는 4개의 기숙사가 있고, 각 기숙사에 학생이 75명씩 있어요. 전체 학생 수는?',
        options: ['280명', '290명', '300명', '310명'],
        correctAnswer: 2,
        explanation: '75명 × 4개 기숙사 = 300명이에요!'
    },
    {
        id: 'mf008',
        question: '덤블도어가 112살, 맥고나걸 교수가 덤블도어보다 42살 적어요. 맥고나걸 교수는 몇 살인가요?',
        options: ['68살', '70살', '72살', '74살'],
        correctAnswer: 1,
        explanation: '112살 - 42살 = 70살이에요!'
    },
    {
        id: 'mf009',
        question: '퀴디치 경기장 한 바퀴가 500미터예요. 해리가 6바퀴를 날았다면 몇 km를 난 건가요?',
        options: ['2.5km', '3km', '3.5km', '4km'],
        correctAnswer: 1,
        explanation: '500m × 6바퀴 = 3000m = 3km예요!'
    },
    {
        id: 'mf010',
        question: '그린고트 은행에서 갈레온 1개는 시클 17개와 같아요. 갈레온 3개는 시클 몇 개와 같을까요?',
        options: ['45개', '48개', '51개', '54개'],
        correctAnswer: 2,
        explanation: '17개 × 3 = 51개의 시클과 같아요!'
    },

    // 11-20: BTS & K-POP 테마
    {
        id: 'mf011',
        question: 'BTS 콘서트 티켓이 15만원이에요. 7명이 함께 가면 얼마가 필요한가요?',
        options: ['95만원', '100만원', '105만원', '110만원'],
        correctAnswer: 2,
        explanation: '15만원 × 7명 = 105만원이 필요해요!'
    },
    {
        id: 'mf012',
        question: '블랙핑크 앨범에 포토카드가 8장씩 들어있어요. 앨범 12개를 사면 포토카드는 모두 몇 장?',
        options: ['88장', '92장', '96장', '100장'],
        correctAnswer: 2,
        explanation: '8장 × 12개 = 96장이에요!'
    },
    {
        id: 'mf013',
        question: '스트레이키즈가 하루에 3시간씩 연습해요. 2주(14일) 동안 총 몇 시간 연습하나요?',
        options: ['38시간', '40시간', '42시간', '44시간'],
        correctAnswer: 2,
        explanation: '3시간 × 14일 = 42시간이에요!'
    },
    {
        id: 'mf014',
        question: '세븐틴 멤버가 13명이에요. 유닛 3개로 나누면 한 유닛에 평균 몇 명이 될까요?',
        options: ['4.1명', '4.3명', '4.5명', '4.7명'],
        correctAnswer: 1,
        explanation: '13명 ÷ 3유닛 = 약 4.3명이에요!'
    },
    {
        id: 'mf015',
        question: '트와이스 굿즈샵에서 응원봉이 35,000원이에요. 20% 할인하면 얼마인가요?',
        options: ['26,000원', '27,000원', '28,000원', '29,000원'],
        correctAnswer: 2,
        explanation: '35,000원 × 0.8 = 28,000원이에요!'
    },
    {
        id: 'mf016',
        question: 'NCT 드림 뮤직비디오 조회수가 하루에 250만씩 늘어요. 일주일 후 총 조회수는?',
        options: ['1,550만', '1,650만', '1,750만', '1,850만'],
        correctAnswer: 2,
        explanation: '250만 × 7일 = 1,750만 조회수예요!'
    },
    {
        id: 'mf017',
        question: '엔하이픈 팬미팅이 오후 2시 30분에 시작해서 3시간 45분 동안 해요. 몇 시에 끝나나요?',
        options: ['5시 45분', '6시', '6시 15분', '6시 30분'],
        correctAnswer: 2,
        explanation: '2시 30분 + 3시간 45분 = 6시 15분에 끝나요!'
    },
    {
        id: 'mf018',
        question: '아이브 멤버 6명이 각자 인스타 팔로워가 평균 500만명이에요. 전체 팔로워 수는?',
        options: ['2,800만', '2,900만', '3,000만', '3,100만'],
        correctAnswer: 2,
        explanation: '500만 × 6명 = 3,000만명이에요!'
    },
    {
        id: 'mf019',
        question: '르세라핌이 일본 투어를 5개 도시에서 해요. 각 도시에서 2회 공연하면 총 몇 회?',
        options: ['8회', '9회', '10회', '11회'],
        correctAnswer: 2,
        explanation: '5개 도시 × 2회 = 10회 공연이에요!'
    },
    {
        id: 'mf020',
        question: '뉴진스 앨범이 첫 주에 120만장, 둘째 주에 첫 주의 절반이 팔렸어요. 총 판매량은?',
        options: ['160만장', '170만장', '180만장', '190만장'],
        correctAnswer: 2,
        explanation: '120만 + 60만 = 180만장이에요!'
    },

    // 21-30: 스포츠 & 올림픽 테마
    {
        id: 'mf021',
        question: '손흥민이 한 경기에 평균 8.5km를 뛰어요. 4경기를 뛰면 총 몇 km를 뛰나요?',
        options: ['32km', '33km', '34km', '35km'],
        correctAnswer: 2,
        explanation: '8.5km × 4경기 = 34km를 뛰어요!'
    },
    {
        id: 'mf022',
        question: '김연아가 트리플 악셀을 3.5바퀴 돌아요. 10번 연습하면 총 몇 바퀴를 도나요?',
        options: ['30바퀴', '32바퀴', '35바퀴', '38바퀴'],
        correctAnswer: 2,
        explanation: '3.5바퀴 × 10번 = 35바퀴를 돌아요!'
    },
    {
        id: 'mf023',
        question: '농구 경기가 12분씩 4쿼터예요. 쿼터 사이 휴식이 각 2분이면 전체 시간은?',
        options: ['52분', '54분', '56분', '58분'],
        correctAnswer: 1,
        explanation: '경기 48분 + 휴식 6분 = 54분이에요!'
    },
    {
        id: 'mf024',
        question: '올림픽 수영장이 길이 50m예요. 400m 자유형은 몇 바퀴를 수영해야 하나요?',
        options: ['6바퀴', '7바퀴', '8바퀴', '9바퀴'],
        correctAnswer: 2,
        explanation: '400m ÷ 50m = 8바퀴예요!'
    },
    {
        id: 'mf025',
        question: '야구팀 선발 선수가 9명이고, 후보 선수가 선발의 2배예요. 전체 선수는 몇 명?',
        options: ['25명', '26명', '27명', '28명'],
        correctAnswer: 2,
        explanation: '선발 9명 + 후보 18명 = 27명이에요!'
    },
    {
        id: 'mf026',
        question: '마라톤 42.195km를 시속 14km로 달리면 몇 시간이 걸릴까요?',
        options: ['2시간 50분', '3시간', '3시간 10분', '3시간 20분'],
        correctAnswer: 1,
        explanation: '42.195 ÷ 14 ≈ 3시간이 걸려요!'
    },
    {
        id: 'mf027',
        question: '배구에서 한 세트가 25점이에요. 5세트 풀세트를 하면 최대 몇 점까지 나올 수 있나요?',
        options: ['115점', '125점', '135점', '145점'],
        correctAnswer: 0,
        explanation: '4세트는 25점, 마지막은 15점. 25×4+15=115점!'
    },
    {
        id: 'mf028',
        question: '피겨 점수가 기술점수 65점, 예술점수가 기술점수의 0.8배예요. 총점은?',
        options: ['112점', '115점', '117점', '120점'],
        correctAnswer: 2,
        explanation: '65 + (65×0.8) = 65 + 52 = 117점이에요!'
    },
    {
        id: 'mf029',
        question: '축구공 둘레가 70cm예요. 지름은 약 몇 cm일까요? (π=3.14)',
        options: ['20cm', '22cm', '24cm', '26cm'],
        correctAnswer: 1,
        explanation: '둘레÷π = 70÷3.14 ≈ 22cm예요!'
    },
    {
        id: 'mf030',
        question: '테니스 세트 점수가 6-4, 3-6, 7-5예요. 이긴 게임 수와 진 게임 수의 차이는?',
        options: ['2게임', '3게임', '4게임', '5게임'],
        correctAnswer: 0,
        explanation: '이긴 것 16게임, 진 것 14게임. 16-14=2게임!'
    },

    // 31-40: 공룡 & 고생물 테마
    {
        id: 'mf031',
        question: '티라노사우루스가 시속 32km로 달려요. 15분 동안 몇 km를 달릴까요?',
        options: ['6km', '7km', '8km', '9km'],
        correctAnswer: 2,
        explanation: '32km/시간 × 0.25시간 = 8km예요!'
    },
    {
        id: 'mf032',
        question: '브라키오사우루스 키가 13m예요. 기린(5.5m)보다 몇 배 더 클까요?',
        options: ['2.1배', '2.4배', '2.7배', '3배'],
        correctAnswer: 1,
        explanation: '13 ÷ 5.5 ≈ 2.4배 더 커요!'
    },
    {
        id: 'mf033',
        question: '삼엽충 화석이 5억 4천만년 전 것이에요. 공룡(2억 3천만년 전)보다 몇 년 더 오래됐나요?',
        options: ['3억년', '3억 1천만년', '3억 2천만년', '3억 3천만년'],
        correctAnswer: 1,
        explanation: '5억 4천만 - 2억 3천만 = 3억 1천만년이에요!'
    },
    {
        id: 'mf034',
        question: '벨로키랍토르가 하루에 고기를 15kg 먹어요. 한 달(30일) 동안 몇 kg을 먹나요?',
        options: ['420kg', '430kg', '440kg', '450kg'],
        correctAnswer: 3,
        explanation: '15kg × 30일 = 450kg을 먹어요!'
    },
    {
        id: 'mf035',
        question: '익룡의 날개 길이가 12m예요. 양쪽 날개를 펼치면 몸통(3m)을 포함해 전체 너비는?',
        options: ['24m', '25m', '26m', '27m'],
        correctAnswer: 3,
        explanation: '12m + 12m + 3m = 27m예요!'
    },
    {
        id: 'mf036',
        question: '스테고사우루스 등에 골판이 17개예요. 앞쪽 7개가 뒤쪽보다 작다면, 큰 골판은 몇 개?',
        options: ['8개', '9개', '10개', '11개'],
        correctAnswer: 2,
        explanation: '17개 - 7개 = 10개가 큰 골판이에요!'
    },
    {
        id: 'mf037',
        question: '공룡 발자국 보폭이 1.8m예요. 25개의 발자국이 있다면 공룡이 이동한 거리는?',
        options: ['42m', '43m', '44m', '45m'],
        correctAnswer: 3,
        explanation: '1.8m × 25개 = 45m를 이동했어요!'
    },
    {
        id: 'mf038',
        question: '모사사우루스가 물속에서 시속 48km로 헤엄쳐요. 분당 몇 m를 가나요?',
        options: ['700m', '750m', '800m', '850m'],
        correctAnswer: 2,
        explanation: '48km/시 = 48000m/60분 = 800m/분이에요!'
    },
    {
        id: 'mf039',
        question: '트리케라톱스 뿔 3개의 길이가 각각 1m, 0.3m, 0.3m예요. 평균 길이는?',
        options: ['0.5m', '0.53m', '0.56m', '0.6m'],
        correctAnswer: 1,
        explanation: '(1+0.3+0.3)÷3 = 1.6÷3 ≈ 0.53m예요!'
    },
    {
        id: 'mf040',
        question: '공룡 박물관 입장료가 어른 12,000원, 어린이는 40% 할인이에요. 어린이 입장료는?',
        options: ['6,800원', '7,000원', '7,200원', '7,400원'],
        correctAnswer: 2,
        explanation: '12,000 × 0.6 = 7,200원이에요!'
    },

    // 41-50: 우주 & 과학 테마
    {
        id: 'mf041',
        question: '지구에서 달까지 거리가 38만km예요. 왕복하면 몇 km인가요?',
        options: ['72만km', '74만km', '76만km', '78만km'],
        correctAnswer: 2,
        explanation: '38만km × 2 = 76만km예요!'
    },
    {
        id: 'mf042',
        question: '국제우주정거장이 지구를 90분에 한 바퀴 돌아요. 하루(24시간)에 몇 바퀴?',
        options: ['14바퀴', '15바퀴', '16바퀴', '17바퀴'],
        correctAnswer: 2,
        explanation: '24시간 = 1440분, 1440÷90 = 16바퀴예요!'
    },
    {
        id: 'mf043',
        question: '화성의 하루는 24시간 37분이에요. 지구보다 몇 분 더 길까요?',
        options: ['35분', '36분', '37분', '38분'],
        correctAnswer: 2,
        explanation: '24시간 37분 - 24시간 = 37분 더 길어요!'
    },
    {
        id: 'mf044',
        question: '빛의 속도로 1초에 지구를 7.5바퀴 돌 수 있어요. 4초면 몇 바퀴?',
        options: ['28바퀴', '29바퀴', '30바퀴', '31바퀴'],
        correctAnswer: 2,
        explanation: '7.5바퀴 × 4초 = 30바퀴예요!'
    },
    {
        id: 'mf045',
        question: '목성의 위성이 79개예요. 토성 위성(82개)과 합치면 모두 몇 개?',
        options: ['159개', '160개', '161개', '162개'],
        correctAnswer: 2,
        explanation: '79개 + 82개 = 161개예요!'
    },
    {
        id: 'mf046',
        question: '로켓 연료가 분당 2.5톤씩 소모돼요. 10분 발사에 필요한 연료는?',
        options: ['23톤', '24톤', '25톤', '26톤'],
        correctAnswer: 2,
        explanation: '2.5톤 × 10분 = 25톤이 필요해요!'
    },
    {
        id: 'mf047',
        question: '태양계 행성 8개 중 지구보다 큰 행성이 4개예요. 작거나 같은 행성은 몇 개?',
        options: ['3개', '4개', '5개', '6개'],
        correctAnswer: 1,
        explanation: '8개 - 4개 = 4개 (지구 포함)예요!'
    },
    {
        id: 'mf048',
        question: '우주복 무게가 지구에서 130kg인데, 달에서는 1/6이 돼요. 달에서의 무게는?',
        options: ['20kg', '21.7kg', '22.5kg', '23kg'],
        correctAnswer: 1,
        explanation: '130kg ÷ 6 ≈ 21.7kg이에요!'
    },
    {
        id: 'mf049',
        question: '화성 탐사선이 7개월 만에 도착해요. 며칠이 걸린 건가요? (한 달=30일)',
        options: ['200일', '205일', '210일', '215일'],
        correctAnswer: 2,
        explanation: '7개월 × 30일 = 210일이에요!'
    },
    {
        id: 'mf050',
        question: '은하수에 별이 2000억 개 있어요. 안드로메다 은하는 2배 많다면 몇 개?',
        options: ['3000억개', '3500억개', '4000억개', '4500억개'],
        correctAnswer: 2,
        explanation: '2000억 × 2 = 4000억 개예요!'
    }
];

// 기존 중간 문제에 추가
if (typeof window.mediumQuestions !== 'undefined') {
    window.mediumQuestions = [...window.mediumQuestions, ...window.mediumFunQuestions];
} else {
    window.mediumQuestions = window.mediumFunQuestions;
}

console.log('재미있는 중간 난이도 문제 50개 추가 완료!');