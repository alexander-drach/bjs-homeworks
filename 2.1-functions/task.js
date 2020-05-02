'use strict';

// task - 1
function getSolutions( a, b, c ) {
    let D = b ** 2 - (4 * a * c);
    if (D < 0 ) {
        return {
             D: D, 
             roots: [] 
            };
    }else if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            D: D, 
            roots: [x1] 
           };
    }else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);

        return {
            D: D, 
            roots: [x1, x2] 
           };        
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// showSolutionsMessage( 1, 2, 3 );
// showSolutionsMessage( 7, 20, -3 );
// showSolutionsMessage( 2, 4, 2 );

// task - 2
function getAverageScore(data) {
    let average = 0;
    let count = 0;

    for(let item in data) {
        average += getAverageMark(data[item]);
        data[item] = getAverageMark(data[item]);
        count++;
    }

    if(count !== 0) {
        average = average / count;
    }

    data.average = average; 
    return data;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

// task - 3
function getPersonData(secretData) {
    return { 
        firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) 
    };
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return `Родриго`;
    } else if (secret === 1) {
        return `Эмильо`;
    }
}