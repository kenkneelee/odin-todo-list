import Project from "./project";

export default function projects() {
    let projectArray = [];
   
    projectArray.addProject = function(name) {
        projectArray.push(new Project(name));
    }

    projectArray.push(new Project("Code"), new Project ("Exercise"), new Project("Chores"), new Project("Games"));
    projectArray[0].addTask("test task","now", "description");

    return projectArray;
}