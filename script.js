"use strict";

function calculateRectArea(a, b) {
  return a * b;
}

var result = calculateRectArea(5, 10);

console.log(result);

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Ben");

var calculateRectArea = new Function("a", "b", "return a*b");
var result = calculateRectArea(5, 10);
console.log(result);

function sum() {
  let returnValue = 0;

  for (let i = 0; i < arguments.length; i++) {
    returnValue += arguments[i];
  }

  return returnValue;
}

let sumResult = sum(10, 15, 15);

console.log(sumResult);
