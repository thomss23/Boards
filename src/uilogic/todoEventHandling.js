import {showTodos, removeTodosFromUI, displayInputTodoModal, closeInputTodoModal } from "./todoUIHandling";
const body = document.querySelector("body");

function initTodoUIInteractivity(currentUser) {


    body.addEventListener('click', (event) => {

        switch (event.target.className) {

            case "addTodo": 
                displayInputTodoModal();
            break;

            case "close":
                closeInputTodoModal();
            break;

            case "submit":
                

        }
    });


}

export default initTodoUIInteractivity;