const clock = document.querySelector("h2#clock");

function showClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  /* 댓글에서 힌트 얻고 MDN 참고해서 변형해보니 이거 한 줄로도 구현이 가능했다.
  시간 자체는 한국의 현재 시간을 구해주는데 표현 방식을 영국식으로 하겠다는 의미다.
  영국이 디지털 시계인 24시간 00:00:00 포맷으로 설정되어 있더라. */
  // clock.innerText = new Date().toLocaleTimeString("en-GB");
}

showClock();
setInterval(showClock, 1000);
