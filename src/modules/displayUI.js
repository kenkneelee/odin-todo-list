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


{/* <footer>
<p>
    Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/">The Odin Project.</a>
</p>
</footer> */}

/* <body>
    <div id="aside">
        <h2>This Week</h2>
        <ul id="calendar">
            <li class="calendarDay">Monday</li>
            <li class="calendarDay">Tuesday</li>
            <li class="calendarDay">Wednesday</li>
            <li class="calendarDay">Thursday</li>
            <li class="calendarDay">Friday</li>
            <li class="calendarDay">Saturday</li>
            <li class="calendarDay">Sunday</li>
        </ul>
    </div>

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
