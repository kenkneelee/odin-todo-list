
export default class Task {
    constructor(projectObject, title, due, description) {
        this.projectObject = projectObject;
        this.title = title;
        this.due = due;
        this.description = description;
    }
}