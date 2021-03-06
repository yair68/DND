"use strict";


const myPerson = createRandomPerson('Yaron', false);
const monster = createRandomPerson(null, true);
displayPerson(myPerson);
displayPerson(monster);



if (walk()) {
    meetMonster(myPerson, monster);
} else {
    alert("Игра окончена!");
}
// meetMonster(myPerson, monster);


// -------------------------   FUNCTIONS   ---------------------------------

function fighting(attacker, defender) {
    do {
        attack(attacker, defender);
        if (defender.alive) {
            attack(defender, attacker);
        }
        // if (!attacker.isRobot && attacker.alive && !defender.alive) {
        //     meetMonster(attacker, defender)
        // }
    } while (attacker.alive && defender.alive);    
}

function createRandomPerson(name, isRobot) {
    const randomPerson = {
        attack: Math.floor(Math.random() * 10) + 1,
        defense: Math.floor(Math.random() * 10) + 1,
        HP: Math.floor(Math.random() * 10) + 1,
        alive: true,
        isRobot: isRobot
    };
    if (!name) {
        const adj = [
            "Очень злой", "Злой", "Безбашанный", "Расстроенный", 
            "Плачущий", "Добрый", "Грустный", "Серый", "Огромный", "Охреневший"
        ];
        const names = [
            "Вася", "Гопник", "Волк", "Сопляк", "Монстр", "Гоблин", "Гном", "Воин", "Великан", "Бизнесмен"
        ];
        name = adj[randomPerson.attack - 1] + " " + names[Math.floor(Math.random() * names.length)];
    }
    randomPerson.name = name;
    return randomPerson;
}

function displayPerson(person) {
    document.write(`${person.name} (HP: ${person.HP}, Аттака: ${person.attack}, Защита: ${person.defense})<br>`);
}

function askQ(question, allowedValues) {
    let answer = null;
    do {
        answer = prompt(question, "");
    } while (allowedValues.indexOf(answer) < 0);
    return answer;
}

function attack(attacker, defender) {
    const posNames = {
        1: "Голову",
        2: "Тело"
    };
    const attackStrength = Math.floor(Math.random() * (attacker.attack + 1));
    
    let defendStrength = Math.floor(Math.random() * (defender.defense + 1));
    let attackPosition = 0;
    let defendPosition = 0;

    if (attacker.isRobot) {
        attackPosition = Math.floor(Math.random() * 2) + 1;
        defendPosition = askQ(`${defender.name} что вы будете защищать? 1 = голову, 2 = тело`, ['1', '2']);
    } else {
        defendPosition = Math.floor(Math.random() * 2) + 1;
        attackPosition = askQ(`${attacker.name} что вы будете атаковать? 1 = голову, 2 = тело`, ['1', '2']);
    }
    if (attackStrength <= 0) {
        document.write(`${attacker.name} на столько сильно размахнулся, что уронил меч!`)

    } else if (defendStrength <= 0) {
        document.write(`${defender.name} оборонялся, но уронил щит и получил удар в ${posNames[attackPosition]} со всей силой! <br>`)
    } else {
        document.write(
            `${attacker.name} атакует ${posNames[attackPosition]} ${defender.name} с силой: ${attackStrength}<br>` +
            `${defender.name} ставит защиту ${defendStrength} на ${posNames[defendPosition]}  <br>`
        );
        if (attackPosition != defendPosition) {
            defendStrength = 0;
            document.write(`${defender.name} облажался и получил удар в ${posNames[attackPosition]} <br>`);
        }
    }



    if (attackStrength > defendStrength) {
        const HPDecrease = attackStrength - defendStrength;
        defender.HP = defender.HP - HPDecrease;   
        document.write(`${defender.name} ваше HP уменьшилось на ${HPDecrease} <br>`); 
        if (defender.HP <= 0) {
            document.write(`${defender.name} умер от очень сильного удара ${attacker.name} <br>`);
            defender.alive = false;
        }
    }

    document.write("<br>");
}

function meetMonster(person, monster) {
    const meetMonster = confirm(`Вы встретили монстра, бежите или атакуете?`);
    if (!meetMonster) {
        const agressive = Math.floor(Math.random() * 2) + 1;
        if (agressive == 2) {
            document.write(`${person.name} пытался убежать, но ${monster.name} его догнал <br> <br>`);
            fighting(monster, person);
        } else {
            document.write("вы убежали <br>");
        }
    } else {
        fighting(person, monster);
    }
}

function walk() {
    const whatYouSee = ["Пещера", "Магазин"];
    const generatePlace = Math.floor(Math.random() * whatYouSee.length);
    const walkingTo = askQ(
        `Вы идёте, вы видите: ${whatYouSee[generatePlace]}, 1 = зайти в ${whatYouSee[generatePlace]}, 2 = идти дальше`, ["1", "2"]
        );
    if (walkingTo == 1) {
       return walkTo(`${whatYouSee[generatePlace]}`);
    } else {
        alert(`вы прошли ${whatYouSee[generatePlace]}`);
    }
}

function walkTo(nameOfPlace) {
    if (nameOfPlace == "Пещера") {
        const DWelcome = askQ("вы зашли в пещеру, вы видите впереди силуэт. Подойдёте? 1 = да, 2 = нет", ["1", "2"]);
        if (DWelcome == 1) {
            return true;
        } else {
            return false;
        }
    } else {
        const MWelcome = askQ("Вы зашли в магазин, в продаже меч за 300 монет, берёте? 1 = да, 2 = нет", ["1", "2"]);
    }
}