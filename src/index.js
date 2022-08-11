import './styles/style.css';
import notifBell from "./images/notif_Bell.svg"

console.log("hello");

function component() {
    const element = document.createElement('div');
  
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = notifBell;
 
   element.appendChild(myIcon);
 
    return element;
  }
 
  document.body.appendChild(component());