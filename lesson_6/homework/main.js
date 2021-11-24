/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

console.log("hello world".length);
console.log("lorem ipsum".length);
console.log("javascript is cool".length);


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log("hello world".toUpperCase());
console.log("lorem ipsum".toUpperCase());
console.log("javascript is cool".toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("hello world".toLowerCase());
console.log("lorem ipsum".toLowerCase());
console.log("javascript is cool".toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strTrim = ' dirty string   ';
console.log(strTrim.trim());


/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

let str = 'Каждый охотник желает знать';

let splitString = (str) => str.split(' ');

console.log(splitString(str));


/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

let strSub = (str, len) => str.substr(0, len);
console.log(strSub(str, 7));


/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
console.log(insert_dash("HTML JavaScript PHP"));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upperChar = (str) => str.split(' ');


console.log(upperChar("dirty string"));



//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.













