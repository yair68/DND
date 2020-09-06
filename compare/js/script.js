"use strict";

const num1 = prompt('Enter number:', ''),
      num2 = prompt('Enter number:', '');

document.write(num1);

if (+num1 === +num2) {
    document.write(' = ');
} else if (+num1 > +num2) {
    document.write(' > ');
} else if (+num1 < +num2) {
    document.write(' < ');
} else {
    document.write(' ? ');
}

document.write(num2);