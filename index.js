class ToDo {
  constructor(text, isDone) {
    this.text = text;
    this.isDone = isDone;
  }
}

const btnAdd = document.querySelector('#btnAdd');
const inputItem = document.querySelector('#inputItem');
const todolist = document.querySelector('#todolist');

let todos = [
  new ToDo('mit hund laufen gehen', false),
  new ToDo('putzen', false)
];

const updateView = () => {
  todolist.innerHTML = "";

  todos.forEach((t) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = t.text;

    todolist.appendChild(listItem);
  });
};

btnAdd.addEventListener('click', () => {
  addTodo(inputItem.value);
  inputItem.value = "";
  logTodos();
});

function addTodo(todoLabel) {
  todos.push(new ToDo(todoLabel, false));
  updateView();
}

function markAsDone(index) {
  const todo = todos[index];
  todo[1] = true;
}

function editToDo(index, editedToDo) {
  const todo = todos[index];
  todo[0] = editedToDo;
}

function deleteTodo(index) {
  todos.splice(index, 1);
}

logTodos();
updateView();

// Add
// addTodo('lebensmittel einkaufen');
// addTodo('ein buch lesen');
// logTodos();

// Delete
// deleteTodo(1);
// logTodos();

// Edit
// editToDo(2, 'die Katze füttern');
// logTodos();

// Mark as done
// markAsDone(0);
// logTodos();

function logTodos() {
  console.log(`====== Todos ======`);
  todos.forEach((todo, index) => {
    console.log(`${index}: ${todo.text}, ${todo.isDone}`);
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// forEach Syntax: forEach((element, index) => { })
