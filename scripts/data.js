// const url = `${window.location.protocol}//${window.location.host}`;
export const url = "http://127.0.0.1:8000";

export const QAList = [
  {},
  {
    q: "최고의 연수생과 함께 한팀이 되고 싶다. 내가 원하는 팀원의 모습은?",
    a: [
      "편안하고 대화가 잘 통하는 팀원",
      "성실하고 무엇이든 믿고 맏길 수 있는 든든한 팀원",
    ],
  },
  {
    q: "내가 원하는 멘토님의 모습은?",
    a: [
      "고생이 많지~? 위로와 격려를 아끼지 않으시는 따뜻한 멘토님",
      "질문할 때마다 답이 척척! 언제든 믿고 의지할 수 있는 멘토님",
    ],
  },
  {
    q: "오늘 하루는 개발에 올인한다! 나의 모습은?",
    a: [
      "아침 일찍 일어나 센터로 향한다.",
      "가장 편안한 내 방 & 최적화된 데스크 셋업에서 온라인으로 개발한다.",
      "좋은 분위기의 카페에서 커피 한잔과 함께 백로그를 확인한다.",
    ],
  },
  {
    q: "새로운 서비스를 기획해야 한다. 내가 하고 싶은 프로젝트는?",
    a: [
      "고객의 불편은 곧 나의 불편! 사용자에게 꼭 필요한 서비스.",
      "기술력이 곧 국력! 영혼까지 끌어모아 성능개선을 이루겠다!",
    ],
  },
  {
    q: "어려운 문제를 마주했을 때 나의 해결 방벙은?",
    a: [
      "이슈엔 속도가 생명! 팀원들과 즉시 의논한다.",
      "우선 좋은 해결방법이 있을지 충분히 고민해본다.",
      "챗GPT야, 해결방법 알려줘~",
    ],
  },
  {
    q: "제출기한이 당장 다음주! 지금부터 나의 계획은?",
    a: [
      "해야 할 일을 중요도순으로 정리하고 우선순위와 스케줄에 맞게 차근차근 진행한다",
      "밤샘각이다. 소마센터에서 눌러앉기로 한다.",
    ],
  },
  {
    q: "팀원들이 피곤에 찌들어 있다면",
    a: ["커피 한잔 하러 갈까?", "조금만 더 힘내! 얼른 끝내구 쉬자고~"],
  },
  {
    q: "나만의 개발 습관이 있다면?",
    a: [
      "1일 1커밋! 커밋을 잊어버린 날에는 자다가도 일어난다.",
      "기록은 곧 자산! 체계적인 문서화는 필수다!",
      "코드는 함께 개발하는 것! 코드리뷰와 좋은 팀 문화를 만들어야 한다.",
    ],
  },
  {
    q: "개발하면서 듣기 좋은 음악은?",
    a: [
      "조용한 (lofi || jazz) 분위기의 bgm",
      "신나는 (힙합 || edm || pop)",
      "조용한게 최고! 아무것도 듣지 않는다.",
    ],
  },
  {
    q: "개발하면서 듣기 좋은 음악은?",
    a: [
      "조용한 (lofi || jazz) 분위기의 bgm",
      "신나는 (힙합 || edm || pop)",
      "조용한게 최고! 아무것도 듣지 않는다.",
    ],
  },
];

export let types = await fetch(`${url}/mbti`).then(response => response.json());