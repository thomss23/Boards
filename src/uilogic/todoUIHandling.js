const todoList = document.querySelector(".card-container");
const modal = document.getElementById("todoModal");

function showTodos(todos) {
    //dunno yet
    for(project in todos) {
        let newTodo = document.createElement("div");
        newTodo.classList.add("card");

        newTodo.textContent = project.getProjectName();

        projectList.appendChild(newProject);

    }
}

function removeTodosFromUI() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

function displayInputTodoModal() {
    modal.style.display = "block";
}

function closeInputTodoModal() {
    modal.style.display = "none";
}

export {showTodos, removeTodosFromUI, displayInputTodoModal, closeInputTodoModal};