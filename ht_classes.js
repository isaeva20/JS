//2
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.role = "user";
    }

    login(){
        return `Пользователь ${this.name} вошел в систему`
    }

    logout(){
        return `Пользователь ${this.name} вышел из системы`
    }
}

class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        role = 'admin';
    }
    deleteUser(user){
        return `Пользователь ${user.name} был удален администратором ${this.name}`
    }
}

const user1 = new User('UserName', 'pochta@mail.ru');
const admin1 = new Admin('AdminName', 'pochta@yandex.ru');
// console.log(user1.login())
console.log(admin1.deleteUser(user1.name))

// 2. 
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart{
    constructor(){
        this.bascket = [];
    }
    addProduct(product, quantity){
        for (let i = 0; i < quantity; i++) {
            this.bascket.push(product);
        }
    }

    removeProduct(product){
        this.bascket = this.bascket.filter((p) => p !== product);
    }

    getTotalPrice(){
        return this.bascket.reduce((total, item) => total + item.price, 0);
    }

    checkout(){
    this.bascket.forEach((item) => {
      console.log(`${item.name}: ${item.price} руб.`);
    });
    console.log(`Общая сумма: ${this.getTotalPrice()} руб.`);
    this.bascket = [];
    }
}

const apple = new Product('Яблоко', 200);
const strawberries = new Product('Клубника', 400);

const card = new ShoppingCart();
card.addProduct(apple, 2);
card.addProduct(strawberries, 5);
console.log(card.checkout());


//3

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library{
    constructor(){
        this.library = [];
    }

    addBook(book){
        this.library.push(book);
    }

    findBookByAuthor(author){
        return this.library.filter((a) => a === author);
    }

    listAllBooks(){
        this.library.forEach((item) => {
            console.log(`${item.title}, ${item.author}, ${item.pages} страниц`);
          });
    }

}

class LibraryUser extends Library{
    constructor(library){
        super(library);
        this.home = [];
    }

    borrowBook(book){
        if (this.home.length <= 3){
            for (let i = 0; i < this.library.length; i++){
                if (this.library[i].title === book){
                    this.home.push(this.library[i]);
                    this.library.splice(this.library[i]);
                }
            }
            console.log(`Посетитель взял книгу ${book} из библиотеки`);
        }
        else{
            Error("Вы не можете взять больше 3 книг")
        }
    }


    returnBook(book){
        for (let i = 0; i < this.library.length; i++){
            if (this.library[i].title === book){
                this.library.push(this.library[i]);
                this.home.splice(this.library[i]);
            }
        }
        console.log(`Посетитель вернул книгу ${book} из библиотеки`);
    }

}

const book1 = new Book('Собор Парижской Богоматери', 'Виктор Гюго', 2460);
const book2 = new Book('Граф Монте-Кристо', 'Александр Дюма', 2679);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

// library.listAllBooks();

const user = new LibraryUser();
user.returnBook('Граф Монте-Кристо');



//4

class Customer{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Order{
    constructor(listProducts, totalPrice, customer){
        this.listProducts = [];
        this.totalPrice = 0;
        this.customer = customer;
    }

    addProduct(product,  quantity){
        for (let i = 0; i < quantity; i++) {
            this.listProducts.push(product);
        }
        this.totalPrice += product.price * quantity;
    }

    calculateTotal(){
        return this.totalPrice;
    }

    printOrder(){
        console.log(`Покупатель: ${this.customer}, ${this.customer}`);
        this.listProducts.forEach((element) => {
            console.log(`Список товаров: ${element.name}, ${element.price}`)
        }); 
        console.log(`Oбщая стоимость покупок: ${this.calculateTotal()}`);
    }
}


const customer1 = new Customer('Alex', 'email1.ru');
const customer2 = new Customer('Rita', 'email2.ru');

const product1 = new Product('banana', 290);
const product2 = new Product('cheese', 3200);
const product3 = new Product('chicken', 105);

const order1 = new Order(customer1);
order1.addProduct(product1, 3);
order1.addProduct(product3, 4);

order1.printOrder();

//5
class Pet{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} ест`);
    }
    makeSound(){
        throw new Error(`${this.constructor.name}: can not create instance of abstract class`)
    }
    sleep(){
        console.log(`${this.name} спит`)
    }
}

class Dog extends Pet{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log('Собака лает');
    }

}

class Cat extends Pet{
    constructor(name){
        super(name);
    }

    makeSound(){
        console.log('Кошка мяукает')
    }
}


dog = new Dog('Джесси');
cat = new Cat('Кузя');

dog.makeSound();
cat.makeSound();
dog.sleep();
cat.sleep();


//6

class Expression{
    constructor(x, y, operation){
        this.x = x;
        this.y = y;
        this.operation = operation;
    }

    evaluate(){
        switch(this.operation){
            case '+':
                const add = this.x + this.y;
                return add;
            case '-':
                const sub = this.x - this.y;
                return sub;
            case '*':
                const mult = this.x * this.y;
                return mult;
            case '/':
                const div = this.x / this.y;
                return div;
        }
    }

    toString(){
        switch(this.operation){
            case '+':
                return String(`${this.x} ${this.operation} ${this.y} = ${this.evaluate()}`)
            case '-':
                return String(`${this.x} ${this.operation} ${this.y} = ${this.evaluate()}`)
            case '*':
                return String(`${this.x} ${this.operation} ${this.y} = ${this.evaluate()}`)
            case '/':
                if (this.y === 0){
                    return ('Деление на 0');
                }
                return String(`${this.x} ${this.operation} ${this.y} = ${this.evaluate()}`)
        }
    }
}
class Addition extends Expression{
    constructor(x, y){
        super(x, y);
        this.operation = '+';
    }
}

class Subtraction extends Expression{
    constructor(x, y){
        super(x, y);
        this.operation = '-';
    }
}

class Multiplication extends Expression{
    constructor(x, y){
        super(x, y);
        this.operation = '*';
    }
}

class Division extends Expression{
    constructor(x, y){
        super(x, y);
        this.operation = '/';
    }
}

add1 = new Addition(3, 6);
sub1 = new Subtraction(6, 4);
mult1 = new Multiplication(7, 9);
div1 = new Division(16, 4);
div2 = new Division(3, 0);

console.log(add1.evaluate());
console.log(sub1.evaluate());
console.log(mult1.evaluate());
console.log(div1.evaluate());
console.log(div2.evaluate());

console.log(add1.toString());
console.log(sub1.toString());
console.log(mult1.toString());
console.log(div1.toString());
console.log(div2.toString());