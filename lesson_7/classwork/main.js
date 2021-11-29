/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Cars(model, manufacturer, year, maxSpeed, engineCapacity) {

    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };


    this.info = function () {
        console.log("Модель - " + this.model);
        console.log("Виробник - " + this.manufacturer);
        console.log("Рік - " + this.year);
        console.log("Максимальна швидкість - " + this.maxSpeed);
        console.log("Об'єм двигуна - " + this.engineCapacity);

    };

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed + newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver
    };
}

let car = new Cars(1, 2, 3, 4, 5);

car.info();
car.increaseMaxSpeed(400);
car.changeYear(2014);
car.addDriver({"driverName": "Roman", "driverAge": 37});
car.info();
console.log(car);


console.log("---------------------------------------------------------------");

/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class newCars {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.year = year;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log("Модель - " + this.model);
        console.log("Виробник - " + this.manufacturer);
        console.log("Рік - " + this.year);
        console.log("Максимальна швидкість - " + this.maxSpeed);
        console.log("Об'єм двигуна - " + this.engineCapacity);
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}


let newCar = new newCars(1, 2, 3, 400, 5);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(600);
newCar.info();
newCar.changeYear(2021);
newCar.info();
newCar.addDriver({"driverName": "Roman", "driverAge": 37});
console.log(newCar);


/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let girl1 = new Cinderella("Kathryn", 23, 30);
let girl2 = new Cinderella("Fern", 23, 31);
let girl3 = new Cinderella("Rita", 23, 31);
let girl4 = new Cinderella("Roxanne", 23, 34);
let girl5 = new Cinderella("Alannah", 23, 40);
let girl6 = new Cinderella("Constance", 23, 27);
let girl7 = new Cinderella("Lee", 23, 45);
let girl8 = new Cinderella("Tanya", 23, 44);
let girl9 = new Cinderella("Melanie", 23, 40);
let girl10 = new Cinderella("Mollie", 23, 46);

let prince = new Prince("Roman", 37, 45);
let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];


let princessFound = girls.find((girl) => girl.footSize === prince.shoeSize);

if (princessFound) {
    console.log(`We found princes - his name is ${princessFound.name}. She is ${princessFound.age} years old`);
} else {
    console.log("Sorry, but we didn't find the princess");
}
































