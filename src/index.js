import './styles/style.css';
import {displayHeader, displaySidebar, displayAside, displayFooter, displayMain} from "./modules/displayUI";
displayHeader("Ken");
displaySidebar(["Project", "Another", "And another"]);
displayAside();
displayFooter();
displayMain(["a", "b", "c"]);

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