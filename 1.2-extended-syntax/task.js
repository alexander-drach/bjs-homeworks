'use strict';

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    let D = b ** 2 - (4 * a * c);
    if (D < 0 ) {
        return x;
    }else if (D === 0) {
        let x1 = -b / (2 * a);
        x[0] = x1;
    }else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);

        x[0] = x1;
        x[1] = x2;        
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark = 0;
    if (marks.length === 0) {
        return 0;
    }else if (marks.length > 5) {
        console.log('количество оценое больше 5');
        marks = marks.slice(0, 5);
    }

    let sum = 0;
    
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){ 
    if ( (new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    }else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}