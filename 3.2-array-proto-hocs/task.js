function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    //sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays( arr1, arr2 ) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every( i => arr1[i] === arr2[i]);
}

/*

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

*/

function memorize(fn, limit) {
    let memory = [];
    
    return function (...args) { 
        let resultOfFind = memory.find( item => compareArrays(item.args, args) );

        if( resultOfFind ) {
            return resultOfFind.result;
        }else {
            memory.push( {args: args, result: fn(...args)} );
        }

        if(memory.length > limit) {
            memory.shift();
        }

        return fn(...args);
    };
}

const testArr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction, timerName) {
    console.time(timerName);
    for (let i = 0; i <= 100; i++) {
        testArr.forEach(el => testFunction(...el));
    }
    console.timeEnd(timerName)
}

testCase(sum, 'timer_1')
testCase(memorize(sum, 5), 'timer_2')
