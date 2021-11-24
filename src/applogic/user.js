export default class User {

    projects = [];
    initiatedNewProject = false;
    initiatedNewTodo = false;
    initiatedDeleteProject = false;
    
    constructor() {

    }

    addNewProject(project) {

        this.projects.push(project);

    }

    getProject(position) {
        return this.projects[position];
    }

    getProjects() {
        return this.projects;
    }

    setInitiatedNewProject(value) {
        this.initiatedNewProject = value;
    }

    getInitiatedNewProject() {
        return this.initiatedNewProject;
    }


    


}