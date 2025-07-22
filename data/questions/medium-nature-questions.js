// 중급 난이도 자연과 동물 문제 50개 (초등 3-4학년 수준)
// 아이들이 까르르 웃을 만한 재미있는 이야기로 구성
const mediumNatureQuestions = [
    // 1-10: 동물들의 재미있는 분수 이야기
    {
        id: 201,
        question: "🐵 원숭이가 바나나를 나눠요! 🍌 큰 바나나를 4등분해서 혜완이에게 2/4를 주고, 자기는 1/4을 먹었어요. 남은 바나나는 전체의 몇 분의 몇일까요?",
        steps: [
            {
                question: "혜완이가 받은 바나나는 몇 분의 몇인가요?",
                options: ["1/4", "2/4", "3/4", "4/4"],
                correct: 1,
                explanation: "혜완이가 2/4를 받았어요! 맛있겠다!"
            },
            {
                question: "원숭이가 먹은 바나나는 몇 분의 몇인가요?",
                options: ["1/4", "2/4", "3/4", "4/4"],
                correct: 0,
                explanation: "원숭이가 1/4를 냠냠! 🐵"
            },
            {
                question: "2/4 + 1/4 = ?를 전체에서 빼면?",
                options: ["1/4", "2/4", "3/4", "4/4"],
                correct: 0,
                explanation: "4/4 - 3/4 = 1/4이 남았어요! 아껴둔 바나나! 🍌"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    {
        id: 202,
        question: "🦆 오리들이 연못에서 수영해요! 전체 24마리 중에서 1/3이 물속으로 다이빙하고, 1/4이 날아갔어요. 연못 위에 남은 오리는 몇 마리일까요?",
        steps: [
            {
                question: "전체 오리 중 1/3은 몇 마리인가요?",
                options: ["6마리", "8마리", "10마리", "12마리"],
                correct: 1,
                explanation: "24 ÷ 3 = 8마리가 다이빙! 물속으로 퐁당! 🦆"
            },
            {
                question: "전체 오리 중 1/4는 몇 마리인가요?",
                options: ["4마리", "6마리", "8마리", "10마리"],
                correct: 1,
                explanation: "24 ÷ 4 = 6마리가 훨훨 날아갔어요!"
            },
            {
                question: "24 - 8 - 6 = ?",
                options: ["8마리", "10마리", "12마리", "14마리"],
                correct: 1,
                explanation: "10마리가 연못 위에서 여유롭게 헤엄쳐요! 🦆💦"
            }
        ],
        category: "분수와 나눗셈",
        difficulty: "medium"
    },
    {
        id: 203,
        question: "🐝 꿀벌이 꽃가루를 모아요! 첫 번째 벌집에 3.5kg, 두 번째 벌집에 2.8kg을 저장했어요. 두 벌집의 꽃가루를 합치면 몇 kg일까요?",
        steps: [
            {
                question: "첫 번째 벌집의 꽃가루는 몇 kg인가요?",
                options: ["3.2kg", "3.5kg", "3.8kg", "4.0kg"],
                correct: 1,
                explanation: "첫 번째 벌집에 3.5kg이 있어요! 🍯"
            },
            {
                question: "소수점 덧셈에서 주의할 점은?",
                options: ["소수점을 맞춰서 계산", "큰 수부터 더하기", "반올림하기", "정수만 더하기"],
                correct: 0,
                explanation: "소수점을 세로로 맞춰서 계산해요!"
            },
            {
                question: "3.5 + 2.8 = ?",
                options: ["6.1kg", "6.3kg", "6.5kg", "6.7kg"],
                correct: 1,
                explanation: "6.3kg! 꿀벌들이 열심히 모았네요! 🐝💪"
            }
        ],
        category: "소수",
        difficulty: "medium"
    },
    {
        id: 204,
        question: "🦒 기린 가족의 키를 재봐요! 아빠 기린 5.4m, 엄마 기린 4.9m, 아기 기린 2.7m예요. 가족 평균 키는 몇 m일까요?",
        steps: [
            {
                question: "기린 가족의 키를 모두 더하면?",
                options: ["12.8m", "13.0m", "13.2m", "13.4m"],
                correct: 1,
                explanation: "5.4 + 4.9 + 2.7 = 13.0m예요!"
            },
            {
                question: "기린 가족은 모두 몇 마리인가요?",
                options: ["2마리", "3마리", "4마리", "5마리"],
                correct: 1,
                explanation: "아빠, 엄마, 아기 3마리 가족이에요! 🦒"
            },
            {
                question: "13.0 ÷ 3 = ?",
                options: ["4.2m", "4.3m", "4.4m", "4.5m"],
                correct: 1,
                explanation: "평균 키는 4.3m! 정말 큰 가족이에요! 🦒👨‍👩‍👦"
            }
        ],
        category: "소수와 평균",
        difficulty: "medium"
    },
    {
        id: 205,
        question: "🐧 펭귄들이 얼음 위에서 미끄럼 대회를 해요! 정사각형 얼음판의 한 변이 12m예요. 이 얼음판의 둘레는 몇 m일까요?",
        steps: [
            {
                question: "정사각형의 한 변은 몇 m인가요?",
                options: ["10m", "11m", "12m", "13m"],
                correct: 2,
                explanation: "한 변이 12m인 정사각형 얼음판이에요! ⬜"
            },
            {
                question: "정사각형의 둘레 공식은?",
                options: ["한 변 × 4", "한 변 × 2", "한 변 ÷ 4", "한 변 + 4"],
                correct: 0,
                explanation: "정사각형 둘레 = 한 변 × 4예요!"
            },
            {
                question: "12 × 4 = ?",
                options: ["44m", "46m", "48m", "50m"],
                correct: 2,
                explanation: "둘레는 48m! 펭귄들이 한 바퀴 도는 거리예요! 🐧⛸️"
            }
        ],
        category: "도형",
        difficulty: "medium"
    },
    {
        id: 206,
        question: "🦋 나비 정원에 직사각형 화단이 있어요! 가로 15m, 세로 8m인 화단의 넓이는 몇 m²일까요?",
        steps: [
            {
                question: "화단의 가로는 몇 m인가요?",
                options: ["13m", "14m", "15m", "16m"],
                correct: 2,
                explanation: "가로가 15m예요! 🌺"
            },
            {
                question: "직사각형의 넓이 공식은?",
                options: ["가로 + 세로", "가로 × 세로", "가로 ÷ 세로", "가로 - 세로"],
                correct: 1,
                explanation: "직사각형 넓이 = 가로 × 세로예요!"
            },
            {
                question: "15 × 8 = ?",
                options: ["110m²", "115m²", "120m²", "125m²"],
                correct: 2,
                explanation: "넓이는 120m²! 나비들이 춤출 큰 화단이네요! 🦋🌸"
            }
        ],
        category: "도형",
        difficulty: "medium"
    },
    {
        id: 207,
        question: "🐻 곰돌이가 꿀 항아리를 정리해요! 7개 항아리에 꿀을 똑같이 나누어 담으려고 해요. 총 21리터의 꿀이 있다면 한 항아리에 몇 리터씩 들어갈까요?",
        steps: [
            {
                question: "꿀 항아리는 모두 몇 개인가요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 1,
                explanation: "7개의 항아리가 있어요! 🍯"
            },
            {
                question: "총 꿀의 양은 몇 리터인가요?",
                options: ["19리터", "20리터", "21리터", "22리터"],
                correct: 2,
                explanation: "21리터의 달콤한 꿀이 있어요!"
            },
            {
                question: "21 ÷ 7 = ?",
                options: ["2리터", "3리터", "4리터", "5리터"],
                correct: 1,
                explanation: "한 항아리에 3리터씩! 곰돌이가 신중하게 나눴어요! 🐻"
            }
        ],
        category: "나눗셈",
        difficulty: "medium"
    },
    {
        id: 208,
        question: "🦅 독수리가 시간을 재며 사냥해요! 오전 9시 30분에 출발해서 2시간 45분 후에 돌아왔어요. 돌아온 시간은 언제일까요?",
        steps: [
            {
                question: "출발 시간은 언제인가요?",
                options: ["9시 20분", "9시 30분", "9시 40분", "9시 50분"],
                correct: 1,
                explanation: "오전 9시 30분에 출발했어요! 🦅"
            },
            {
                question: "2시간 45분을 더하려면?",
                options: ["시간과 분을 따로 계산", "분만 더하기", "시간만 더하기", "대충 계산"],
                correct: 0,
                explanation: "시간과 분을 각각 계산해요!"
            },
            {
                question: "9시 30분 + 2시간 45분 = ?",
                options: ["12시 15분", "12시 45분", "1시 15분", "1시 45분"],
                correct: 0,
                explanation: "12시 15분에 돌아왔어요! 성공적인 사냥이었나봐요! 🦅🍽️"
            }
        ],
        category: "시간",
        difficulty: "medium"
    },
    {
        id: 209,
        question: "🐿️ 다람쥐가 도토리를 모아요! 첫날 15개, 둘째날 첫날의 2배, 셋째날 둘째날의 절반을 모았어요. 셋째날에는 몇 개를 모았을까요?",
        steps: [
            {
                question: "첫날 모은 도토리는 몇 개인가요?",
                options: ["13개", "14개", "15개", "16개"],
                correct: 2,
                explanation: "첫날에 15개를 모았어요! 🌰"
            },
            {
                question: "둘째날은 첫날의 2배이므로?",
                options: ["25개", "30개", "35개", "40개"],
                correct: 1,
                explanation: "15 × 2 = 30개! 부지런한 다람쥐!"
            },
            {
                question: "셋째날은 둘째날의 절반이므로?",
                options: ["12개", "15개", "18개", "20개"],
                correct: 1,
                explanation: "30 ÷ 2 = 15개! 적당히 쉬었나봐요! 🐿️"
            }
        ],
        category: "배수와 약수",
        difficulty: "medium"
    },
    {
        id: 210,
        question: "🐢 거북이 경주에서 확률을 계산해요! 6마리 거북이가 경주하는데, 초록 거북이가 1등 할 확률은 몇 분의 몇일까요?",
        steps: [
            {
                question: "경주에 참여한 거북이는 몇 마리인가요?",
                options: ["5마리", "6마리", "7마리", "8마리"],
                correct: 1,
                explanation: "6마리가 경주에 참여해요! 🐢"
            },
            {
                question: "1등은 몇 마리가 할 수 있나요?",
                options: ["1마리", "2마리", "3마리", "6마리"],
                correct: 0,
                explanation: "1등은 한 마리만 할 수 있어요!"
            },
            {
                question: "초록 거북이가 1등 할 확률은?",
                options: ["1/6", "1/5", "1/4", "1/3"],
                correct: 0,
                explanation: "1/6! 모든 거북이가 똑같은 기회를 가져요! 🐢🏁"
            }
        ],
        category: "확률",
        difficulty: "medium"
    },
    // 11-20: 자연 현상과 계산의 만남
    {
        id: 211,
        question: "🌳 나무의 나이테를 세어봐요! 나무를 자르니 나이테가 25.5개 보여요. 이 나무는 몇 살일까요? (나이테 하나가 1년)",
        steps: [
            {
                question: "나이테는 몇 개 보이나요?",
                options: ["24.5개", "25.5개", "26.5개", "27.5개"],
                correct: 1,
                explanation: "25.5개의 나이테가 보여요! 🌳"
            },
            {
                question: "나이테 하나는 몇 년을 의미하나요?",
                options: ["6개월", "1년", "2년", "3년"],
                correct: 1,
                explanation: "나이테 하나가 1년이에요!"
            },
            {
                question: "25.5 × 1 = ?",
                options: ["25살", "25.5살", "26살", "26.5살"],
                correct: 1,
                explanation: "이 나무는 25.5살! 아직 어린 나무네요! 🌳✨"
            }
        ],
        category: "소수",
        difficulty: "medium"
    },
    {
        id: 212,
        question: "⚡ 번개가 치고 나서 천둥소리가 들려요! 빛이 보인 후 15초 뒤에 소리가 들렸어요. 번개는 약 몇 km 떨어진 곳에서 쳤을까요? (소리는 1초에 약 0.3km)",
        steps: [
            {
                question: "빛과 소리 사이의 시간은?",
                options: ["12초", "13초", "14초", "15초"],
                correct: 3,
                explanation: "15초의 시간차가 있었어요! ⚡"
            },
            {
                question: "소리는 1초에 몇 km 가나요?",
                options: ["0.2km", "0.3km", "0.4km", "0.5km"],
                correct: 1,
                explanation: "소리는 1초에 약 0.3km 가요!"
            },
            {
                question: "15 × 0.3 = ?",
                options: ["4.2km", "4.5km", "4.8km", "5.1km"],
                correct: 1,
                explanation: "약 4.5km 떨어진 곳에서 번개가 쳤어요! 멀리서 다행이에요! ⚡⛈️"
            }
        ],
        category: "소수 곱셈",
        difficulty: "medium"
    },
    {
        id: 213,
        question: "🌊 파도가 밀려와요! 큰 파도 3개가 30초마다, 작은 파도 5개가 15초마다 와요. 1분 동안 몇 개의 파도가 올까요?",
        steps: [
            {
                question: "1분은 몇 초인가요?",
                options: ["50초", "60초", "70초", "80초"],
                correct: 1,
                explanation: "1분 = 60초예요! ⏱️"
            },
            {
                question: "60초 동안 큰 파도는 몇 번 올까요?",
                options: ["1번", "2번", "3번", "4번"],
                correct: 1,
                explanation: "60 ÷ 30 = 2번! 큰 파도가 2번 와요! 🌊"
            },
            {
                question: "60초 동안 작은 파도는 몇 번 올까요?",
                options: ["3번", "4번", "5번", "6번"],
                correct: 1,
                explanation: "60 ÷ 15 = 4번! 총 2 + 4 = 6개의 파도! 🌊🌊🌊"
            }
        ],
        category: "시간과 나눗셈",
        difficulty: "medium"
    },
    {
        id: 214,
        question: "🍄 버섯이 신기하게 자라요! 첫날 1.2cm, 둘째날 2.4cm, 셋째날 3.6cm... 이 규칙대로라면 넷째날은 몇 cm 자랄까요?",
        steps: [
            {
                question: "첫째날부터 셋째날까지의 규칙을 찾아보세요!",
                options: ["1.2씩 더해짐", "2배씩 커짐", "0.5씩 더해짐", "규칙 없음"],
                correct: 0,
                explanation: "매일 1.2cm씩 더 자라요! 🍄"
            },
            {
                question: "셋째날 자란 길이는?",
                options: ["3.2cm", "3.4cm", "3.6cm", "3.8cm"],
                correct: 2,
                explanation: "셋째날에 3.6cm 자랐어요!"
            },
            {
                question: "3.6 + 1.2 = ?",
                options: ["4.6cm", "4.8cm", "5.0cm", "5.2cm"],
                correct: 1,
                explanation: "넷째날은 4.8cm! 버섯이 쑥쑥 자라네요! 🍄📏"
            }
        ],
        category: "수 규칙과 소수",
        difficulty: "medium"
    },
    {
        id: 215,
        question: "🦆 오리들이 V자 대형으로 날아요! 앞에 1마리, 두 번째 줄에 3마리, 세 번째 줄에 5마리... 다섯 번째 줄에는 몇 마리가 있을까요?",
        steps: [
            {
                question: "각 줄의 오리 수를 보면 어떤 규칙이 있나요?",
                options: ["2씩 더해짐", "3씩 더해짐", "1씩 더해짐", "규칙 없음"],
                correct: 0,
                explanation: "1, 3, 5... 홀수로 2씩 늘어나요! 🦆"
            },
            {
                question: "네 번째 줄에는 몇 마리가 있을까요?",
                options: ["6마리", "7마리", "8마리", "9마리"],
                correct: 1,
                explanation: "5 + 2 = 7마리가 있어요!"
            },
            {
                question: "다섯 번째 줄에는?",
                options: ["8마리", "9마리", "10마리", "11마리"],
                correct: 1,
                explanation: "7 + 2 = 9마리! 멋진 V자 대형이에요! 🦆✈️"
            }
        ],
        category: "수 규칙",
        difficulty: "medium"
    },
    {
        id: 216,
        question: "🐨 코알라가 유칼립투스 잎을 먹어요! 하루에 자기 몸무게의 1/10을 먹는데, 30kg인 코알라는 하루에 몇 kg을 먹을까요?",
        steps: [
            {
                question: "코알라의 몸무게는 몇 kg인가요?",
                options: ["25kg", "30kg", "35kg", "40kg"],
                correct: 1,
                explanation: "30kg의 귀여운 코알라예요! 🐨"
            },
            {
                question: "1/10을 소수로 바꾸면?",
                options: ["0.1", "0.01", "0.001", "1.0"],
                correct: 0,
                explanation: "1/10 = 0.1이에요!"
            },
            {
                question: "30 × 0.1 = ?",
                options: ["2.5kg", "3.0kg", "3.5kg", "4.0kg"],
                correct: 1,
                explanation: "하루에 3kg을 먹어요! 나뭇잎이 주식이에요! 🐨🌿"
            }
        ],
        category: "분수와 소수",
        difficulty: "medium"
    },
    {
        id: 217,
        question: "🦉 부엉이가 밤에 사냥해요! 첫 번째 밤에 쥐 4마리, 두 번째 밤에 3마리, 세 번째 밤에 5마리를 잡았어요. 평균적으로 하루에 몇 마리를 잡았을까요?",
        steps: [
            {
                question: "3일 동안 잡은 쥐의 총 마리 수는?",
                options: ["11마리", "12마리", "13마리", "14마리"],
                correct: 1,
                explanation: "4 + 3 + 5 = 12마리를 잡았어요! 🦉"
            },
            {
                question: "평균을 구하려면?",
                options: ["총합 ÷ 일수", "총합 × 일수", "총합 + 일수", "총합 - 일수"],
                correct: 0,
                explanation: "평균 = 총합 ÷ 일수예요!"
            },
            {
                question: "12 ÷ 3 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "평균 4마리! 부엉이가 훌륭한 사냥꾼이에요! 🦉🏹"
            }
        ],
        category: "평균",
        difficulty: "medium"
    },
    {
        id: 218,
        question: "🌈 무지개의 색깔을 각도로 나타내요! 빨주노초파남보 7색이 180도를 똑같이 나눈다면, 한 색깔당 몇 도일까요?",
        steps: [
            {
                question: "무지개는 모두 몇 색깔인가요?",
                options: ["6색", "7색", "8색", "9색"],
                correct: 1,
                explanation: "빨주노초파남보 7가지 색이에요! 🌈"
            },
            {
                question: "반원의 각도는 몇 도인가요?",
                options: ["90도", "180도", "270도", "360도"],
                correct: 1,
                explanation: "반원은 180도예요!"
            },
            {
                question: "180 ÷ 7 = ?",
                options: ["약 25도", "약 26도", "약 27도", "약 28도"],
                correct: 1,
                explanation: "약 26도! 각 색깔이 차지하는 각도예요! 🌈📐"
            }
        ],
        category: "각도와 나눗셈",
        difficulty: "medium"
    },
    {
        id: 219,
        question: "🐛 애벌레가 나비가 되려면 25일이 걸려요! 지금까지 15일이 지났다면, 나비가 되려면 며칠이 더 필요할까요?",
        steps: [
            {
                question: "나비가 되는 데 총 며칠이 걸리나요?",
                options: ["23일", "24일", "25일", "26일"],
                correct: 2,
                explanation: "총 25일이 걸려요! 🐛➡️🦋"
            },
            {
                question: "지금까지 며칠이 지났나요?",
                options: ["13일", "14일", "15일", "16일"],
                correct: 2,
                explanation: "15일이 지났어요!"
            },
            {
                question: "25 - 15 = ?",
                options: ["8일", "9일", "10일", "11일"],
                correct: 2,
                explanation: "10일 더 기다리면 예쁜 나비가 돼요! 🦋✨"
            }
        ],
        category: "뺄셈",
        difficulty: "medium"
    },
    {
        id: 220,
        question: "🦆 연못에 오리 가족이 있어요! 전체의 2/5가 어미 오리이고, 나머지는 새끼예요. 전체가 25마리라면 새끼 오리는 몇 마리일까요?",
        steps: [
            {
                question: "전체 오리는 몇 마리인가요?",
                options: ["23마리", "24마리", "25마리", "26마리"],
                correct: 2,
                explanation: "총 25마리의 오리가 있어요! 🦆"
            },
            {
                question: "어미 오리는 몇 마리인가요?",
                options: ["8마리", "9마리", "10마리", "11마리"],
                correct: 2,
                explanation: "25 × 2/5 = 10마리의 어미 오리!"
            },
            {
                question: "25 - 10 = ?",
                options: ["13마리", "14마리", "15마리", "16마리"],
                correct: 2,
                explanation: "새끼 오리는 15마리! 귀여운 새끼들이 많네요! 🐥🐥🐥"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    // 21-30: 동물들의 특별한 능력과 수학
    {
        id: 221,
        question: "🐘 코끼리의 기억력 테스트! 10개의 먹이 위치를 기억했는데, 그 중 3/5를 정확히 찾았어요. 몇 개의 먹이를 찾았을까요?",
        steps: [
            {
                question: "기억한 먹이 위치는 몇 개인가요?",
                options: ["8개", "9개", "10개", "11개"],
                correct: 2,
                explanation: "10개의 위치를 기억했어요! 🐘🧠"
            },
            {
                question: "3/5를 소수로 바꾸면?",
                options: ["0.5", "0.6", "0.7", "0.8"],
                correct: 1,
                explanation: "3/5 = 0.6이에요!"
            },
            {
                question: "10 × 3/5 = ?",
                options: ["5개", "6개", "7개", "8개"],
                correct: 1,
                explanation: "6개를 찾았어요! 코끼리의 기억력은 정말 좋아요! 🐘💡"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    {
        id: 222,
        question: "🦅 독수리의 시력 측정! 1km 떨어진 곳의 작은 동물을 볼 수 있어요. 이것을 미터로 바꾸면 몇 m일까요?",
        steps: [
            {
                question: "1km는 몇 m인가요?",
                options: ["100m", "500m", "1000m", "1500m"],
                correct: 2,
                explanation: "1km = 1000m예요! 📏"
            },
            {
                question: "독수리는 얼마나 멀리 볼 수 있나요?",
                options: ["800m", "900m", "1000m", "1100m"],
                correct: 2,
                explanation: "1000m나 멀리 볼 수 있어요!"
            },
            {
                question: "이것은 축구장 몇 개 길이와 같을까요? (축구장 100m)",
                options: ["8개", "9개", "10개", "11개"],
                correct: 2,
                explanation: "1000 ÷ 100 = 10개! 축구장 10개 거리를 볼 수 있어요! 🦅👁️"
            }
        ],
        category: "단위 변환",
        difficulty: "medium"
    },
    {
        id: 223,
        question: "🐎 말이 달려요! 시속 48km로 달리는 말이 30분 동안 달리면 몇 km를 갈까요?",
        steps: [
            {
                question: "말의 속력은 시속 몇 km인가요?",
                options: ["46km", "47km", "48km", "49km"],
                correct: 2,
                explanation: "시속 48km로 달려요! 🐎💨"
            },
            {
                question: "30분은 몇 시간인가요?",
                options: ["0.3시간", "0.5시간", "0.7시간", "1.0시간"],
                correct: 1,
                explanation: "30분 = 0.5시간이에요!"
            },
            {
                question: "48 × 0.5 = ?",
                options: ["22km", "24km", "26km", "28km"],
                correct: 1,
                explanation: "24km를 달려요! 말이 정말 빠르네요! 🐎🏁"
            }
        ],
        category: "속력",
        difficulty: "medium"
    },
    {
        id: 224,
        question: "🐸 개구리가 연못을 뛰어건너요! 연못의 지름이 8m인데, 개구리가 정확히 가운데를 향해 뛴다면 몇 m를 뛸까요?",
        steps: [
            {
                question: "연못의 지름은 몇 m인가요?",
                options: ["6m", "7m", "8m", "9m"],
                correct: 2,
                explanation: "연못의 지름이 8m예요! 🐸"
            },
            {
                question: "지름은 무엇을 나타내나요?",
                options: ["가장자리까지", "중심에서 가장자리까지", "한쪽 끝에서 다른 끝까지", "둘레"],
                correct: 2,
                explanation: "지름은 한쪽 끝에서 다른 끝까지의 거리예요!"
            },
            {
                question: "가운데를 뛰어건넌다면?",
                options: ["6m", "7m", "8m", "9m"],
                correct: 2,
                explanation: "8m를 뛰어야 해요! 개구리의 대점프! 🐸🏊‍♂️"
            }
        ],
        category: "원",
        difficulty: "medium"
    },
    {
        id: 225,
        question: "🐧 펭귄들이 물고기를 나눠 먹어요! 36마리의 물고기를 9마리의 펭귄이 똑같이 나눈다면, 한 마리당 몇 마리씩 먹을까요?",
        steps: [
            {
                question: "잡은 물고기는 모두 몇 마리인가요?",
                options: ["34마리", "35마리", "36마리", "37마리"],
                correct: 2,
                explanation: "36마리의 싱싱한 물고기! 🐟"
            },
            {
                question: "펭귄은 모두 몇 마리인가요?",
                options: ["7마리", "8마리", "9마리", "10마리"],
                correct: 2,
                explanation: "9마리의 배고픈 펭귄들!"
            },
            {
                question: "36 ÷ 9 = ?",
                options: ["3마리", "4마리", "5마리", "6마리"],
                correct: 1,
                explanation: "한 마리당 4마리씩! 펭귄들이 배부르겠어요! 🐧🍽️"
            }
        ],
        category: "나눗셈",
        difficulty: "medium"
    },
    {
        id: 226,
        question: "🦘 캥거루 엄마의 주머니 계산! 주머니에 아기 2마리, 먹이 3개, 물 1병이 들어있어요. 전체 무게가 15kg이고 엄마 몸무게가 45kg이라면, 총 무게는?",
        steps: [
            {
                question: "주머니 안의 무게는 몇 kg인가요?",
                options: ["13kg", "14kg", "15kg", "16kg"],
                correct: 2,
                explanation: "주머니 안이 15kg이에요! 🦘👶"
            },
            {
                question: "캥거루 엄마의 몸무게는?",
                options: ["43kg", "44kg", "45kg", "46kg"],
                correct: 2,
                explanation: "엄마 캥거루가 45kg이에요!"
            },
            {
                question: "15 + 45 = ?",
                options: ["58kg", "59kg", "60kg", "61kg"],
                correct: 2,
                explanation: "총 60kg! 엄마 캥거루가 정말 든든해요! 🦘💪"
            }
        ],
        category: "덧셈",
        difficulty: "medium"
    },
    {
        id: 227,
        question: "🦋 나비의 생활사를 분수로 표현해요! 알 3일, 애벌레 14일, 번데기 7일, 나비 6일의 생활사에서 애벌레 기간은 전체의 몇 분의 몇일까요?",
        steps: [
            {
                question: "나비의 전체 생활사는 며칠인가요?",
                options: ["28일", "29일", "30일", "31일"],
                correct: 2,
                explanation: "3 + 14 + 7 + 6 = 30일이에요! 🦋"
            },
            {
                question: "애벌레 기간은 며칠인가요?",
                options: ["12일", "13일", "14일", "15일"],
                correct: 2,
                explanation: "애벌레로 14일 동안 살아요! 🐛"
            },
            {
                question: "14/30을 기약분수로 만들면?",
                options: ["7/15", "2/5", "1/3", "3/7"],
                correct: 0,
                explanation: "14/30 = 7/15! 애벌레 기간이 가장 길어요! 🐛📚"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    {
        id: 228,
        question: "🐻 곰이 겨울잠을 자요! 10월 15일부터 3월 15일까지 잔다면, 총 며칠 동안 잘까요? (10월 31일, 11월 30일, 12월 31일, 1월 31일, 2월 28일, 3월 31일)",
        steps: [
            {
                question: "10월 15일부터 10월 31일까지는 며칠인가요?",
                options: ["15일", "16일", "17일", "18일"],
                correct: 2,
                explanation: "31 - 15 + 1 = 17일이에요! (15일 포함)"
            },
            {
                question: "11월, 12월, 1월, 2월은 총 며칠인가요?",
                options: ["119일", "120일", "121일", "122일"],
                correct: 1,
                explanation: "30 + 31 + 31 + 28 = 120일!"
            },
            {
                question: "3월 1일부터 15일까지는?",
                options: ["14일", "15일", "16일", "17일"],
                correct: 1,
                explanation: "총 17 + 120 + 15 = 152일! 긴 겨울잠이에요! 🐻💤"
            }
        ],
        category: "날짜 계산",
        difficulty: "medium"
    },
    {
        id: 229,
        question: "🐋 고래의 심장박동을 재봐요! 1분에 10번 뛰는데, 하루 동안 몇 번이나 뛸까요?",
        steps: [
            {
                question: "1분에 심장이 몇 번 뛰나요?",
                options: ["8번", "9번", "10번", "11번"],
                correct: 2,
                explanation: "1분에 10번 뛰어요! 🐋💓"
            },
            {
                question: "1시간은 몇 분인가요?",
                options: ["50분", "60분", "70분", "80분"],
                correct: 1,
                explanation: "1시간 = 60분이에요!"
            },
            {
                question: "10 × 60 × 24 = ?",
                options: ["14,000번", "14,400번", "14,800번", "15,200번"],
                correct: 1,
                explanation: "하루에 14,400번! 고래의 큰 심장이 힘차게 뛰어요! 🐋❤️"
            }
        ],
        category: "시간과 곱셈",
        difficulty: "medium"
    },
    {
        id: 230,
        question: "🌳 숲의 나무들이 CO2를 흡수해요! 큰 나무 1그루가 하루에 22kg, 작은 나무가 8kg을 흡수해요. 큰 나무 5그루와 작은 나무 12그루가 하루에 흡수하는 총량은?",
        steps: [
            {
                question: "큰 나무들이 흡수하는 양은?",
                options: ["100kg", "110kg", "120kg", "130kg"],
                correct: 1,
                explanation: "22 × 5 = 110kg을 흡수해요! 🌳"
            },
            {
                question: "작은 나무들이 흡수하는 양은?",
                options: ["84kg", "88kg", "92kg", "96kg"],
                correct: 3,
                explanation: "8 × 12 = 96kg을 흡수해요! 🌿"
            },
            {
                question: "110 + 96 = ?",
                options: ["204kg", "206kg", "208kg", "210kg"],
                correct: 1,
                explanation: "총 206kg! 나무들이 지구를 깨끗하게 해줘요! 🌍💚"
            }
        ],
        category: "곱셈과 덧셈",
        difficulty: "medium"
    },
    // 31-40: 계절과 자연의 변화 속 수학
    {
        id: 231,
        question: "🍂 가을 단풍잎을 모아요! 빨간잎 2/7, 노란잎 3/7, 갈색잎 1/7을 모았어요. 나머지는 초록잎인데, 초록잎은 전체의 몇 분의 몇일까요?",
        steps: [
            {
                question: "빨간잎과 노란잎을 합치면?",
                options: ["4/7", "5/7", "6/7", "7/7"],
                correct: 1,
                explanation: "2/7 + 3/7 = 5/7이에요! 🍁"
            },
            {
                question: "빨간잎, 노란잎, 갈색잎을 모두 합치면?",
                options: ["5/7", "6/7", "7/7", "8/7"],
                correct: 1,
                explanation: "5/7 + 1/7 = 6/7이에요!"
            },
            {
                question: "전체에서 6/7을 빼면?",
                options: ["0/7", "1/7", "2/7", "3/7"],
                correct: 1,
                explanation: "7/7 - 6/7 = 1/7! 초록잎이 1/7이에요! 🍃"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    {
        id: 232,
        question: "❄️ 눈송이의 대칭을 관찰해요! 육각형 눈송이의 한 꼭짓점에서 대각선 꼭짓점까지의 각도는 몇 도일까요?",
        steps: [
            {
                question: "육각형의 꼭짓점은 몇 개인가요?",
                options: ["5개", "6개", "7개", "8개"],
                correct: 1,
                explanation: "육각형은 6개의 꼭짓점이 있어요! ❄️"
            },
            {
                question: "원을 6등분하면 한 부분의 각도는?",
                options: ["50도", "60도", "70도", "80도"],
                correct: 1,
                explanation: "360 ÷ 6 = 60도예요!"
            },
            {
                question: "대각선 꼭짓점은 몇 개 건너뛰어야 하나요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "3개 건너뛰므로 60 × 3 = 180도! 정확히 반대편이에요! ❄️📐"
            }
        ],
        category: "각도",
        difficulty: "medium"
    },
    {
        id: 233,
        question: "🌸 벚꽃 개화 예측! 2월 평균기온이 5.2도, 3월이 8.7도였어요. 개화는 평균기온이 12도가 될 때인데, 4월에 몇 도가 되어야 할까요?",
        steps: [
            {
                question: "2월과 3월의 평균 기온은?",
                options: ["6.8도", "6.9도", "7.0도", "7.1도"],
                correct: 1,
                explanation: "(5.2 + 8.7) ÷ 2 = 6.95도! 🌡️"
            },
            {
                question: "3개월 평균이 12도가 되려면 총 온도는?",
                options: ["34도", "35도", "36도", "37도"],
                correct: 2,
                explanation: "12 × 3 = 36도가 필요해요!"
            },
            {
                question: "4월 기온은? (5.2 + 8.7 + ? = 36)",
                options: ["21.1도", "22.1도", "23.1도", "24.1도"],
                correct: 1,
                explanation: "36 - 13.9 = 22.1도! 따뜻한 봄이 와야 해요! 🌸🌡️"
            }
        ],
        category: "평균",
        difficulty: "medium"
    },
    {
        id: 234,
        question: "🦅 철새들의 이동 거리! V자 대형으로 나는 기러기 무리가 하루에 400km씩 15일 동안 날아간다면 총 몇 km를 이동할까요?",
        steps: [
            {
                question: "하루에 이동하는 거리는?",
                options: ["350km", "400km", "450km", "500km"],
                correct: 1,
                explanation: "하루에 400km씩 날아가요! 🦅"
            },
            {
                question: "총 며칠 동안 날아가나요?",
                options: ["13일", "14일", "15일", "16일"],
                correct: 2,
                explanation: "15일 동안 쉬지 않고 날아가요!"
            },
            {
                question: "400 × 15 = ?",
                options: ["5,500km", "6,000km", "6,500km", "7,000km"],
                correct: 1,
                explanation: "총 6,000km! 정말 긴 여행이에요! 🦅✈️"
            }
        ],
        category: "곱셈",
        difficulty: "medium"
    },
    {
        id: 235,
        question: "🐸 올챙이가 개구리 되는 시간! 알에서 올챙이까지 7일, 올챙이에서 다리 나올 때까지 21일, 꼬리가 없어질 때까지 14일이 걸려요. 전체 과정의 60%가 지났다면 며칠이 지났을까요?",
        steps: [
            {
                question: "전체 과정은 며칠이 걸리나요?",
                options: ["40일", "41일", "42일", "43일"],
                correct: 2,
                explanation: "7 + 21 + 14 = 42일이 걸려요! 🐸"
            },
            {
                question: "60%를 소수로 바꾸면?",
                options: ["0.5", "0.6", "0.7", "0.8"],
                correct: 1,
                explanation: "60% = 0.6이에요!"
            },
            {
                question: "42 × 0.6 = ?",
                options: ["24.2일", "25.2일", "26.2일", "27.2일"],
                correct: 1,
                explanation: "25.2일! 올챙이에서 다리가 나오는 중이에요! 🐸🦵"
            }
        ],
        category: "백분율",
        difficulty: "medium"
    },
    {
        id: 236,
        question: "🌊 바닷물의 염분 농도! 바닷물 100L 중에 염분이 3.5L 들어있어요. 200L의 바닷물에는 염분이 몇 L 들어있을까요?",
        steps: [
            {
                question: "100L 바닷물의 염분 농도는?",
                options: ["3.0%", "3.5%", "4.0%", "4.5%"],
                correct: 1,
                explanation: "3.5 ÷ 100 = 3.5%예요! 🌊"
            },
            {
                question: "200L는 100L의 몇 배인가요?",
                options: ["1.5배", "2배", "2.5배", "3배"],
                correct: 1,
                explanation: "200 ÷ 100 = 2배예요!"
            },
            {
                question: "3.5 × 2 = ?",
                options: ["6.5L", "7.0L", "7.5L", "8.0L"],
                correct: 1,
                explanation: "7L의 염분이 들어있어요! 바닷물이 짜잖아요! 🌊🧂"
            }
        ],
        category: "비율",
        difficulty: "medium"
    },
    {
        id: 237,
        question: "🌙 밤하늘의 별들을 세어요! 첫 번째 구역에 24개, 두 번째 구역에 첫 번째의 3/4배, 세 번째 구역에 두 번째의 2/3배의 별이 있어요. 세 번째 구역의 별은 몇 개일까요?",
        steps: [
            {
                question: "두 번째 구역의 별은 몇 개인가요?",
                options: ["16개", "18개", "20개", "22개"],
                correct: 1,
                explanation: "24 × 3/4 = 18개예요! ⭐"
            },
            {
                question: "세 번째 구역은 두 번째의 몇 배인가요?",
                options: ["1/3배", "2/3배", "3/4배", "4/5배"],
                correct: 1,
                explanation: "두 번째의 2/3배예요!"
            },
            {
                question: "18 × 2/3 = ?",
                options: ["10개", "11개", "12개", "13개"],
                correct: 2,
                explanation: "12개의 별이 반짝여요! 아름다운 밤하늘이에요! 🌟✨"
            }
        ],
        category: "분수 곱셈",
        difficulty: "medium"
    },
    {
        id: 238,
        question: "🍯 꿀벌이 꿀을 만드는 시간! 꿀벌 1마리가 꿀 1g을 만드는 데 3시간이 걸려요. 꿀벌 8마리가 24g의 꿀을 만들려면 몇 시간이 걸릴까요?",
        steps: [
            {
                question: "꿀벌 1마리가 24g을 만드는 시간은?",
                options: ["70시간", "72시간", "74시간", "76시간"],
                correct: 1,
                explanation: "3 × 24 = 72시간이 걸려요! 🐝"
            },
            {
                question: "꿀벌이 8마리이면 시간이 어떻게 될까요?",
                options: ["같다", "절반", "8분의 1", "8배"],
                correct: 2,
                explanation: "8마리가 함께하면 시간이 1/8로 줄어요!"
            },
            {
                question: "72 ÷ 8 = ?",
                options: ["8시간", "9시간", "10시간", "11시간"],
                correct: 1,
                explanation: "9시간! 많은 꿀벌이 함께하면 빨라져요! 🐝🍯"
            }
        ],
        category: "비례",
        difficulty: "medium"
    },
    {
        id: 239,
        question: "🌳 나무의 성장 속도! 어린 나무가 첫해에 0.8m, 둘째해에 1.2m, 셋째해에 1.6m 자랐어요. 이 규칙대로라면 5년 후 총 키는 몇 m일까요?",
        steps: [
            {
                question: "매년 자라는 높이의 규칙은?",
                options: ["0.3m씩 증가", "0.4m씩 증가", "0.5m씩 증가", "일정"],
                correct: 1,
                explanation: "매년 0.4m씩 더 많이 자라요! 🌳"
            },
            {
                question: "넷째해와 다섯째해에 자라는 높이는?",
                options: ["2.0m, 2.4m", "2.2m, 2.6m", "2.4m, 2.8m", "2.6m, 3.0m"],
                correct: 0,
                explanation: "1.6 + 0.4 = 2.0m, 2.0 + 0.4 = 2.4m!"
            },
            {
                question: "0.8 + 1.2 + 1.6 + 2.0 + 2.4 = ?",
                options: ["7.8m", "8.0m", "8.2m", "8.4m"],
                correct: 1,
                explanation: "총 8m! 훌쩍 큰 나무가 되었네요! 🌳📏"
            }
        ],
        category: "수열",
        difficulty: "medium"
    },
    {
        id: 240,
        question: "🐙 문어의 다리별 먹이 배분! 8개 다리에 먹이를 나눠주는데, 각 다리마다 전체의 1/8씩 주려고 해요. 전체 먹이가 240g이라면 한 다리당 몇 g씩 줄까요?",
        steps: [
            {
                question: "문어의 다리는 몇 개인가요?",
                options: ["6개", "7개", "8개", "9개"],
                correct: 2,
                explanation: "문어는 8개의 다리가 있어요! 🐙"
            },
            {
                question: "1/8을 소수로 바꾸면?",
                options: ["0.115", "0.125", "0.135", "0.145"],
                correct: 1,
                explanation: "1/8 = 0.125예요!"
            },
            {
                question: "240 × 1/8 = ?",
                options: ["28g", "29g", "30g", "31g"],
                correct: 2,
                explanation: "한 다리당 30g씩! 문어가 공평하게 나눠 먹어요! 🐙🍽️"
            }
        ],
        category: "분수",
        difficulty: "medium"
    },
    // 41-50: 자연의 신비로운 현상들
    {
        id: 241,
        question: "🌪️ 토네이도의 회전! 토네이도가 1분에 200바퀴 돈다면, 1초에는 몇 바퀴 돌까요? (소수로 답하세요)",
        steps: [
            {
                question: "1분에 몇 바퀴 도나요?",
                options: ["180바퀴", "200바퀴", "220바퀴", "240바퀴"],
                correct: 1,
                explanation: "1분에 200바퀴나 돌아요! 🌪️"
            },
            {
                question: "1분은 몇 초인가요?",
                options: ["50초", "60초", "70초", "80초"],
                correct: 1,
                explanation: "1분 = 60초예요!"
            },
            {
                question: "200 ÷ 60 = ? (소수로)",
                options: ["3.23바퀴", "3.33바퀴", "3.43바퀴", "3.53바퀴"],
                correct: 1,
                explanation: "약 3.33바퀴! 토네이도가 정말 빨라요! 🌪️💨"
            }
        ],
        category: "소수 나눗셈",
        difficulty: "medium"
    },
    {
        id: 242,
        question: "🌋 화산 폭발의 높이! 용암이 분출되어 첫 번째 1초에 50m, 두 번째 1초에 30m, 세 번째 1초에 10m 올라갔어요. 이 패턴대로라면 몇 초 후에 떨어지기 시작할까요?",
        steps: [
            {
                question: "매초마다 올라가는 높이의 변화는?",
                options: ["10m씩 감소", "20m씩 감소", "30m씩 감소", "일정"],
                correct: 1,
                explanation: "매초마다 20m씩 감소해요! 🌋"
            },
            {
                question: "네 번째 초에는 몇 m 올라갈까요?",
                options: ["-10m", "-5m", "0m", "5m"],
                correct: 0,
                explanation: "10 - 20 = -10m! 떨어지기 시작해요!"
            },
            {
                question: "언제부터 떨어지기 시작할까요?",
                options: ["3초 후", "4초 후", "5초 후", "6초 후"],
                correct: 1,
                explanation: "4초 후부터 떨어져요! 중력이 이겼네요! 🌋⬇️"
            }
        ],
        category: "수 규칙",
        difficulty: "medium"
    },
    {
        id: 243,
        question: "⚡ 번개의 전력! 번개 한 번이 1억 볼트의 전압을 가져요. 이를 과학적 표기법으로 나타내면?",
        steps: [
            {
                question: "1억은 10의 몇 제곱인가요?",
                options: ["10^6", "10^7", "10^8", "10^9"],
                correct: 2,
                explanation: "1억 = 100,000,000 = 10^8이에요! ⚡"
            },
            {
                question: "1억 볼트를 숫자로 쓰면?",
                options: ["100,000,000V", "10,000,000V", "1,000,000V", "100,000V"],
                correct: 0,
                explanation: "100,000,000V예요!"
            },
            {
                question: "과학적 표기법으로 쓰면?",
                options: ["1 × 10^7V", "1 × 10^8V", "1 × 10^9V", "1 × 10^10V"],
                correct: 1,
                explanation: "1 × 10^8V! 번개의 힘이 정말 대단해요! ⚡💪"
            }
        ],
        category: "큰 수",
        difficulty: "medium"
    },
    {
        id: 244,
        question: "🌊 파도의 주기성! 큰 파도가 12초마다, 작은 파도가 8초마다 와요. 두 파도가 동시에 오는 주기는 몇 초마다일까요?",
        steps: [
            {
                question: "큰 파도의 주기는?",
                options: ["10초", "12초", "14초", "16초"],
                correct: 1,
                explanation: "큰 파도가 12초마다 와요! 🌊"
            },
            {
                question: "작은 파도의 주기는?",
                options: ["6초", "8초", "10초", "12초"],
                correct: 1,
                explanation: "작은 파도가 8초마다 와요!"
            },
            {
                question: "12와 8의 최소공배수는?",
                options: ["20", "22", "24", "26"],
                correct: 2,
                explanation: "24초마다 두 파도가 만나요! 최소공배수를 구했어요! 🌊"
            }
        ],
        category: "최소공배수",
        difficulty: "medium"
    },
    {
        id: 245,
        question: "🦋 나비의 날갯짓 주파수! 나비가 1초에 5번 날개를 펄럭이는데, 30초 동안 총 몇 번 펄럭일까요?",
        steps: [
            {
                question: "1초에 몇 번 날개를 펄럭이나요?",
                options: ["3번", "4번", "5번", "6번"],
                correct: 2,
                explanation: "1초에 5번 펄럭펄럭! 🦋"
            },
            {
                question: "몇 초 동안 관찰하나요?",
                options: ["25초", "30초", "35초", "40초"],
                correct: 1,
                explanation: "30초 동안 관찰해요!"
            },
            {
                question: "5 × 30 = ?",
                options: ["140번", "145번", "150번", "155번"],
                correct: 2,
                explanation: "150번! 나비가 부지런히 날아다녀요! 🦋💨"
            }
        ],
        category: "곱셈",
        difficulty: "medium"
    },
    {
        id: 246,
        question: "🌙 달의 위상 변화! 달이 새로운 달에서 보름달까지 14.5일 걸려요. 전체 한 달(29일)에서 보름달 이후는 며칠일까요?",
        steps: [
            {
                question: "새로운 달에서 보름달까지는 며칠인가요?",
                options: ["13.5일", "14.5일", "15.5일", "16.5일"],
                correct: 1,
                explanation: "14.5일이 걸려요! 🌙"
            },
            {
                question: "달의 전체 주기는 며칠인가요?",
                options: ["27일", "28일", "29일", "30일"],
                correct: 2,
                explanation: "29일이 한 주기예요!"
            },
            {
                question: "29 - 14.5 = ?",
                options: ["14.0일", "14.5일", "15.0일", "15.5일"],
                correct: 1,
                explanation: "14.5일! 보름달 이후 새로운 달까지도 똑같아요! 🌙✨"
            }
        ],
        category: "소수",
        difficulty: "medium"
    },
    {
        id: 247,
        question: "🐘 코끼리의 물 소비량! 코끼리 가족 4마리가 하루에 총 600L의 물을 마셔요. 아기 코끼리는 어른의 절반만 마신다면, 아기는 하루에 몇 L를 마실까요?",
        steps: [
            {
                question: "가족 구성이 어른 3마리, 아기 1마리라면 아기를 x로 놓으면?",
                options: ["3x + x = 600", "3(2x) + x = 600", "3x + 2x = 600", "4x = 600"],
                correct: 1,
                explanation: "어른이 2x, 아기가 x라면 3(2x) + x = 600! 🐘"
            },
            {
                question: "3(2x) + x = 600을 정리하면?",
                options: ["6x + x = 600", "5x = 600", "7x = 600", "8x = 600"],
                correct: 2,
                explanation: "6x + x = 7x = 600이에요!"
            },
            {
                question: "600 ÷ 7 = ? (약)",
                options: ["약 85L", "약 86L", "약 87L", "약 88L"],
                correct: 0,
                explanation: "아기 코끼리는 약 85L! 그래도 많이 마시네요! 🐘💧"
            }
        ],
        category: "방정식",
        difficulty: "medium"
    },
    {
        id: 248,
        question: "🌈 무지개의 반지름! 반원 무지개의 지름이 1km라면, 무지개 호의 길이는 약 몇 m일까요? (π ≈ 3.14)",
        steps: [
            {
                question: "무지개의 지름은 몇 m인가요?",
                options: ["500m", "1000m", "1500m", "2000m"],
                correct: 1,
                explanation: "1km = 1000m예요! 🌈"
            },
            {
                question: "반지름은 몇 m인가요?",
                options: ["400m", "500m", "600m", "700m"],
                correct: 1,
                explanation: "1000 ÷ 2 = 500m!"
            },
            {
                question: "반원의 호의 길이 = π × 반지름 = ?",
                options: ["1570m", "1580m", "1590m", "1600m"],
                correct: 0,
                explanation: "3.14 × 500 = 1570m! 무지개가 정말 커요! 🌈📏"
            }
        ],
        category: "원주",
        difficulty: "medium"
    },
    {
        id: 249,
        question: "🦅 독수리의 상승기류 이용! 독수리가 상승기류를 타고 5분에 300m 올라갔어요. 이 속도로 1500m까지 올라가려면 총 몇 분이 걸릴까요?",
        steps: [
            {
                question: "5분에 몇 m 올라가나요?",
                options: ["250m", "300m", "350m", "400m"],
                correct: 1,
                explanation: "5분에 300m 올라가요! 🦅⬆️"
            },
            {
                question: "1분에는 몇 m 올라가나요?",
                options: ["50m", "60m", "70m", "80m"],
                correct: 1,
                explanation: "300 ÷ 5 = 60m/분!"
            },
            {
                question: "1500m까지 가려면 몇 분?",
                options: ["23분", "24분", "25분", "26분"],
                correct: 2,
                explanation: "1500 ÷ 60 = 25분! 독수리가 높이 날아올라요! 🦅☁️"
            }
        ],
        category: "비례",
        difficulty: "medium"
    },
    {
        id: 250,
        question: "🌸 꽃가루의 확률! 5개의 꽃 중에서 벌이 무작위로 3개를 선택한다면, 특정한 꽃이 선택될 확률은 몇 분의 몇일까요?",
        steps: [
            {
                question: "전체 꽃은 몇 개인가요?",
                options: ["4개", "5개", "6개", "7개"],
                correct: 1,
                explanation: "총 5개의 꽃이 있어요! 🌸"
            },
            {
                question: "벌이 몇 개를 선택하나요?",
                options: ["2개", "3개", "4개", "5개"],
                correct: 1,
                explanation: "3개의 꽃을 선택해요! 🐝"
            },
            {
                question: "특정 꽃이 선택될 확률은?",
                options: ["2/5", "3/5", "4/5", "5/5"],
                correct: 1,
                explanation: "5개 중 3개를 선택하므로 3/5! 높은 확률이에요! 🌸🐝"
            }
        ],
        category: "확률",
        difficulty: "medium"
    }
];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.mediumNatureQuestions = mediumNatureQuestions;
}