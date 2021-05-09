const form = document.querySelector(".js-form"),
  input = form.querySelector(".js-txtInput"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

  //로컬스토리지에 이름 저장
function saveName(text) {
  localStorage.setItem(USER_LS,text);
}

//폼을 안보이게하고 이름을 출력
function panintGreeting(text){
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON)
  greeting.innerText = `Hello ${text}`;
}

// function handleSubmit(event){
//   event.preventDefault();
//   const currentValue = input.value;
//   panintGreeting(currentValue);
//   saveName(currentValue);
// }

// function askForName(){
//   form.classList.add(SHOWING_ON);
//   form.addEventListener("submit",handleSubmit);
// }

//이름을 물어보고 저장하는 함수
function askForName(){
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit",(event) => {
    event.preventDefault();
    const currentValue = input.value;
    panintGreeting(currentValue);
    saveName(currentValue);
  });
}

//이름 출력
function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //저장된 이름이 없을 때
    askForName();
  } else {
    //이름이 있을 때
    panintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();