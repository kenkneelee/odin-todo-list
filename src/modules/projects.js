import Project from "./project";

let projectArray = [];

projectArray.addProject = function (name) {
    projectArray.push(new Project(name));
};

projectArray.getAllTasks = function () {
    let allTasks = [];
    // exclude "all tasks" project
    for (let i=1; i<projectArray.length; i++) {
        allTasks = allTasks.concat(projectArray[i].taskList);
    };

    // projectArray.forEach((project) => {
    //     allTasks = allTasks.concat(project.taskList);
    // });
    return allTasks;
};

projectArray.updateAll = function () {
    projectArray[0].taskList = [];
    projectArray[0].taskList = projectArray.getAllTasks();
};

projectArray.updateProject = function (position, newObject) {
    projectArray[position] = newObject;
};

export default projectArray;
// export default function projects() {
//     let projectArray = [];

//     projectArray.addProject = function (name) {
//         projectArray.push(new Project(name));
//     };

//     projectArray.getAllTasks = function () {
//         let allTasks = [];
//         projectArray.forEach((project) => {
//             allTasks = allTasks.concat(project.taskList);
//         });
//         return allTasks;
//     };

//     projectArray.updateAll = function() {
//         projectArray[0].taskList = [];
//         projectArray[0].taskList = projectArray.getAllTasks();
//     }

//     projectArray.updateProject = function (position, newObject) {
//         projectArray[position] = newObject;
//         console.log(projectArray[position]);

//     }

//     // sample projects and tasks
//     // projectArray.push(
//     //     new Project("All Projects"),
//     //     new Project("Code"),
//     //     new Project("Exercise"),
//     //     new Project("Chores"),
//     //     new Project("Games")
//     // );
//     // projectArray[1].addTask(
//     //     projectArray[1],
//     //     "Finish to-do list project",
//     //     "As soon as possible",
//     //     "Finish module organization, connect calendar, the rest of the dang project."
//     // );
//     // projectArray[2].addTask(
//     //     projectArray[2],
//     //     "Go on a walk",
//     //     "Everyday",
//     //     "Stop sitting all day and go for a walk."
//     // );
//     // projectArray[3].addTask(projectArray[3],"Sleep", "All day", "All day every day.");
//     // projectArray[4].addTask(
//     //     projectArray[4],
//     //     "Prepare for raid",
//     //     "Next Friday",
//     //     "Prepare gearsets, restock consumables, confirm roster."
//     // );

//     projectArray[0].taskList = projectArray.getAllTasks();

//     return projectArray;
// }
