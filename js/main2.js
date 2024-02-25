//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

function getData() {
    let x = parseFloat(prompt("Введите первое число"));
    let y = parseFloat(prompt("Введите второе число"));
    let operationSymbol = prompt("Выберите арифметическую операцию: +, -, *, /, %, ^");

    operation(x, y, operationSymbol);
}

function operation(x, y, znak) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = "Неподдерживаемая операция";
    }

    console.log(`Результат ${x} ${znak} ${y} = ${result}`);
}

getData();

