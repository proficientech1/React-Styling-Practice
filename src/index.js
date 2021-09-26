//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const currentHour = d.getHours();

// console.log(currentHour);

if (0 <= currentHour <= 12) {
  greetings = "Good Morning!";
  customStyle = { color: "red" };
}

if (18 > currentHour > 12) {
  greetings = "Good Afternoon!";
  customStyle = { color: "green" };
}

if (18 > currentHour > 24) {
  greetings = "Good Evening!";
  customStyle = { color: "blue" };
}

ReactDOM.render(
  <h1 style={customStyle}>{greetings}</h1>,
  document.getElementById("root")
);
