'use strict';

// task - 1
class Weapon  {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durability = obj.durability;
        this._durability = obj.durability;
        this.range = obj.range;
    }

    takeDamage(damage) {
        if ( !( (this.durability - damage) < 0) ) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }

    getDamage() {
        if(this.durability === 0) {
            return 0;
        } else if (this.durability >= this._durability) {
            return this.attack;
        } else {
            return this.attack / 2
        }

    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        }

        return true;
    }
}

// создание объектов:

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Меч',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});


// примеры из ДЗ:

/*
const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});
  
sword.takeDamage(5);
console.log(sword.durability); // 5
  
sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

*/

// task - 2

class Arm extends Weapon{
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}
class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}
class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}
class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}
class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}
class LongBow extends Bow {
    constructor(name, attack, range) {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Axe extends Sword {
    constructor(name, attack, durability) {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}
class StormStaff extends Staff {
    constructor(name, attack, range) {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

// task - 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.data = {}
    }
    
    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        this.data[subject] = subject;
        if ( (typeof grade !== 'number') || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
        } else {
            if (subject in this.data) {
                this.data.subject = [];
            }
            this.data.subject.push(grade);
        }
        
        return this.data.subject.length;                       
    }

    getAverageBySubject(subject) {

    }

    getTotalAverage() {

    }
}



const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.data)
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0


console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1