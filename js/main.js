//Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 'apple', 3, 'samsung', 5, 'xiaomi', 7, true, false, 0, 15, 1, undefined, null];

function getNumbers() {
    return arr.filter(function (item) {
        return typeof item === 'number';
    });
}

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(` Сумма чисел: ${sum}`);
    return sum;
}

function arithmeticMean(numbers) {
    return sum(numbers) / numbers.length;
}

let numbers = getNumbers();
console.log(numbers);

let sumResult = sum(numbers);
console.log(sumResult);

let result = arithmeticMean(numbers);
console.log(result);