import notif_Bell from "../images/notif_Bell.svg";
import { daysOfWeek } from "./week.js";
import projects from "./projects";
import Project from "./project";
import Task from "./task";

import format from "date-fns/format";
import addDays from "date-fns/addDays";
import parseISO from "date-fns/parseISO";
import formatDistance from "date-fns/formatDistance";
import isEqual from "date-fns/isEqual";

export default function displayUI() {
    // display header, will take loggin in user object as input
    const displayHeader = function (name, icon) {
        // header container
        const header = document.createElement("header");
        // >app logo and title (left)
        const logo = document.createElement("h1");
        logo.textContent = "To-Do";
        // >right side flex container
        const notifications = document.createElement("div");
        notifications.id = "notifications";
        // >> notification bell section
        const notifBell = document.createElement("img");
        notifBell.id = "notifBell";
        notifBell.src = notif_Bell;
        // >> user profile section
        const userProfile = document.createElement("div");
        userProfile.id = "userProfile";
        // >>> welcome msg
        const userMsg = document.createElement("div");
        userMsg.textContent = "Welcome, " + name;
        // >>> icon image
        const userIcon = document.createElement("img");
        userIcon.id = "userIcon";
        userIcon.src = "https://avatars.githubusercontent.com/u/89105909?v=4";

        userProfile.append(userMsg, userIcon);
        notifications.append(notifBell, userProfile);
        // DOM functions to append to page
        header.append(logo, notifications);
        document.body.appendChild(header);
    };

    // display sidebar, accepts array of projects as input
    const displaySidebar = function (projects) {
        // sidebar container
        const sidebar = document.createElement("div");
        sidebar.id = "sidebar";
        // >sidebar links
        const sidebarLinks = document.createElement("ul");
        sidebarLinks.id = "sidebar-links";
        // link for projects with due date: today
        const today = document.createElement("li");
        const todayLink = document.createElement("button");
        todayLink.textContent = "Today";
        todayLink.addEventListener("click", () => {
            // console.log(projects.getAllTasks());

            // today stuff
            console.log(projects.getAllTasks());
            const todayTasks = projects.getAllTasks().filter((task) => {
                return isEqual(
                    task.due,
                    parseISO(format(new Date(), "yyyy-MM-dd"))
                );
            });
            console.log(todayTasks);

            document.body.removeChild(document.getElementById("main-content"));
            let todayProject = new Project("Today");
            todayProject.taskList = todayTasks;
            console.log(todayProject);
            displayMain(todayProject);
            // displayMain(todayProject);
            // projects.updateAll();
            // console.log(projects[0]);
        });

        today.appendChild(todayLink);
        // project list container
        const projectList = document.createElement("li");
        // "all projects" header link
        const projectListLink = document.createElement("button");
        projectListLink.textContent = "Projects";
        projectListLink.addEventListener("click", () => {
            document.body.removeChild(document.getElementById("main-content"));
            projects.updateAll();
            displayMain(projects[0]);
        });
        projectList.appendChild(projectListLink);
        // list of projects and links to them
        const projectListList = document.createElement("ul");
        projects.forEach((project) => {
            if (project.title !== "All Projects") {
                // create DOM element to list each project
                let thisProject = document.createElement("li");
                thisProject.textContent = project.title;
                // display this project's tasks on click
                thisProject.addEventListener("click", function () {
                    document.body.removeChild(
                        document.getElementById("main-content")
                    );
                    displayMain(project);
                });
                projectListList.appendChild(thisProject);
            }
        });
        // new project button
        const newProject = document.createElement("li");
        newProject.textContent = "New Project";
        newProject.id = "newProjectButton";
        newProject.addEventListener("click", function () {
            let newProjectName = prompt("Project name?");
            newProjectName
                ? projects.addProject(newProjectName)
                : console.log("Invalid project name!");
            // refreshSidebar
            document.body.removeChild(document.getElementById("sidebar"));
            displaySidebar(projects);
        });
        projectListList.appendChild(newProject);

        // completed projects button
        const completed = document.createElement("li");
        const completedLink = document.createElement("button");
        completedLink.textContent = "Completed";
        completed.appendChild(completedLink);

        projectList.appendChild(projectListList);
        sidebarLinks.append(today, projectList, completed);

        // settings and logout buttons
        const sidebarBottom = document.createElement("ul");
        sidebarBottom.id = "sidebar-bottom";
        const settings = document.createElement("li");
        settings.textContent = "Settings";
        const logOut = document.createElement("li");
        logOut.textContent = "Log Out";
        sidebarBottom.append(settings, logOut);

        sidebar.append(sidebarLinks, sidebarBottom);
        document.body.appendChild(sidebar);
    };

    // display days of the week on right sidebar
    const displayAside = function () {
        document.getElementById("aside")
            ? document.body.removeChild(document.getElementById("aside"))
            : console.log("no existing aside to remove");
        const aside = document.createElement("div");
        aside.id = "aside";
        const asideHeader = document.createElement("h2");
        asideHeader.textContent = "This Week";
        const calendar = document.createElement("ul");
        calendar.id = "calendar";

        const days = daysOfWeek();
        days.forEach((a) => {
            const day = document.createElement("li");
            day.classList.add("calendarDay");
            const dayLabel = document.createElement("span");
            dayLabel.textContent = format(a, "E d");
            dayLabel.style.textDecoration = "underline";

            // console.log(projects.getAllTasks().filter(task => {
            //     return (task.due) == a;
            // }));

            day.append(dayLabel);

            const matches = projects.getAllTasks().filter((task) => {
                return isEqual(task.due, a);
            });

            if (matches.length !== 0) {
                matches.forEach((match) => {
                    const matchText = document.createElement("p");
                    matchText.textContent = match.title;
                    day.append(matchText);
                });
                // for (let i = 0; i < matches.length; i++) {
                //     const matchText = document.createElement("p");
                //     matchText.textContent = matches[i].title;
                //     day.append(matchText);
                // }
            }
            calendar.appendChild(day);
        });
        aside.append(asideHeader, calendar);
        document.body.appendChild(aside);
    };

    // display footer with credits
    const displayFooter = function () {
        const footer = document.createElement("footer");
        const footerText = document.createElement("p");
        footerText.innerHTML = `Made by
        <a href="https://github.com/kenkneelee">Kenny Lee</a>
        for
        <a href="https://www.theodinproject.com/">The Odin Project.</a>`;
        footer.appendChild(footerText);

        document.body.appendChild(footer);
    };

    // display main content section, take project object as input
    const displayMain = function (project) {
        displayModal(project);
        // section container
        const mainContent = document.createElement("div");
        mainContent.id = "main-content";
        // header section
        const mainHeader = document.createElement("div");
        mainHeader.id = "main-header";
        const mainHeaderText = document.createElement("h2");
        mainHeaderText.textContent = project.title;
        mainHeader.appendChild(mainHeaderText);
        // new task button
        if (project.title !== "All Projects" && project.title !== "Today" && project.title !=="Completed") {
            const newTaskButton = document.createElement("button");
            newTaskButton.textContent = "New Task";
            newTaskButton.addEventListener("click", () => {
                document.getElementsByClassName("modal")[0].style.display =
                    "flex";
            });
            // newTaskButton.addEventListener("click", () => {
            //     let newTaskName = prompt("New task name?");
            //     let newTaskDue = prompt("New task due date?");
            //     let newTaskDesc = prompt("New task description?");
            //     newTaskName && newTaskDue && newTaskDesc
            //         ? project.addTask(
            //               project,
            //               newTaskName,
            //               newTaskDue,
            //               newTaskDesc
            //           )
            //         : console.log("Please complete all fields!");
            //     console.log(project.taskList);
            //     //refreshMain
            //     document.body.removeChild(
            //         document.getElementById("main-content")
            //     );
            //     displayMain(project);
            // });
            mainHeader.appendChild(newTaskButton);
        }

        // card stuff
        const cards = document.createElement("div");
        cards.id = "cards";

        project.taskList.forEach((cardObject) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardHeader = document.createElement("h3");
            cardHeader.classList.add("cardHeader");

            const cardSpan = document.createElement("span");
            cardSpan.textContent = cardObject.title;

            // checkbox stuff
            // const cardCheckbox = document.createElement("input");
            // cardCheckbox.type = "checkbox";
            // // cardCheckbox.checked = "checked";
            // cardSpan.prepend(cardCheckbox);

            // complete and delete buttons
            const cardButtons = document.createElement("div");
            // complete button stuff
            const archiveButton = document.createElement("button");
            archiveButton.textContent = "Complete";
            archiveButton.addEventListener("click", () => {
                console.log(cardObject.projectObject);
            });

            // delete button stuff
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                console.log(project);
                cardObject.projectObject.taskList.splice(
                    cardObject.projectObject.taskList.indexOf(cardObject),
                    1
                );
                projects.updateAll();
                console.log(project);

                const position = projects
                    .map((e) => e.title)
                    .indexOf(project.title);
                console.log(projects[position]);
                projects.updateProject(position, project);
                console.log(projects);

                // refreshAside
                displayAside();

                // refreshMain
                // repeated today stuff, refactor later
                if (project.title == "Today") {
                    const todayTasks = projects.getAllTasks().filter((task) => {
                        return isEqual(
                            task.due,
                            parseISO(format(new Date(), "yyyy-MM-dd"))
                        );
                    });
                    document.body.removeChild(
                        document.getElementById("main-content")
                    );
                    let todayProject = new Project("Today");
                    todayProject.taskList = todayTasks;
                    console.log(todayProject);
                    displayMain(todayProject);
                } else {
                    document.body.removeChild(
                        document.getElementById("main-content")
                    );
                    displayMain(project);
                }
            });

            cardButtons.append(archiveButton, deleteButton);
            cardHeader.append(cardSpan, cardButtons);

            const dueDate = document.createElement("p");
            dueDate.textContent = format(cardObject.due, "MMMM dd");
            const description = document.createElement("p");
            description.textContent = cardObject.description;

            card.append(cardHeader, dueDate, description);
            cards.append(card);
        });
        mainContent.append(mainHeader, cards);
        document.body.appendChild(mainContent);
    };

    const displayModal = function (project) {
        document.getElementById("modal")
            ? document.body.removeChild(document.getElementById("modal"))
            : console.log("no modal existing");

        const modal = document.createElement("div");
        modal.id = "modal";
        modal.classList.add("modal");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const closeModal = document.createElement("span");
        closeModal.classList.add("close");
        closeModal.textContent = "x";
        const modalHead = document.createElement("h2");
        modalHead.textContent = "New task for: " + project.title;
        const modalForm = document.createElement("form");

        const taskNameContainer = document.createElement("div");
        const taskNameLabel = document.createElement("label");
        taskNameLabel.htmlFor = "taskName";
        taskNameLabel.textContent = "Task name*:";
        const taskNameField = document.createElement("input");
        taskNameField.type = "text";
        taskNameField.name = "taskName";
        taskNameField.id = "taskName";
        taskNameContainer.append(taskNameLabel, taskNameField);

        const taskDateContainer = document.createElement("div");
        const taskDateLabel = document.createElement("label");
        taskDateLabel.htmlFor = "taskDue";
        taskDateLabel.textContent = "Task due date*:";
        const taskDateField = document.createElement("input");
        taskDateField.type = "date";
        taskDateField.min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];//new Date().toISOString().split("T")[0];
        // date currently changing because of timezone offset, fix this
        console.log("task date field minimum date: " + taskDateField.min);
        taskDateField.value = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
        taskDateField.name = "taskDue";
        taskDateField.id = "taskDue";
        taskDateContainer.append(taskDateLabel, taskDateField);

        const taskDescContainer = document.createElement("div");
        const taskDescLabel = document.createElement("label");
        taskDescLabel.htmlFor = "taskDesc";
        taskDescLabel.textContent = "Task description";
        const taskDescField = document.createElement("textarea");
        taskDescField.name = "taskDesc";
        taskDescField.id = "taskDesc";
        taskDescContainer.append(taskDescLabel, taskDescField);

        const submitTask = document.createElement("button");
        submitTask.type = "button";
        submitTask.textContent = "Submit new task";
        submitTask.classList.add("submit");
        submitTask.addEventListener("click", () => {
            if (
                taskNameField.value.length !== 0 &&
                taskDateField.value.length !== 0
            ) {
                console.log(taskNameField.value);
                console.log(taskDateField.value);
                console.log(taskDescField.value);
                project.addTask(
                    project,
                    taskNameField.value,
                    parseISO(taskDateField.value),
                    taskDescField.value
                );
                displayModal(project);
                document.body.removeChild(
                    document.getElementById("main-content")
                );
                displayMain(project);
                displayAside();
            } else {
                document.getElementById("incomplete")
                    ? modalForm.removeChild(
                          document.getElementById("incomplete")
                      )
                    : console.log("no");
                const incomplete = document.createElement("div");
                incomplete.textContent = "Please fill in all required fields";
                incomplete.style.color = "red";
                incomplete.style.alignSelf = "center";
                incomplete.id = "incomplete";
                modalForm.append(incomplete);
            }
        });

        modalForm.append(
            taskNameContainer,
            taskDateContainer,
            taskDescContainer,
            submitTask
        );

        modalContent.append(closeModal, modalHead, modalForm);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.getElementById("incomplete")
                    ? modalForm.removeChild(
                          document.getElementById("incomplete")
                      )
                    : console.log("no");
            }
        };
    };

    projects.push(
        new Project("All Projects"),
        new Project("Code"),
        new Project("Exercise"),
        new Project("Chores"),
        new Project("Games")
    );

    projects[1].addTask(
        projects[1],
        "Finish to-do list project",
        parseISO(format(new Date(), "yyyy-MM-dd")),
        "Finish module organization, connect calendar, the rest of the dang project."
    );
    projects[2].addTask(
        projects[2],
        "Go on a walk",
        parseISO(format(addDays(new Date(), 2), "yyyy-MM-dd")),
        "Stop sitting all day and go for a walk."
    );
    projects[3].addTask(
        projects[3],
        "Sleep",
        parseISO(format(addDays(new Date(), 4), "yyyy-MM-dd")),
        "All day every day."
    );
    projects[4].addTask(
        projects[4],
        "Prepare for raid",
        parseISO(format(addDays(new Date(), 5), "yyyy-MM-dd")),
        "Prepare gearsets, restock consumables, confirm roster."
    );

    projects.updateAll();

    displayHeader("Ken");
    displaySidebar(projects);
    displayAside();
    displayFooter();
    displayMain(projects[0]);
}

/* <body>
    <div id="main-content">
        <div id="main-header">
            <h2>All Projects</h2>
            <button>New Task</button>
        </div>
        <div id="cards">

            <div class="card">
                <h3 class="cardHeader">
                    <span>
                        <input type="checkbox" checked="checked" />
                        Test card header
                    </span>
                    <div>
                        <button>Archive</button>
                        <button>Delete</button>
                    </div>
                </h3>
                <p>Due: August 20, 2022</p>
                <p>
                    Test card description goes here. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Dolore suscipit laudantium
                    nulla vero dolores magnam saepe, neque perferendis fugit
                    doloribus quod vel necessitatibus impedit soluta voluptates
                    reprehenderit sint molestias. Quasi!
                </p>
            </div>

        </div>
    </div>

    <footer>
        <p>
            Made by
            <a href="https://github.com/kenkneelee">Kenny Lee</a>
            for
            <a href="https://www.theodinproject.com/">The Odin Project.</a>
        </p>
    </footer>
</body> */
