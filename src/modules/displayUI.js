import notif_Bell from "../images/notif_Bell.svg";
import { daysOfWeek } from "./week.js";
import projects from "./projects";
import Task from "./task";

export default function displayUI() {
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
            displayMain("All Projects", projects.getAllTasks());
        });
        projectList.appendChild(projectListLink);
        // list of projects and links to them
        const projectListList = document.createElement("ul");
        projects.forEach((project) => {
            // create DOM element to list each project
            let thisProject = document.createElement("li");
            thisProject.textContent = project.title;
            // display this project's tasks on click
            thisProject.addEventListener("click", function () {
                // console.log(project.taskList);
                document.body.removeChild(
                    document.getElementById("main-content")
                );
                displayMain(project.title, project.taskList);
            });
            projectListList.appendChild(thisProject);
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

    const displayMain = function (projectName, cardArray) {
        const mainContent = document.createElement("div");
        mainContent.id = "main-content";

        const mainHeader = document.createElement("div");
        mainHeader.id = "main-header";

        // temp, replace with project name
        const mainHeaderText = document.createElement("h2");
        mainHeaderText.textContent = projectName;
        mainHeader.appendChild(mainHeaderText); 

        // new task button
        const newTaskButton = document.createElement("button");
        newTaskButton.textContent = "New Task";

        if (projectName !== "All Projects") {
            newTaskButton.addEventListener("click", () => {
                console.log("New task for project: " + projectName);
                console.log("Current tasklist for project:");
                console.log(cardArray);

                let newTaskName = prompt("New task name?");
                let newTaskDue = prompt("New task due date?");
                let newTaskDesc = prompt("New task description?");

                // replace with project method
                newTaskName && newTaskDue && newTaskDesc
                    ? cardArray.push(
                          new Task(newTaskName, newTaskDue, newTaskDesc)
                      )
                    : console.log("Please complete all fields!");

                // cardArray.push(new Task(prompt("Title?"), prompt("Due?"), prompt("Description")))
                console.log(cardArray);
                //refreshMain
                document.body.removeChild(
                    document.getElementById("main-content")
                );
                displayMain(projectName, cardArray);
            });
            mainHeader.appendChild(newTaskButton);
        }

        // card stuff
        const cards = document.createElement("div");
        cards.id = "cards";

        cardArray.forEach((cardObject) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardHeader = document.createElement("h3");
            cardHeader.classList.add("cardHeader");

            const cardSpan = document.createElement("span");
            cardSpan.textContent = cardObject.title;
            const cardCheckbox = document.createElement("input");
            cardCheckbox.type = "checkbox";
            // cardCheckbox.checked = "checked";
            cardSpan.prepend(cardCheckbox);

            const cardButtons = document.createElement("div");
            const archiveButton = document.createElement("button");
            archiveButton.textContent = "Archive";

            // delete button stuff
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                console.log(cardArray);
                console.log("This card has index " + cardArray.indexOf(cardObject));
                cardArray.splice(cardArray.indexOf(cardObject), 1);
                document.body.removeChild(document.getElementById("main-content"));
                displayMain(projectName, cardArray);
            })

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

    displayHeader("Ken");
    displaySidebar(projects());
    displayAside();
    displayFooter();
    displayMain("All Projects", projects().getAllTasks());
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
