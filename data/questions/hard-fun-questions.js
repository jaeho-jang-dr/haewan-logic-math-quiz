// 아이들이 좋아하는 재미있는 이야기로 만든 어려운 문제 50개
window.hardFunQuestions = [
    // 1-10: 마블 히어로 복잡한 계산
    {
        id: 'hf001',
        question: '아이언맨 슈트가 마하 3(시속 3,675km)로 날아요. 서울에서 뉴욕(11,000km)까지 몇 시간?',
        options: ['2시간 30분', '2시간 45분', '3시간', '3시간 15분'],
        correctAnswer: 2,
        explanation: '11,000km ÷ 3,675km/시 ≈ 3시간이 걸려요!'
    },
    {
        id: 'hf002',
        question: '타노스가 인피니티 스톤으로 우주 생명체의 50%를 없앴어요. 원래 80억이었다면 3번 핑거스냅 후 남은 수는?',
        options: ['5억', '7.5억', '10억', '12.5억'],
        correctAnswer: 2,
        explanation: '80억 × 0.5 × 0.5 × 0.5 = 10억이 남아요!'
    },
    {
        id: 'hf003',
        question: '스파이더맨의 거미줄이 초속 25m로 나가요. 150m 높이 빌딩 꼭대기까지 도달하는 시간은?',
        options: ['5초', '5.5초', '6초', '6.5초'],
        correctAnswer: 2,
        explanation: '150m ÷ 25m/초 = 6초가 걸려요!'
    },
    {
        id: 'hf004',
        question: '토르의 번개가 빛의 1/3 속도예요. 빛이 초속 30만km라면 번개 속도는?',
        options: ['초속 8만km', '초속 9만km', '초속 10만km', '초속 11만km'],
        correctAnswer: 2,
        explanation: '30만km × 1/3 = 10만km/초예요!'
    },
    {
        id: 'hf005',
        question: '헐크가 화날 때마다 힘이 2배가 돼요. 처음 10톤을 들 수 있다면 5번 화난 후에는?',
        options: ['160톤', '240톤', '320톤', '480톤'],
        correctAnswer: 2,
        explanation: '10 × 2^5 = 10 × 32 = 320톤이에요!'
    },
    {
        id: 'hf006',
        question: '닥터 스트레인지가 14,000,605개의 미래를 봤어요. 이기는 경우가 1개라면 확률은?',
        options: ['0.000007%', '0.00007%', '0.0007%', '0.007%'],
        correctAnswer: 0,
        explanation: '1 ÷ 14,000,605 × 100 ≈ 0.000007%예요!'
    },
    {
        id: 'hf007',
        question: '앤트맨이 0.5cm로 줄어들었어요. 원래 180cm였다면 몇 분의 1로 줄어든 건가요?',
        options: ['1/180', '1/360', '1/540', '1/720'],
        correctAnswer: 1,
        explanation: '180cm ÷ 0.5cm = 360, 즉 1/360로 줄었어요!'
    },
    {
        id: 'hf008',
        question: '캡틴 마블이 은하를 가로질러 100광년을 10일에 갔어요. 하루에 몇 광년을 간 건가요?',
        options: ['8광년', '9광년', '10광년', '11광년'],
        correctAnswer: 2,
        explanation: '100광년 ÷ 10일 = 10광년/일이에요!'
    },
    {
        id: 'hf009',
        question: '워머신의 미니건이 분당 3,000발을 쏴요. 5초 동안 몇 발을 쏠까요?',
        options: ['200발', '225발', '250발', '275발'],
        correctAnswer: 2,
        explanation: '3,000발/분 ÷ 60초 × 5초 = 250발이에요!'
    },
    {
        id: 'hf010',
        question: '비전의 밀도가 다이아몬드의 3배예요. 다이아몬드가 3.5g/cm³라면 비전의 밀도는?',
        options: ['9.5g/cm³', '10g/cm³', '10.5g/cm³', '11g/cm³'],
        correctAnswer: 2,
        explanation: '3.5 × 3 = 10.5g/cm³예요!'
    },

    // 11-20: 게임 속 복잡한 수학
    {
        id: 'hf011',
        question: '마인크래프트에서 철 인곳 9개로 철 블록 1개를 만들어요. 철 블록 64개를 만들려면 철 인곳이 몇 개?',
        options: ['512개', '544개', '576개', '608개'],
        correctAnswer: 2,
        explanation: '9개 × 64 = 576개가 필요해요!'
    },
    {
        id: 'hf012',
        question: '포켓몬 경험치가 레벨³에 비례해요. 레벨 10일 때 1,000이면 레벨 20일 때는?',
        options: ['4,000', '6,000', '8,000', '10,000'],
        correctAnswer: 2,
        explanation: '20³/10³ = 8,000/1,000 = 8배, 즉 8,000이에요!'
    },
    {
        id: 'hf013',
        question: '로블록스에서 로벅스 1개가 1.25원이에요. 8,000로벅스를 사려면 얼마가 필요?',
        options: ['8,500원', '9,000원', '9,500원', '10,000원'],
        correctAnswer: 3,
        explanation: '8,000 × 1.25 = 10,000원이 필요해요!'
    },
    {
        id: 'hf014',
        question: '오버워치에서 체력 200, 방어막 150이에요. 50% 피해 감소 시 총 700 데미지를 받으면?',
        options: ['살아있음', '체력 50 남음', '딱 죽음', '이미 죽음'],
        correctAnswer: 0,
        explanation: '700 × 0.5 = 350 < 350(총 체력) 살아있어요!'
    },
    {
        id: 'hf015',
        question: '리그오브레전드 게임이 평균 35분이에요. 하루 8시간 플레이하면 몇 판?',
        options: ['12판', '13판', '14판', '15판'],
        correctAnswer: 1,
        explanation: '480분 ÷ 35분 ≈ 13.7, 즉 13판 가능해요!'
    },
    {
        id: 'hf016',
        question: '배틀그라운드 안전지대가 매번 면적의 40%로 줄어요. 3번 줄어들면 원래의 몇 %?',
        options: ['6.4%', '8.2%', '10.4%', '12.8%'],
        correctAnswer: 0,
        explanation: '0.4 × 0.4 × 0.4 = 0.064 = 6.4%예요!'
    },
    {
        id: 'hf017',
        question: '피파 선수 능력치가 속력 92, 슈팅 88, 패스 85예요. 평균은? (소수점 첫째자리)',
        options: ['87.5', '88.0', '88.3', '88.7'],
        correctAnswer: 2,
        explanation: '(92+88+85)÷3 = 265÷3 = 88.3이에요!'
    },
    {
        id: 'hf018',
        question: '쿠키런에서 젤리 점수가 첫 100개는 각 10점, 다음 100개는 각 15점이에요. 200개 먹으면?',
        options: ['2,000점', '2,250점', '2,500점', '2,750점'],
        correctAnswer: 2,
        explanation: '(100×10) + (100×15) = 1,000 + 1,500 = 2,500점!'
    },
    {
        id: 'hf019',
        question: '클래시로얄 엘릭서가 2.8초마다 1개 차요. 3분 경기에서 몇 개를 모을까요?',
        options: ['60개', '62개', '64개', '66개'],
        correctAnswer: 2,
        explanation: '180초 ÷ 2.8초 ≈ 64.3, 즉 64개를 모아요!'
    },
    {
        id: 'hf020',
        question: '젤다 하트 1개가 체력 4칸이에요. 최대 30개 하트면 체력은 몇 칸?',
        options: ['100칸', '110칸', '120칸', '130칸'],
        correctAnswer: 2,
        explanation: '30개 × 4칸 = 120칸이에요!'
    },

    // 21-30: 수학적 패턴과 수열
    {
        id: 'hf021',
        question: '피보나치 수열을 따르는 토끼 번식: 1, 1, 2, 3, 5, 8, ? 다음 숫자는?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 2,
        explanation: '5 + 8 = 13, 피보나치 수열이에요!'
    },
    {
        id: 'hf022',
        question: '정삼각형 구슬 탑: 1층 1개, 2층 3개, 3층 6개... 5층까지 총 몇 개?',
        options: ['30개', '33개', '35개', '37개'],
        correctAnswer: 2,
        explanation: '1+3+6+10+15 = 35개 (삼각수의 합)예요!'
    },
    {
        id: 'hf023',
        question: '2의 거듭제곱 마법: 2¹=2, 2²=4, 2³=8... 2⁸은?',
        options: ['128', '192', '256', '320'],
        correctAnswer: 2,
        explanation: '2⁸ = 256이에요!'
    },
    {
        id: 'hf024',
        question: '별 모양 만들기: 5각별 1개는 꼭짓점 5개. 이런 별 12개를 겹치지 않게 그리면 꼭짓점은?',
        options: ['50개', '55개', '60개', '65개'],
        correctAnswer: 2,
        explanation: '5개 × 12 = 60개의 꼭짓점이에요!'
    },
    {
        id: 'hf025',
        question: '등차수열 계단: 3, 7, 11, 15... 10번째 계단의 숫자는?',
        options: ['35', '37', '39', '41'],
        correctAnswer: 2,
        explanation: '첫째항 3 + (공차 4 × 9) = 3 + 36 = 39예요!'
    },
    {
        id: 'hf026',
        question: '정육면체 주사위를 27개 붙여서 큰 정육면체를 만들면 한 변에 몇 개?',
        options: ['3개', '4개', '5개', '6개'],
        correctAnswer: 0,
        explanation: '3³ = 27이므로 한 변에 3개씩이에요!'
    },
    {
        id: 'hf027',
        question: '팩토리얼 카드게임: 5! (5 팩토리얼) = 5×4×3×2×1 = ?',
        options: ['100', '110', '120', '130'],
        correctAnswer: 2,
        explanation: '5! = 120이에요!'
    },
    {
        id: 'hf028',
        question: '원주율 파이(π) ≈ 3.14. 지름 7cm 피자의 둘레는? (소수점 첫째자리)',
        options: ['21.0cm', '21.5cm', '22.0cm', '22.5cm'],
        correctAnswer: 2,
        explanation: '7 × 3.14 = 21.98 ≈ 22.0cm예요!'
    },
    {
        id: 'hf029',
        question: '등비수열 보물: 2개, 6개, 18개... 다음은 몇 개?',
        options: ['36개', '42개', '48개', '54개'],
        correctAnswer: 3,
        explanation: '공비가 3이므로 18 × 3 = 54개예요!'
    },
    {
        id: 'hf030',
        question: '완전수 6의 약수는 1,2,3,6이고 1+2+3=6이에요. 다음 완전수는?',
        options: ['24', '26', '28', '30'],
        correctAnswer: 2,
        explanation: '28의 약수 1,2,4,7,14의 합이 28이에요!'
    },

    // 31-40: 실생활 응용 문제
    {
        id: 'hf031',
        question: 'K-POP 콘서트장 좌석이 가로 45개, 세로 80줄이에요. 총 좌석 수는?',
        options: ['3,200석', '3,400석', '3,600석', '3,800석'],
        correctAnswer: 2,
        explanation: '45 × 80 = 3,600석이에요!'
    },
    {
        id: 'hf032',
        question: '할인마트에서 3+1 행사 중이에요. 12개를 사려면 돈은 몇 개 값을 내야 하나요?',
        options: ['8개', '9개', '10개', '11개'],
        correctAnswer: 1,
        explanation: '12개 = 3×3 + 3, 즉 9개 값만 내면 돼요!'
    },
    {
        id: 'hf033',
        question: '수영장이 길이 50m, 폭 25m, 깊이 2m예요. 물의 부피는? (1m³=1,000L)',
        options: ['2,000,000L', '2,250,000L', '2,500,000L', '2,750,000L'],
        correctAnswer: 2,
        explanation: '50×25×2 = 2,500m³ = 2,500,000L예요!'
    },
    {
        id: 'hf034',
        question: '비행기가 시속 900km로 날아요. 4,500km 거리를 가는데 시차가 2시간이면 도착 시각은?',
        options: ['출발 3시간 후', '출발 5시간 후', '출발 7시간 후', '출발 9시간 후'],
        correctAnswer: 2,
        explanation: '비행 5시간 + 시차 2시간 = 7시간 후예요!'
    },
    {
        id: 'hf035',
        question: '피자 한 판을 8조각으로 잘랐어요. 5명이 1.5조각씩 먹으면 남는 조각은?',
        options: ['0.5조각', '1조각', '1.5조각', '2조각'],
        correctAnswer: 0,
        explanation: '8 - (5×1.5) = 8 - 7.5 = 0.5조각 남아요!'
    },
    {
        id: 'hf036',
        question: '휴대폰 배터리가 100%에서 시간당 12%씩 닫어요. 30%가 되는 시간은?',
        options: ['5시간 30분', '5시간 50분', '6시간 10분', '6시간 30분'],
        correctAnswer: 1,
        explanation: '(100-30)÷12 = 70÷12 ≈ 5.83시간 = 5시간 50분!'
    },
    {
        id: 'hf037',
        question: 'SNS 팔로워가 매달 20%씩 늘어요. 1,000명에서 시작하면 3개월 후는?',
        options: ['1,440명', '1,584명', '1,728명', '1,872명'],
        correctAnswer: 2,
        explanation: '1,000 × 1.2³ = 1,000 × 1.728 = 1,728명!'
    },
    {
        id: 'hf038',
        question: '온라인 수업이 45분인데 1.5배속으로 들으면 몇 분이 걸리나요?',
        options: ['25분', '28분', '30분', '32분'],
        correctAnswer: 2,
        explanation: '45분 ÷ 1.5 = 30분이 걸려요!'
    },
    {
        id: 'hf039',
        question: '원형 케이크 지름이 30cm예요. 부채꼴 모양으로 12등분하면 호의 길이는?',
        options: ['7.5cm', '7.85cm', '8.2cm', '8.5cm'],
        correctAnswer: 1,
        explanation: '(30×π)÷12 = 94.2÷12 ≈ 7.85cm예요!'
    },
    {
        id: 'hf040',
        question: '농구 자유투 성공률이 80%예요. 5개 던져서 4개 이상 성공할 확률은?',
        options: ['65.5%', '67.2%', '69.8%', '73.7%'],
        correctAnswer: 3,
        explanation: '4개 성공 + 5개 성공 확률 = 73.7%예요!'
    },

    // 41-50: 논리와 추론 문제
    {
        id: 'hf041',
        question: '4개의 주사위를 던져서 나온 숫자의 합이 14예요. 평균은?',
        options: ['3', '3.5', '4', '4.5'],
        correctAnswer: 1,
        explanation: '14 ÷ 4 = 3.5가 평균이에요!'
    },
    {
        id: 'hf042',
        question: '암호: A=1, B=2, C=3... LOVE의 숫자 합은?',
        options: ['48', '50', '52', '54'],
        correctAnswer: 3,
        explanation: 'L(12)+O(15)+V(22)+E(5) = 54예요!'
    },
    {
        id: 'hf043',
        question: '시계가 3시 15분일 때 시침과 분침 사이의 각도는?',
        options: ['0도', '3.75도', '7.5도', '11.25도'],
        correctAnswer: 2,
        explanation: '분침은 90도, 시침은 97.5도 위치. 차이는 7.5도!'
    },
    {
        id: 'hf044',
        question: '1부터 100까지 숫자 중 7이 들어간 숫자는 몇 개?',
        options: ['18개', '19개', '20개', '21개'],
        correctAnswer: 1,
        explanation: '7,17,27...97(10개) + 70~79(10개) - 77(중복) = 19개!'
    },
    {
        id: 'hf045',
        question: '정12면체 주사위의 모든 면의 숫자 합은? (1부터 12까지)',
        options: ['66', '72', '78', '84'],
        correctAnswer: 2,
        explanation: '1+2+...+12 = 12×13÷2 = 78이에요!'
    },
    {
        id: 'hf046',
        question: '이진법 1101₂는 십진법으로?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 2,
        explanation: '8+4+0+1 = 13이에요!'
    },
    {
        id: 'hf047',
        question: '마방진: 가로, 세로, 대각선 합이 모두 15. 중앙이 5일 때 모서리 4개의 합은?',
        options: ['18', '19', '20', '21'],
        correctAnswer: 2,
        explanation: '3×3 마방진에서 모서리 4개 합은 20이에요!'
    },
    {
        id: 'hf048',
        question: '계단을 올라가는 방법: 한 번에 1칸 또는 2칸. 4칸 계단을 오르는 방법의 수는?',
        options: ['3가지', '4가지', '5가지', '6가지'],
        correctAnswer: 2,
        explanation: '1111, 112, 121, 211, 22 총 5가지예요!'
    },
    {
        id: 'hf049',
        question: '주머니에 빨강 3개, 파랑 4개, 노랑 5개 구슬이 있어요. 최소 몇 개를 꺼내야 같은 색 3개 확실?',
        options: ['6개', '7개', '8개', '9개'],
        correctAnswer: 1,
        explanation: '최악의 경우 각 색 2개씩 + 1 = 7개예요!'
    },
    {
        id: 'hf050',
        question: '논리 퍼즐: "모든 A는 B다. 일부 B는 C다. 일부 C는 D다." 확실한 것은?',
        options: ['모든 A는 C다', '일부 A는 C일 수 있다', '모든 D는 A다', '일부 D는 B다'],
        correctAnswer: 1,
        explanation: 'A→B→C 경로가 있으므로 일부 A는 C일 수 있어요!'
    }
];

// 기존 어려운 문제에 추가
if (typeof window.hardQuestions !== 'undefined') {
    window.hardQuestions = [...window.hardQuestions, ...window.hardFunQuestions];
} else {
    window.hardQuestions = window.hardFunQuestions;
}

console.log('재미있는 어려운 문제 50개 추가 완료!');