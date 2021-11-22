/*

Всі функції повинні бути описані стрілочним типом!!!!







- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/


//- створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleArea = (x, y) => x * y;
console.log(rectangleArea(5, 6));

//- створити функцію яка обчислює та повертає площу кола
let circleArea = (r) => Math.PI * r ** 2;
console.log(circleArea(4));

//- створити функцію яка обчислює та повертає площу циліндру
let cylinderArea = (r, h) => 2 * Math.PI * r * (h + r);
console.log(cylinderArea(10, 5));

//- створити функцію яка приймає масив та виводить кожен його елемент
let printArrayItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createPar = (text) => document.write(`<p>${text}</p>`);
createPar("qwerty");

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createLi = (textForLi) => {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${textForLi}</li>`);
    }
    document.write("</ul>");

}

createLi("list item");

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createLi2 = (textForLi, numberLi) => {
    document.write("<ul>");
    for (let i = 0; i < numberLi; i++) {
        document.write(`<li>${textForLi}</li>`);
    }
    document.write("</ul>");

}

createLi2("list item", 10);









