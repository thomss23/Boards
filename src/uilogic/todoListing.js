const todoList = document.querySelector(".card-container");

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


export {showTodos, removeTodosFromUI};