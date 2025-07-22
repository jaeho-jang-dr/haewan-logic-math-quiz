// 상급 난이도 자연과 동물 문제 50개 (초등 5-6학년 수준)
// 아이들이 까르르 웃을 만한 재미있는 이야기로 구성
const hardNatureQuestions = [
    // 1-10: 동물들의 복잡한 수학 모험
    {
        id: 301,
        question: "🐘 코끼리 무리의 체중 분석! 어른 코끼리 5마리의 평균 체중이 4.2톤이고, 새로운 아기 코끼리 1마리(0.8톤)가 태어났어요. 전체 무리의 평균 체중은 몇 톤일까요?",
        steps: [
            {
                question: "어른 코끼리 5마리의 총 체중은?",
                options: ["20톤", "21톤", "22톤", "23톤"],
                correct: 1,
                explanation: "4.2 × 5 = 21톤이에요! 🐘"
            },
            {
                question: "아기를 포함한 전체 무리의 총 체중은?",
                options: ["21.6톤", "21.8톤", "22.0톤", "22.2톤"],
                correct: 1,
                explanation: "21 + 0.8 = 21.8톤!"
            },
            {
                question: "6마리 전체의 평균 체중은?",
                options: ["3.6톤", "3.63톤", "3.67톤", "3.7톤"],
                correct: 2,
                explanation: "21.8 ÷ 6 = 약 3.67톤! 아기가 있어서 평균이 줄었네요! 🐘👶"
            }
        ],
        category: "평균",
        difficulty: "hard"
    },
    {
        id: 302,
        question: "🦅 독수리의 사냥 성공률! 독수리가 100번 사냥해서 65번 성공했어요. 앞으로 20번 더 사냥해서 전체 성공률을 70%로 만들려면 몇 번 더 성공해야 할까요?",
        steps: [
            {
                question: "현재 성공률은 몇 %인가요?",
                options: ["60%", "63%", "65%", "67%"],
                correct: 2,
                explanation: "65/100 = 65%의 성공률이에요! 🦅"
            },
            {
                question: "120번 중 70%는 몇 번인가요?",
                options: ["82번", "84번", "86번", "88번"],
                correct: 1,
                explanation: "120 × 0.7 = 84번 성공해야 해요!"
            },
            {
                question: "84 - 65 = ?",
                options: ["17번", "18번", "19번", "20번"],
                correct: 2,
                explanation: "19번 더 성공해야 해요! 독수리가 더 열심히 사냥해야겠어요! 🦅🎯"
            }
        ],
        category: "백분율",
        difficulty: "hard"
    },
    {
        id: 303,
        question: "🌳 나무의 기하급수적 성장! 마법의 나무가 매년 키가 1.2배씩 커져요. 처음 키가 2m였다면, 4년 후의 키는 몇 m일까요? (소수 둘째 자리까지)",
        steps: [
            {
                question: "1년 후의 키는?",
                options: ["2.2m", "2.4m", "2.6m", "2.8m"],
                correct: 1,
                explanation: "2 × 1.2 = 2.4m예요! 🌳"
            },
            {
                question: "지수를 이용하면 4년 후는?",
                options: ["2 × 1.2³", "2 × 1.2⁴", "2 × 1.2⁵", "2 × 1.2⁶"],
                correct: 1,
                explanation: "2 × 1.2⁴가 맞아요!"
            },
            {
                question: "2 × (1.2)⁴ = 2 × 2.0736 = ?",
                options: ["4.13m", "4.14m", "4.15m", "4.16m"],
                correct: 2,
                explanation: "약 4.15m! 마법의 나무가 쑥쑥 자랐어요! 🌳✨"
            }
        ],
        category: "지수",
        difficulty: "hard"
    },
    {
        id: 304,
        question: "🐺 늑대 무리의 영역 분할! 원형 영역(반지름 500m)을 6마리의 늑대가 똑같이 나눈다면, 각 늑대의 영역은 몇 m²일까요? (π = 3.14)",
        steps: [
            {
                question: "원의 넓이 공식은?",
                options: ["πr", "πr²", "2πr", "πd"],
                correct: 1,
                explanation: "원의 넓이 = πr²예요! 🔵"
            },
            {
                question: "전체 영역의 넓이는?",
                options: ["785,000m²", "785,400m²", "785,800m²", "786,000m²"],
                correct: 0,
                explanation: "3.14 × 500² = 785,000m²!"
            },
            {
                question: "785,000 ÷ 6 = ?",
                options: ["130,833m²", "130,834m²", "130,835m²", "130,836m²"],
                correct: 0,
                explanation: "약 130,833m²! 각 늑대가 넓은 영역을 가져요! 🐺🗺️"
            }
        ],
        category: "원의 넓이",
        difficulty: "hard"
    },
    {
        id: 305,
        question: "🦋 나비의 대칭 날개 패턴! 나비 날개의 무늬가 피보나치 수열을 따라요. 1, 1, 2, 3, 5, 8, ... 10번째 수는 무엇일까요?",
        steps: [
            {
                question: "피보나치 수열의 규칙은?",
                options: ["앞 두 수의 합", "앞 수의 2배", "앞 수에 1을 더함", "임의"],
                correct: 0,
                explanation: "앞의 두 수를 더한 값이에요! 🦋"
            },
            {
                question: "7번째까지 이어가면? (1,1,2,3,5,8,?)",
                options: ["11", "12", "13", "14"],
                correct: 2,
                explanation: "5 + 8 = 13이에요!"
            },
            {
                question: "8,13,?,34,55... 10번째는?",
                options: ["53", "54", "55", "56"],
                correct: 2,
                explanation: "1,1,2,3,5,8,13,21,34,55! 10번째는 55예요! 🦋✨"
            }
        ],
        category: "수열",
        difficulty: "hard"
    },
    {
        id: 306,
        question: "🐋 고래의 초음파 계산! 고래가 초음파를 보내서 2.5초 후에 돌아왔어요. 바닷속에서 소리 속력이 1500m/s라면, 물고기까지의 거리는?",
        steps: [
            {
                question: "초음파가 왕복한 총 거리는?",
                options: ["3,750m", "3,800m", "3,850m", "3,900m"],
                correct: 0,
                explanation: "1500 × 2.5 = 3,750m를 왕복했어요! 🐋"
            },
            {
                question: "왕복 거리를 2로 나누면?",
                options: ["1,875m", "1,900m", "1,925m", "1,950m"],
                correct: 0,
                explanation: "3,750 ÷ 2 = 1,875m!"
            },
            {
                question: "이것을 km로 바꾸면?",
                options: ["1.775km", "1.825km", "1.875km", "1.925km"],
                correct: 2,
                explanation: "1.875km! 고래가 멀리 있는 물고기를 찾았어요! 🐋🐟"
            }
        ],
        category: "속력과 거리",
        difficulty: "hard"
    },
    {
        id: 307,
        question: "🌪️ 토네이도의 에너지 계산! 토네이도가 원뿔 모양이에요. 밑면 반지름 100m, 높이 300m라면 부피는? (π = 3.14)",
        steps: [
            {
                question: "원뿔의 부피 공식은?",
                options: ["πr²h", "⅓πr²h", "½πr²h", "2πr²h"],
                correct: 1,
                explanation: "원뿔 부피 = ⅓πr²h예요! 🌪️"
            },
            {
                question: "πr²h를 계산하면?",
                options: ["9,400,000", "9,420,000", "9,440,000", "9,460,000"],
                correct: 1,
                explanation: "3.14 × 100² × 300 = 9,420,000!"
            },
            {
                question: "9,420,000 ÷ 3 = ?",
                options: ["3,140,000m³", "3,150,000m³", "3,160,000m³", "3,170,000m³"],
                correct: 0,
                explanation: "3,140,000m³! 토네이도가 정말 거대해요! 🌪️💨"
            }
        ],
        category: "원뿔의 부피",
        difficulty: "hard"
    },
    {
        id: 308,
        question: "🦒 기린의 혈압 계산! 기린의 심장에서 머리까지 혈액을 보내려면 5m 높이를 극복해야 해요. 중력가속도를 10m/s²라 할 때, 필요한 압력은? (압력 = 밀도 × 중력 × 높이, 혈액밀도 1000kg/m³)",
        steps: [
            {
                question: "압력 공식에서 각 값은?",
                options: ["밀도1000, 중력10, 높이5", "밀도100, 중력10, 높이5", "밀도1000, 중력1, 높이5", "밀도1000, 중력10, 높이0.5"],
                correct: 0,
                explanation: "밀도 1000kg/m³, 중력 10m/s², 높이 5m! 🦒"
            },
            {
                question: "1000 × 10 × 5 = ?",
                options: ["50,000Pa", "60,000Pa", "70,000Pa", "80,000Pa"],
                correct: 0,
                explanation: "50,000Pa(파스칼)의 압력이 필요해요!"
            },
            {
                question: "이것은 대기압(100,000Pa)의 몇 배인가요?",
                options: ["0.3배", "0.4배", "0.5배", "0.6배"],
                correct: 2,
                explanation: "50,000/100,000 = 0.5배! 기린의 심장이 강해야 해요! 🦒💓"
            }
        ],
        category: "물리 계산",
        difficulty: "hard"
    },
    {
        id: 309,
        question: "🐙 문어의 지능 테스트! 8개 다리 중에서 3개를 선택해서 미로를 탐색해요. 가능한 조합의 수는? (조합 공식: ₈C₃)",
        steps: [
            {
                question: "조합 ₈C₃의 공식은?",
                options: ["8!/(3!×5!)", "8!/(3!×4!)", "8!/(2!×6!)", "8!/3!"],
                correct: 0,
                explanation: "₈C₃ = 8!/(3!×5!)예요! 🐙"
            },
            {
                question: "8! = ?",
                options: ["40,000", "40,320", "40,640", "40,960"],
                correct: 1,
                explanation: "8! = 40,320이에요!"
            },
            {
                question: "40,320 ÷ (6 × 120) = ?",
                options: ["54", "55", "56", "57"],
                correct: 2,
                explanation: "40,320 ÷ 720 = 56가지! 문어가 다양하게 탐색할 수 있어요! 🐙🧩"
            }
        ],
        category: "조합",
        difficulty: "hard"
    },
    {
        id: 310,
        question: "🌊 파도의 삼각함수! 파도가 사인파 형태로 움직여요. 진폭이 2m, 주기가 8초일 때, 4초 후 파도의 높이는? (sin(90°) = 1)",
        steps: [
            {
                question: "4초는 한 주기의 몇 분의 몇인가요?",
                options: ["1/4", "1/3", "1/2", "2/3"],
                correct: 2,
                explanation: "4초는 8초의 1/2예요! 🌊"
            },
            {
                question: "한 주기의 1/2 지점은 몇 도인가요?",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1,
                explanation: "180°에 해당해요!"
            },
            {
                question: "sin(180°) = 0이므로 높이는?",
                options: ["-2m", "0m", "1m", "2m"],
                correct: 1,
                explanation: "2 × sin(180°) = 2 × 0 = 0m! 파도가 평평해져요! 🌊📊"
            }
        ],
        category: "삼각함수",
        difficulty: "hard"
    },
    // 11-20: 복잡한 자연 현상의 수학적 분석
    {
        id: 311,
        question: "🌳 숲의 생태계 방정식! 토끼(R)와 여우(F)의 관계식이 R = 200 - 5F 예요. 여우가 20마리일 때 토끼는 몇 마리일까요?",
        steps: [
            {
                question: "주어진 방정식에서 F = 20을 대입하면?",
                options: ["R = 200 - 5×20", "R = 200 + 5×20", "R = 200 - 20×5", "R = 200×5 - 20"],
                correct: 0,
                explanation: "R = 200 - 5×20으로 계산해요! 🦊"
            },
            {
                question: "5 × 20 = ?",
                options: ["90", "95", "100", "105"],
                correct: 2,
                explanation: "5 × 20 = 100이에요!"
            },
            {
                question: "200 - 100 = ?",
                options: ["95마리", "100마리", "105마리", "110마리"],
                correct: 1,
                explanation: "토끼가 100마리! 여우가 많으면 토끼가 줄어들어요! 🐰🦊"
            }
        ],
        category: "일차방정식",
        difficulty: "hard"
    },
    {
        id: 312,
        question: "⚡ 번개의 확률 분포! 여름 한 달 동안 번개가 치는 일수가 다음과 같아요: 0일(5일), 1일(10일), 2일(8일), 3일(7일), 4일(1일). 평균 번개 일수는?",
        steps: [
            {
                question: "전체 관측일은 며칠인가요?",
                options: ["30일", "31일", "32일", "33일"],
                correct: 1,
                explanation: "5+10+8+7+1 = 31일이에요! ⚡"
            },
            {
                question: "총 번개 일수는?",
                options: ["54일", "55일", "56일", "57일"],
                correct: 1,
                explanation: "0×5 + 1×10 + 2×8 + 3×7 + 4×1 = 55일!"
            },
            {
                question: "평균 = 55 ÷ 31 = ?",
                options: ["1.74일", "1.77일", "1.80일", "1.83일"],
                correct: 1,
                explanation: "약 1.77일! 한 달에 평균 2일 정도 번개가 쳐요! ⚡📊"
            }
        ],
        category: "통계",
        difficulty: "hard"
    },
    {
        id: 313,
        question: "🐝 벌집의 정육각형 구조! 정육각형 벌집 한 칸의 한 변이 5mm예요. 이 벌집의 둘레와 넓이는? (정육각형 넓이 = (3√3/2) × a²)",
        steps: [
            {
                question: "정육각형의 둘레는?",
                options: ["25mm", "30mm", "35mm", "40mm"],
                correct: 1,
                explanation: "6 × 5 = 30mm예요! 🐝"
            },
            {
                question: "√3 ≈ 1.73일 때, 3√3 = ?",
                options: ["5.19", "5.29", "5.39", "5.49"],
                correct: 0,
                explanation: "3 × 1.73 = 5.19예요!"
            },
            {
                question: "(5.19/2) × 25 = ?",
                options: ["64.5mm²", "64.7mm²", "64.9mm²", "65.1mm²"],
                correct: 2,
                explanation: "약 64.9mm²! 벌집이 매우 효율적인 구조예요! 🐝🏠"
            }
        ],
        category: "정다각형",
        difficulty: "hard"
    },
    {
        id: 314,
        question: "🌙 달의 공전 궤도! 달이 타원 궤도로 돌아요. 장축 76만km, 단축 74만km일 때 궤도의 둘레는? (타원둘레 ≈ π(a+b), a,b는 반장축, 반단축)",
        steps: [
            {
                question: "반장축과 반단축은?",
                options: ["38만km, 37만km", "38만km, 36만km", "39만km, 37만km", "40만km, 35만km"],
                correct: 0,
                explanation: "76÷2 = 38만km, 74÷2 = 37만km! 🌙"
            },
            {
                question: "a + b = ?",
                options: ["74만km", "75만km", "76만km", "77만km"],
                correct: 1,
                explanation: "38 + 37 = 75만km!"
            },
            {
                question: "π × 75만km = ? (π ≈ 3.14)",
                options: ["235.5만km", "236.5만km", "237.5만km", "238.5만km"],
                correct: 0,
                explanation: "약 235.5만km! 달이 정말 먼 길을 돌아요! 🌙🛸"
            }
        ],
        category: "타원",
        difficulty: "hard"
    },
    {
        id: 315,
        question: "🦋 나비의 날개 진동! 나비가 날개를 8Hz로 진동시켜요. 0.5초 동안의 총 진동 횟수와 한 번 진동하는 데 걸리는 시간은?",
        steps: [
            {
                question: "8Hz는 무슨 뜻인가요?",
                options: ["8번/분", "8번/초", "8번/시간", "총 8번"],
                correct: 1,
                explanation: "1초에 8번 진동한다는 뜻이에요! 🦋"
            },
            {
                question: "0.5초 동안의 진동 횟수는?",
                options: ["3번", "4번", "5번", "6번"],
                correct: 1,
                explanation: "8 × 0.5 = 4번!"
            },
            {
                question: "한 번 진동하는 시간은?",
                options: ["0.115초", "0.125초", "0.135초", "0.145초"],
                correct: 1,
                explanation: "1 ÷ 8 = 0.125초! 나비 날개가 정말 빨라요! 🦋💨"
            }
        ],
        category: "주파수",
        difficulty: "hard"
    },
    {
        id: 316,
        question: "🌊 바다의 밀물썰물! 밀물 때 수심 15m, 썰물 때 9m예요. 12시간 주기로 변한다면, 6시간 후 수심은? (코사인 함수로 가정)",
        steps: [
            {
                question: "최대값과 최소값의 평균은?",
                options: ["11m", "12m", "13m", "14m"],
                correct: 1,
                explanation: "(15 + 9) ÷ 2 = 12m가 중심값이에요! 🌊"
            },
            {
                question: "진폭(최대값 - 중심값)은?",
                options: ["2m", "3m", "4m", "5m"],
                correct: 1,
                explanation: "15 - 12 = 3m가 진폭이에요!"
            },
            {
                question: "6시간 후는 반주기이므로 수심은?",
                options: ["8m", "9m", "10m", "11m"],
                correct: 1,
                explanation: "12 - 3 = 9m! 썰물이 되었어요! 🌊⬇️"
            }
        ],
        category: "삼각함수 응용",
        difficulty: "hard"
    },
    {
        id: 317,
        question: "🐧 펭귄의 체온 조절! 펭귄의 체온이 37°C이고 외부온도가 -20°C예요. 열손실률이 온도차에 비례한다면, 외부온도가 -10°C일 때의 열손실률은 처음의 몇 배일까요?",
        steps: [
            {
                question: "처음 온도차는?",
                options: ["55°C", "57°C", "59°C", "61°C"],
                correct: 1,
                explanation: "37 - (-20) = 57°C 차이예요! 🐧"
            },
            {
                question: "나중 온도차는?",
                options: ["45°C", "47°C", "49°C", "51°C"],
                correct: 1,
                explanation: "37 - (-10) = 47°C 차이!"
            },
            {
                question: "열손실률의 비는?",
                options: ["47/57", "57/47", "10/20", "20/10"],
                correct: 0,
                explanation: "47/57 ≈ 0.82배! 따뜻해져서 열손실이 줄었어요! 🐧🌡️"
            }
        ],
        category: "비례",
        difficulty: "hard"
    },
    {
        id: 318,
        question: "🌳 나무의 이산화탄소 흡수! 나무가 하루에 22kg의 CO₂를 흡수해요. 이것을 몰(mol) 단위로 바꾸면? (CO₂ 분자량 = 44g/mol)",
        steps: [
            {
                question: "22kg을 g으로 바꾸면?",
                options: ["22,000g", "2,200g", "220g", "22g"],
                correct: 0,
                explanation: "22kg = 22,000g이에요! 🌳"
            },
            {
                question: "몰수 = 질량 ÷ 분자량이므로?",
                options: ["22,000 ÷ 44", "22,000 × 44", "44 ÷ 22,000", "44 × 22,000"],
                correct: 0,
                explanation: "22,000 ÷ 44로 계산해요!"
            },
            {
                question: "22,000 ÷ 44 = ?",
                options: ["450mol", "480mol", "500mol", "520mol"],
                correct: 2,
                explanation: "500mol! 나무가 엄청난 양의 CO₂를 처리해요! 🌳💚"
            }
        ],
        category: "화학 계산",
        difficulty: "hard"
    },
    {
        id: 319,
        question: "🦅 독수리의 최적 비행각! 독수리가 45° 각도로 비행할 때 가장 효율적이에요. 수평거리 1000m를 이 각도로 날면 수직으로 몇 m 올라갈까요? (tan45° = 1)",
        steps: [
            {
                question: "탄젠트의 정의는?",
                options: ["대변/빗변", "인접변/빗변", "대변/인접변", "빗변/대변"],
                correct: 2,
                explanation: "tan = 대변/인접변이에요! 🦅"
            },
            {
                question: "tan45° = 수직거리/수평거리이므로?",
                options: ["1 = h/1000", "1 = 1000/h", "h = 1000×1", "h = 1000÷1"],
                correct: 2,
                explanation: "1 = h/1000, 따라서 h = 1000!"
            },
            {
                question: "수직 상승 거리는?",
                options: ["900m", "950m", "1000m", "1050m"],
                correct: 2,
                explanation: "1000m! 45°로 날면 수평거리와 같은 높이로 올라가요! 🦅📐"
            }
        ],
        category: "삼각비",
        difficulty: "hard"
    },
    {
        id: 320,
        question: "🐋 고래의 잠수 압력! 고래가 수심 200m까지 잠수해요. 수심 10m마다 압력이 1기압씩 증가한다면, 고래가 받는 총 압력은? (해수면 = 1기압)",
        steps: [
            {
                question: "수심 200m는 10m의 몇 배인가요?",
                options: ["18배", "19배", "20배", "21배"],
                correct: 2,
                explanation: "200 ÷ 10 = 20배예요! 🐋"
            },
            {
                question: "수압으로 인한 압력 증가는?",
                options: ["19기압", "20기압", "21기압", "22기압"],
                correct: 1,
                explanation: "20기압이 증가해요!"
            },
            {
                question: "총 압력 = 해수면 압력 + 수압 = ?",
                options: ["20기압", "21기압", "22기압", "23기압"],
                correct: 1,
                explanation: "1 + 20 = 21기압! 고래가 엄청난 압력을 견뎌요! 🐋💪"
            }
        ],
        category: "비례와 압력",
        difficulty: "hard"
    },
    // 21-30: 고급 생태계 수학
    {
        id: 321,
        question: "🌿 식물의 광합성 효율! 햇빛 에너지 1000W 중에서 30%만 광합성에 사용돼요. 이 중 60%가 포도당으로 저장된다면, 최종 저장 에너지는?",
        steps: [
            {
                question: "광합성에 사용되는 에너지는?",
                options: ["200W", "250W", "300W", "350W"],
                correct: 2,
                explanation: "1000 × 0.3 = 300W예요! 🌿"
            },
            {
                question: "포도당으로 저장되는 비율은?",
                options: ["50%", "55%", "60%", "65%"],
                correct: 2,
                explanation: "60%가 포도당으로 저장돼요!"
            },
            {
                question: "300 × 0.6 = ?",
                options: ["160W", "170W", "180W", "190W"],
                correct: 2,
                explanation: "180W! 햇빛의 18%만 최종 저장돼요! 🌿☀️"
            }
        ],
        category: "연속 백분율",
        difficulty: "hard"
    },
    {
        id: 322,
        question: "🦎 카멜레온의 색변화 주기! 카멜레온이 3분에 한 번씩 색을 바꿔요. 하루 24시간 동안 총 몇 번 색이 바뀔까요?",
        steps: [
            {
                question: "하루는 몇 분인가요?",
                options: ["1440분", "1450분", "1460분", "1470분"],
                correct: 0,
                explanation: "24 × 60 = 1440분이에요! 🦎"
            },
            {
                question: "3분마다 한 번씩이므로?",
                options: ["1440 ÷ 3", "1440 × 3", "1440 + 3", "1440 - 3"],
                correct: 0,
                explanation: "1440 ÷ 3으로 계산해요!"
            },
            {
                question: "1440 ÷ 3 = ?",
                options: ["470번", "480번", "490번", "500번"],
                correct: 1,
                explanation: "480번! 카멜레온이 정말 바쁘게 색을 바꿔요! 🦎🌈"
            }
        ],
        category: "시간 계산",
        difficulty: "hard"
    },
    {
        id: 323,
        question: "🌺 꽃의 황금비! 해바라기의 씨앗 배열이 황금비(1:1.618)를 따라요. 안쪽 원의 반지름이 5cm라면 바깥쪽 원의 반지름은?",
        steps: [
            {
                question: "황금비 1:1.618에서 비례식은?",
                options: ["5:x = 1:1.618", "x:5 = 1:1.618", "5:1.618 = x:1", "1:5 = 1.618:x"],
                correct: 0,
                explanation: "5:x = 1:1.618이에요! 🌻"
            },
            {
                question: "비례식을 풀면 x = ?",
                options: ["8.05cm", "8.09cm", "8.13cm", "8.17cm"],
                correct: 1,
                explanation: "x = 5 × 1.618 = 8.09cm!"
            },
            {
                question: "이 비율은 자연에서 어떤 의미인가요?",
                options: ["가장 효율적", "가장 아름다운", "가장 안정적", "모든 것"],
                correct: 3,
                explanation: "황금비는 효율적이고 아름답고 안정적이에요! 🌻✨"
            }
        ],
        category: "황금비",
        difficulty: "hard"
    },
    {
        id: 324,
        question: "🐜 개미집의 환기 시스템! 개미집에 입구 4개, 출구 3개가 있어요. 공기가 초당 2L씩 순환한다면, 1시간 동안 총 몇 L의 공기가 순환할까요?",
        steps: [
            {
                question: "초당 순환량은?",
                options: ["1L", "2L", "3L", "4L"],
                correct: 1,
                explanation: "초당 2L씩 순환해요! 🐜"
            },
            {
                question: "1시간은 몇 초인가요?",
                options: ["3500초", "3600초", "3700초", "3800초"],
                correct: 1,
                explanation: "60 × 60 = 3600초!"
            },
            {
                question: "2 × 3600 = ?",
                options: ["7000L", "7100L", "7200L", "7300L"],
                correct: 2,
                explanation: "7200L! 개미집의 환기 시스템이 훌륭해요! 🐜💨"
            }
        ],
        category: "시간과 부피",
        difficulty: "hard"
    },
    {
        id: 325,
        question: "🦅 독수리의 에너지 효율! 독수리가 1km 비행하는 데 100칼로리가 필요해요. 하루에 2400칼로리를 섭취한다면 최대 몇 km까지 날 수 있을까요?",
        steps: [
            {
                question: "1km당 필요 칼로리는?",
                options: ["90칼로리", "100칼로리", "110칼로리", "120칼로리"],
                correct: 1,
                explanation: "1km당 100칼로리가 필요해요! 🦅"
            },
            {
                question: "하루 섭취 칼로리는?",
                options: ["2300칼로리", "2400칼로리", "2500칼로리", "2600칼로리"],
                correct: 1,
                explanation: "2400칼로리를 섭취해요!"
            },
            {
                question: "2400 ÷ 100 = ?",
                options: ["22km", "23km", "24km", "25km"],
                correct: 2,
                explanation: "24km! 독수리가 하루 종일 날 수 있는 거리예요! 🦅✈️"
            }
        ],
        category: "비례",
        difficulty: "hard"
    },
    {
        id: 326,
        question: "🌀 회오리바람의 각속도! 회오리바람이 반지름 50m에서 초속 30m로 돌아요. 각속도는 몇 rad/s일까요? (각속도 = 선속도 ÷ 반지름)",
        steps: [
            {
                question: "선속도는?",
                options: ["25m/s", "30m/s", "35m/s", "40m/s"],
                correct: 1,
                explanation: "선속도가 30m/s예요! 🌀"
            },
            {
                question: "반지름은?",
                options: ["45m", "50m", "55m", "60m"],
                correct: 1,
                explanation: "반지름이 50m!"
            },
            {
                question: "30 ÷ 50 = ?",
                options: ["0.5 rad/s", "0.6 rad/s", "0.7 rad/s", "0.8 rad/s"],
                correct: 1,
                explanation: "0.6 rad/s! 회오리바람이 빠르게 돌아요! 🌀💨"
            }
        ],
        category: "각속도",
        difficulty: "hard"
    },
    {
        id: 327,
        question: "🦇 박쥐의 초음파 도플러 효과! 박쥐가 30m/s로 날면서 40kHz 초음파를 내요. 정지한 벽에서 반사된 주파수는? (음속 340m/s, 공식: f' = f(v+vr)/(v-vs))",
        steps: [
            {
                question: "도플러 공식에서 각 값은?",
                options: ["f=40kHz, v=340m/s, vs=30m/s", "f=30kHz, v=340m/s, vs=40m/s", "f=40kHz, v=30m/s, vs=340m/s", "f=340kHz, v=40m/s, vs=30m/s"],
                correct: 0,
                explanation: "f=40kHz, v=340m/s, vs=30m/s예요! 🦇"
            },
            {
                question: "(v+vr)/(v-vs) = (340+30)/(340-30) = ?",
                options: ["370/310", "340/310", "370/340", "310/370"],
                correct: 0,
                explanation: "370/310 = 1.194!"
            },
            {
                question: "40 × 1.194 = ?",
                options: ["47.6kHz", "47.7kHz", "47.8kHz", "47.9kHz"],
                correct: 1,
                explanation: "약 47.7kHz! 박쥐가 더 높은 주파수를 들어요! 🦇🔊"
            }
        ],
        category: "도플러 효과",
        difficulty: "hard"
    },
    {
        id: 328,
        question: "🌊 해류의 벡터 합성! 북쪽으로 3m/s, 동쪽으로 4m/s의 해류가 만날 때 합성 속도는? (피타고라스 정리 이용)",
        steps: [
            {
                question: "두 해류가 수직으로 만날 때 사용하는 공식은?",
                options: ["a + b", "a - b", "√(a² + b²)", "a × b"],
                correct: 2,
                explanation: "피타고라스 정리 √(a² + b²)를 사용해요! 🌊"
            },
            {
                question: "3² + 4² = ?",
                options: ["7", "12", "25", "49"],
                correct: 2,
                explanation: "9 + 16 = 25!"
            },
            {
                question: "√25 = ?",
                options: ["4m/s", "5m/s", "6m/s", "7m/s"],
                correct: 1,
                explanation: "5m/s! 두 해류가 합쳐져서 더 빨라졌어요! 🌊➡️"
            }
        ],
        category: "벡터",
        difficulty: "hard"
    },
    {
        id: 329,
        question: "🦋 나비효과의 지수적 증가! 작은 변화가 매일 1.1배씩 커져요. 초기값이 0.001이라면 30일 후의 값은? (1.1³⁰ ≈ 17.45)",
        steps: [
            {
                question: "지수적 증가 공식은?",
                options: ["초기값 × 증가율ⁿ", "초기값 + 증가율ⁿ", "초기값 ÷ 증가율ⁿ", "초기값 - 증가율ⁿ"],
                correct: 0,
                explanation: "초기값 × 증가율ⁿ을 사용해요! 🦋"
            },
            {
                question: "30일 후 공식은?",
                options: ["0.001 × 1.1³⁰", "0.001 + 1.1³⁰", "0.001 × 30", "1.1³⁰ - 0.001"],
                correct: 0,
                explanation: "0.001 × 1.1³⁰!"
            },
            {
                question: "0.001 × 17.45 = ?",
                options: ["0.01745", "0.1745", "1.745", "17.45"],
                correct: 0,
                explanation: "0.01745! 작은 변화가 17배나 커졌어요! 🦋📈"
            }
        ],
        category: "지수함수",
        difficulty: "hard"
    },
    {
        id: 330,
        question: "🌳 나무의 자기상사성! 나무 가지가 프랙탈 구조예요. 첫 번째 가지에서 3개씩 뻗어나가고, 각 가지에서 또 3개씩... 4단계까지 가면 총 가지 수는?",
        steps: [
            {
                question: "각 단계별 새로운 가지 수는?",
                options: ["1, 3, 9, 27", "3, 6, 9, 12", "1, 2, 4, 8", "3, 9, 18, 36"],
                correct: 0,
                explanation: "3⁰, 3¹, 3², 3³ = 1, 3, 9, 27개예요! 🌳"
            },
            {
                question: "총 가지 수는 누적 합이므로?",
                options: ["1+3+9+27", "3×4", "3⁴", "1×3×9×27"],
                correct: 0,
                explanation: "1+3+9+27을 계산해요!"
            },
            {
                question: "1 + 3 + 9 + 27 = ?",
                options: ["38개", "39개", "40개", "41개"],
                correct: 2,
                explanation: "40개! 나무의 프랙탈 구조가 신기해요! 🌳🔄"
            }
        ],
        category: "등비급수",
        difficulty: "hard"
    },
    // 31-40: 극한의 자연 수학
    {
        id: 331,
        question: "🌪️ 토네이도의 원심력! 토네이도 중심에서 100m 떨어진 곳의 바람속도가 50m/s예요. 원심력은? (F = mv²/r, 공기 밀도 1.2kg/m³, 부피 1m³)",
        steps: [
            {
                question: "원심력 공식에서 질량은?",
                options: ["1.0kg", "1.2kg", "1.4kg", "1.6kg"],
                correct: 1,
                explanation: "공기 밀도 × 부피 = 1.2kg이에요! 🌪️"
            },
            {
                question: "속도의 제곱은?",
                options: ["2400", "2500", "2600", "2700"],
                correct: 1,
                explanation: "50² = 2500!"
            },
            {
                question: "F = 1.2 × 2500 ÷ 100 = ?",
                options: ["25N", "30N", "35N", "40N"],
                correct: 1,
                explanation: "30N! 토네이도의 원심력이 강력해요! 🌪️💪"
            }
        ],
        category: "원심력",
        difficulty: "hard"
    },
    {
        id: 332,
        question: "🦅 독수리의 열상승기류! 독수리가 반지름 30m인 원을 그리며 상승해요. 한 바퀴에 5m씩 올라간다면, 나선의 총 길이는? (한 바퀴 = 2πr)",
        steps: [
            {
                question: "수평 원주는?",
                options: ["180m", "185m", "188m", "190m"],
                correct: 2,
                explanation: "2π × 30 ≈ 188m예요! 🦅"
            },
            {
                question: "수직 상승 거리는?",
                options: ["3m", "4m", "5m", "6m"],
                correct: 2,
                explanation: "한 바퀴에 5m씩 올라가요!"
            },
            {
                question: "√(188² + 5²) = ?",
                options: ["188.07m", "188.10m", "188.13m", "188.16m"],
                correct: 0,
                explanation: "약 188.07m! 나선 비행의 실제 거리예요! 🦅🌀"
            }
        ],
        category: "3차원 기하",
        difficulty: "hard"
    },
    {
        id: 333,
        question: "🐋 고래의 잠수 곡선! 고래가 포물선 y = -0.01x² + 200 경로로 잠수해요. 최대 수심은? (x는 수평거리)",
        steps: [
            {
                question: "포물선의 최고점은 언제인가요?",
                options: ["x = -200일 때", "x = 0일 때", "x = 200일 때", "x = 400일 때"],
                correct: 1,
                explanation: "x = 0일 때 최고점이에요! 🐋"
            },
            {
                question: "x = 0을 대입하면?",
                options: ["y = 200", "y = -200", "y = 100", "y = -100"],
                correct: 0,
                explanation: "y = 200이 해수면!"
            },
            {
                question: "포물선이 y = 0과 만나는 점에서 최대 수심은?",
                options: ["140m", "141m", "142m", "143m"],
                correct: 1,
                explanation: "x = ±141일 때 y = 0! 최대 수심 141m! 🐋⬇️"
            }
        ],
        category: "이차함수",
        difficulty: "hard"
    },
    {
        id: 334,
        question: "⚡ 번개의 전기장! 구름과 땅 사이 2km에서 전압이 10⁸V예요. 전기장의 세기는? (전기장 = 전압/거리)",
        steps: [
            {
                question: "거리를 미터로 바꾸면?",
                options: ["2000m", "20000m", "200m", "20m"],
                correct: 0,
                explanation: "2km = 2000m예요! ⚡"
            },
            {
                question: "10⁸을 일반 숫자로 쓰면?",
                options: ["10,000,000V", "100,000,000V", "1,000,000,000V", "10,000,000,000V"],
                correct: 1,
                explanation: "100,000,000V = 1억 볼트!"
            },
            {
                question: "100,000,000 ÷ 2000 = ?",
                options: ["50,000V/m", "60,000V/m", "70,000V/m", "80,000V/m"],
                correct: 0,
                explanation: "50,000V/m! 번개의 전기장이 엄청나요! ⚡📏"
            }
        ],
        category: "전기장",
        difficulty: "hard"
    },
    {
        id: 335,
        question: "🌊 쓰나미의 속도! 수심 4000m에서 쓰나미 속도는 √(gh)예요. 중력가속도 10m/s²일 때 속도는?",
        steps: [
            {
                question: "공식에서 g × h = ?",
                options: ["40,000", "400,000", "4,000", "40"],
                correct: 0,
                explanation: "10 × 4000 = 40,000이에요! 🌊"
            },
            {
                question: "√40,000 = ?",
                options: ["180m/s", "190m/s", "200m/s", "210m/s"],
                correct: 2,
                explanation: "√40,000 = 200m/s!"
            },
            {
                question: "이를 시속으로 바꾸면? (×3.6)",
                options: ["700km/h", "720km/h", "740km/h", "760km/h"],
                correct: 1,
                explanation: "200 × 3.6 = 720km/h! 쓰나미가 비행기처럼 빨라요! 🌊✈️"
            }
        ],
        category: "제곱근",
        difficulty: "hard"
    },
    {
        id: 336,
        question: "🦋 나비의 혼돈 이론! 나비 날개짓이 x(n+1) = 3.8x(n)(1-x(n)) 방정식을 따라요. x₀ = 0.5일 때 x₂는?",
        steps: [
            {
                question: "x₁ = 3.8 × 0.5 × (1-0.5) = ?",
                options: ["0.85", "0.90", "0.95", "1.00"],
                correct: 2,
                explanation: "3.8 × 0.5 × 0.5 = 0.95예요! 🦋"
            },
            {
                question: "x₂ = 3.8 × 0.95 × (1-0.95) = ?",
                options: ["0.1805", "0.1810", "0.1815", "0.1820"],
                correct: 0,
                explanation: "3.8 × 0.95 × 0.05 = 0.1805!"
            },
            {
                question: "이런 변화를 뭐라고 하나요?",
                options: ["안정적", "주기적", "혼돈적", "선형적"],
                correct: 2,
                explanation: "혼돈적! 작은 변화가 큰 차이를 만들어요! 🦋🌀"
            }
        ],
        category: "비선형 방정식",
        difficulty: "hard"
    },
    {
        id: 337,
        question: "🌳 나무 성장의 미분! 나무 높이가 h(t) = 2t² + 3t (t는 년)일 때, 3년 후 성장률은? (성장률 = dh/dt)",
        steps: [
            {
                question: "h(t) = 2t² + 3t를 미분하면?",
                options: ["4t + 3", "2t + 3", "4t² + 3t", "t² + 3"],
                correct: 0,
                explanation: "dh/dt = 4t + 3이에요! 🌳"
            },
            {
                question: "t = 3을 대입하면?",
                options: ["13", "14", "15", "16"],
                correct: 2,
                explanation: "4 × 3 + 3 = 15!"
            },
            {
                question: "3년 후 성장률은?",
                options: ["13m/년", "14m/년", "15m/년", "16m/년"],
                correct: 2,
                explanation: "15m/년! 나무가 점점 빨리 자라요! 🌳📈"
            }
        ],
        category: "미분",
        difficulty: "hard"
    },
    {
        id: 338,
        question: "🐧 펭귄 개체수의 적분! 개체수 변화율이 f'(t) = 100 - 2t (t는 년)예요. 5년간 총 변화량은? (∫f'(t)dt)",
        steps: [
            {
                question: "∫(100 - 2t)dt = ?",
                options: ["100t - t²", "100t - 2t²", "100 - 2t", "50t - t²"],
                correct: 0,
                explanation: "∫(100 - 2t)dt = 100t - t²이에요! 🐧"
            },
            {
                question: "t=0부터 t=5까지 정적분은?",
                options: ["[100t - t²]₀⁵", "[100 - 2t]₀⁵", "[50t - t²]₀⁵", "[100t - 2t²]₀⁵"],
                correct: 0,
                explanation: "[100t - t²]₀⁵로 계산해요!"
            },
            {
                question: "(500 - 25) - (0 - 0) = ?",
                options: ["470마리", "475마리", "480마리", "485마리"],
                correct: 1,
                explanation: "475마리! 5년간 펭귄이 475마리 늘었어요! 🐧📊"
            }
        ],
        category: "적분",
        difficulty: "hard"
    },
    {
        id: 339,
        question: "🌀 은하 회전의 각운동량! 은하 중심에서 r = 10²⁰m 떨어진 별이 v = 10⁵m/s로 돌아요. 각운동량은? (L = mvr, 별 질량 = 10³⁰kg)",
        steps: [
            {
                question: "각운동량 공식에서 각 값은?",
                options: ["m=10³⁰, v=10⁵, r=10²⁰", "m=10²⁰, v=10³⁰, r=10⁵", "m=10⁵, v=10²⁰, r=10³⁰", "m=10³⁰, v=10²⁰, r=10⁵"],
                correct: 0,
                explanation: "m=10³⁰kg, v=10⁵m/s, r=10²⁰m이에요! 🌀"
            },
            {
                question: "지수법칙에 의해 10³⁰ × 10⁵ × 10²⁰ = ?",
                options: ["10⁵⁵", "10⁵⁰", "10⁴⁵", "10⁴⁰"],
                correct: 0,
                explanation: "30 + 5 + 20 = 55이므로 10⁵⁵!"
            },
            {
                question: "각운동량의 단위는?",
                options: ["kg⋅m²/s", "kg⋅m/s²", "kg⋅m/s", "kg⋅m²/s²"],
                correct: 0,
                explanation: "10⁵⁵ kg⋅m²/s! 우주의 거대한 각운동량이에요! 🌀⭐"
            }
        ],
        category: "각운동량",
        difficulty: "hard"
    },
    {
        id: 340,
        question: "🦎 도마뱀의 카오스 심장박동! 심장박동 간격이 피보나치 비율을 따라요. 1초, 1.618초, 2.618초... 10번째 간격은? (φ = 1.618)",
        steps: [
            {
                question: "황금비 φ = 1.618일 때, φ² = ?",
                options: ["2.618", "2.628", "2.638", "2.648"],
                correct: 0,
                explanation: "φ² = φ + 1 = 2.618이에요! 🦎"
            },
            {
                question: "수열이 1, φ, φ², φ³, ...라면 φ⁹ = ?",
                options: ["φ⁸ + φ⁷", "φ⁸ × φ", "φ × 9", "9φ"],
                correct: 1,
                explanation: "φ⁹ = φ⁸ × φ!"
            },
            {
                question: "φ⁹ ≈ 76.01일 때, 이는 몇 분인가요?",
                options: ["1분 16초", "1분 17초", "1분 18초", "1분 19초"],
                correct: 0,
                explanation: "약 76초 = 1분 16초! 자연의 황금비가 신기해요! 🦎💓"
            }
        ],
        category: "황금비와 지수",
        difficulty: "hard"
    },
    // 41-50: 궁극의 자연 수학
    {
        id: 341,
        question: "🌌 별의 핵융합 에너지! 수소 4개가 헬륨 1개로 변할 때 질량 결손이 0.7%예요. E=mc²에서 c=3×10⁸m/s일 때, 1g 수소의 에너지는?",
        steps: [
            {
                question: "1g의 0.7%는?",
                options: ["0.006g", "0.007g", "0.008g", "0.009g"],
                correct: 1,
                explanation: "1 × 0.007 = 0.007g이 질량 결손이에요! ⭐"
            },
            {
                question: "0.007g을 kg으로 바꾸면?",
                options: ["7×10⁻⁶kg", "7×10⁻⁵kg", "7×10⁻⁴kg", "7×10⁻³kg"],
                correct: 0,
                explanation: "0.007g = 7×10⁻⁶kg!"
            },
            {
                question: "E = (7×10⁻⁶) × (3×10⁸)² = ?",
                options: ["6.3×10¹¹J", "6.3×10¹⁰J", "6.3×10⁹J", "6.3×10⁸J"],
                correct: 0,
                explanation: "6.3×10¹¹J! 별의 핵융합 에너지가 엄청나요! ⭐💥"
            }
        ],
        category: "핵물리",
        difficulty: "hard"
    },
    {
        id: 342,
        question: "🌊 해양의 코리올리 효과! 지구 자전으로 인해 위도 45°에서 물체가 받는 코리올리 힘은? (f = 2Ωv sin φ, Ω = 7.3×10⁻⁵ rad/s, v = 10 m/s)",
        steps: [
            {
                question: "sin 45° = ?",
                options: ["0.5", "0.707", "0.866", "1.0"],
                correct: 1,
                explanation: "sin 45° = 1/√2 ≈ 0.707이에요! 🌊"
            },
            {
                question: "2Ω = 2 × 7.3×10⁻⁵ = ?",
                options: ["1.46×10⁻⁴", "1.46×10⁻⁵", "1.46×10⁻³", "1.46×10⁻⁶"],
                correct: 0,
                explanation: "1.46×10⁻⁴ rad/s!"
            },
            {
                question: "f = 1.46×10⁻⁴ × 10 × 0.707 = ?",
                options: ["1.03×10⁻³", "1.03×10⁻⁴", "1.03×10⁻⁵", "1.03×10⁻²"],
                correct: 0,
                explanation: "1.03×10⁻³ N/kg! 지구 자전이 바다에 영향을 줘요! 🌍🌊"
            }
        ],
        category: "지구물리",
        difficulty: "hard"
    },
    {
        id: 343,
        question: "🦋 나비 날개의 간섭무늬! 날개 두께가 500nm이고 굴절률이 1.5예요. 빛의 파장 600nm에서 보강간섭 조건은? (2nt = mλ)",
        steps: [
            {
                question: "보강간섭 공식에서 각 값은?",
                options: ["n=1.5, t=500nm, λ=600nm", "n=500, t=1.5nm, λ=600nm", "n=1.5, t=600nm, λ=500nm", "n=600, t=500nm, λ=1.5nm"],
                correct: 0,
                explanation: "n=1.5, t=500nm, λ=600nm이에요! 🦋"
            },
            {
                question: "2nt = 2 × 1.5 × 500 = ?",
                options: ["1400nm", "1500nm", "1600nm", "1700nm"],
                correct: 1,
                explanation: "1500nm!"
            },
            {
                question: "m = 1500 ÷ 600 = ?",
                options: ["2", "2.5", "3", "3.5"],
                correct: 1,
                explanation: "m = 2.5! 완전한 정수가 아니므로 부분적 보강간섭이에요! 🦋🌈"
            }
        ],
        category: "광학",
        difficulty: "hard"
    },
    {
        id: 344,
        question: "🌋 마그마의 열전도! 지하 1km에서 온도가 50°C 올라가요. 열전도계수가 3 W/(m⋅K)일 때 열유속은? (q = -k dT/dx)",
        steps: [
            {
                question: "온도 기울기 dT/dx = ?",
                options: ["50°C/1000m", "1000°C/50m", "50°C/100m", "100°C/50m"],
                correct: 0,
                explanation: "50°C/1000m = 0.05°C/m = 0.05 K/m! 🌋"
            },
            {
                question: "열유속 q = -k × (dT/dx) = ?",
                options: ["-3 × 0.05", "3 × 0.05", "-0.05 × 3", "0.05 ÷ 3"],
                correct: 0,
                explanation: "-3 × 0.05 = -0.15!"
            },
            {
                question: "절댓값 |q| = ? (단위: W/m²)",
                options: ["0.10", "0.15", "0.20", "0.25"],
                correct: 1,
                explanation: "0.15 W/m²! 지구 내부의 열이 위로 전달돼요! 🌋🔥"
            }
        ],
        category: "열전도",
        difficulty: "hard"
    },
    {
        id: 345,
        question: "🐋 고래 소리의 도플러 효과! 30m/s로 접근하는 고래가 20Hz 소리를 내요. 관찰자가 들을 주파수는? (음속 1500m/s, f' = f(v/(v-vs)))",
        steps: [
            {
                question: "도플러 공식에서 각 값은?",
                options: ["f=20Hz, v=1500m/s, vs=30m/s", "f=30Hz, v=1500m/s, vs=20m/s", "f=20Hz, v=30m/s, vs=1500m/s", "f=1500Hz, v=30m/s, vs=20m/s"],
                correct: 0,
                explanation: "f=20Hz, v=1500m/s, vs=30m/s예요! 🐋"
            },
            {
                question: "v/(v-vs) = 1500/(1500-30) = ?",
                options: ["1500/1470", "1470/1500", "1500/30", "30/1500"],
                correct: 0,
                explanation: "1500/1470 ≈ 1.02!"
            },
            {
                question: "f' = 20 × 1.02 = ?",
                options: ["20.2Hz", "20.4Hz", "20.6Hz", "20.8Hz"],
                correct: 1,
                explanation: "20.4Hz! 고래가 접근할 때 더 높은 소리로 들려요! 🐋🔊"
            }
        ],
        category: "도플러 효과",
        difficulty: "hard"
    },
    {
        id: 346,
        question: "🌀 허리케인의 베르누이 효과! 바람속도 60m/s일 때 압력 감소는? (ΔP = ½ρv², 공기밀도 1.2kg/m³)",
        steps: [
            {
                question: "베르누이 공식에서 v² = ?",
                options: ["3400", "3500", "3600", "3700"],
                correct: 2,
                explanation: "60² = 3600이에요! 🌀"
            },
            {
                question: "½ρv² = ½ × 1.2 × 3600 = ?",
                options: ["2140Pa", "2150Pa", "2160Pa", "2170Pa"],
                correct: 2,
                explanation: "0.6 × 3600 = 2160Pa!"
            },
            {
                question: "이 압력 감소는 대기압(101325Pa)의 몇 %인가요?",
                options: ["2.1%", "2.2%", "2.3%", "2.4%"],
                correct: 0,
                explanation: "2160/101325 ≈ 2.1%! 허리케인이 기압을 크게 떨어뜨려요! 🌀📉"
            }
        ],
        category: "유체역학",
        difficulty: "hard"
    },
    {
        id: 347,
        question: "⚡ 뇌전의 전자기 유도! 번개가 10⁻⁴초 동안 전류 10⁴A를 흘려요. 1m 떨어진 곳의 자기장은? (B = μ₀I/(2πr), μ₀ = 4π×10⁻⁷)",
        steps: [
            {
                question: "공식에서 각 값은?",
                options: ["I=10⁴A, r=1m", "I=1A, r=10⁴m", "I=10⁻⁴A, r=1m", "I=10⁴A, r=10⁻⁴m"],
                correct: 0,
                explanation: "I=10⁴A, r=1m이에요! ⚡"
            },
            {
                question: "μ₀I/(2πr) = (4π×10⁻⁷ × 10⁴)/(2π × 1) = ?",
                options: ["2×10⁻³T", "2×10⁻²T", "2×10⁻¹T", "2×10⁰T"],
                correct: 0,
                explanation: "4π×10⁻³/(2π) = 2×10⁻³T!"
            },
            {
                question: "이 자기장은 지구 자기장(5×10⁻⁵T)의 몇 배인가요?",
                options: ["30배", "35배", "40배", "45배"],
                correct: 2,
                explanation: "(2×10⁻³)/(5×10⁻⁵) = 40배! 번개가 강한 자기장을 만들어요! ⚡🧲"
            }
        ],
        category: "전자기학",
        difficulty: "hard"
    },
    {
        id: 348,
        question: "🌊 지진파의 속도! P파 속도 8km/s, S파 속도 4km/s예요. 진원에서 100km 떨어진 관측소에서 두 파의 도착 시간 차이는?",
        steps: [
            {
                question: "P파의 도착 시간은?",
                options: ["10초", "12.5초", "15초", "17.5초"],
                correct: 1,
                explanation: "100 ÷ 8 = 12.5초예요! 🌊"
            },
            {
                question: "S파의 도착 시간은?",
                options: ["20초", "22초", "25초", "27초"],
                correct: 2,
                explanation: "100 ÷ 4 = 25초!"
            },
            {
                question: "시간 차이는?",
                options: ["10.5초", "11.5초", "12.5초", "13.5초"],
                correct: 2,
                explanation: "25 - 12.5 = 12.5초! 이 차이로 진원 거리를 알 수 있어요! 🌍📊"
            }
        ],
        category: "지진학",
        difficulty: "hard"
    },
    {
        id: 349,
        question: "🦋 나비 날개의 양자 효과! 날개의 나노구조가 빛을 산란시켜요. 파장 500nm 빛이 100nm 구멍을 통과할 때 회절각은? (sin θ = λ/d)",
        steps: [
            {
                question: "회절 공식에서 각 값은?",
                options: ["λ=500nm, d=100nm", "λ=100nm, d=500nm", "λ=500nm, d=500nm", "λ=100nm, d=100nm"],
                correct: 0,
                explanation: "λ=500nm, d=100nm이에요! 🦋"
            },
            {
                question: "sin θ = λ/d = 500/100 = ?",
                options: ["5", "0.5", "50", "0.05"],
                correct: 0,
                explanation: "sin θ = 5!"
            },
            {
                question: "sin θ > 1이므로 이것은?",
                options: ["불가능", "90°", "전반사", "양자터널링"],
                correct: 0,
                explanation: "물리적으로 불가능! 구멍이 너무 작아서 회절이 일어나지 않아요! 🦋❌"
            }
        ],
        category: "양자광학",
        difficulty: "hard"
    },
    {
        id: 350,
        question: "🌌 우주 배경복사의 온도! 빅뱅 후 137억 년이 지나 우주가 1100배 팽창했어요. 초기 온도가 3000K였다면 현재 온도는? (T ∝ 1/a, a는 우주 크기)",
        steps: [
            {
                question: "온도와 우주 크기의 관계는?",
                options: ["T ∝ a", "T ∝ 1/a", "T ∝ a²", "T ∝ 1/a²"],
                correct: 1,
                explanation: "온도는 우주 크기에 반비례해요! 🌌"
            },
            {
                question: "우주가 1100배 커졌다면 온도는?",
                options: ["1100배", "1/1100배", "√1100배", "1100²배"],
                correct: 1,
                explanation: "온도는 1/1100배가 돼요!"
            },
            {
                question: "3000K ÷ 1100 = ?",
                options: ["2.5K", "2.7K", "2.9K", "3.1K"],
                correct: 1,
                explanation: "약 2.7K! 이것이 현재 우주 배경복사 온도예요! 🌌❄️"
            }
        ],
        category: "우주론",
        difficulty: "hard"
    }
];

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.hardNatureQuestions = hardNatureQuestions;
}