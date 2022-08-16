import "./styles/style.css";
import {
    displayHeader,
    displaySidebar,
    displayAside,
    displayFooter,
    displayMain,
} from "./modules/displayUI";
displayHeader("Ken");
displaySidebar(["Project", "Another", "And another"]);
displayAside();
displayFooter();
displayMain([
    {
        title: "Do the thing",
        due: "September 1, 2022",
        description: "This is a sample project. Does it work?",
    },
    {
        title: "Do the other thing",
        due: "September 9, 2022",
        description: "This is another sample project. It do work.",
    },
    {
        title: "Do the last thing",
        due: "September 23, 2022",
        description: "lorem ipsum blablablabdlask jsdaklhjdkahjd sdklajhdkja",
    },
]);

console.log("hello");

// function component() {
//     const element = document.createElement('div');

//    // Add the image to our existing div.
//    const myIcon = new Image();
//    myIcon.src = notifBell;

//    element.appendChild(myIcon);

//     return element;
//   }

//   document.body.appendChild(component());
