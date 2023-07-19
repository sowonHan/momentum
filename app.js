/* 메모 (1) : 
Javascript와 HTML은 이미 브라우저에서 연결되어 있다.
(브라우저에서 HTML을 불러들이고 HTML이 CSS와 Javascript를 불러오는 접착체 역할을 하니까)
우리는 document 객체를 통해서 Javascript에서 HTML에 접근해 읽고 변경하는 등 상호작용을 할 수 있다.
Javascript 관점에서 HTML(웹페이지 문서)이 document라는 객체로 정의되어 있기 때문.
console.dir(document)로는 객체의 속성을 확인 가능
console.log(document)로는 document, 즉 HTML element를 확인 가능 */

document.title = "Hello! From JS";

// id로 HTML 요소 찾기.
/* id는 고유성이 있어서 한 문서에서 딱 1번만 사용 가능하고, 중복 사용도 안 되는 특성이 있기 때문에 getElementById는 단 하나의 값을 반환한다.
그러나 요즘은 보통 class를 쓰거나 class, id를 같이 쓰는 정도밖에 없으므로 이 함수는 가끔만 쓰인다. */
// const title = document.getElementById("title");
// console.dir(title);
// title.innerText = "Got you!";
// console.log(`id : ${title.id}`);
// console.log(`class : ${title.className}`);

// class로 HTML 요소 찾기
// HTML 상황 : class hello를 가진 5개의 h1 태그
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// (HTMLCollection) 5개의 h1.hello가 들어있는 array가 콘솔에 출력된다.

// div 안의 h1 가져오기
// const title = document.getElementsByTagName("h1");
// console.log(title);
// (HTMLCollection) h1 1개가 들어있는 array가 콘솔에 출력된다.

// querySelector는 element를 CSS 선택자 방식으로 검색할 수 있다.
// 검색 조건에 맞는 요소 중 첫 번째 element만 반환한다. 그러므로 단 하나의 값을 반환
const title = document.querySelector(".hello h1:first-child");
console.log(title);
const some = document.querySelectorAll(".hello h1");
console.log(some);
// querySelectorAll은 (NodeList) h1 3개가 들어있는 array가 콘솔에 출력된다.
title.innerText = "Got you";
