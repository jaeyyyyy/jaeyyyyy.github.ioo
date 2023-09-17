const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function doneTodo(event) {
  const li = event.target.parentElement;  
  console.log(e.target);
  for (const i in toDos) {
    if (toDos[i].id === parseInt(li.id)) {
      if (toDos[i].is_done === true) {
        event.target.classList.remove("done");
        toDos[i].is_done = false;
      } else {
        event.target.classList.add("done");
        toDos[i].is_done = true;
      }
    }
  }
  saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.classList.add("todo_text");
    span.innerText = newTodo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_button");
    deleteBtn.innerHTML = '<i class="far fa-trash-alt fa-lg"></i>'
    deleteBtn.addEventListener("click", deleteTodo);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", "done");
    checkbox.classList.add("check");
    checkbox.addEventListener("change", doneTodo);
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: toDos.length + 1,
        is_done: false,
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);   
    }

  
