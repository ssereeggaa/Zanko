console.log("Лабораторна робота #11: Оператори циклів");

// Завдання 1: Ромб з цифр
console.log("Завдання 1: Ромб з цифр");

let n = parseInt(prompt("Введіть розмір ромба:"));
if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + String(i).repeat(i * 2 - 1));
    }
    for (let i = n - 1; i >= 1; i--) {
        console.log(" ".repeat(n - i) + String(i).repeat(i * 2 - 1));
    }
} else {
    console.log("Некоректне значення!");
}

// Завдання 2: Числовий ряд та сума ряду S = 1 + 1/2 + ... + 1/n
console.log("Завдання 2: Числовий ряд та сума");

let m = parseInt(prompt("Введіть значення n для ряду S:"));
if (!isNaN(m) && m > 0) {
    let sum = 0;
    let series = "";
    for (let i = 1; i <= m; i++) {
        sum += 1 / i;
        series += (i === 1 ? "1" : " + 1/" + i);
    }
    console.log("Числовий ряд: " + series);
    console.log("Сума ряду: " + sum.toFixed(5));
} else {
    console.log("Некоректне значення!");
}

// Завдання 3: Вгадування числа
console.log("Завдання 3: Вгадування числа");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
while (true) {
    guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
    if (isNaN(guess)) {
        alert("Введіть коректне число!");
        continue;
    }
    if (guess < randomNumber) {
        alert("Більше!");
    } else if (guess > randomNumber) {
        alert("Менше!");
    } else {
        alert("Вітаємо! Ви вгадали число " + randomNumber);
        break;
    }
}

