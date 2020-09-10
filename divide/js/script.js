"use strict";

const num1 = prompt('Enter number:', ''),
      num2 = prompt('Enter number:', '');


document.write(num1 + " / " + num2 + " = " + Math.floor(num1 / num2));

if(num1 % num2 === 0){
    document.write(" (без остатка)");
} else {
    document.write(" (остаток " + (num1 % num2) + ")");
}