import Task from "./task";

export default class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    addTask(title, due, description) {
        this.taskList.push(new Task(title, due, description));
    }
}
