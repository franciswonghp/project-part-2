document.addEventListener('DOMContentLoaded', function() {

    function main() {
      let todos = []; // store all the todos
  
      const addTodoButton = document.querySelector("#addTodo");
      addTodoButton.addEventListener('click', function() {
        //taskname
        const taskNameInput = document.querySelector("#taskname")
        const taskName = taskNameInput.value;
        //tasknumber
        const taskNumberInput = document.querySelector("#tasknumber")
        const taskNumber = taskNumberInput.value
        //taskurgency
        const taskUrgencySelect = document.querySelector("#taskUrgency");
        const taskUrgency = taskUrgencySelect.value;
  
        if (taskName) {
          addTodo(todos, taskName, taskNumber, taskUrgency);
          renderTodos(todos);
          taskNameInput.value = '';
          taskNumberInput.value = '';
        }
      });
  
  
      
    }
  
  
    function renderTodos(todos) {
      todoList.innerHTML = '';
      for (let todo of todos) {
        console.log(todos);
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
                  ${todo.name} ${todo.number} <span class="badge bg-primary">${todo.urgency}</span>
                  
                  <button class="btn btn-danger btn-sm delete-btn" data-id="${todo.id}">Delete</button>
                  <button class="btn edit-btn btn-success btn-sm">Edit</button>
              `;
        todoList.appendChild(li);
        
        //both delete and edit button working
        //li.querySelector(".delete-btn").addEventListener('click', function() {
        //alert("deleteing todo :" + todo.name)})
      }
    }
  
    main();
  });

