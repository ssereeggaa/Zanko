console.log("Лабораторна робота #11: Оператори циклів");

console.log("Завдання 1: Ромб з цифр");
let n = parseInt(prompt("Введіть розмір ромба (n):"));
for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i) + i.toString().repeat(2 * i - 1);
    console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
    let str = " ".repeat(n - i) + i.toString().repeat(2 * i - 1);
    console.log(str);
}

console.log("Завдання 2: Числовий ряд та сума");
n = parseInt(prompt("Введіть число n для ряду:"));
let sum = 0;
let series = "";
for (let i = 1; i <= n; i++) {
    series += i + " ";
    sum += i;
}
console.log("Числовий ряд: " + series);
console.log("Сума ряду: " + sum);

console.log("Завдання 3: Вгадування числа");
let target = Math.floor(Math.random() * 100) + 1;
let guess;
while (guess !== target) {
    guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
    if (guess < target) {
        alert("Більше!");
    } else if (guess > target) {
        alert("Менше!");
    }
}
alert("Вітаємо! Ви вгадали число " + target);

