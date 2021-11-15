import Project from "./project";

export class User {

    projects = [];

    constructor() {

    }

    addNewProject() {

        let project = new Project();

        this.projects.push(project);

    }

    getProject(position) {
        return this.projects[position];
    }

    


}