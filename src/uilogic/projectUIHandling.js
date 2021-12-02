const projectHeader = document.querySelector(".header");
let projectList = document.querySelector("ul");

function showProjects(projects) {

    for(project in projects) {

        let newProject = document.createElement("li");

        newProject.textContent = project.getProjectName();

        projectHeader.appendChild(newProject);

    }
}

function removeProjectsFromUI() {

    while(projectHeader.firstChild) {
        projectHeader.removeChild(projectList.lastChild);
    }
    
}

function createProjectUIElement(name) {

    let projectList = document.querySelector("ul");

    let newProjectContainer = document.createElement("li");

    let newProject = document.createElement("div");
    newProject.textContent = name;
    newProject.classList.add("project-name");

    newProjectContainer.appendChild(newProject);
    projectList.appendChild(newProjectContainer);
    
}

function removeSelectedStyleProject() {

    let projects = document.querySelectorAll(".project-name");
    [].forEach.call(projects, function(el) {

        if(el.classList.contains("selected")) {

            const liParent = el.parentElement;

            liParent.removeChild(liParent.lastChild);
            liParent.removeChild(liParent.lastChild);
            el.classList.remove("selected");

        }

    });


 
}


// user input for project 

function createProjectInputElements() {


    if(this.getInitiatedNewProject() == false) {

        removeSelectedStyleProject()
        this.setInitiatedNewProject(true);
        let userInputContainer = document.createElement("div");
        userInputContainer.classList.add("user-input");
    
        let inputField = document.createElement("input");
        let confirmationButtonsContinaier = document.createElement("div");
        confirmationButtonsContinaier.classList.add("confirmation-buttons");
    
        let submitButton = document.createElement("button");
        let cancelButton = document.createElement("button");
    
        submitButton.classList.add("submit-btn");
        submitButton.textContent = "Submit";
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";
    
        confirmationButtonsContinaier.appendChild(submitButton);
        confirmationButtonsContinaier.appendChild(cancelButton);
    
        userInputContainer.appendChild(inputField);
        userInputContainer.appendChild(confirmationButtonsContinaier);
    
        projectList.appendChild(userInputContainer);
        
    }

}

function removeProjectInputElements() {

    projectList.removeChild(projectList.lastChild);

}

//style the buttons here
function createAddDeleteTodoButtons(selectedProject) {
    let addTodoButton = document.createElement("button");
    addTodoButton.textContent = "+";
    let removeProjectButton = document.createElement("button");
    removeProjectButton.textContent = "-";

    selectedProject.parentElement.appendChild(addTodoButton);
    selectedProject.parentElement.appendChild(removeProjectButton);
}

function styleSelectedProject(selectedProject) {
    selectedProject.classList.add("selected");
}



export {showProjects, removeProjectsFromUI, createProjectUIElement, createProjectInputElements, removeProjectInputElements, createAddDeleteTodoButtons, styleSelectedProject, removeSelectedStyleProject};