// Завдання 1: Обчислення суми від 1 до n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`Сума чисел від 1 до ${n}: ${sum}`);
}

// Завдання 2: Функціональний вираз для множення
const multiply = function(a, b) {
    return a * b;
};
console.log(`Множення 3 на 4: ${multiply(3, 4)}`);

// Завдання 3: Стрілкова функція для піднесення до степеня
const power = (a, b) => Math.pow(a, b);
console.log(`3 в степені 4: ${power(3, 4)}`);

// Завдання 4: Рекурсивна функція для гармонійного ряду
function harmonicSeries(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}
console.log(`Гармонійний ряд для n=5: ${harmonicSeries(5)}`);

// Завдання 5: Функція-замикання для створення множника
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(`Подвоїти 5: ${double(5)}`);

// Завдання 6: Функція, що приймає число та функцію для зміни значення
function applyFunction(value, func) {
    return func(value);
}
console.log(`Подвоїти 6: ${applyFunction(6, double)}`);
console.log(`Піднести 6 до квадрату: ${applyFunction(6, (x) => x * x)}`);

// Завдання 7: Функція для обробки множини Set
function processSet(set, callback) {
    set.forEach(callback);
}
const mySet = new Set([1, 2, 3, 4]);
processSet(mySet, (value) => console.log(`Обробка елемента: ${value}`));
