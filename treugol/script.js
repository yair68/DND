"use strict";

// let incorrect = Math.floor(Math.random() * 3);

// let cochka = Math.floor(Math.random() * 9) + 2;

let level = +prompt("сколько можете пройти в день шагов?", "");

for (let i = 1; i <= level; i++) {
    let cochka = Math.floor(Math.random() * 9) + 2;
    let incorrect = Math.floor(Math.random() * cochka) + 1;
    const kakayaCochka = +prompt(`Перед тобой ${cochka} кочек, какую выберешь?`, "");
    if (!kakayaCochka || kakayaCochka == incorrect || kakayaCochka > cochka || kakayaCochka < 1) {
        const playAgain = confirm("Вы провалились! Сыграть ещё раз?");
        if(playAgain) {
            document.body.innerHTML = "";
            level = +prompt("сколько можете пройти в день шагов?", "");
            i = 0;
            continue;
        } else {
            break;
        }
    } else {
        
        if (i == level) {
            document.write(`Вы прошли все болото!<br>`);
        } else {
            document.write(`Вы успешно сделали шаг ${i}, осталось ${level-i} шагов!<br>`);
        }
    }
}
