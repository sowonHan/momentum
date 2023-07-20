## (1) Form 태그

input의 유효성 검사(required, maxlength)를 작동시키기 위해서는 input이 form 태그 안에 있어야 한다.

- required 속성 덕분에 value가 빈 문자열일 때 브라우저가 말풍선을 띄워준다.
- form이 있으면 button(button type 아닌 기본 submit type, 혹은 submit type의 input)을 클릭하면 submit이 되고
- button 여부와 상관 없이 엔터 쳤을 때 form 안에 input이 1개만 존재하는 경우, 자동으로 submit 된다. (input 2개부터는 값 유무와 상관없이 엔터로 제출 안 되더라.)
  - 이 말은 form 안에 input이 1개라면 JS로 키다운 이벤트를 주지 않아도 된다는 의미!!!
