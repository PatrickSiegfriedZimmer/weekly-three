const btnAdd = document.querySelector('#btnAdd');
const inputItem = document.querySelector('#inputItem');
const todolist = document.querySelector('#todolist');

const updateView = () => {
    let listItem = todolist.createElement('li');
    
    
}

// Eventlisteners
btnAdd.addEventListener('click', () => {
addTodo('lorem ipsum');
console.log(todos);
})

let todos = [
    ["mit hund laufen gehen", false],
    ["putzen", false]
  ];
  
// ToDo hinzufügen:
  function addTodo(todoLabel) {
    todos.push([todoLabel, false]);
  }
  
//  als erledigt markieren: 
  function markAsDone(index) {
    const todo = todos[index];
    todo[1] = true;
  }
  
  /**
   * Ein Todo bearbeiten
   */
  
  function editToDo(index, editedToDo) {
    const todo = todos[index];
    todo[0] = editedToDo;
  }
  
  /**
   * Ein Todo loeschen
   */
  
  function deleteTodo(index) {
    todos.splice(index, 1);
  }
  
  /**
   * Actions
   */
  
  logTodos();
  
  // Add
  addTodo("lebensmittel einkaufen");
  addTodo("ein buch lesen");
  logTodos();
  
  // Delete
  deleteTodo(1);
  logTodos();
  
  // Edit
  editToDo(2, "die Katze füttern");
  logTodos();
  
  // Mark as done
  markAsDone(0);
  logTodos();
  
  function logTodos() {
    console.log(`====== Todos ======`);
    todos.forEach((todo, index) => {
      console.log(`${index}: ${todo[0]} | ${todo[1]}`);
    });
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  // forEach Syntax: forEach((element, index) => { })
  