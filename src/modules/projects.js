import Project from "./project";

export default function projects() {
    let projectArray = [];
   
    projectArray.push(new Project("Project"), new Project ("Another"), new Project("And another"), new Project("This one too"))
    // projectArray = ["Project", "Another", "And another", "This one too"];
    return projectArray;
}