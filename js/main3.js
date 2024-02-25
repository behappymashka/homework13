//Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.
function getMainArrayLength() {
    let rows = parseInt(prompt("Введите длину основного массива:"));
    return rows;
}

function fillArray() {
    let rows = parseInt(prompt("Введите количество строк:"));
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        let length = parseInt(prompt(`Введите длину строки ${i + 1}:`));
        for (let j = 0; j < length; j++) {
            let value = prompt(`Введите значение для элемента (${i}, ${j}):`);
            row.push(value);
        }
        array.push(row);
    }

    console.log(array);
}

let mainArrayLength = getMainArrayLength();
console.log(`Длина основного массива: ${mainArrayLength}`);


fillArray();