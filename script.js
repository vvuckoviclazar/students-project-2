"use strict";

var a = function (x) {
  return x * x;
};

console.log(a(5));

let names = ["John", "Ben", "Ana", "David"];

function sayHello(name) {
  console.log("Hello " + name);
}

function sayHelloToMany(names, sayHelloToOne) {
  for (let i = 0; i < names.length; i++) {
    sayHelloToOne(names[i]);
  }
}

sayHelloToMany(names, function (name) {
  console.log("Hello " + name);
});

var a = (x) => {
  return x * x;
};

a();

function Student() {
  this.courses = [];

  this.addCourses = function (courses) {
    courses.forEach((value, index) => {
      this.courses[index] = value;
    });
  };
}

var s = new Student();
s.addCourses(["Mat", "Geo", "History"]);

console.log(s.courses);
