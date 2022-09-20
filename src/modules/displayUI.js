import notif_Bell from "../images/notif_Bell.svg";
import { daysOfWeek } from "./week.js";
import projects from "./projects";
import Project from "./project";
import Task from "./task";

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
            day.textContent = a;
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
        if (project.title !== "All Projects") {
            const newTaskButton = document.createElement("button");
            newTaskButton.textContent = "New Task";
            newTaskButton.addEventListener("click", () => {
                let newTaskName = prompt("New task name?");
                let newTaskDue = prompt("New task due date?");
                let newTaskDesc = prompt("New task description?");
                newTaskName && newTaskDue && newTaskDesc
                    ? project.addTask(
                          project,
                          newTaskName,
                          newTaskDue,
                          newTaskDesc
                      )
                    : console.log("Please complete all fields!");
                console.log(project.taskList);
                //refreshMain
                document.body.removeChild(
                    document.getElementById("main-content")
                );
                displayMain(project);
            });
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

                // refreshMain
                document.body.removeChild(
                    document.getElementById("main-content")
                );
                displayMain(project);
            });

            cardButtons.append(archiveButton, deleteButton);
            cardHeader.append(cardSpan, cardButtons);

            const dueDate = document.createElement("p");
            dueDate.textContent = cardObject.due;
            const description = document.createElement("p");
            description.textContent = cardObject.description;

            card.append(cardHeader, dueDate, description);
            cards.append(card);
        });
        mainContent.append(mainHeader, cards);
        document.body.appendChild(mainContent);
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
        "As soon as possible",
        "Finish module organization, connect calendar, the rest of the dang project."
    );
    projects[2].addTask(
        projects[2],
        "Go on a walk",
        "Everyday",
        "Stop sitting all day and go for a walk."
    );
    projects[3].addTask(projects[3], "Sleep", "All day", "All day every day.");
    projects[4].addTask(
        projects[4],
        "Prepare for raid",
        "Next Friday",
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
