"use strict";

var myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  //time-intensive operation start

  var data = [];

  for (let i = 0; i < 50000; i++) {
    let random = Math.random().toString().split("0");
    data = data.concat(random);
  }

  console.log(data.length);

  //time-intenscive operation end

  console.log("Hello from statement after time-intensive operation.");
});
