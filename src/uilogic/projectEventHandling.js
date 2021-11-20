import { User } from "../applogic/user"
import {createUserInputElements, removeUserInputElements} from "./userInput"
import createProjectUIElement from "./projectCreation"
import {showProjects, removeProjectsFromUI} from "./projectListing"
import Project from "../applogic/project";


const newProjectButton = document.querySelector(".header");
const body = document.querySelector("body");

function initProjectUIInteractivity(currentUser) {


    newProjectButton.addEventListener('click', createUserInputElements.bind(currentUser));


    body.addEventListener('click', (event) => {

        if(event.target.className == "submit-btn") {

            let input = document.querySelector("input"); // validate empty value
            createNewProject(input.value, currentUser);
            currentUser.setInitiatedNewProject(false);

        } else if(event.target.className == "cancel-btn") {
            currentUser.setInitiatedNewProject(false);
            removeUserInputElements();
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


