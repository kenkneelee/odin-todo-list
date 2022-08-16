import notif_Bell from "../images/notif_Bell.svg";

export function displayHeader(name, icon) {
    // header container
    const header = document.createElement("header");

    // >app logo and title (left)
    const logo = document.createElement("h1");
    logo.textContent = "To-Do";

    // >right side container
    const notifications = document.createElement("div");
    notifications.id = "notifications";

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
}

export function displaySidebar(projects) {
    // sidebar container
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    // >sidebar links
    const sidebarLinks = document.createElement("ul");
    sidebarLinks.id = "sidebar-links";

    const today = document.createElement("li");
    today.textContent = "Today";

    const projectList = document.createElement("li");
    projectList.textContent = "Projects";

    const projectListList = document.createElement("ul");

    projects.forEach((project) => {
        let thisProject = document.createElement("li");
        thisProject.textContent = project;
        projectListList.appendChild(thisProject);
    });

    const completed = document.createElement("li");
    completed.textContent = "Completed";


    projectList.appendChild(projectListList);
    sidebarLinks.append(today, projectList, completed);

    const sidebarBottom = document.createElement("ul");
    sidebarBottom.id = "sidebar-bottom";
    const settings = document.createElement("li");
    settings.textContent = "Settings";
    const logOut = document.createElement("li");
    logOut.textContent = "Log Out";
    sidebarBottom.append(settings, logOut);

    sidebar.append(sidebarLinks, sidebarBottom);
    document.body.appendChild(sidebar);
}

export function displayAside() {
    const aside = document.createElement("div");
    aside.id = "aside";
    const asideHeader = document.createElement("h2");
    asideHeader.textContent = "This Week";
    const calendar = document.createElement("ul");
    calendar.id="calendar";
    // temp code for days, learn to use date-fns
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    days.forEach((a) => {
        const day = document.createElement("li");
        day.classList.add("calendarDay");
        day.textContent = a;
        calendar.appendChild(day);
    });
    aside.append(asideHeader,calendar);
    document.body.appendChild(aside);
}

export function displayFooter () {
    const footer = document.createElement("footer");
    const footerText = document.createElement("p");
    footerText.innerHTML = `Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/">The Odin Project.</a>`
    footer.appendChild(footerText);

    document.body.appendChild(footer);
}

export function displayMain(cardArray) {
    const mainContent = document.createElement("div");
    mainContent.id= "main-content";

    const mainHeader = document.createElement("div");
    mainHeader.id= "main-header";

    // temp, replace with project name
    const mainHeaderText = document.createElement("h2");
    mainHeaderText.textContent="All Projects";

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";

    mainHeader.append(mainHeaderText, newTaskButton)

    // card stuff
    const cards = document.createElement("div");
    cards.id="cards";

    cardArray.forEach(cardObject => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardHeader = document.createElement("h3");
        cardHeader.classList.add("cardHeader");

        const cardSpan = document.createElement("span");
        cardSpan.textContent = "Test card header";
        const cardCheckbox = document.createElement("input");
        cardCheckbox.type = "checkbox";
        cardCheckbox.checked="checked";
        cardSpan.prepend(cardCheckbox);

        const cardButtons = document.createElement("div");
        const archiveButton = document.createElement("button");
        archiveButton.textContent="Archive";
        const deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";
        cardButtons.append(archiveButton,deleteButton);

        cardHeader.append(cardSpan, cardButtons);

        const dueDate = document.createElement("p");
        dueDate.textContent = "August 20, 2022";
        const description = document.createElement("p");
        description.textContent="Lorem ipsum";

        card.append(cardHeader, dueDate, description);
        cards.append(card);
    })



    mainContent.append (mainHeader, cards);
    document.body.appendChild(mainContent);
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