'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {       
    // код для задачи №1 писать здесь

    if ( percent.isNaN ) {
        return `Параметр "percent" содержит неправильное значение ${percent}`;
    }
    if ( contribution.isNaN ) {
        return `Параметр "contribution" содержит неправильное значение ${contribution}`;
    }
    if ( amount.isNaN ) {
        return `Параметр "amount" содержит неправильное значение ${amount}`;
    }
    if ( date.isNaN ) {
        return `Параметр "percent" содержит неправильное значение ${date}`;
    }
    
    percent /= 100; 
    let P = percent / 12;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;
    let S = (amount - contribution);

    let totalAmount = parseFloat(((S*(P + P / (((1 + P) ** months) - 1 ) )) * months).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if ( !name ) {
        name = 'Аноним';
    }

    return `Привет, мир! Меня зовут ${name}`;
}