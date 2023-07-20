const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginClick() {
  const username = loginInput.value;
  // HTML 기능으로 input 태그에 maxlength 속성을 쓰지 않고 JS만으로 값의 유효성을 검사할 때는 아래와 같이 조건문 작성
  // if (username === "") {
  //   alert("Please write your name.");
  //   loginInput.focus(); // 이건 그냥 내가 불편해서 추가함
  // } else if (username.length > 15) {
  //   alert("Your name is too long.");
  //   loginInput.focus();
  // }
  console.log(username);
}
/* form 태그를 사용함으로써 더 이상 click 이벤트를 신경 쓸 필요가 없다. (index에 써놨음) 문제는 form을 사용하면 버튼 클릭 시 submit을 해서 페이지가 새로고침되고 value값이 사라진다는 것이다. */

loginButton.addEventListener("click", onLoginClick);
