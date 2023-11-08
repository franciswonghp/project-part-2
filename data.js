// at the top of `data.js`
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "652e334254105e766fc35326";

let todos = [];

function addTodo(todos, name, number, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    number: number,
    urgency: urgency
  };
  //data storage

  todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) {
  let task = null;
  for (let t of todos) {
    if (t.id == id) {
      task = t;
    }
  }
  if (task) {
    task.name = newTaskName;
    task.urgency = newUrgency;
  } else {
    console.log("Task is not found");
  }
}

function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found");
  }
}

// ...add at the end of `data.js`
//load task to use wait 
//The line const response =await axios.get.... is to fetch the JSON data from the JSON Bin RESTFul API
//We then return the data fetched from JSON Bin
async function loadTasks() {
  const response = await axios.get(BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest");
  console.log(response.data)
  return response.data.record;
}