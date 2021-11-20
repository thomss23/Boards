const projectList = document.querySelector(".header");

function showProjects(projects) {

    for(project in projects) {

        let newProject = document.createElement("li");

        newProject.textContent = project.getProjectName();

        projectList.appendChild(newProject);

    }
}

function removeProjectsFromUI() {

    while(projectList.firstChild) {
        projectList.removeChild(projectList.lastChild);
    }
    
}


export {showProjects, removeProjectsFromUI};