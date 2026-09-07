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
  <button class = "delete-btn delete-todo-btn";>Delete</button>
  `;
  ToDoListHTML+=HTML;
})
document.querySelector('.div-html').innerHTML = ToDoListHTML;
document.querySelectorAll('.delete-todo-btn')
.forEach((deleteButton , index)=>{
    deleteButton.addEventListener('click' ,()=>{
    ToDoList.splice(index , 1);renderTodo();
  });
});
}
document.querySelector('.todo-event-btn')
.addEventListener('click' ,()=>{
    addList();
});
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