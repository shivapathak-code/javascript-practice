const ToDoList = [];
function renderTodo()
{
let ToDoListHTML = '';
ToDoList.forEach(function(todoobject ,index)
{
  const {name , dueDate} = todoobject
  const HTML = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick = "ToDoList.splice(${index} , 1);renderTodo();" class = "delete-btn";>Delete</button>
  `;
  ToDoListHTML+=HTML;
})
document.querySelector('.div-html').innerHTML = ToDoListHTML;
}


function addList()
{
  const ans1 = document.querySelector('.to-do-js');
  const name = ans1.value;
  const ans2  = document.querySelector('.input-todo-js');
  const dueDate = ans2.value;
  ToDoList.push({name , dueDate});
  ans1.value = '';
  renderTodo();
}