/* 메모 (1) : 
Javascript와 HTML은 이미 브라우저에서 연결되어 있다.
(HTML 안에 script 태그로 app.js를 import했기 때문에
  -> document 객체가 존재할 수 있는 것
  -> 브라우저에서 HTML을 불러들이고 HTML이 CSS와 Javascript를 불러오는 접착체 역할을 한다.)
우리는 document 객체를 통해서 Javascript에서 HTML에 접근해 읽고 변경하는 등 상호작용을 할 수 있다.
Javascript 관점에서 HTML(웹페이지 문서)은 document라는 객체로 정의되어 있다.
console.dir(document)로는 object 형식으로 객체의 속성을 확인 가능
console.log(document)로는 document, 즉 HTML element를 확인 가능 */

document.title = "Hello! From JS";

// id로 HTML 요소 찾기.
/* id는 고유성이 있어서 한 문서에서 딱 1번만 사용 가능하고, 중복 사용도 안 되는 특성이 있기 때문에 getElementById는 단 하나의 값을 반환한다.
그러나 요즘은 보통 class를 쓰거나 class, id를 같이 쓰는 정도밖에 없으므로 이 함수는 가끔만 쓰인다. */
// const h1 = document.getElementById("h1");
// console.dir(h1);
// h1.innerText = "Got you!";
// console.log(`id : ${h1.id}`);
// console.log(`class : ${h1.className}`);

// class로 HTML 요소 찾기
// HTML 상황 : class hello를 가진 5개의 h1 태그
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// (HTMLCollection) 5개의 h1.hello가 들어있는 array가 콘솔에 출력된다.

// div 안의 h1 가져오기
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);
// (HTMLCollection) h1 1개가 들어있는 array가 콘솔에 출력된다.

// querySelector는 element를 CSS 선택자 방식으로 검색할 수 있다.
// 검색 조건에 맞는 요소 중 첫 번째 element만 반환한다. 그러므로 단 하나의 값을 반환
const h1 = document.querySelector(".hello h1:first-child");
console.log(h1);
const some = document.querySelectorAll(".hello h1");
console.log(some);
// querySelectorAll은 (NodeList) h1 3개가 들어있는 array가 콘솔에 출력된다.
h1.innerText = "Got you";

// event를 listening하는 법
// function handleClick() {
//   // h1 object 안에 style property가 있고 그 안에 color 속성이 있음을 dir로 확인 가능
//   const correntColor = h1.style.color;
//   let newColor;
//   if (correntColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
//   /* correntColor를 조건문에 다 넣어봤는데 상수여서 변하질 않는다.
//   correntColor를 let 변수로 넣는다고 해도 조건문 안에서 변수의 값만 달라지지 h1의 스타일이 바뀌는 건 아니니까 이렇게 할 수밖에 없네. 이해 완료!
//   추가 코멘트 : 프로그래밍 언어에서 "="(equal) 기호는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻이다 */
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS No WIFI");
// }

// function handleWindowOnline() {
//   alert("All Good");
// }

function handleClick() {
  // 클리닝 코드 (1) : raw value(개발자가 지은 이름값)를 줄여 오타를 예방한다.
  // const activeClass = "active";
  // if (h1.className === activeClass) {
  //   h1.className = "";
  // } else {
  //   h1.className = activeClass;
  // }

  // 버그 해결 : className을 바꾸면 기존에 있던 font class가 사라진다. 이를 위해 classList를 사용한다. classList는 class의 목록으로 작업할 수 있게 해준다. MDN에서 DOMTokenList로 조회 가능
  // const activeClass = "active";
  // if (h1.classList.contains(activeClass)) {
  //   h1.classList.remove(activeClass);
  // } else {
  //   h1.classList.add(activeClass);
  // }

  // 클리닝 코드 (2) : 위 코드를 구현해놓은 메소드를 활용한다.
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleClick);
/* 여기서 함수를 실행하지 않게 한다는 것이 중요하다.
왜냐하면 나는 즉시 이 함수를 실행시키고 싶은 게 아니라, 함수만 자바스크립트에 넘겨주고 click 이벤트가 발생한 순간에 자바스크립트가 나 대신 함수의 실행 버튼을 눌러주기를 원한다는 의미이기 때문이다. */
// 수강자끼리의 코멘트 중에 인용 : ()는 '함수를 실행하라'는 뜻이므로, 코드에 ()가 있으면 브라우저가 '아~ 함수를 실행하라는 거구나~' 하면서 유저의 클릭 여부와 관계없이 실행시킨다. 하지만 ()를 빼면 브라우저가 함수만 받은 상태에서 실행은 안 하고 대기하고 있다가 리스닝 중인 클릭 이벤트를 유저가 발생시킴과 동시에 함수를 실행하는 것.

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseleave = handleMouseLeave;
// addEventListener 함수를 사용해도 되고, 속성에 할당하는 방법도 있다. removeEventListener 함수를 함께 사용한다면 add 함수를 사용하는 편이 가독성에 좋겠다.

// window : 웹 브라우저 창을 나타내는 객체
// window.addEventListener("resize", handleWindowResize);
// clipboard 이벤트
// window.addEventListener("copy", handleWindowCopy);
// wifi 이벤트
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
