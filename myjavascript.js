"use strict";
const defaultDiv = 1;
let y = +prompt("Введите делитель(число)", defaultDiv);
function calculate(y = 1) {
  let result = y;
  return function(x) {
    result = Math.round(x / result);
    return result ;
  };
};


const divide = calculate(y);
console.log(divide(7));
console.log(divide(45));





