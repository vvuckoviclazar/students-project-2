"use strict";

var myButton = document.getElementById("my-button");

console.log("Statement 1");

var timeout1 = setTimeout(function () {
  console.log("Statement 2");
}, 2000);

var timeout2 = setTimeout(
  function (timeout) {
    clearTimeout(timeout1);
    console.log("Timeout 1 is cleared...");
  },
  1000,
  timeout1
);

console.log("Statement 3");
