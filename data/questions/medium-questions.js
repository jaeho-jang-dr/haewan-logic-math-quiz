// 중간 난이도 문제 50개 (초등 3-4학년 수준)
const mediumQuestions = [
    // 1-10: 분수 문제
    {
        id: 51,
        question: "🍕 피자를 8조각으로 자르고, 혜완이가 3조각, 친구가 2조각을 먹었어요. 남은 피자는 전체의 몇 분의 몇일까요?",
        steps: [
            {
                question: "피자를 몇 조각으로 잘랐나요?",
                options: ["6조각", "7조각", "8조각", "9조각"],
                correct: 2,
                explanation: "🍕을 8조각으로 잘랐어요!"
            },
            {
                question: "혜완이와 친구가 먹은 피자는 총 몇 조각인가요?",
                options: ["4조각", "5조각", "6조각", "7조각"],
                correct: 1,
                explanation: "3조각 + 2조각 = 5조각을 먹었어요!"
            },
            {
                question: "8조각 중 5조각을 먹었다면, 남은 피자는?",
                options: ["2/8", "3/8", "4/8", "5/8"],
                correct: 1,
                explanation: "8 - 5 = 3조각, 즉 3/8이 남았어요! 🎉"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    {
        id: 52,
        question: "🎯 다트게임에서 10점, 20점, 30점을 맞혔어요. 평균 점수는 몇 점일까요?",
        steps: [
            {
                question: "맞힌 점수를 모두 더하면 몇 점인가요?",
                options: ["50점", "60점", "70점", "80점"],
                correct: 1,
                explanation: "10 + 20 + 30 = 60점이에요!"
            },
            {
                question: "총 몇 번의 다트를 던졌나요?",
                options: ["2번", "3번", "4번", "5번"],
                correct: 1,
                explanation: "3번 던져서 각각 점수를 얻었어요!"
            },
            {
                question: "평균 점수는 총합 ÷ 횟수 = ?",
                options: ["15점", "20점", "25점", "30점"],
                correct: 1,
                explanation: "60 ÷ 3 = 20점이 평균이에요! 🎉"
            }
        ],
        category: "평균",
        difficulty: "medium"
    },
    {
        id: 53,
        question: "📐 직사각형의 가로가 12cm, 세로가 8cm일 때, 둘레는 몇 cm일까요?",
        steps: [
            {
                question: "직사각형의 가로는 몇 cm인가요?",
                options: ["10cm", "11cm", "12cm", "13cm"],
                correct: 2,
                explanation: "가로가 12cm예요!"
            },
            {
                question: "직사각형의 둘레 공식은 무엇인가요?",
                options: ["가로 × 세로", "2 × (가로 + 세로)", "가로 + 세로", "가로 ÷ 세로"],
                correct: 1,
                explanation: "둘레 = 2 × (가로 + 세로)예요!"
            },
            {
                question: "2 × (12 + 8) = ?",
                options: ["30cm", "35cm", "40cm", "45cm"],
                correct: 2,
                explanation: "2 × 20 = 40cm가 둘레예요! 🎉"
            }
        ],
        category: "도형",
        difficulty: "medium"
    },
    {
        id: 54,
        question: "🕐 시계가 3시 15분을 가리키고 있어요. 1시간 45분 후는 몇 시 몇 분일까요?",
        steps: [
            {
                question: "현재 시간은 몇 시 몇 분인가요?",
                options: ["3시 10분", "3시 15분", "3시 20분", "3시 25분"],
                correct: 1,
                explanation: "현재 3시 15분이에요!"
            },
            {
                question: "15분 + 45분은 몇 분인가요?",
                options: ["50분", "55분", "60분", "65분"],
                correct: 2,
                explanation: "15분 + 45분 = 60분 = 1시간이에요!"
            },
            {
                question: "3시 + 1시간 + 1시간 = ?",
                options: ["4시", "5시", "5시 15분", "6시"],
                correct: 1,
                explanation: "3시 + 2시간 = 5시 정각이에요! 🎉"
            }
        ],
        category: "시간",
        difficulty: "medium"
    },
    {
        id: 55,
        question: "🎲 주사위를 두 번 굴려서 나온 숫자의 합이 7이 되는 경우의 수는 몇 가지일까요?",
        steps: [
            {
                question: "주사위에는 1부터 몇까지의 숫자가 있나요?",
                options: ["5", "6", "7", "8"],
                correct: 1,
                explanation: "주사위에는 1, 2, 3, 4, 5, 6이 있어요!"
            },
            {
                question: "첫 번째가 1이면, 두 번째는 몇이 나와야 할까요?",
                options: ["5", "6", "7", "8"],
                correct: 1,
                explanation: "1 + 6 = 7이므로 6이 나와야 해요!"
            },
            {
                question: "합이 7이 되는 모든 경우는? (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)",
                options: ["5가지", "6가지", "7가지", "8가지"],
                correct: 1,
                explanation: "총 6가지 경우가 있어요! 🎉"
            }
        ],
        category: "확률",
        difficulty: "medium"
    }
];

// 중간 난이도 나머지 45개 문제 생성 함수
function generateRemainingMediumQuestions() {
    const additionalQuestions = [];
    
    // 6-15: 분수 계산
    const fractionProblems = [
        { num1: 1, den1: 4, num2: 1, den2: 4, op: "더하기" },
        { num1: 3, den1: 8, num2: 1, den2: 8, op: "더하기" },
        { num1: 2, den1: 3, num2: 1, den2: 6, op: "더하기" },
        { num1: 3, den1: 4, num2: 1, den2: 4, op: "빼기" },
        { num1: 5, den1: 6, num2: 1, den2: 6, op: "빼기" },
        { num1: 1, den1: 2, num2: 1, den2: 3, op: "더하기" },
        { num1: 2, den1: 5, num2: 1, den1: 5, op: "더하기" },
        { num1: 4, den1: 7, num2: 2, den2: 7, op: "빼기" },
        { num1: 3, den1: 5, num2: 1, den2: 5, op: "더하기" },
        { num1: 7, den1: 8, num2: 3, den2: 8, op: "빼기" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = fractionProblems[i];
        const isAddition = problem.op === "더하기";
        const result = isAddition ? 
            { num: problem.num1 + problem.num2, den: problem.den1 } :
            { num: problem.num1 - problem.num2, den: problem.den1 };
            
        additionalQuestions.push({
            id: 56 + i,
            question: `🎯 분수 계산: ${problem.num1}/${problem.den1} ${isAddition ? '+' : '-'} ${problem.num2}/${problem.den2} = ?`,
            steps: [
                {
                    question: "분모가 같은 분수의 계산법은?",
                    options: ["분자끼리 계산", "분모끼리 계산", "분자와 분모를 각각 계산", "새로운 분모를 만들기"],
                    correct: 0,
                    explanation: "분모가 같으면 분자끼리만 계산해요!"
                },
                {
                    question: `${problem.num1} ${isAddition ? '+' : '-'} ${problem.num2} = ?`,
                    options: [`${result.num-1}`, `${result.num}`, `${result.num+1}`, `${result.num+2}`],
                    correct: 1,
                    explanation: `${problem.num1} ${isAddition ? '+' : '-'} ${problem.num2} = ${result.num}이에요!`
                },
                {
                    question: `답은 ${result.num}/${result.den}인가요?`,
                    options: ["아니요", "네, 맞아요", "약분이 필요해요", "잘 모르겠어요"],
                    correct: 1,
                    explanation: `${result.num}/${result.den}이 정답이에요! 🎉`
                }
            ],
            category: "분수",
            difficulty: "medium"
        });
    }
    
    // 16-25: 소수 계산
    const decimalProblems = [
        { a: 2.5, b: 1.3, op: "+" },
        { a: 4.7, b: 2.4, op: "+" },
        { a: 6.8, b: 2.3, op: "-" },
        { a: 3.9, b: 1.5, op: "-" },
        { a: 2.4, b: 3, op: "×" },
        { a: 1.6, b: 2, op: "×" },
        { a: 4.8, b: 2, op: "÷" },
        { a: 6.4, b: 4, op: "÷" },
        { a: 5.2, b: 2.7, op: "+" },
        { a: 7.6, b: 3.4, op: "-" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = decimalProblems[i];
        let result;
        let opName;
        
        switch(problem.op) {
            case "+": result = problem.a + problem.b; opName = "더하기"; break;
            case "-": result = problem.a - problem.b; opName = "빼기"; break;
            case "×": result = problem.a * problem.b; opName = "곱하기"; break;
            case "÷": result = problem.a / problem.b; opName = "나누기"; break;
        }
        
        additionalQuestions.push({
            id: 66 + i,
            question: `🔢 소수 계산: ${problem.a} ${problem.op} ${problem.b} = ?`,
            steps: [
                {
                    question: "소수점 계산에서 가장 중요한 것은?",
                    options: ["소수점 위치", "큰 수부터 계산", "반올림", "암산"],
                    correct: 0,
                    explanation: "소수점의 위치를 정확히 맞추는 게 중요해요!"
                },
                {
                    question: `${problem.a}와 ${problem.b}를 ${opName}하면?`,
                    options: [`${result-0.1}`, `${result}`, `${result+0.1}`, `${result+0.2}`],
                    correct: 1,
                    explanation: `${problem.a} ${problem.op} ${problem.b} = ${result}이에요!`
                },
                {
                    question: "답이 맞나요?",
                    options: ["틀렸어요", "맞아요", "다시 계산해야 해요", "모르겠어요"],
                    correct: 1,
                    explanation: `${result}이 정답이에요! 🎉`
                }
            ],
            category: "소수",
            difficulty: "medium"
        });
    }
    
    // 26-35: 도형과 측정
    const geometryProblems = [
        { shape: "정사각형", side: 6, type: "둘레" },
        { shape: "정사각형", side: 5, type: "넓이" },
        { shape: "직사각형", width: 8, height: 6, type: "둘레" },
        { shape: "직사각형", width: 7, height: 4, type: "넓이" },
        { shape: "삼각형", base: 8, height: 6, type: "넓이" },
        { shape: "원", radius: 3, type: "둘레(원주)" },
        { shape: "정육면체", side: 4, type: "부피" },
        { shape: "직육면체", width: 3, height: 4, depth: 5, type: "부피" },
        { shape: "원", radius: 4, type: "넓이" },
        { shape: "정사각형", side: 8, type: "둘레" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = geometryProblems[i];
        let result;
        let formula;
        
        if (problem.shape === "정사각형") {
            if (problem.type === "둘레") {
                result = problem.side * 4;
                formula = "한 변 × 4";
            } else {
                result = problem.side * problem.side;
                formula = "한 변 × 한 변";
            }
        } else if (problem.shape === "직사각형") {
            if (problem.type === "둘레") {
                result = 2 * (problem.width + problem.height);
                formula = "2 × (가로 + 세로)";
            } else {
                result = problem.width * problem.height;
                formula = "가로 × 세로";
            }
        }
        
        additionalQuestions.push({
            id: 76 + i,
            question: `📐 ${problem.shape}의 ${problem.type}를 구해보세요. ${problem.shape === "정사각형" ? `한 변: ${problem.side}cm` : `가로: ${problem.width}cm, 세로: ${problem.height}cm`}`,
            steps: [
                {
                    question: `${problem.shape}의 ${problem.type} 공식은?`,
                    options: [formula, "잘못된 공식1", "잘못된 공식2", "잘못된 공식3"],
                    correct: 0,
                    explanation: `${problem.shape}의 ${problem.type}는 ${formula}로 구해요!`
                },
                {
                    question: `공식에 숫자를 넣으면?`,
                    options: [`${result-2}`, `${result}`, `${result+2}`, `${result+4}`],
                    correct: 1,
                    explanation: `계산하면 ${result}이 나와요!`
                },
                {
                    question: `단위는 무엇인가요?`,
                    options: [problem.type.includes("넓이") ? "cm²" : "cm", "kg", "L", "개"],
                    correct: 0,
                    explanation: `${problem.type}의 단위는 ${problem.type.includes("넓이") ? "cm²" : "cm"}예요! 🎉`
                }
            ],
            category: "도형",
            difficulty: "medium"
        });
    }
    
    // 36-45: 시간과 단위 변환
    const timeProblems = [
        { hours: 2, minutes: 30, operation: "30분 더하기" },
        { hours: 4, minutes: 15, operation: "45분 더하기" },
        { hours: 6, minutes: 20, operation: "50분 더하기" },
        { hours: 3, minutes: 45, operation: "25분 더하기" },
        { hours: 5, minutes: 10, operation: "40분 빼기" },
        { hours: 7, minutes: 30, operation: "45분 빼기" },
        { hours: 1, minutes: 20, operation: "2시간 더하기" },
        { hours: 8, minutes: 15, operation: "1시간 30분 더하기" },
        { hours: 4, minutes: 50, operation: "20분 더하기" },
        { hours: 6, minutes: 5, operation: "15분 더하기" }
    ];
    
    for (let i = 0; i < 10; i++) {
        const problem = timeProblems[i];
        
        additionalQuestions.push({
            id: 86 + i,
            question: `🕐 ${problem.hours}시 ${problem.minutes}분에서 ${problem.operation}하면 몇 시 몇 분일까요?`,
            steps: [
                {
                    question: `현재 시간은?`,
                    options: [`${problem.hours-1}시 ${problem.minutes}분`, `${problem.hours}시 ${problem.minutes}분`, `${problem.hours+1}시 ${problem.minutes}분`, `${problem.hours}시 ${problem.minutes+5}분`],
                    correct: 1,
                    explanation: `현재 ${problem.hours}시 ${problem.minutes}분이에요!`
                },
                {
                    question: `시간 계산에서 주의할 점은?`,
                    options: ["60분 = 1시간", "100분 = 1시간", "50분 = 1시간", "90분 = 1시간"],
                    correct: 0,
                    explanation: "60분이 1시간이므로 60분을 넘으면 시간을 올려야 해요!"
                },
                {
                    question: `계산 결과는?`,
                    options: ["정확히 계산해보세요", "대략 맞춰보세요", "시간만 계산하세요", "분만 계산하세요"],
                    correct: 0,
                    explanation: "정확한 시간 계산이 중요해요! 🎉"
                }
            ],
            category: "시간",
            difficulty: "medium"
        });
    }
    
    // 46-50: 문제 해결 및 논리
    const logicProblems = [
        "🧩 규칙 찾기: 2, 4, 6, 8, ? 다음 수는?",
        "🎪 패턴: ◯△◯△◯? 다음 도형은?",
        "🔍 추론: 모든 새는 날 수 있다. 참새는 새다. 그러면 참새는?",
        "🧠 논리: A>B, B>C라면 A와 C의 관계는?",
        "🎯 확률: 동전을 던져서 앞면이 나올 확률은?"
    ];
    
    for (let i = 0; i < 5; i++) {
        additionalQuestions.push({
            id: 96 + i,
            question: logicProblems[i],
            steps: [
                {
                    question: "문제의 핵심은 무엇인가요?",
                    options: ["규칙 찾기", "암산하기", "외우기", "추측하기"],
                    correct: 0,
                    explanation: "규칙이나 패턴을 찾는 게 중요해요!"
                },
                {
                    question: "단계별로 생각해보세요",
                    options: ["차근차근 분석", "빨리 답하기", "다른 문제 보기", "포기하기"],
                    correct: 0,
                    explanation: "논리적으로 차근차근 분석해야 해요!"
                },
                {
                    question: "답을 찾았나요?",
                    options: ["네, 찾았어요", "아직 모르겠어요", "다시 생각해볼게요", "힌트가 필요해요"],
                    correct: 0,
                    explanation: "논리적 사고로 답을 찾았네요! 🎉"
                }
            ],
            category: "논리",
            difficulty: "medium"
        });
    }
    
    return additionalQuestions;
}

// 모든 중간 문제들을 합치기
const allMediumQuestions = [...mediumQuestions, ...generateRemainingMediumQuestions()];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.mediumQuestions = allMediumQuestions;
}