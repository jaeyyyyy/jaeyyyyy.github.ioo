const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const div = document.querySelector("#welcome");
const greeting = document.querySelector("#greeting");

const editNameBtn = document.createElement("button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    // const today = new Date();
   greeting.innerText = `Welcome, ${username}`;
    // if (today.getHours() >= 0 && today.getHours() < 12) {
    //     greeting.innerText = `Good Morning, ${username}`;
    // } else if (today.getHours() >= 12 && today.getHours() < 18) {
    //     greeting.innerText = `Good Afternoon, ${username}`;
    // } else if (today.getHours() >= 18 && today.getHours() < 22) {
    //     greeting.innerText = `Good Evening, ${username}`;
    // } else if (today.getHours() >= 22 && today.getHours() < 0) {
    //     greeting.innerText = `Good Evening, ${username}`;
    // }

    greeting.classList.remove(HIDDEN_CLASSNAME);
    div.appendChild(editNameBtn);
    editNameBtn.classList.add("edit_nameBtn");
    editNameBtn.innerText = "Edit your name";
    editNameBtn.classList.remove(HIDDEN_CLASSNAME);
    editNameBtn.addEventListener("click", editName);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername); 
}

function editName() {
    greeting.classList.add(HIDDEN_CLASSNAME);
    editNameBtn.classList.add(HIDDEN_CLASSNAME);
    window.localStorage.removeItem(USERNAME_KEY);
    const input = document.querySelector("#login-form input");
    input.value = null;
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}