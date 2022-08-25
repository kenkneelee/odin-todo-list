import Project from "./project";

export default function projects() {
    let projectArray = [];
   
    projectArray.addProject = function(name) {
        projectArray.push(new Project(name));
    }

    projectArray.push(new Project("Code"), new Project ("Exercise"), new Project("Chores"), new Project("Games"));
    projectArray[0].addTask("Finish to-do list project","As soon as possible", "Finish module organization, connect calendar, the rest of the dang project.");
    projectArray[1].addTask("Go on a walk", "Everyday", "Stop sitting all day and go for a walk.");
    projectArray[2].addTask("Sleep", "All day", "All day every day.");
    projectArray[3].addTask("Prepare for raid", "Next Friday", "Prepare gearsets, restock consumables, confirm roster.");

    return projectArray;
}