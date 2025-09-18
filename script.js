"use strict";

var myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  alert("Hello from modal window.");

  console.log("Hello from statement after alert() method.");
});

console.log("Hello from some code after addEventListener() method.");
