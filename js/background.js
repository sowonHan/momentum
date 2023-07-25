const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 랜덤 소스로 img 태그가 html에 추가되기 위해서, html이 아니라 Javascirpt에서 element를 생성하여 추가한다.

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// append는 가장 뒤에, prepend는 가장 위에 오게 한다.
// append가 appendChild보다 나중에 추가된 기능이라 조금 더 편리하고 유연하다. MDN 공식 문서로 확인 가능
