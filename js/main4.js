//Создать функцию, которая убирает из строчки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
// Выходную строку и символы для удаления задает пользователь.

function removeChars(str, charsToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charToRemove = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (str[i] === charsToRemove[j]) {
                charToRemove = true;
                break;
            }
        }
        if (!charToRemove) {
            result += str[i];
        }
    }
    return result;
}

let result = removeChars("hello world", ['l', 'd']);
console.log(result);