import { User } from "../applogic/user"
import {createUserInputElements, removeUserInputElements, createAddDeleteTodoButtons} from "./userInput"
import createProjectUIElement from "./projectCreation"
import {showProjects, removeProjectsFromUI} from "./projectListing"
import Project from "../applogic/project";
import { showTodos, removeTodosFromUI } from "./todoListing";

const newProjectButton = document.querySelector(".header");
const body = document.querySelector("body");

function initProjectUIInteractivity(currentUser) {


    newProjectButton.addEventListener('click', createUserInputElements.bind(currentUser));


    body.addEventListener('click', (event) => {

        switch (event.target.className) {
            case "submit-btn":
                let input = document.querySelector("input"); 
                if(input.value) {
                    createNewProject(input.value, currentUser);
                    currentUser.setInitiatedNewProject(false);
                } else {
                    input.value = "Empty value not allowed" // show something better here, like a new element to display an error
                }
            break;

            case "cancel-btn":
                currentUser.setInitiatedNewProject(false);
                removeUserInputElements();
            break;

            case "project-name":
                createAddDeleteTodoButtons(event.target);
                showTodos();
                styleSelectedProject(); 
            break


    
        }


    });



    

}


function createNewProject(projectName, currentUser) {

    let project = new Project(projectName);
    currentUser.addNewProject(project);

    removeUserInputElements();

    createProjectUIElement(projectName);

}


export default initProjectUIInteractivity;


