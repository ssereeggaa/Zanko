console.log("Лабораторна робота #10: Особливості ініціалізації змінних Javascript");

console.log("Завдання 1: Аналіз hoisting");

var a = 10;
console.log(a);  // 10 (var піднімається, але не ініціалізується)

let b = 20;
console.log(b);  // 20 (let не піднімається, помилка до ініціалізації)

const c = 30;
console.log(c);  // 30 (const не піднімається, помилка до ініціалізації)

console.log("Завдання 2: Робота з областю видимості (scope)");

function testScope() {
    if (true) {
        var x = 5;  // Доступна поза блоком
        let y = 10; // Доступна тільки в межах блоку if
        const z = 15; // Доступна тільки в межах блоку if
        console.log(y);  // 10 (змінна доступна в межах блоку if)
    }
    console.log(x); // 5 (var доступна поза блоком)
    // console.log(y); // ReferenceError: y is not defined
    // console.log(z); // ReferenceError: z is not defined
}

testScope();

console.log("Завдання 3: Робота з типами даних");

console.log(5 + "5");  // "55" (число стає рядком через конкатенацію)
console.log("5" - 2);  // 3 (рядок перетворюється на число)
console.log(true + false);  // 1 (true = 1, false = 0)
console.log(null + 1);  // 1 (null = 0)
console.log(undefined + 1);  // NaN (undefined не можна привести до числа)
console.log(0 == false);  // true (автоматичне приведення типів)
console.log(0 === false); // false (строге порівняння)

console.log("Завдання 4: const та об'єкти");

const person = {
    name: "John",
    age: 30
};

person.age = 31; 
person.city = "New York"; 
console.log(person); // { name: "John", age: 31, city: "New York" }

try {
    person = { name: "Alice", age: 25 }; // TypeError: Assignment to constant variable.
} catch (error) {
    console.log(error.message); // TypeError: Assignment to constant variable.
}

console.log("Завдання 5: Визначення типу даних");

function checkType(value) {
    return typeof value;
}

console.log(checkType(10));  // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));  // "object"
console.log(checkType(undefined));  // "undefined"
console.log(checkType(true));  // "boolean"
console.log(checkType({}));  // "object"




