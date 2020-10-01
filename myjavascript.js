"use strict";
function calculate(y = 1) {
  let result = y;
  return function(x) {
    result = Math.round(x / result);
    return result ;
  };
};


const divide = calculate(2);
console.log(divide(7));
console.log(divide(45));





