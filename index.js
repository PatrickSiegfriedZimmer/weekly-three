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

// --EventListener--

btnAdd.addEventListener('click', () => {
  addTodo(inputItem.value);
  inputItem.value = '';
  logTodos();
});

todolist.addEventListener('click', (event) => {
  const li = event.target.parentNode;
  const index = Array.from(todolist.children).indexOf(li);

  if (event.target.classList.contains('btnDelete')) {
    // Delete button was clicked on index
    deleteTodo(index);
    updateView();
  }
  if (event.target.classList.contains('btnEdit')) {
    // Edit button was clicked on edit

    updateView();
  }
});

todolist.addEventListener('change', (event) => {
  const li = event.target.parentNode;
  const index = Array.from(todolist.children).indexOf(li);
  if (event.target.classList.contains('checkbox')) {
    // Checkbox was changed
    console.log('Checkbox was changed!');
    todos[index].isDone = event.target.checked;
  }

  updateView();
});

todolist.addEventListener('input', (event => {
  const li = event.target.parentNode;
  const index = Array.from(todolist.children).indexOf(li);
  todos[index].text = event.target.innerHTML;
}));


// --Functions--
const updateView = () => {
  console.log('=== UPDATE VIEW ===');
  todolist.innerHTML = '';

  todos.forEach((t) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <input type="checkbox" class="checkbox" ${t.isDone ? 'checked' : ''}>
    <p class="todoText" contenteditable="true" ${t.isDone? 'strikethrough' : ''}">${t.text}</p>                   
    <button class="btnEdit small"><i class="fa-solid fa-pencil"></i></button>
    <button class="btnDelete small"><i class="fa-solid fa-trash"></i></button>
    `;

    todolist.appendChild(listItem);
  });
};


function addTodo(todoLabel) {
  todos.push(new ToDo(todoLabel, false));
  updateView();
}

function markAsDone(index) {
  const todo = todos[index];
  todo.isDone = true;
}

function editToDo(index, editedToDo) {
  const todo = todos[index];
  todo.isDone = editedToDo;
}

function deleteTodo(index) {
  todos.splice(index, 1);
}

// --Helpers | Actions--

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
// editToDo(2, 'die Katze f??ttern');
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
