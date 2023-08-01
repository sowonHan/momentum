const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// 이게 DB. 로컬 스토리지는 toDos array를 복사해두는 곳이다.
let toDos = [];

/* 로컬 스토리지는 string만 저장할 수 있다.
  하지만 우리는 단순 텍스트 나열이 아니라 배열 또는 객체로 저장해야 불러들이고 지우는 등의 처리가 용이해진다.
  따라서 object, array를 포함한 어떤 Javascript 코드든 string으로 바꿔주는 JSON.stringify()와, 저장한 JSON string을 다시 Javascript가 이해할 수 있는 코드로 바꿔주는 JSON.parse()를 활용한다. */

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // mouseEvent 대신 이제는 브라우저에서 pointerEvent로 정보값을 준다. 그래서 mouseEvent의 path와 같은 데이터를 조회하고 싶다면 composedPath()를 사용하면 된다.
  // console.log(event.composedPath());

  const targetLi = event.target.parentElement;
  console.log(typeof targetLi.id);
  targetLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetLi.id));
  // id는 string 타입이기 때문에 number 타입으로 바꿔준다
  saveToDos();
}

function paintToDo(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;
  const span = document.createElement("span");
  span.innerText = todoItem.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.append(span, button);
  toDoList.appendChild(li);
}

function onToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
