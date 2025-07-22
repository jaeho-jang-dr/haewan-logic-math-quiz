// 논리 수학 퀴즈 문제 데이터
const questionsData = {
    // 쉬움 난이도 (초등 1-2학년)
    easy: [
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        }
        // ... 45개 더 추가 (총 50개)
    ],

    // 중간 난이도 (초등 3-4학년)
    medium: [
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
                    question: "1시간 45분을 더하면 시간은 어떻게 될까요?",
                    options: ["4시가 돼요", "5시가 돼요", "6시가 돼요", "계산해봐야 해요"],
                    correct: 3,
                    explanation: "15분 + 45분 = 60분 = 1시간이므로 추가로 1시간이 더해져요!"
                },
                {
                    question: "3시 15분 + 1시간 45분 = ?",
                    options: ["4시 60분", "5시", "5시 00분", "5시 15분"],
                    correct: 2,
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
        // ... 45개 더 추가
    ],

    // 어려움 난이도 (초등 5-6학년)
    hard: [
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
        // ... 45개 더 추가
    ]
};

// 추가 문제들을 생성하는 함수
function generateAdditionalQuestions() {
    // Easy 추가 문제들
    const easyAdditional = [
        {
            id: 6,
            question: "🎂 생일케이크를 6등분으로 자르고 2조각을 먹었어요. 몇 조각이 남았을까요?",
            steps: [
                { question: "케이크를 몇 등분으로 잘랐나요?", options: ["5등분", "6등분", "7등분", "8등분"], correct: 1, explanation: "6등분으로 잘랐어요!" },
                { question: "몇 조각을 먹었나요?", options: ["1조각", "2조각", "3조각", "4조각"], correct: 1, explanation: "2조각을 먹었어요!" },
                { question: "6조각 - 2조각 = ?", options: ["3조각", "4조각", "5조각", "6조각"], correct: 1, explanation: "4조각이 남았어요! 🎉" }
            ],
            category: "뺄셈", difficulty: "easy"
        },
        {
            id: 7,
            question: "🐶 강아지가 뼈다귀를 3개씩 4일 동안 먹었어요. 모두 몇 개를 먹었을까요?",
            steps: [
                { question: "하루에 뼈다귀를 몇 개씩 먹었나요?", options: ["2개", "3개", "4개", "5개"], correct: 1, explanation: "하루에 3개씩 먹었어요!" },
                { question: "며칠 동안 먹었나요?", options: ["3일", "4일", "5일", "6일"], correct: 1, explanation: "4일 동안 먹었어요!" },
                { question: "3개 × 4일 = ?", options: ["10개", "11개", "12개", "13개"], correct: 2, explanation: "12개를 먹었어요! 🎉" }
            ],
            category: "곱셈", difficulty: "easy"
        }
        // ... 계속해서 총 50개까지
    ];
    
    questionsData.easy.push(...easyAdditional);
}

// 초기 데이터 로드 함수
async function loadQuestions(database) {
    const allQuestions = [...questionsData.easy, ...questionsData.medium, ...questionsData.hard];
    
    for (const question of allQuestions) {
        await database.addQuestion(question);
    }
    
    console.log(`총 ${allQuestions.length}개의 문제가 로드되었습니다.`);
}

// 전역 변수로 설정
window.questionsData = questionsData;
window.loadQuestions = loadQuestions;