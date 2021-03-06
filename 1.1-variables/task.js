 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
	// реализуйте здесь задание №1
	let algebra = a;
	let geography = g;
	let physics = p;

	let average = (algebra + geography + physics) / arguments.length;

	/*
	мне кажется правильной было бы сделать так:
	после return сразу вставить вычисляемое выражение
	без создания доп. переменных
	(a + g + p) / arguments.length
	*/
    
	return average// ваш ответ;
}

function sayHello(userName) {
	
	// реализуйте здесь задание №2
	let greet = `Привет, мир! Меня зовут ${userName}`
    
	return greet// ваш ответ;
}

function calculateFormula() {

	let x = 2;
	let y = 22;
	let z = 0;
	let result = x * y + 5 * z + x - 1;
    
	// реализуйте здесь задание №3
    
    return result// ваш ответ;
}
