export default class Entry {

    constructor(title, description, dueDate, priority, IsDone) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.IsDone = IsDone;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    setIsDone(value) {
        this.IsDone = value;
    }

    getIsDone() {
        return this.IsDone;
    }

    toggleIsDone() {
        this.IsDone = !this.IsDone;
    }

    

}