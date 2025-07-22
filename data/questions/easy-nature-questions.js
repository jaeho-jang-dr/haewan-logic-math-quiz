// 초급 난이도 자연과 동물 문제 50개 (초등 1-2학년 수준)
// 아이들이 까르르 웃을 만한 재미있는 이야기로 구성
const easyNatureQuestions = [
    // 1-10: 귀여운 동물 친구들과 수 세기
    {
        id: 101,
        question: "🐰 토끼가 깡충깡충 뛰다가 당근밭에서 3개를 먹고 '냠냠 맛있다!'하며 또 2개를 더 먹었어요. 토끼가 먹은 당근은 모두 몇 개일까요?",
        steps: [
            {
                question: "토끼가 처음에 먹은 당근은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 2,
                explanation: "토끼가 처음에 3개를 냠냠! 🥕🥕🥕"
            },
            {
                question: "그 다음에 또 먹은 당근은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "'맛있다!'하며 2개를 더 먹었어요! 🥕🥕"
            },
            {
                question: "3 + 2 = ?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "와! 토끼가 총 5개나 먹었네요! 배가 빵빵! 🐰💕"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 102,
        question: "🐸 개구리 가족이 연못에서 합창을 해요. 아빠 개구리가 '개굴!', 엄마가 '개굴개굴!', 아기가 '개굴개굴개굴!' 몇 마리가 노래하고 있나요?",
        steps: [
            {
                question: "아빠 개구리는 몇 마리인가요?",
                options: ["0마리", "1마리", "2마리", "3마리"],
                correct: 1,
                explanation: "아빠 개구리 1마리가 '개굴!' 🎵"
            },
            {
                question: "엄마와 아기를 합치면 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "엄마 1마리 + 아기 1마리 = 2마리예요!"
            },
            {
                question: "개구리 가족은 모두 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "1 + 1 + 1 = 3마리! 개굴개굴 합창단이에요! 🐸🐸🐸"
            }
        ],
        category: "수 세기",
        difficulty: "easy"
    },
    {
        id: 103,
        question: "🦋 나비가 꽃밭에서 춤을 춰요. 빨간 꽃에 2마리, 노란 꽃에 2마리, 하얀 꽃에 2마리가 팔랑팔랑! 나비는 모두 몇 마리일까요?",
        steps: [
            {
                question: "한 색깔 꽃에 나비가 몇 마리씩 있나요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "각 꽃에 2마리씩 있어요! 팔랑팔랑~"
            },
            {
                question: "꽃은 모두 몇 가지 색깔인가요?",
                options: ["2가지", "3가지", "4가지", "5가지"],
                correct: 1,
                explanation: "빨강, 노랑, 하양 3가지 색깔이에요! 🌺🌻⚪"
            },
            {
                question: "2 + 2 + 2 = ?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 2,
                explanation: "와! 6마리의 나비가 춤추는 꽃밭이에요! 🦋✨"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 104,
        question: "🐿️ 다람쥐가 도토리를 모아요. 큰 나무에서 4개를 주웠는데, 너무 무거워서 '끙끙!' 2개를 떨어뜨렸어요. 남은 도토리는 몇 개일까요?",
        steps: [
            {
                question: "다람쥐가 처음 주운 도토리는 몇 개인가요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 2,
                explanation: "큰 나무에서 4개를 주웠어요! 🌰🌰🌰🌰"
            },
            {
                question: "떨어뜨린 도토리는 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "'끙끙!' 너무 무거워서 2개가 떨어졌어요! 😅"
            },
            {
                question: "4 - 2 = ?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "2개가 남았네요! 다람쥐가 들 수 있는 딱 좋은 양이에요! 🐿️💕"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 105,
        question: "🐧 펭귄들이 미끄럼을 타요! 첫 번째로 3마리가 '슝~', 두 번째로 또 3마리가 '슝~' 타고 내려왔어요. 미끄럼을 탄 펭귄은 모두 몇 마리일까요?",
        steps: [
            {
                question: "첫 번째로 미끄럼 탄 펭귄은 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "3마리가 '슝~' 신나게 탔어요! 🛷"
            },
            {
                question: "두 번째로 탄 펭귄은 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "또 3마리가 '슝~' 따라서 탔어요!"
            },
            {
                question: "3 + 3 = ?",
                options: ["5마리", "6마리", "7마리", "8마리"],
                correct: 1,
                explanation: "총 6마리의 펭귄이 미끄럼을 탔어요! 재밌겠다! 🐧🐧🐧🐧🐧🐧"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 106,
        question: "🐝 꿀벌이 꽃에서 꿀을 모아요. '윙윙~' 5송이에서 꿀을 모았는데, 비가 와서 2송이는 못 갔어요. 꿀을 모은 꽃은 몇 송이일까요?",
        steps: [
            {
                question: "꿀벌이 가려고 한 꽃은 몇 송이인가요?",
                options: ["3송이", "4송이", "5송이", "6송이"],
                correct: 2,
                explanation: "5송이에서 꿀을 모으려고 했어요! 🌸🌸🌸🌸🌸"
            },
            {
                question: "비 때문에 못 간 꽃은 몇 송이인가요?",
                options: ["1송이", "2송이", "3송이", "4송이"],
                correct: 1,
                explanation: "비가 와서 2송이는 못 갔어요! ☔"
            },
            {
                question: "5 - 2 = ?",
                options: ["2송이", "3송이", "4송이", "5송이"],
                correct: 1,
                explanation: "3송이에서 꿀을 모았네요! 벌이 부지런해요! 🐝🍯"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 107,
        question: "🦊 여우가 포도를 따려고 해요. 나무 위에 8개가 있는데 '폴짝!' 뛰어도 못 닿아요. 친구 토끼가 도와줘서 4개를 땄어요. 남은 포도는 몇 개일까요?",
        steps: [
            {
                question: "나무에 있던 포도는 몇 개인가요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "나무에 8개의 포도가 주렁주렁! 🍇"
            },
            {
                question: "토끼가 도와줘서 딴 포도는 몇 개인가요?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "친구 토끼가 4개를 따줬어요! 고마워! 🐰"
            },
            {
                question: "8 - 4 = ?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "4개가 남았네요! 여우와 토끼가 나눠 먹어요! 🦊🐰"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 108,
        question: "🐻 곰돌이가 꿀단지를 발견했어요! 첫 번째 단지에 2숟가락, 두 번째에 3숟가락이 있어요. '냠냠' 맛있는 꿀이 모두 몇 숟가락일까요?",
        steps: [
            {
                question: "첫 번째 꿀단지에는 몇 숟가락이 있나요?",
                options: ["1숟가락", "2숟가락", "3숟가락", "4숟가락"],
                correct: 1,
                explanation: "첫 번째 단지에 2숟가락! 달콤해요! 🍯"
            },
            {
                question: "두 번째 꿀단지에는 몇 숟가락이 있나요?",
                options: ["2숟가락", "3숟가락", "4숟가락", "5숟가락"],
                correct: 1,
                explanation: "두 번째 단지에 3숟가락! 더 많아요!"
            },
            {
                question: "2 + 3 = ?",
                options: ["4숟가락", "5숟가락", "6숟가락", "7숟가락"],
                correct: 1,
                explanation: "총 5숟가락! 곰돌이가 배부르겠어요! 🐻💕"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 109,
        question: "🦆 오리 가족이 호수를 헤엄쳐요. 엄마 오리 뒤를 아기 오리 6마리가 '꽥꽥' 따라가는데, 2마리가 나비를 쫓아 갔어요. 줄 서서 가는 아기는 몇 마리일까요?",
        steps: [
            {
                question: "처음에 엄마를 따라간 아기 오리는 몇 마리인가요?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 2,
                explanation: "6마리가 엄마를 따라 '꽥꽥!' 🦆"
            },
            {
                question: "나비를 쫓아간 아기 오리는 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "2마리가 나비를 보고 따라갔어요! 🦋"
            },
            {
                question: "6 - 2 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "4마리가 엄마와 함께 가요! 착한 아기 오리들! 🦆🦆🦆🦆"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 110,
        question: "🦜 앵무새가 말을 배워요. 월요일에 '안녕' 1개, 화요일에 '사랑해' 1개, 수요일에 '예뻐' 1개를 배웠어요. 앵무새가 배운 말은 모두 몇 개일까요?",
        steps: [
            {
                question: "하루에 몇 개씩 배웠나요?",
                options: ["0개", "1개", "2개", "3개"],
                correct: 1,
                explanation: "매일 1개씩 새로운 말을 배웠어요!"
            },
            {
                question: "며칠 동안 배웠나요?",
                options: ["1일", "2일", "3일", "4일"],
                correct: 2,
                explanation: "월, 화, 수 3일 동안 배웠어요!"
            },
            {
                question: "1 + 1 + 1 = ?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "3개의 예쁜 말을 배웠네요! '안녕~사랑해~예뻐~' 🦜💕"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    // 11-20: 자연 속 도형과 패턴
    {
        id: 111,
        question: "🌻 해바라기를 보니 동그란 모양이에요. 벌집은 육각형이고, 나뭇잎은 타원형이에요. 동그란 모양은 무엇일까요?",
        steps: [
            {
                question: "해바라기는 어떤 모양인가요?",
                options: ["네모", "세모", "동그라미", "별"],
                correct: 2,
                explanation: "해바라기는 동그란 모양이에요! 🌻"
            },
            {
                question: "동그란 모양을 뭐라고 부르나요?",
                options: ["사각형", "삼각형", "원", "마름모"],
                correct: 2,
                explanation: "동그란 모양은 원이라고 해요!"
            },
            {
                question: "해바라기 모양은?",
                options: ["네모", "세모", "원", "별"],
                correct: 2,
                explanation: "해바라기는 예쁜 원 모양이에요! ⭕"
            }
        ],
        category: "도형",
        difficulty: "easy"
    },
    {
        id: 112,
        question: "🌲 소나무가 일렬로 서 있어요. 큰나무, 작은나무, 큰나무, 작은나무... 다음은 어떤 나무일까요?",
        steps: [
            {
                question: "나무들의 규칙을 찾아보세요!",
                options: ["같은 크기만", "큰것만", "큰것과 작은것이 번갈아", "작은것만"],
                correct: 2,
                explanation: "큰나무와 작은나무가 번갈아 나와요!"
            },
            {
                question: "작은나무 다음은 무엇이 왔나요?",
                options: ["큰나무", "작은나무", "중간나무", "모르겠어요"],
                correct: 0,
                explanation: "작은나무 다음은 큰나무가 왔어요!"
            },
            {
                question: "그럼 큰나무, 작은나무, 큰나무, 작은나무 다음은?",
                options: ["큰나무", "작은나무", "중간나무", "없음"],
                correct: 0,
                explanation: "큰나무가 와야 해요! 규칙을 찾았네요! 🌲🌱🌲🌱🌲"
            }
        ],
        category: "패턴",
        difficulty: "easy"
    },
    {
        id: 113,
        question: "🐛 애벌레가 나뭇잎을 먹어요. 첫날 1장, 둘째날 2장, 셋째날 3장... 넷째날은 몇 장을 먹을까요?",
        steps: [
            {
                question: "애벌레가 먹는 나뭇잎의 규칙은?",
                options: ["매일 같은 수", "하루에 1장씩 늘어남", "하루에 2장씩 늘어남", "줄어듦"],
                correct: 1,
                explanation: "매일 1장씩 더 많이 먹어요!"
            },
            {
                question: "셋째날 다음날은 며칠째인가요?",
                options: ["둘째날", "셋째날", "넷째날", "다섯째날"],
                correct: 2,
                explanation: "셋째날 다음은 넷째날이에요!"
            },
            {
                question: "1, 2, 3, ?",
                options: ["3장", "4장", "5장", "6장"],
                correct: 1,
                explanation: "넷째날은 4장! 애벌레가 점점 많이 먹네요! 🐛🍃"
            }
        ],
        category: "수 규칙",
        difficulty: "easy"
    },
    {
        id: 114,
        question: "🌈 무지개 색깔이 빨주노초... 빨강 다음은 무슨 색일까요?",
        steps: [
            {
                question: "무지개의 첫 번째 색은?",
                options: ["파랑", "빨강", "노랑", "초록"],
                correct: 1,
                explanation: "무지개는 빨강부터 시작해요! ❤️"
            },
            {
                question: "'빨주노초'에서 '주'는 무슨 색인가요?",
                options: ["주황", "주홍", "보라", "초록"],
                correct: 0,
                explanation: "주황색이에요! 🧡"
            },
            {
                question: "빨강 다음 색은?",
                options: ["노랑", "주황", "초록", "파랑"],
                correct: 1,
                explanation: "빨강 다음은 주황! 무지개가 예뻐요! 🌈"
            }
        ],
        category: "순서",
        difficulty: "easy"
    },
    {
        id: 115,
        question: "🍄 버섯이 비 온 뒤에 자라요. 첫날 2개, 둘째날 2개 더 자라면 모두 몇 개일까요?",
        steps: [
            {
                question: "첫날 자란 버섯은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "첫날에 2개가 뿅! 자랐어요! 🍄🍄"
            },
            {
                question: "둘째날 더 자란 버섯은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "둘째날도 2개가 또 뿅! 🍄🍄"
            },
            {
                question: "2 + 2 = ?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "총 4개의 버섯이 자랐어요! 동화 속 같아요! 🍄🍄🍄🍄"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 116,
        question: "🦋 나비의 날개는 몇 개일까요? 왼쪽에 2개, 오른쪽에도 2개가 팔랑팔랑!",
        steps: [
            {
                question: "나비의 왼쪽 날개는 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "왼쪽에 2개의 날개가 있어요!"
            },
            {
                question: "오른쪽 날개는 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "오른쪽도 2개! 좌우가 같아요!"
            },
            {
                question: "2 + 2 = ?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 2,
                explanation: "나비는 4개의 예쁜 날개로 날아요! 🦋✨"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 117,
        question: "🐌 달팽이가 느릿느릿 기어가요. 10걸음 갔다가 힘들어서 3걸음 뒤로 갔어요. 달팽이는 앞으로 몇 걸음 갔을까요?",
        steps: [
            {
                question: "달팽이가 처음 간 거리는?",
                options: ["8걸음", "9걸음", "10걸음", "11걸음"],
                correct: 2,
                explanation: "10걸음을 느릿느릿 갔어요! 🐌"
            },
            {
                question: "뒤로 간 거리는?",
                options: ["2걸음", "3걸음", "4걸음", "5걸음"],
                correct: 1,
                explanation: "힘들어서 3걸음 뒤로 갔어요!"
            },
            {
                question: "10 - 3 = ?",
                options: ["6걸음", "7걸음", "8걸음", "9걸음"],
                correct: 1,
                explanation: "7걸음 앞으로 갔네요! 달팽이도 열심히! 🐌💪"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 118,
        question: "🕷️ 거미가 거미줄을 만들어요. 가운데서 8개의 줄이 뻗어나가요. 거미 다리도 8개! 신기하죠?",
        steps: [
            {
                question: "거미줄은 몇 개의 줄로 되어있나요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "8개의 줄이 뻗어나가요! 🕸️"
            },
            {
                question: "거미의 다리는 몇 개인가요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "거미도 다리가 8개예요!"
            },
            {
                question: "거미줄 줄과 거미 다리의 수가 같나요?",
                options: ["아니요", "네, 같아요", "모르겠어요", "다를 거예요"],
                correct: 1,
                explanation: "둘 다 8개로 같아요! 자연의 신비! 🕷️✨"
            }
        ],
        category: "수 비교",
        difficulty: "easy"
    },
    {
        id: 119,
        question: "🦎 도마뱀이 꼬리를 흔들어요. 왼쪽으로 3번, 오른쪽으로 4번 흔들었어요. 모두 몇 번 흔들었을까요?",
        steps: [
            {
                question: "왼쪽으로 흔든 횟수는?",
                options: ["2번", "3번", "4번", "5번"],
                correct: 1,
                explanation: "왼쪽으로 3번 살랑살랑~"
            },
            {
                question: "오른쪽으로 흔든 횟수는?",
                options: ["3번", "4번", "5번", "6번"],
                correct: 1,
                explanation: "오른쪽으로 4번 살랑살랑~"
            },
            {
                question: "3 + 4 = ?",
                options: ["6번", "7번", "8번", "9번"],
                correct: 1,
                explanation: "총 7번 꼬리를 흔들었어요! 도마뱀이 기분 좋나봐요! 🦎😊"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 120,
        question: "🦅 독수리가 하늘 높이 날아요. 처음에 9마리가 날다가 3마리가 산으로 갔어요. 하늘에 남은 독수리는 몇 마리일까요?",
        steps: [
            {
                question: "처음에 하늘을 난 독수리는 몇 마리인가요?",
                options: ["7마리", "8마리", "9마리", "10마리"],
                correct: 2,
                explanation: "9마리가 하늘 높이 날았어요! 🦅"
            },
            {
                question: "산으로 간 독수리는 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "3마리가 산으로 날아갔어요!"
            },
            {
                question: "9 - 3 = ?",
                options: ["5마리", "6마리", "7마리", "8마리"],
                correct: 1,
                explanation: "6마리가 하늘에 남아 있어요! 멋진 독수리들! 🦅✨"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    // 21-30: 재미있는 자연 현상과 계산
    {
        id: 121,
        question: "🌧️ 개구리가 비 오는 날을 좋아해요! 월요일에 비가 2시간, 화요일에 3시간 왔어요. 개구리가 좋아한 시간은 모두 몇 시간일까요?",
        steps: [
            {
                question: "월요일에 비가 온 시간은?",
                options: ["1시간", "2시간", "3시간", "4시간"],
                correct: 1,
                explanation: "월요일에 2시간 동안 비가 왔어요! ☔"
            },
            {
                question: "화요일에 비가 온 시간은?",
                options: ["2시간", "3시간", "4시간", "5시간"],
                correct: 1,
                explanation: "화요일엔 3시간이나 왔어요!"
            },
            {
                question: "2 + 3 = ?",
                options: ["4시간", "5시간", "6시간", "7시간"],
                correct: 1,
                explanation: "총 5시간! 개구리가 '개굴개굴' 신났어요! 🐸☔"
            }
        ],
        category: "시간 더하기",
        difficulty: "easy"
    },
    {
        id: 122,
        question: "⭐ 반딧불이가 밤에 반짝여요. 큰 반딧불이가 5번, 작은 반딧불이가 5번 반짝였어요. 모두 몇 번 반짝였을까요?",
        steps: [
            {
                question: "큰 반딧불이가 반짝인 횟수는?",
                options: ["3번", "4번", "5번", "6번"],
                correct: 2,
                explanation: "큰 반딧불이가 5번 반짝! ✨"
            },
            {
                question: "작은 반딧불이가 반짝인 횟수는?",
                options: ["4번", "5번", "6번", "7번"],
                correct: 1,
                explanation: "작은 반딧불이도 5번 반짝! ✨"
            },
            {
                question: "5 + 5 = ?",
                options: ["8번", "9번", "10번", "11번"],
                correct: 2,
                explanation: "총 10번! 밤하늘이 별처럼 빛나요! ⭐✨"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 123,
        question: "🌳 다람쥐가 나무를 타요. 위로 7칸 올라갔다가 도토리를 보고 2칸 내려왔어요. 지금 몇 칸 높이에 있을까요?",
        steps: [
            {
                question: "다람쥐가 올라간 높이는?",
                options: ["5칸", "6칸", "7칸", "8칸"],
                correct: 2,
                explanation: "7칸을 쭉 올라갔어요! 🐿️⬆️"
            },
            {
                question: "도토리 때문에 내려온 높이는?",
                options: ["1칸", "2칸", "3칸", "4칸"],
                correct: 1,
                explanation: "도토리를 보고 2칸 내려왔어요! 🌰"
            },
            {
                question: "7 - 2 = ?",
                options: ["4칸", "5칸", "6칸", "7칸"],
                correct: 1,
                explanation: "5칸 높이에 있어요! 도토리를 잘 볼 수 있겠네요! 🐿️🌳"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 124,
        question: "🦀 게가 옆으로 걸어요. 오른쪽으로 4걸음, 왼쪽으로 1걸음 갔어요. 오른쪽으로 실제로 간 거리는?",
        steps: [
            {
                question: "오른쪽으로 간 걸음 수는?",
                options: ["3걸음", "4걸음", "5걸음", "6걸음"],
                correct: 1,
                explanation: "오른쪽으로 4걸음 옆걸음질! 🦀→"
            },
            {
                question: "왼쪽으로 간 걸음 수는?",
                options: ["1걸음", "2걸음", "3걸음", "4걸음"],
                correct: 0,
                explanation: "왼쪽으로 1걸음 갔어요! ←🦀"
            },
            {
                question: "4 - 1 = ?",
                options: ["2걸음", "3걸음", "4걸음", "5걸음"],
                correct: 1,
                explanation: "실제로 오른쪽으로 3걸음 이동했어요! 게의 특별한 걸음걸이! 🦀"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 125,
        question: "🐠 수족관에 물고기가 있어요. 빨간 물고기 3마리, 파란 물고기 3마리, 노란 물고기 3마리! 모두 몇 마리일까요?",
        steps: [
            {
                question: "한 가지 색 물고기는 몇 마리씩인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "각 색깔마다 3마리씩 있어요! 🐠"
            },
            {
                question: "물고기 색깔은 몇 가지인가요?",
                options: ["2가지", "3가지", "4가지", "5가지"],
                correct: 1,
                explanation: "빨강, 파랑, 노랑 3가지예요! 🔴🔵🟡"
            },
            {
                question: "3 + 3 + 3 = ?",
                options: ["7마리", "8마리", "9마리", "10마리"],
                correct: 2,
                explanation: "총 9마리! 알록달록 예쁜 수족관이에요! 🐠🐟🐡"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 126,
        question: "🦔 고슴도치가 사과를 등에 꽂아요. 처음에 6개를 꽂았는데 2개가 떨어졌어요. 등에 남은 사과는 몇 개일까요?",
        steps: [
            {
                question: "처음에 꽂은 사과는 몇 개인가요?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 2,
                explanation: "6개의 사과를 등에 꽂았어요! 🍎"
            },
            {
                question: "떨어진 사과는 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "뒤뚱뒤뚱 걷다가 2개가 떨어졌어요!"
            },
            {
                question: "6 - 2 = ?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "4개가 남았어요! 고슴도치가 조심조심 걸어요! 🦔🍎"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 127,
        question: "🐜 개미들이 줄을 서요. 검은 개미 4마리, 빨간 개미 3마리가 일렬로 행진해요. 개미는 모두 몇 마리일까요?",
        steps: [
            {
                question: "검은 개미는 몇 마리인가요?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "검은 개미 4마리가 앞장서요! 🐜"
            },
            {
                question: "빨간 개미는 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "빨간 개미 3마리가 따라가요! 🐜"
            },
            {
                question: "4 + 3 = ?",
                options: ["6마리", "7마리", "8마리", "9마리"],
                correct: 1,
                explanation: "총 7마리의 개미가 열심히 행진! 하나둘하나둘! 🐜🐜🐜🐜🐜🐜🐜"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 128,
        question: "🌸 벚꽃 나무에 꽃이 피었어요. 큰 가지에 5송이, 작은 가지에 2송이씩 2개 가지에 피었어요. 꽃은 모두 몇 송이일까요?",
        steps: [
            {
                question: "큰 가지의 꽃은 몇 송이인가요?",
                options: ["4송이", "5송이", "6송이", "7송이"],
                correct: 1,
                explanation: "큰 가지에 5송이가 활짝! 🌸"
            },
            {
                question: "작은 가지 2개의 꽃은 모두 몇 송이인가요?",
                options: ["3송이", "4송이", "5송이", "6송이"],
                correct: 1,
                explanation: "2송이씩 2개 가지 = 4송이예요!"
            },
            {
                question: "5 + 4 = ?",
                options: ["8송이", "9송이", "10송이", "11송이"],
                correct: 1,
                explanation: "총 9송이! 봄이 왔나 봐요! 🌸🌸🌸🌸🌸🌸🌸🌸🌸"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 129,
        question: "🦢 백조가 호수에서 놀아요. 8마리가 있었는데 3마리가 하늘로 날아갔어요. 호수에 남은 백조는 몇 마리일까요?",
        steps: [
            {
                question: "처음에 호수에 있던 백조는 몇 마리인가요?",
                options: ["6마리", "7마리", "8마리", "9마리"],
                correct: 2,
                explanation: "8마리의 우아한 백조가 있었어요! 🦢"
            },
            {
                question: "날아간 백조는 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "3마리가 날개를 펴고 날아갔어요!"
            },
            {
                question: "8 - 3 = ?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 1,
                explanation: "5마리가 호수에서 우아하게 헤엄쳐요! 🦢💕"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 130,
        question: "🦓 얼룩말의 줄무늬를 세어봐요. 몸통에 검은 줄 5개, 흰 줄 5개가 번갈아 있어요. 줄무늬는 모두 몇 개일까요?",
        steps: [
            {
                question: "검은 줄무늬는 몇 개인가요?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "검은 줄무늬가 5개 있어요! ⬛"
            },
            {
                question: "흰 줄무늬는 몇 개인가요?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "흰 줄무늬도 5개예요! ⬜"
            },
            {
                question: "5 + 5 = ?",
                options: ["8개", "9개", "10개", "11개"],
                correct: 2,
                explanation: "총 10개의 멋진 줄무늬! 얼룩말의 패션이에요! 🦓✨"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    // 31-40: 계절과 날씨 속 수학
    {
        id: 131,
        question: "☃️ 눈사람을 만들어요! 큰 눈덩이 1개, 중간 눈덩이 1개, 작은 눈덩이 1개로 만들었어요. 눈덩이는 모두 몇 개일까요?",
        steps: [
            {
                question: "눈사람의 몸통 부분은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 2,
                explanation: "큰것, 중간것, 작은것 3개예요!"
            },
            {
                question: "가장 큰 눈덩이는 어디에 있나요?",
                options: ["위", "가운데", "아래", "옆"],
                correct: 2,
                explanation: "가장 큰 눈덩이가 제일 아래에 있어요!"
            },
            {
                question: "1 + 1 + 1 = ?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "3개의 눈덩이로 멋진 눈사람 완성! ☃️"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 132,
        question: "🍂 가을에 낙엽이 떨어져요. 나무에 10장이 있었는데 바람에 4장이 날아갔어요. 나무에 남은 잎은 몇 장일까요?",
        steps: [
            {
                question: "처음에 나무에 있던 잎은 몇 장인가요?",
                options: ["8장", "9장", "10장", "11장"],
                correct: 2,
                explanation: "10장의 잎이 있었어요! 🍃"
            },
            {
                question: "바람에 날아간 잎은 몇 장인가요?",
                options: ["3장", "4장", "5장", "6장"],
                correct: 1,
                explanation: "살랑살랑 바람에 4장이 날아갔어요! 🍂"
            },
            {
                question: "10 - 4 = ?",
                options: ["5장", "6장", "7장", "8장"],
                correct: 1,
                explanation: "6장이 남았어요! 가을이 왔나 봐요! 🍁"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 133,
        question: "🌺 봄에 꽃이 피어요. 월요일에 2송이, 화요일에 2송이, 수요일에 2송이가 피었어요. 3일 동안 핀 꽃은 모두 몇 송이일까요?",
        steps: [
            {
                question: "하루에 핀 꽃은 몇 송이인가요?",
                options: ["1송이", "2송이", "3송이", "4송이"],
                correct: 1,
                explanation: "매일 2송이씩 피었어요! 🌺"
            },
            {
                question: "며칠 동안 꽃이 피었나요?",
                options: ["2일", "3일", "4일", "5일"],
                correct: 1,
                explanation: "월, 화, 수 3일 동안이에요!"
            },
            {
                question: "2 + 2 + 2 = ?",
                options: ["5송이", "6송이", "7송이", "8송이"],
                correct: 1,
                explanation: "총 6송이! 봄 정원이 예뻐요! 🌺🌸🌼"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 134,
        question: "☀️ 여름에 아이스크림을 먹어요. 혜완이가 3개, 동생이 2개를 먹었어요. 형제가 먹은 아이스크림은 모두 몇 개일까요?",
        steps: [
            {
                question: "혜완이가 먹은 아이스크림은 몇 개인가요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "혜완이가 3개나 먹었어요! 🍦"
            },
            {
                question: "동생이 먹은 아이스크림은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "동생은 2개 먹었어요! 🍨"
            },
            {
                question: "3 + 2 = ?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "총 5개! 시원하고 달콤했겠어요! 🍦🍨"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 135,
        question: "❄️ 겨울에 장갑을 끼어요. 왼손 장갑 1개, 오른손 장갑 1개가 필요해요. 장갑은 모두 몇 개일까요?",
        steps: [
            {
                question: "왼손에 끼는 장갑은 몇 개인가요?",
                options: ["0개", "1개", "2개", "3개"],
                correct: 1,
                explanation: "왼손에 1개! 🧤"
            },
            {
                question: "오른손에 끼는 장갑은 몇 개인가요?",
                options: ["0개", "1개", "2개", "3개"],
                correct: 1,
                explanation: "오른손에도 1개! 🧤"
            },
            {
                question: "1 + 1 = ?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "장갑은 한 쌍, 2개! 따뜻하게 손을 보호해요! 🧤🧤"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 136,
        question: "🌤️ 일주일 날씨를 봐요. 맑은 날이 4일, 비 온 날이 3일이었어요. 일주일은 모두 며칠일까요?",
        steps: [
            {
                question: "맑은 날은 며칠이었나요?",
                options: ["3일", "4일", "5일", "6일"],
                correct: 1,
                explanation: "해가 쨍쨍 4일이었어요! ☀️"
            },
            {
                question: "비 온 날은 며칠이었나요?",
                options: ["2일", "3일", "4일", "5일"],
                correct: 1,
                explanation: "비가 3일 왔어요! ☔"
            },
            {
                question: "4 + 3 = ?",
                options: ["6일", "7일", "8일", "9일"],
                correct: 1,
                explanation: "일주일은 7일! 맑은 날과 비 온 날이 합쳐서 7일이에요! 📅"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 137,
        question: "🌾 허수아비가 참새를 쫓아요. 처음에 9마리가 있었는데 허수아비를 보고 5마리가 날아갔어요. 남은 참새는 몇 마리일까요?",
        steps: [
            {
                question: "처음에 있던 참새는 몇 마리인가요?",
                options: ["7마리", "8마리", "9마리", "10마리"],
                correct: 2,
                explanation: "9마리의 참새가 짹짹거렸어요! 🐦"
            },
            {
                question: "허수아비를 보고 날아간 참새는 몇 마리인가요?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 1,
                explanation: "무서워서 5마리가 날아갔어요!"
            },
            {
                question: "9 - 5 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "4마리가 남았어요! 용감한 참새들이네요! 🐦"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 138,
        question: "🌡️ 온도계를 봐요. 아침에는 20도, 낮에는 5도 더 올라갔어요. 낮 온도는 몇 도일까요?",
        steps: [
            {
                question: "아침 온도는 몇 도였나요?",
                options: ["18도", "19도", "20도", "21도"],
                correct: 2,
                explanation: "아침에 20도였어요! 🌅"
            },
            {
                question: "낮에 올라간 온도는 몇 도인가요?",
                options: ["4도", "5도", "6도", "7도"],
                correct: 1,
                explanation: "5도가 올라갔어요! ☀️"
            },
            {
                question: "20 + 5 = ?",
                options: ["24도", "25도", "26도", "27도"],
                correct: 1,
                explanation: "낮에는 25도! 따뜻한 날씨네요! 🌡️"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 139,
        question: "🌪️ 바람이 불어서 풍선이 날아가요. 10개 중에서 3개가 날아갔어요. 남은 풍선은 몇 개일까요?",
        steps: [
            {
                question: "처음에 있던 풍선은 몇 개인가요?",
                options: ["8개", "9개", "10개", "11개"],
                correct: 2,
                explanation: "10개의 알록달록한 풍선이 있었어요! 🎈"
            },
            {
                question: "바람에 날아간 풍선은 몇 개인가요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "휘이잉~ 3개가 날아갔어요!"
            },
            {
                question: "10 - 3 = ?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 1,
                explanation: "7개가 남았어요! 꽉 잡고 있어야겠어요! 🎈"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 140,
        question: "🌙 밤하늘의 별을 세어요. 북쪽에 3개, 남쪽에 3개, 동쪽에 2개가 반짝여요. 별은 모두 몇 개일까요?",
        steps: [
            {
                question: "북쪽과 남쪽의 별은 각각 몇 개인가요?",
                options: ["2개씩", "3개씩", "4개씩", "5개씩"],
                correct: 1,
                explanation: "북쪽 3개, 남쪽 3개씩 있어요! ⭐"
            },
            {
                question: "동쪽의 별은 몇 개인가요?",
                options: ["1개", "2개", "3개", "4개"],
                correct: 1,
                explanation: "동쪽에 2개가 반짝여요! ✨"
            },
            {
                question: "3 + 3 + 2 = ?",
                options: ["7개", "8개", "9개", "10개"],
                correct: 1,
                explanation: "총 8개의 별이 반짝! 아름다운 밤하늘이에요! 🌟"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    // 41-50: 동물들의 특별한 능력과 수학
    {
        id: 141,
        question: "🦘 캥거루가 뛰어요! 한 번에 2m씩 뛰는데, 3번 뛰면 몇 m를 갈까요?",
        steps: [
            {
                question: "캥거루가 한 번에 뛰는 거리는?",
                options: ["1m", "2m", "3m", "4m"],
                correct: 1,
                explanation: "한 번에 2m씩 폴짝! 🦘"
            },
            {
                question: "몇 번 뛰었나요?",
                options: ["2번", "3번", "4번", "5번"],
                correct: 1,
                explanation: "3번 뛰었어요! 폴짝폴짝폴짝!"
            },
            {
                question: "2 + 2 + 2 = ?",
                options: ["5m", "6m", "7m", "8m"],
                correct: 1,
                explanation: "총 6m를 뛰었어요! 캥거루 점프 대단해요! 🦘✨"
            }
        ],
        category: "거리 계산",
        difficulty: "easy"
    },
    {
        id: 142,
        question: "🦅 독수리가 먹이를 찾아요. 왼쪽 눈으로 2마리, 오른쪽 눈으로 3마리의 토끼를 봤어요. 본 토끼는 모두 몇 마리일까요?",
        steps: [
            {
                question: "왼쪽 눈으로 본 토끼는 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "왼쪽 눈으로 2마리를 봤어요! 👁️"
            },
            {
                question: "오른쪽 눈으로 본 토끼는 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "오른쪽 눈으로 3마리를 봤어요! 👁️"
            },
            {
                question: "2 + 3 = ?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 1,
                explanation: "총 5마리! 독수리의 눈은 정말 좋아요! 🦅👀"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 143,
        question: "🐘 코끼리가 물을 뿌려요! 코로 한 번에 4리터씩 뿌리는데, 2번 뿌리면 몇 리터일까요?",
        steps: [
            {
                question: "한 번에 뿌리는 물의 양은?",
                options: ["3리터", "4리터", "5리터", "6리터"],
                correct: 1,
                explanation: "한 번에 4리터씩 뿌려요! 💦"
            },
            {
                question: "몇 번 뿌렸나요?",
                options: ["1번", "2번", "3번", "4번"],
                correct: 1,
                explanation: "2번 뿌렸어요! 콸콸~"
            },
            {
                question: "4 + 4 = ?",
                options: ["7리터", "8리터", "9리터", "10리터"],
                correct: 1,
                explanation: "총 8리터! 시원한 물놀이예요! 🐘💦"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 144,
        question: "🦒 기린의 목이 길어요! 나무 위 6m 높이의 잎을 먹는데, 아래로 2m 내려온 잎도 먹어요. 가장 낮게 먹는 높이는?",
        steps: [
            {
                question: "가장 높이 먹는 잎의 높이는?",
                options: ["5m", "6m", "7m", "8m"],
                correct: 1,
                explanation: "6m 높이의 잎을 먹어요! 🌿"
            },
            {
                question: "아래로 내려온 거리는?",
                options: ["1m", "2m", "3m", "4m"],
                correct: 1,
                explanation: "2m 아래 잎도 먹어요!"
            },
            {
                question: "6 - 2 = ?",
                options: ["3m", "4m", "5m", "6m"],
                correct: 1,
                explanation: "4m 높이까지 먹을 수 있어요! 기린의 긴 목 덕분이에요! 🦒"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 145,
        question: "🐙 문어의 다리를 세어요. 문어는 8개의 다리가 있어요. 다리의 반은 몇 개일까요?",
        steps: [
            {
                question: "문어의 다리는 모두 몇 개인가요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "문어는 8개의 다리가 있어요! 🐙"
            },
            {
                question: "반으로 나누면 어떻게 될까요?",
                options: ["두 그룹으로", "세 그룹으로", "네 그룹으로", "안 나눠져요"],
                correct: 0,
                explanation: "반으로 나누면 두 그룹이 되어요!"
            },
            {
                question: "8의 반은?",
                options: ["3개", "4개", "5개", "6개"],
                correct: 1,
                explanation: "8 ÷ 2 = 4! 문어 다리의 반은 4개예요! 🐙"
            }
        ],
        category: "나누기",
        difficulty: "easy"
    },
    {
        id: 146,
        question: "🦇 박쥐가 동굴에서 자요. 천장에 7마리가 매달려 있는데, 3마리가 밖으로 날아갔어요. 동굴에 남은 박쥐는?",
        steps: [
            {
                question: "처음에 동굴에 있던 박쥐는 몇 마리인가요?",
                options: ["5마리", "6마리", "7마리", "8마리"],
                correct: 2,
                explanation: "7마리가 거꾸로 매달려 있었어요! 🦇"
            },
            {
                question: "밖으로 날아간 박쥐는 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "3마리가 먹이를 찾으러 날아갔어요!"
            },
            {
                question: "7 - 3 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "4마리가 동굴에서 쉬고 있어요! 🦇💤"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 147,
        question: "🐊 악어가 이빨을 자랑해요. 위턱에 40개, 아래턱에 40개가 있대요. 이빨이 모두 몇 개일까요?",
        steps: [
            {
                question: "위턱의 이빨은 몇 개인가요?",
                options: ["30개", "35개", "40개", "45개"],
                correct: 2,
                explanation: "위턱에 40개의 날카로운 이빨! 🦷"
            },
            {
                question: "아래턱의 이빨은 몇 개인가요?",
                options: ["35개", "40개", "45개", "50개"],
                correct: 1,
                explanation: "아래턱에도 40개! 똑같아요!"
            },
            {
                question: "40 + 40 = ?",
                options: ["70개", "80개", "90개", "100개"],
                correct: 1,
                explanation: "총 80개! 악어 이빨 정말 많네요! 🐊"
            }
        ],
        category: "큰 수 더하기",
        difficulty: "easy"
    },
    {
        id: 148,
        question: "🦅 매가 사냥을 해요. 5마리의 쥐를 잡으려 했는데 2마리만 잡았어요. 못 잡은 쥐는 몇 마리일까요?",
        steps: [
            {
                question: "매가 잡으려 한 쥐는 몇 마리인가요?",
                options: ["4마리", "5마리", "6마리", "7마리"],
                correct: 1,
                explanation: "5마리를 잡으려고 했어요! 🐭"
            },
            {
                question: "실제로 잡은 쥐는 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "2마리만 잡았어요!"
            },
            {
                question: "5 - 2 = ?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "3마리는 도망갔어요! 빠른 쥐들이네요! 🐭💨"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    },
    {
        id: 149,
        question: "🦁 사자 가족이 있어요. 아빠 사자 1마리, 엄마 사자 1마리, 아기 사자 2마리예요. 사자 가족은 모두 몇 마리일까요?",
        steps: [
            {
                question: "어른 사자는 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "아빠 1마리 + 엄마 1마리 = 2마리예요!"
            },
            {
                question: "아기 사자는 몇 마리인가요?",
                options: ["1마리", "2마리", "3마리", "4마리"],
                correct: 1,
                explanation: "아기 사자가 2마리 있어요! 🦁"
            },
            {
                question: "2 + 2 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "총 4마리의 사자 가족! 행복한 가족이에요! 🦁👨‍👩‍👦‍👦"
            }
        ],
        category: "더하기",
        difficulty: "easy"
    },
    {
        id: 150,
        question: "🐢 거북이 경주를 해요! 빨간 거북이가 10걸음, 파란 거북이가 7걸음 갔어요. 빨간 거북이가 몇 걸음 더 갔을까요?",
        steps: [
            {
                question: "빨간 거북이가 간 거리는?",
                options: ["8걸음", "9걸음", "10걸음", "11걸음"],
                correct: 2,
                explanation: "빨간 거북이가 10걸음 갔어요! 🔴🐢"
            },
            {
                question: "파란 거북이가 간 거리는?",
                options: ["6걸음", "7걸음", "8걸음", "9걸음"],
                correct: 1,
                explanation: "파란 거북이는 7걸음! 🔵🐢"
            },
            {
                question: "10 - 7 = ?",
                options: ["2걸음", "3걸음", "4걸음", "5걸음"],
                correct: 1,
                explanation: "빨간 거북이가 3걸음 더 갔어요! 느려도 꾸준히! 🐢🏁"
            }
        ],
        category: "빼기",
        difficulty: "easy"
    }
];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.easyNatureQuestions = easyNatureQuestions;
}