// 명언 리스트는 https://github.com/chkim116/kadvice에서 발췌
// 이분 거를 설치하고 리스트를 가져오려고 했는데 cors가 걸려서 실패했다.

const quotes = [
  {
    quote:
      "만약 당신이 누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "말할 수 없는 것에 대해서는 침묵해야 한다.",
    author: "루드비히 비트겐슈타인",
  },
  {
    quote: "언어의 한계가 곧 자기 세계의 한계다.",
    author: "루트비히 비트겐슈타인",
  },
  {
    quote:
      "힘과 자신감을 외부에서 찾으려 노력했지만, 이는 전부 내면에서 나온다. 늘 이곳에 있다.",
    author: "안나 프로이트",
  },
  {
    quote:
      "아는 것만으로는 충분하지 않다. 적용해야만 한다. 의지만으로 충분하지 않다. 실행해야 한다.",
    author: "괴테",
  },
  {
    quote: "사랑 받기보다는 사랑하는 사람이 되어라.",
    author: "스탕달",
  },
  {
    quote:
      "실수하며 보낸 인생은 아무것도 하지 않은 인생보다 존경스러울 뿐 아니라 더 유용하다.",
    author: "조지 버나드 쇼",
  },
  {
    quote:
      "반드시 이겨야 하는 건 아니지만 진실할 필요는 있다. 반드시 성공해야 하는 건 아니지만, 소신을 가지고 살아야 할 필요는 있다.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "용기란 공포를 1분 더 참는 것이다.",
    author: "조지 패튼",
  },
  {
    quote:
      "말로 갈 수도, 차로 갈 수도, 둘이서 갈 수도, 셋이서 갈 수도 있다. 하지만 맨 마지막 한 걸음은 자기 혼자서 걷지 않으면 안된다.",
    author: "헤르만 헤세",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.trunc도 가능한 것 확인함
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
