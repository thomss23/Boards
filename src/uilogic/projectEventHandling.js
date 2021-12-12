import { User } from "../applogic/user"
import {showProjects, removeProjectsFromUI, createProjectUIElement, createProjectUserElements, removeProjectInputElements, createAddDeleteTodoButtons, createProjectInputElements, removeSelectedStyleProject, styleSelectedProject} from "./projectUIHandling"
import Project from "../applogic/project";
import { showTodos, removeTodosFromUI } from "./todoUIHandling";

const newProjectButton = document.querySelector(".header");
const body = document.querySelector("body");

function initProjectUIInteractivity(currentUser) {


    newProjectButton.addEventListener('click', createProjectInputElements.bind(currentUser));


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
                removeProjectInputElements();
            break;

            case "project-name":
                
                if(!currentUser.getInitiatedNewProject()) {

                    removeSelectedStyleProject();

                    createAddDeleteTodoButtons(event.target);
                    showTodos();
                    styleSelectedProject(event.target); 
                }


            break;

            case "removeProject":
                removeProject();
            break;

            
        }


    });

}


function createNewProject(projectName, currentUser) {

    let project = new Project(projectName);
    currentUser.addNewProject(project);

    removeProjectInputElements();

    createProjectUIElement(projectName);

}


export default initProjectUIInteractivity;


