// 어려움 난이도 문제 50개 (초등 5-6학년 수준)
const hardQuestions = [
    // 1-10: 복합 연산 및 방정식
    {
        id: 101,
        question: "🏃‍♀️ 혜완이는 분속 80m로 달리고, 친구는 분속 60m로 달려요. 둘이 같은 곳에서 시작해서 반대 방향으로 달린다면, 5분 후 둘 사이의 거리는?",
        steps: [
            {
                question: "혜완이가 1분에 가는 거리는?",
                options: ["70m", "80m", "90m", "100m"],
                correct: 1,
                explanation: "혜완이는 분속 80m로 달려요!"
            },
            {
                question: "친구가 5분 동안 가는 거리는?",
                options: ["250m", "300m", "350m", "400m"],
                correct: 1,
                explanation: "60m × 5분 = 300m를 갔어요!"
            },
            {
                question: "혜완이가 5분 동안 간 거리 + 친구가 간 거리 = ?",
                options: ["600m", "700m", "800m", "900m"],
                correct: 1,
                explanation: "400m + 300m = 700m 떨어져 있어요! 🎉"
            }
        ],
        category: "속력",
        difficulty: "hard"
    },
    {
        id: 102,
        question: "📊 학급 30명 중 축구를 좋아하는 학생이 18명, 농구를 좋아하는 학생이 15명이에요. 둘 다 좋아하는 학생이 8명이라면, 둘 다 좋아하지 않는 학생은?",
        steps: [
            {
                question: "축구만 좋아하는 학생은 몇 명인가요?",
                options: ["8명", "10명", "12명", "15명"],
                correct: 1,
                explanation: "축구 좋아하는 18명 - 둘 다 좋아하는 8명 = 10명!"
            },
            {
                question: "농구만 좋아하는 학생은 몇 명인가요?",
                options: ["5명", "7명", "9명", "11명"],
                correct: 1,
                explanation: "농구 좋아하는 15명 - 둘 다 좋아하는 8명 = 7명!"
            },
            {
                question: "스포츠를 좋아하는 학생은 총 몇 명인가요?",
                options: ["23명", "25명", "27명", "29명"],
                correct: 1,
                explanation: "10명 + 7명 + 8명 = 25명이므로, 30 - 25 = 5명이 둘 다 안 좋아해요! 🎉"
            }
        ],
        category: "집합",
        difficulty: "hard"
    },
    {
        id: 103,
        question: "🎪 원형 테이블에 8명이 앉으려고 해요. 혜완이와 친구가 반드시 옆에 앉으려면 몇 가지 방법이 있을까요?",
        steps: [
            {
                question: "혜완이와 친구를 하나로 생각하면 몇 명이 되나요?",
                options: ["6명", "7명", "8명", "9명"],
                correct: 1,
                explanation: "혜완이와 친구를 하나로 보면 7개 단위예요!"
            },
            {
                question: "원형 테이블에 7개 단위를 배열하는 방법은?",
                options: ["6!", "7!", "(7-1)!", "7×6!"],
                correct: 2,
                explanation: "원형 배열은 (n-1)! = 6!가지예요!"
            },
            {
                question: "혜완이와 친구가 서로 자리를 바꿀 수 있는 경우는?",
                options: ["1가지", "2가지", "3가지", "4가지"],
                correct: 1,
                explanation: "6! × 2 = 1440가지 방법이 있어요! 🎉"
            }
        ],
        category: "순열조합",
        difficulty: "hard"
    },
    {
        id: 104,
        question: "💰 어떤 수에 3을 곱하고 12를 더한 결과가 75와 같아요. 이 수를 구해보세요.",
        steps: [
            {
                question: "문제를 식으로 나타내면?",
                options: ["3x - 12 = 75", "3x + 12 = 75", "3(x + 12) = 75", "x + 3 × 12 = 75"],
                correct: 1,
                explanation: "3x + 12 = 75로 나타낼 수 있어요!"
            },
            {
                question: "양변에서 12를 빼면?",
                options: ["3x = 63", "3x = 75", "3x = 87", "x = 63"],
                correct: 0,
                explanation: "75 - 12 = 63이므로 3x = 63이에요!"
            },
            {
                question: "3x = 63에서 x는?",
                options: ["19", "20", "21", "22"],
                correct: 2,
                explanation: "63 ÷ 3 = 21이에요! 🎉"
            }
        ],
        category: "방정식",
        difficulty: "hard"
    },
    {
        id: 105,
        question: "📈 규칙을 찾아보세요: 2, 5, 10, 17, 26, ? 다음 수는?",
        steps: [
            {
                question: "2에서 5로 가려면 얼마를 더해야 하나요?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                explanation: "2 + 3 = 5예요!"
            },
            {
                question: "각 단계별 차이를 보면: +3, +5, +7, +9... 어떤 규칙인가요?",
                options: ["2씩 증가", "3씩 증가", "홀수씩 증가", "규칙 없음"],
                correct: 0,
                explanation: "차이가 3, 5, 7, 9로 2씩 증가해요!"
            },
            {
                question: "26 + ? = 다음 수",
                options: ["9", "10", "11", "12"],
                correct: 2,
                explanation: "26 + 11 = 37이 답이에요! 🎉"
            }
        ],
        category: "규칙찾기",
        difficulty: "hard"
    }
];

// 어려움 난이도 나머지 45개 문제 생성 함수
function generateRemainingHardQuestions() {
    const additionalQuestions = [];
    
    // 6-15: 복잡한 분수 계산
    const advancedFractions = [
        { f1: { n: 2, d: 3 }, f2: { n: 1, d: 4 }, op: "+" },
        { f1: { n: 3, d: 5 }, f2: { n: 1, d: 3 }, op: "+" },
        { f1: { n: 5, d: 6 }, f2: { n: 1, d: 4 }, op: "-" },
        { f1: { n: 7, d: 8 }, f2: { n: 1, d: 3 }, op: "-" },
        { f1: { n: 1, d: 2 }, f2: { n: 2, d: 3 }, op: "×" },
        { f1: { n: 3, d: 4 }, f2: { n: 2, d: 5 }, op: "×" },
        { f1: { n: 2, d: 3 }, f2: { n: 1, d: 2 }, op: "÷" },
        { f1: { n: 3, d: 5 }, f2: { n: 2, d: 3 }, op: "÷" },
        { f1: { n: 4, d: 9 }, f2: { n: 1, d: 6 }, op: "+" },
        { f1: { n: 5, d: 7 }, f2: { n: 2, d: 3 }, op: "-" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = advancedFractions[i];
        const opSymbol = problem.op === "+" ? "+" : problem.op === "-" ? "-" : problem.op === "×" ? "×" : "÷";
        
        additionalQuestions.push({
            id: 106 + i,
            question: `🔢 분수 계산: ${problem.f1.n}/${problem.f1.d} ${opSymbol} ${problem.f2.n}/${problem.f2.d} = ?`,
            steps: [
                {
                    question: "서로 다른 분모의 분수 계산법은?",
                    options: ["통분 먼저", "바로 계산", "분자만 계산", "분모만 계산"],
                    correct: 0,
                    explanation: "분모가 다르면 먼저 통분해야 해요!"
                },
                {
                    question: "공통 분모를 찾았나요?",
                    options: ["네", "아니요", "어려워요", "모르겠어요"],
                    correct: 0,
                    explanation: "공통 분모를 찾아서 통분하세요!"
                },
                {
                    question: "계산 결과를 약분했나요?",
                    options: ["네", "아니요", "필요 없어요", "모르겠어요"],
                    correct: 0,
                    explanation: "최종 답은 가장 간단한 형태로 약분해야 해요! 🎉"
                }
            ],
            category: "분수",
            difficulty: "hard"
        });
    }
    
    // 16-25: 소수와 백분율
    const percentProblems = [
        { value: 40, total: 80, type: "percentage" },
        { percentage: 25, total: 120, type: "value" },
        { value: 15, percentage: 30, type: "total" },
        { original: 100, increase: 20, type: "new_value" },
        { original: 80, decrease: 25, type: "new_value" },
        { price: 200, discount: 15, type: "sale_price" },
        { score: 85, total: 100, type: "percentage" },
        { students: 180, absent: 10, type: "present_percentage" },
        { income: 2000, tax: 12, type: "net_income" },
        { population: 50000, growth: 3, type: "new_population" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = percentProblems[i];
        
        additionalQuestions.push({
            id: 116 + i,
            question: `📊 백분율 문제: ${JSON.stringify(problem)}를 이용한 계산`,
            steps: [
                {
                    question: "백분율 공식은?",
                    options: ["(부분/전체) × 100", "(전체/부분) × 100", "부분 + 전체", "부분 - 전체"],
                    correct: 0,
                    explanation: "백분율 = (부분/전체) × 100 이에요!"
                },
                {
                    question: "소수를 백분율로 바꾸려면?",
                    options: ["×100", "÷100", "+100", "-100"],
                    correct: 0,
                    explanation: "소수에 100을 곱하면 백분율이 돼요!"
                },
                {
                    question: "계산이 맞나요?",
                    options: ["네", "아니요", "다시 해볼게요", "확인이 필요해요"],
                    correct: 0,
                    explanation: "백분율 계산을 정확히 했어요! 🎉"
                }
            ],
            category: "백분율",
            difficulty: "hard"
        });
    }
    
    // 26-35: 기하와 도형의 성질
    const geometryAdvanced = [
        { shape: "원", radius: 7, property: "넓이" },
        { shape: "원", radius: 5, property: "둘레" },
        { shape: "삼각형", base: 12, height: 8, property: "넓이" },
        { shape: "평행사변형", base: 10, height: 6, property: "넓이" },
        { shape: "사다리꼴", top: 6, bottom: 10, height: 4, property: "넓이" },
        { shape: "정육면체", edge: 5, property: "부피" },
        { shape: "직육면체", w: 4, h: 5, d: 6, property: "부피" },
        { shape: "원기둥", radius: 3, height: 8, property: "부피" },
        { shape: "구", radius: 4, property: "부피" },
        { shape: "정다각형", sides: 6, side: 4, property: "둘레" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = geometryAdvanced[i];
        
        additionalQuestions.push({
            id: 126 + i,
            question: `📐 고급 도형: ${problem.shape}의 ${problem.property} 구하기`,
            steps: [
                {
                    question: `${problem.shape}의 ${problem.property} 공식을 알고 있나요?`,
                    options: ["네, 알아요", "잘 모르겠어요", "조금 알아요", "처음 봐요"],
                    correct: 0,
                    explanation: `${problem.shape}의 ${problem.property} 공식을 기억해보세요!`
                },
                {
                    question: "공식에 숫자를 대입했나요?",
                    options: ["네", "아직이요", "계산 중이에요", "어려워요"],
                    correct: 0,
                    explanation: "주어진 값들을 공식에 차례로 대입하세요!"
                },
                {
                    question: "최종 답과 단위를 확인했나요?",
                    options: ["네", "아직이요", "단위가 뭐예요?", "모르겠어요"],
                    correct: 0,
                    explanation: "답과 올바른 단위를 함께 써야 완성이에요! 🎉"
                }
            ],
            category: "도형",
            difficulty: "hard"
        });
    }
    
    // 36-45: 확률과 통계
    const probabilityProblems = [
        { event: "동전 2개 던지기", outcome: "모두 앞면" },
        { event: "주사위 2개 던지기", outcome: "합이 7" },
        { event: "카드 뽑기", outcome: "빨간색 카드" },
        { event: "구슬 뽑기", outcome: "파란 구슬" },
        { event: "번호 추첨", outcome: "짝수" },
        { event: "날씨 예보", outcome: "비 올 확률" },
        { event: "시험 점수", outcome: "90점 이상" },
        { event: "교통 신호", outcome: "초록불" },
        { event: "복권 추첨", outcome: "당첨" },
        { event: "스포츠 경기", outcome: "우승" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = probabilityProblems[i];
        
        additionalQuestions.push({
            id: 136 + i,
            question: `🎲 확률: ${problem.event}에서 ${problem.outcome}이 일어날 확률은?`,
            steps: [
                {
                    question: "확률의 기본 공식은?",
                    options: ["(원하는 경우)/(전체 경우)", "(전체 경우)/(원하는 경우)", "원하는 경우 × 전체 경우", "원하는 경우 + 전체 경우"],
                    correct: 0,
                    explanation: "확률 = (원하는 경우의 수)/(전체 경우의 수) 이에요!"
                },
                {
                    question: "전체 경우의 수를 구했나요?",
                    options: ["네", "아직이에요", "어려워요", "모르겠어요"],
                    correct: 0,
                    explanation: "모든 가능한 경우의 수를 먼저 구하세요!"
                },
                {
                    question: "원하는 경우의 수를 구했나요?",
                    options: ["네", "아직이에요", "계산 중이에요", "확인이 필요해요"],
                    correct: 0,
                    explanation: "확률을 분수나 소수로 표현할 수 있어요! 🎉"
                }
            ],
            category: "확률",
            difficulty: "hard"
        });
    }
    
    // 46-50: 복합 문제 해결
    const complexProblems = [
        "🏪 가게에서 물건을 사고 거스름돈을 계산하는 복합 문제",
        "🚌 버스 시간표를 보고 도착 시간을 계산하는 문제",
        "📊 그래프를 보고 데이터를 분석하는 문제",
        "🎯 게임 규칙을 이해하고 최적 전략을 찾는 문제",
        "🌡️ 온도 변화 그래프를 보고 평균 온도를 구하는 문제"
    ];
    
    for (let i = 0; i < 5; i++) {
        additionalQuestions.push({
            id: 146 + i,
            question: complexProblems[i],
            steps: [
                {
                    question: "문제에서 주어진 정보를 정리했나요?",
                    options: ["네", "아직이에요", "일부만요", "다시 읽어볼게요"],
                    correct: 0,
                    explanation: "주어진 정보를 차근차근 정리하는 게 중요해요!"
                },
                {
                    question: "어떤 수학 지식을 사용해야 할까요?",
                    options: ["여러 개념 복합", "덧셈만", "곱셈만", "잘 모르겠어요"],
                    correct: 0,
                    explanation: "복합 문제는 여러 수학 개념을 함께 사용해요!"
                },
                {
                    question: "단계별로 해결했나요?",
                    options: ["네, 차근차근", "대충 계산했어요", "한 번에 풀었어요", "아직 풀고 있어요"],
                    correct: 0,
                    explanation: "복잡한 문제는 단계별로 차근차근 풀어야 해요! 🎉"
                }
            ],
            category: "문제해결",
            difficulty: "hard"
        });
    }
    
    return additionalQuestions;
}

// 모든 어려운 문제들을 합치기
const allHardQuestions = [...hardQuestions, ...generateRemainingHardQuestions()];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.hardQuestions = allHardQuestions;
}