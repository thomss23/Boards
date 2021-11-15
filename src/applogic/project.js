import Entry from "./entry";

export default class Project {
    
    entryList = [];

    constructor(name) {
        this.name = name;
    }

    addNewEntry(title, description, dueDate, priority) {
        let entry = new Entry(title, description, dueDate, priority, false);

        this.entryList.push(entry);
    }
    
    removeEntry(position) {
        this.entryList.splice(i, 1);
    }

    toggleIsDoneEntry(entryPos) {
        this.entryList[entryPos].toggleIsDone();
    }

}

