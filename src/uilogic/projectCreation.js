function createProjectUIElement(name) {

    let projectList = document.querySelector("ul");

    let newProject = document.createElement("li");

    newProject.textContent = name;

    projectList.appendChild(newProject);
    
}

export default createProjectUIElement;