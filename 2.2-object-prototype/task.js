function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal === undefined) {
        return null;
    }
    // let sound = animal.sound; можно ведь не создавать доп. переменную а сразу вернуть значение свойства объекта?
    return animal.sound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += +marks[i];
    }

    return Math.round(sum / marks.length);
}

function checkBirthday(birthday) {
    let now = Number(new Date());
    birthday = Number(new Date(birthday));
    let diff = now - birthday;
    let age = diff / 31556952000;
    return age > 18;
    // код для задачи №3 писать здесь
    // return verdict
}