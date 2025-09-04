"use strict";

(function () {
  var number = 5;
  console.log(number);
})();

var number = 10;

console.log(number);

function subtractSquares(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) - square(b);
}

console.log(subtractSquares(6, 3));
