"use strict";

var heading = document.getElementById("heading");

function changeColor(elem) {
  elem.style.color = elem.style.color == "red" ? "blue" : "red";
}

let interval1 = setInterval(changeColor, 500, heading);

setTimeout(
  function (intervalId) {
    clearInterval(intervalId);
  },
  5000,
  interval1
);
