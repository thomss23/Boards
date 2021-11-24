function createProjectUIElement(name) {

    let projectList = document.querySelector("ul");

    let newProjectContainer = document.createElement("li");

    let newProject = document.createElement("div");
    newProject.textContent = name;
    newProject.classList.add("project-name");

    newProjectContainer.appendChild(newProject);
    projectList.appendChild(newProjectContainer);
    
}

export default createProjectUIElement;