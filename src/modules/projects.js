import Project from "./project";

export default function projects() {
    let projectArray = [];
   
    projectArray.push(new Project("Code"), new Project ("Exercise"), new Project("Chores"), new Project("Games"));
    projectArray[0].addTask("test task","now", "descriptiion");
    // projectArray = ["Project", "Another", "And another", "This one too"];

    return projectArray;
}