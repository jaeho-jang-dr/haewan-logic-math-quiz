// 쉬운 난이도 문제 50개 (초등 1-2학년 수준)
const easyQuestions = [
    // 1-10: 기본 덧셈 문제
    {
        id: 1,
        question: "🍎 사과 3개와 🍌 바나나 2개가 있어요. 과일이 모두 몇 개일까요?",
        steps: [
            {
                question: "먼저 사과가 몇 개 있나요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "🍎🍎🍎 사과가 3개 있어요!"
            },
            {
                question: "바나나가 몇 개 있나요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "🍌🍌 바나나가 2개 있어요!"
            },
            {
                question: "사과 3개 + 바나나 2개 = ?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "3 + 2 = 5개예요! 🎉"
            }
        ],
        category: "덧셈",
        difficulty: "easy"
    },
    {
        id: 2,
        question: "🎈 빨간 풍선 4개, 파란 풍선 3개, 노란 풍선 2개가 있어요. 풍선이 모두 몇 개일까요?",
        steps: [
            {
                question: "빨간 풍선은 몇 개인가요?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "🔴🔴🔴🔴 빨간 풍선 4개!"
            },
            {
                question: "파란 풍선과 노란 풍선을 합치면 몇 개인가요?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "🔵🔵🔵 + 🟡🟡 = 3 + 2 = 5개!"
            },
            {
                question: "빨간 풍선 4개 + 파란&노란 풍선 5개 = ?",
                options: ["8개", "9개", "10개", "11개"],
                correct: 1,
                explanation: "4 + 5 = 9개의 풍선이 있어요! 🎉"
            }
        ],
        category: "덧셈",
        difficulty: "easy"
    },
    {
        id: 3,
        question: "🧸 인형이 2줄로 놓여있어요. 한 줄에 4개씩 있다면 인형이 모두 몇 개일까요?",
        steps: [
            {
                question: "인형이 몇 줄로 놓여있나요?",
                options: ["1줄", "2줄", "3줄", "4줄"],
                correct: 1,
                explanation: "2줄로 놓여있어요!"
            },
            {
                question: "한 줄에 인형이 몇 개씩 있나요?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "🧸🧸🧸🧸 한 줄에 4개씩!"
            },
            {
                question: "2줄 × 4개 = ?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "2 × 4 = 8개의 인형이 있어요! 🎉"
            }
        ],
        category: "곱셈",
        difficulty: "easy"
    },
    {
        id: 4,
        question: "🐰 토끼가 당근을 7개 가지고 있었는데, 3개를 먹었어요. 남은 당근은 몇 개일까요?",
        steps: [
            {
                question: "토끼가 처음에 당근을 몇 개 가지고 있었나요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 1,
                explanation: "🥕🥕🥕🥕🥕🥕🥕 처음에 7개 있었어요!"
            },
            {
                question: "토끼가 당근을 몇 개 먹었나요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "🥕🥕🥕 3개를 먹었어요!"
            },
            {
                question: "7개에서 3개를 뺀 결과는?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "7 - 3 = 4개가 남았어요! 🎉"
            }
        ],
        category: "뺄셈",
        difficulty: "easy"
    },
    {
        id: 5,
        question: "🚗 주차장에 자동차가 8대 있었는데, 3대가 나갔어요. 몇 대가 남았을까요?",
        steps: [
            {
                question: "처음에 자동차가 몇 대 있었나요?",
                options: ["7대", "8대", "9대", "10대"],
                correct: 1,
                explanation: "🚗🚗🚗🚗🚗🚗🚗🚗 8대가 있었어요!"
            },
            {
                question: "몇 대의 자동차가 나갔나요?",
                options: ["2대", "3대", "4대", "5대"],
                correct: 1,
                explanation: "🚗🚗🚗 3대가 나갔어요!"
            },
            {
                question: "8대에서 3대를 빼면?",
                options: ["4대", "5대", "6대", "7대"],
                correct: 1,
                explanation: "8 - 3 = 5대가 남았어요! 🎉"
            }
        ],
        category: "뺄셈",
        difficulty: "easy"
    },
    {
        id: 6,
        question: "🎂 생일케이크를 6등분으로 자르고 2조각을 먹었어요. 몇 조각이 남았을까요?",
        steps: [
            {
                question: "케이크를 몇 등분으로 잘랐나요?",
                options: ["5등분", "6등분", "7등분", "8등분"],
                correct: 1,
                explanation: "6등분으로 잘랐어요!"
            },
            {
                question: "몇 조각을 먹었나요?",
                options: ["1조각", "2조각", "3조각", "4조각"],
                correct: 1,
                explanation: "2조각을 먹었어요!"
            },
            {
                question: "6조각 - 2조각 = ?",
                options: ["3조각", "4조각", "5조각", "6조각"],
                correct: 1,
                explanation: "4조각이 남았어요! 🎉"
            }
        ],
        category: "뺄셈",
        difficulty: "easy"
    },
    {
        id: 7,
        question: "🐶 강아지가 뼈다귀를 3개씩 4일 동안 먹었어요. 모두 몇 개를 먹었을까요?",
        steps: [
            {
                question: "하루에 뼈다귀를 몇 개씩 먹었나요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "하루에 3개씩 먹었어요!"
            },
            {
                question: "며칠 동안 먹었나요?",
                options: ["3일", "4일", "5일", "6일"],
                correct: 1,
                explanation: "4일 동안 먹었어요!"
            },
            {
                question: "3개 × 4일 = ?",
                options: ["10개", "11개", "12개", "13개"],
                correct: 2,
                explanation: "12개를 먹었어요! 🎉"
            }
        ],
        category: "곱셈",
        difficulty: "easy"
    },
    {
        id: 8,
        question: "🌺 꽃밭에 빨간 꽃 5송이, 노란 꽃 4송이, 흰 꽃 3송이가 있어요. 꽃이 모두 몇 송이일까요?",
        steps: [
            {
                question: "빨간 꽃과 노란 꽃을 합치면 몇 송이인가요?",
                options: ["8송이", "9송이", "10송이", "11송이"],
                correct: 1,
                explanation: "5 + 4 = 9송이예요!"
            },
            {
                question: "흰 꽃은 몇 송이인가요?",
                options: ["2송이", "3송이", "4송이", "5송이"],
                correct: 1,
                explanation: "🤍🤍🤍 흰 꽃이 3송이!"
            },
            {
                question: "9송이 + 3송이 = ?",
                options: ["11송이", "12송이", "13송이", "14송이"],
                correct: 1,
                explanation: "총 12송이의 꽃이 있어요! 🎉"
            }
        ],
        category: "덧셈",
        difficulty: "easy"
    },
    {
        id: 9,
        question: "📚 책장에 책이 15권 있었는데, 7권을 빌려줬어요. 책이 몇 권 남았을까요?",
        steps: [
            {
                question: "처음에 책이 몇 권 있었나요?",
                options: ["13권", "14권", "15권", "16권"],
                correct: 2,
                explanation: "처음에 15권이 있었어요!"
            },
            {
                question: "몇 권을 빌려줬나요?",
                options: ["6권", "7권", "8권", "9권"],
                correct: 1,
                explanation: "7권을 빌려줬어요!"
            },
            {
                question: "15권 - 7권 = ?",
                options: ["7권", "8권", "9권", "10권"],
                correct: 1,
                explanation: "8권이 남았어요! 🎉"
            }
        ],
        category: "뺄셈",
        difficulty: "easy"
    },
    {
        id: 10,
        question: "🎭 공연을 보러 온 관객이 3줄에 6명씩 앉았어요. 관객이 모두 몇 명일까요?",
        steps: [
            {
                question: "관객이 몇 줄로 앉았나요?",
                options: ["2줄", "3줄", "4줄", "5줄"],
                correct: 1,
                explanation: "3줄로 앉았어요!"
            },
            {
                question: "한 줄에 몇 명씩 앉았나요?",
                options: ["5명", "6명", "7명", "8명"],
                correct: 1,
                explanation: "한 줄에 6명씩 앉았어요!"
            },
            {
                question: "3줄 × 6명 = ?",
                options: ["16명", "17명", "18명", "19명"],
                correct: 2,
                explanation: "총 18명의 관객이 있어요! 🎉"
            }
        ],
        category: "곱셈",
        difficulty: "easy"
    }
    // 나머지 40개 문제는 다음 함수에서 생성됩니다...
];

// 나머지 쉬운 문제들을 생성하는 함수
function generateRemainingEasyQuestions() {
    const additionalQuestions = [];
    
    // 11-20: 10 이하 덧셈
    for (let i = 11; i <= 20; i++) {
        const a = Math.floor(Math.random() * 5) + 2; // 2-6
        const b = Math.floor(Math.random() * 4) + 2; // 2-5
        const emojis = ["🎾", "⚽", "🏀", "🎱", "🥎"];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        additionalQuestions.push({
            id: i,
            question: `${emoji} 공이 ${a}개와 ${b}개가 있어요. 모두 몇 개일까요?`,
            steps: [
                {
                    question: `첫 번째 그룹에 공이 몇 개 있나요?`,
                    options: [`${a-1}개`, `${a}개`, `${a+1}개`, `${a+2}개`],
                    correct: 1,
                    explanation: `첫 번째 그룹에 ${a}개가 있어요!`
                },
                {
                    question: `두 번째 그룹에 공이 몇 개 있나요?`,
                    options: [`${b-1}개`, `${b}개`, `${b+1}개`, `${b+2}개`],
                    correct: 1,
                    explanation: `두 번째 그룹에 ${b}개가 있어요!`
                },
                {
                    question: `${a} + ${b} = ?`,
                    options: [`${a+b-1}개`, `${a+b}개`, `${a+b+1}개`, `${a+b+2}개`],
                    correct: 1,
                    explanation: `${a} + ${b} = ${a+b}개예요! 🎉`
                }
            ],
            category: "덧셈",
            difficulty: "easy"
        });
    }
    
    // 21-30: 10 이하 뺄셈
    for (let i = 21; i <= 30; i++) {
        const total = Math.floor(Math.random() * 5) + 6; // 6-10
        const subtract = Math.floor(Math.random() * 3) + 2; // 2-4
        const items = ["🍪", "🍭", "🧁", "🍩", "🥨"];
        const item = items[Math.floor(Math.random() * items.length)];
        
        additionalQuestions.push({
            id: i,
            question: `${item} ${total}개 중에서 ${subtract}개를 먹었어요. 몇 개가 남았을까요?`,
            steps: [
                {
                    question: `처음에 ${item}가 몇 개 있었나요?`,
                    options: [`${total-1}개`, `${total}개`, `${total+1}개`, `${total+2}개`],
                    correct: 1,
                    explanation: `처음에 ${total}개가 있었어요!`
                },
                {
                    question: `몇 개를 먹었나요?`,
                    options: [`${subtract-1}개`, `${subtract}개`, `${subtract+1}개`, `${subtract+2}개`],
                    correct: 1,
                    explanation: `${subtract}개를 먹었어요!`
                },
                {
                    question: `${total} - ${subtract} = ?`,
                    options: [`${total-subtract-1}개`, `${total-subtract}개`, `${total-subtract+1}개`, `${total-subtract+2}개`],
                    correct: 1,
                    explanation: `${total} - ${subtract} = ${total-subtract}개가 남았어요! 🎉`
                }
            ],
            category: "뺄셈",
            difficulty: "easy"
        });
    }
    
    // 31-40: 간단한 곱셈 (1-5 × 1-5)
    for (let i = 31; i <= 40; i++) {
        const rows = Math.floor(Math.random() * 3) + 2; // 2-4
        const cols = Math.floor(Math.random() * 3) + 2; // 2-4
        const objects = ["🎁", "📦", "🧸", "🎯", "🎪"];
        const obj = objects[Math.floor(Math.random() * objects.length)];
        
        additionalQuestions.push({
            id: i,
            question: `${obj}가 ${rows}줄에 ${cols}개씩 놓여있어요. 모두 몇 개일까요?`,
            steps: [
                {
                    question: `몇 줄로 놓여있나요?`,
                    options: [`${rows-1}줄`, `${rows}줄`, `${rows+1}줄`, `${rows+2}줄`],
                    correct: 1,
                    explanation: `${rows}줄로 놓여있어요!`
                },
                {
                    question: `한 줄에 몇 개씩 있나요?`,
                    options: [`${cols-1}개`, `${cols}개`, `${cols+1}개`, `${cols+2}개`],
                    correct: 1,
                    explanation: `한 줄에 ${cols}개씩 있어요!`
                },
                {
                    question: `${rows} × ${cols} = ?`,
                    options: [`${rows*cols-1}개`, `${rows*cols}개`, `${rows*cols+1}개`, `${rows*cols+2}개`],
                    correct: 1,
                    explanation: `${rows} × ${cols} = ${rows*cols}개예요! 🎉`
                }
            ],
            category: "곱셈",
            difficulty: "easy"
        });
    }
    
    // 41-50: 간단한 나눗셈 및 비교
    for (let i = 41; i <= 50; i++) {
        const dividend = [6, 8, 9, 10, 12][i-41]; // 나누어떨어지는 수들
        const divisor = [2, 2, 3, 2, 3][i-41]; // 해당 약수
        const treats = ["🍎", "🍊", "🍇", "🥕", "🍒"];
        const treat = treats[i-41];
        
        additionalQuestions.push({
            id: i,
            question: `${treat} ${dividend}개를 ${divisor}명이 똑같이 나누어 가져요. 한 명당 몇 개씩 가질까요?`,
            steps: [
                {
                    question: `${treat}가 총 몇 개 있나요?`,
                    options: [`${dividend-1}개`, `${dividend}개`, `${dividend+1}개`, `${dividend+2}개`],
                    correct: 1,
                    explanation: `총 ${dividend}개가 있어요!`
                },
                {
                    question: `몇 명이 나누어 가져요?`,
                    options: [`${divisor-1}명`, `${divisor}명`, `${divisor+1}명`, `${divisor+2}명`],
                    correct: 1,
                    explanation: `${divisor}명이 나누어 가져요!`
                },
                {
                    question: `${dividend} ÷ ${divisor} = ?`,
                    options: [`${dividend/divisor-1}개`, `${dividend/divisor}개`, `${dividend/divisor+1}개`, `${dividend/divisor+2}개`],
                    correct: 1,
                    explanation: `${dividend} ÷ ${divisor} = ${dividend/divisor}개씩 가져가요! 🎉`
                }
            ],
            category: "나눗셈",
            difficulty: "easy"
        });
    }
    
    return additionalQuestions;
}

// 모든 쉬운 문제들을 합치기
const allEasyQuestions = [...easyQuestions, ...generateRemainingEasyQuestions()];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.easyQuestions = allEasyQuestions;
}