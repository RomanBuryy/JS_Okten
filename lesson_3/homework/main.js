/*
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let a = [1, 2, 3, 4, 5, 1, 2, "a", "b", false, true, "a", "b", "c", "d", "e"];

/*for (let i=0; i<a.length; i++){
    console.log(a[i]);
}*/
for (let i of a) {
    console.log(i);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i;
    console.log(arr[i]);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>Some text</div>")
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let b = 0;
while (b < 20) {
    document.write("<h1>While loop</h1>");
    b++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let c = 0;
while (c < 20) {
    document.write(`<h1>While loop ${c}</h1>`);
    c++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = [10, 11, 12, 13, 14, 15];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr3 = ["a", "b", "c", "d"];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, 2, 3, 4, 5, 1, 2, "a", "b", false, true, "a", "b", "c", "d", "e"];

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr5 = [2341, 3452, 3234, 434567, 556, 1567, 2567, "agfhj", "bkl", false, true, "a", false, "c", "d", true];

for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === "boolean") {
        console.log(arr5[i]);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === "string") {
        console.log(arr5[i]);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === "number") {
        console.log(arr5[i]);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr6 = [];
arr6[0] = 1;
arr6[1] = "asd";
arr6[2] = "qwerty";
arr6[3] = 1234;
arr6[4] = true;
arr6[5] = false;
arr6[6] = NaN;
arr6[7] = "qweqew";
arr6[8] = 15656;
arr6[9] = 5678;

for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<span>${i}</span>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}