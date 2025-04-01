// Завдання 1: Обчислення суми від 1 до n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log('Завдання 1: Сума чисел від 1 до ' + n + ': ' + sum);
}
console.log('Завдання 1: Пояснення: Ця функція обчислює суму всіх чисел від 1 до n.');
calculateSum(5);

// Завдання 2: Функціональний вираз для множення
const multiply = function(a, b) {
    return a * b;
};
console.log('Завдання 2: Множення 3 на 4: ' + multiply(3, 4));
console.log('Завдання 2: Пояснення: Ця функція множить два числа і повертає результат.');

// Завдання 3: Стрілкова функція для піднесення до степеня
const power = (a, b) => Math.pow(a, b);
console.log('Завдання 3: 3 в степені 4: ' + power(3, 4));
console.log('Завдання 3: Пояснення: Це стрілкова функція, яка підносить число a до степеня b.');

// Завдання 4: Рекурсивна функція для гармонійного ряду
function harmonicSeries(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}
console.log('Завдання 4: Гармонійний ряд для n=5: ' + harmonicSeries(5));
console.log('Завдання 4: Пояснення: Рекурсивна функція для обчислення гармонійного ряду до n-го члена.');

// Завдання 5: Функція-замикання для створення множника
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log('Завдання 5: Подвоїти 5: ' + double(5));
console.log('Завдання 5: Пояснення: Це функція-замикання, яка повертає множник для числа.');

// Завдання 6: Функція, що приймає число та функцію для зміни значення
function applyFunction(value, func) {
    return func(value);
}
console.log('Завдання 6: Подвоїти 6: ' + applyFunction(6, double));
console.log('Завдання 6: Піднести 6 до квадрату: ' + applyFunction(6, (x) => x * x));
console.log('Завдання 6: Пояснення: Ця функція застосовує передану функцію до числа.');

// Завдання 7: Функція для обробки множини Set
function processSet(set, callback) {
    set.forEach(callback);
}
const mySet = new Set([1, 2, 3, 4]);
console.log('Завдання 7: Обробка елементів множини:');
processSet(mySet, (value) => console.log('Обробка елемента: ' + value));
console.log('Завдання 7: Пояснення: Ця функція застосовує колбек до кожного елемента множини Set.');


