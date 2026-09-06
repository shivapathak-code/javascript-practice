const ToDoList = [{name:'' , dueDate:''}];
function renderTodo()
{
let ToDoListHTML = '';
for(let i = 0;i<ToDoList.length;i++)
{
  const todoobject = ToDoList[i];
  const {name , dueDate} = todoobject
  const HTML = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick = "ToDoList.splice(${i} , 1);renderTodo();">Delete</button>
  `;
  ToDoListHTML+=HTML;
}
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