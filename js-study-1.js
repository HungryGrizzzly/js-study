// task1
// Ебать, эт че?)
// Можно же через цикл фор или рекурсию сделать)
function sumTo(n) {
    let sum = Math.abs(n) * (Math.abs(n) + 1) / 2;
    return n < 0 ? sum * -1 : n > 0 ? sum : 1;
}

// task2
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// task3
// Ну нее, ты чет себе прям жизнь усложняешь
// Почитай про встроенные функции js: split, join и т.д.
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) result += str[i];
    return result;
}

// task4
function mul(x, y) {
    if (y === undefined) {
        return function (y) {
            return x + y;
        }
    }

    return x + y;
}

// task5
// тоже самое, почитай про функции для работы с массивом.
function isPalindrome(str) {
    // знаки препинания и пробелы не удаляю, т.к. функция проверяет только слова, а не предложения
    let string = str.toLowerCase();

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}

// task6
// В принципе норм, но не читаемо.
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let str2Arr = str2.toLowerCase().split('').sort();
    return str1.toLowerCase().split('').sort().every((value, index) => value === str2Arr[index]);
}

// task7
function fibonacci(n) {
    let prev = 1;
    let next = 1;
    for (let i = 3; i <= n; i++) {
        let temp = prev + next;
        prev = next;
        next = temp;
    }
    return next;
}

/* 
    Тебе нужно почитать про кодстайл, изучить методы работы с массивами, стрингами и т.д.
    
*/
