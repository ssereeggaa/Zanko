// Клас Product (назва, ціна, категорія)
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// Клас Order (список товарів, загальна сума, метод для додавання товару)
function Order() {
    this.items = [];
    this.total = 0;
}

Order.prototype.addItem = function(product) {
    this.items.push(product);
    this.total += product.price;
};

// Клас Customer (ім'я, список замовлень, метод перегляду замовлень)
function Customer(name) {
    this.name = name;
    this.orders = [];
}

Customer.prototype.addOrder = function(order) {
    this.orders.push(order);
};

Customer.prototype.viewOrders = function() {
    console.log(`Замовлення ${this.name}:`);
    this.orders.forEach((order, index) => {
        console.log(`Замовлення ${index + 1}:`);
        order.items.forEach(item => {
            console.log(`- ${item.name} (${item.category}), ціна: ${item.price}`);
        });
        console.log(`Загальна сума: ${order.total}`);
    });
};

// Тестування
const product1 = new Product("Телефон", 500, "Електроніка");
const product2 = new Product("Книга", 25, "Книги");
const product3 = new Product("Футболка", 30, "Одяг");

const order1 = new Order();
order1.addItem(product1);
order1.addItem(product2);

const order2 = new Order();
order2.addItem(product3);

const customer = new Customer("Іван");
customer.addOrder(order1);
customer.addOrder(order2);

customer.viewOrders();