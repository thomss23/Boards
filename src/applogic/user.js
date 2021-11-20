export default class User {

    projects = [];
    initiatedNewProject = false;

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