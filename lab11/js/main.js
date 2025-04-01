// Завдання 1: Ромб з цифр
console.log("Завдання 1: Ромб з цифр");
let n = parseInt(prompt("Введіть розмір ромба: "));
if (!isNaN(n) && n > 0) {
    // Верхня частина ромба
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));
    }

    // Нижня частина ромба
    for (let i = n - 1; i >= 1; i--) {
        console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));
    }
} else {
    console.log("Некоректне значення.");
}

// Завдання 2: Числовий ряд та сума
console.log("Завдання 2: Числовий ряд та сума");
let m = parseInt(prompt("Введіть значення n для ряду S=1+1/2+...+1/n: "));
let sum = 0;
let row = "";
for (let i = 1; i <= m; i++) {
    row += (1 / i).toFixed(2) + " ";
    sum += 1 / i;
}
console.log("Числовий ряд: " + row.trim());
console.log("Сума ряду: " + sum.toFixed(5));

// Завдання 3: Вгадування числа
console.log("Завдання 3: Вгадування числа");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = 0;
let attempts = 0;

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Вгадай число від 1 до 100:"));
    attempts++;
    if (userGuess < randomNumber) {
        alert("Більше");
    } else if (userGuess > randomNumber) {
        alert("Менше");
    } else {
        alert("Вітаємо! Ви вгадали число за " + attempts + " спроб.");
    }
}



