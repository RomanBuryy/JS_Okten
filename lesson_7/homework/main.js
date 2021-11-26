// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, "Roman", "Qwerty", "email@gmail.com", "+380671111111");
let user2 = new User(2, "Natalia", "Asdfrg", "email1@gmail.com", "+38067122111");
let user3 = new User(3, "Ira", "Qwerwerty", "email@gmail.com", "+38067111123111");
let user4 = new User(4, "Roman", "Qweryrtuty", "email@gmail.com", "+38067111154611");
let user5 = new User(5, "Andriy", "tyutyuQwerty", "email@gmail.com", "+380671145611");
let user6 = new User(6, "Oksana", "Qwerrtyty", "email@gmail.com", "+3806716781111");
let user7 = new User(7, "Yura", "Qerywerty", "email@gmail.com", "+3806711167911");
let user8 = new User(8, "Oleg", "Qrtyuwerty", "email@gmail.com", "+3806711112341");
let user9 = new User(9, "Nazar", "Qweuiprty", "email@gmail.com", "+3806711123411");
let user10 = new User(10, "Denys", "werwerQwerty", "email@gmail.com", "+3806711354111");
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersFilteredByEvenId = users.filter(value => value.id % 2 === 0);
console.log(usersFilteredByEvenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSortById = users.sort((a, b) => b.id - a.id);
console.log(usersSortById);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1, "Roman", "Qwerty", "email@gmail.com", "+380671111111", [1,2,3,4,7,8,9,0]);
let client2 = new Client(2, "Natalia", "Asdfrg", "email1@gmail.com", "+38067122111", [1,2,3,4,5,6,7,8,9,0]);
let client3 = new Client(3, "Ira", "Qwerwerty", "email@gmail.com", "+38067111123111", [4,5,6,7,8,9,0]);
let client4 = new Client(4, "Roman", "Qweryrtuty", "email@gmail.com", "+38067111154611", [1,2,3,4,5,6,7,8,9,0]);
let client5 = new Client(5, "Andriy", "tyutyuQwerty", "email@gmail.com", "+380671145611", [1,2,3]);
let client6 = new Client(7, "Yura", "Qerywerty", "email@gmail.com", "+3806711167911", [1]);
let client7 = new Client(8, "Oleg", "Qrtyuwerty", "email@gmail.com", "+3806711112341", [1,2,3,4,5,6,7,]);
let client8 = new Client(9, "Nazar", "Qweuiprty", "email@gmail.com", "+3806711123411", [1,2,3,4,5,6,7,8]);
let client9 = new Client(6, "Oksana", "Qwerrtyty", "email@gmail.com", "+3806716781111", [1,2,3,4,5,6,7,8,9]);
let client10 = new Client(10, "Denys", "werwerQwerty", "email@gmail.com", "+3806711354111", [1,21,2,0]);

let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

