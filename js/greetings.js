// const loginButton = document.querySelector("#login-form button");
// loginButton.addEventListener("click", onLoginClick);

// function onLoginClick() {
//   const username = loginInput.value;
//   // HTML 기능으로 input 태그에 maxlength 속성을 쓰지 않고 JS만으로 값의 유효성을 검사할 때는 아래와 같이 조건문 작성
//   if (username === "") {
//     alert("Please write your name.");
//     loginInput.focus(); // 이건 그냥 내가 불편해서 추가함
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//     loginInput.focus();
//   }
// }

/* form 태그를 사용함으로써 더 이상 click 이벤트를 신경 쓸 필요가 없다. (memo 1번 참고) 문제는 form을 사용하면 버튼 클릭 시 submit을 해서 페이지가 새로고침되고 value값이 사라진다는 것이다. */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const comment = document.querySelector("#greeting h1");
const logoutBtn = document.querySelector("#greeting button");

// 표기 관습. 일반적으로 string만 포함된 변수는 대문자로 적는다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인폼
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typedName = loginInput.value;
  // localStorage.setItem(keyName, keyValue)
  localStorage.setItem(USERNAME_KEY, typedName);
  paintGreetings(typedName);
}

// 로그아웃도 그냥 만들어봤다^3^
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

// 로그인 시 유저이름 띄우기
function paintGreetings(name) {
  comment.innerText = `Hello, ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  logoutBtn.addEventListener("click", onLogoutClick);
}
