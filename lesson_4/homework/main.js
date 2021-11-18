// -створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        return "a or b not a number";
    }
}

console.log(square(23, 2));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r) {

    if (typeof r === "number") {
        return Math.PI * r ** 2;
    }
}

console.log(circleSquare(20));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(r, h) {
    return 2 * Math.PI * r * (h + r);
}

console.log(cylinderSquare(10, 5));

//- створити функцію яка приймає масив та виводить кожен його елемент
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(str) {
    return `<p>${str}</p>`;
}

document.write(createP("qwerty2"));

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createUl("asdfg");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createLi(text, liNum) {
    document.write(`<ul>`);
    for (let i = 0; i < liNum; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createLi("tag li", 4);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListForArray(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

createListForArray([123123, 234, "qwerty", true]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [{id: 1, name: "roman", age: 37}, {id: 2, name: "natalia", age: 38}];

function printInDocument(objects) {
    for (const obj of objects) {
        document.write('<div>');
        document.write(`<p>${obj.id}</p>`);
        document.write(`<p>${obj.name}</p>`);
        document.write(`<p>${obj.age}</p>`);
        document.write('</div>');
    }
}

printInDocument(users);
