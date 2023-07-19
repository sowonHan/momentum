/* 메모 : 
Javascript와 HTML은 이미 브라우저에서 연결되어 있다.
(브라우저에서 HTML을 불러들이고 HTML이 CSS와 Javascript를 불러오는 접착체 역할을 하니까)
우리는 document 객체를 통해서 Javascript 코드에서 HTML에 접근할 수 있다. (읽고 변경할 수 있다.)
웹페이지 문서 자체가 document라는 객체로 정의되어 있기 때문
console.dir(document)로는 객체의 속성을 확인 가능
console.log(document)로는 document, 즉 HTML element를 확인 가능 */

document.title = "Hello! From JS";
