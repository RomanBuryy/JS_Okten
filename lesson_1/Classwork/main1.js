//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
let d = Math.floor(Math.random() * 10);
let e = Math.floor(Math.random() * 10);
let f = Math.floor(Math.random() * 10);
let j = Math.floor(Math.random() * 10);
let i = Math.floor(Math.random() * 10);
let k = Math.floor(Math.random() * 10);
let l = Math.floor(Math.random() * 10);

let arr = [a, b, c, d, e, f, j, i, k, l];
console.log(arr);
let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
console.log(`Result = ${result}`);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    bookName: "Kolobok",
    pages: 456,
    bookType: "novel",
}
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    bookName: "Якась назва",
    pages: 23,
    bookType: "novel",
    authors: ["Braun", "King", "Chapek"],
}
console.log(book2);

// 4. Створити маcив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [{
    bookName: "Рукавичка",
    pages: 45,
    bookType: "novel",
    authors: ["Braun", "King", "Chapek"]
},
    {
        bookName: "Kolobok",
        pages: 234,
        bookType: "novel",
        authors: ["Braun", "King", "Chapek"]
    },
    {
        bookName: "Джерело",
        pages: 500,
        bookType: "novel",
        authors: ["Braun", "King", "Chapek"]
    },
    {
        bookName: "Воно",
        pages: 1000,
        bookType: "novel",
        authors: ["Braun", "King", "Chapek"],
    }
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let area = height * width;
console.log(area); //230

// Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
const pi = 3.14;
let v = (pi * (dC / 2) ** 2) * heightC;
console.log(v); //125.6

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let q = n ** 2 + m ** 2;
console.log(q); //25

