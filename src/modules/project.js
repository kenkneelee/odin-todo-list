import Task from "./task";

export default class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    addTask(projectObject, title, due, description) {
        this.taskList.push(new Task(projectObject, title, due, description));
    }

    removeTask () {

    }
}
