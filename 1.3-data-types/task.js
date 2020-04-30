'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {       
    // код для задачи №1 писать здесь

    if ( isNaN(percent) ) {
        return `Параметр "percent" содержит неправильное значение ${percent}`;
    }
    if ( isNaN(contribution) ) {
        return `Параметр "contribution" содержит неправильное значение ${contribution}`;
    }
    if ( isNaN(amount) ) {
        return `Параметр "amount" содержит неправильное значение ${amount}`;
    }
    if ( isNaN(date) ) {
        return `Параметр "percent" содержит неправильное значение ${date}`;
    }

    percent = parseFloat(percent / 100);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    date = new Date(date);

    let P = percent / 12;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;
    let S = (amount - contribution);

    let totalAmount = parseFloat(((S*(P + P / (((1 + P) ** months) - 1 ) )) * months).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}