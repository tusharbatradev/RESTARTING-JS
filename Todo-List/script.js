let username = document.getElementById("Username");
let password = document.getElementById("password");

let login = false;

function handleLogin() {
  if (username.value === "tushar" && password.value === "Tushar@123" || username.value === "kanak" && password.value === "Kanak@123") {
    document.getElementById("message").innerHTML = "Login Successful";
    login = true;
    console.log(login);

    if (login) {
      window.location.href = "list.html";
    }
  } else {
    document.getElementById("message").innerHTML = "Login Failed";
  }
}

let todos = [];

function handleAddTodo() {
  todos.push(document.getElementById("Todo"));

  const newTodoInput = document.getElementById("newTodo");

  const li = document.createElement("li");
  li.textContent = newTodoInput.value;
  document.getElementById("todo-list").appendChild(li);
  console.log(todos);
}
