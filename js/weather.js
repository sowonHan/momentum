const API_KEY = "18bcd66d8c2f78ea7c4d91ad9ee784bc";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:first-child");
      const temp = document.querySelector("#weather p:nth-child(2)");
      const city = document.querySelector("#weather p:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = `${data.name}, ${data.sys.country}`;
      temp.innerText = `${data.main.temp}℃`;
    });
  // 함수에 대한 설명 - https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// 브라우저에서 사용자의 위치 좌표를 불러온다
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
