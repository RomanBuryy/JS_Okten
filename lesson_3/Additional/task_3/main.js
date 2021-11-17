/*

1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.
    b. заповнити його 50 непарними числами за допомоги циклу.
    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
2. Вивести за допомогою console.log кожен третій елемен
3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/


// a. заповнити його 50 парними числами за допомоги циклу.
let emptyArr = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        emptyArr[i] = i;
        document.write(`<div> ${emptyArr[i]} </div>`);
    }

}

// b. заповнити його 50 непарними числами за допомоги циклу.
let emptyArr1 = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        emptyArr1[i] = i;
        document.write(`<div> ${emptyArr1[i]} </div>`);
    }

}

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let randomArr = [];
for (let i = 0; i < 20; i++) {
    randomArr[i] = Math.floor(Math.random() * 10);
    document.write(`<div> ${randomArr[i]} </div>`);
}

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let randomArr1 = [];
for (let i = 0; i < 20; i++) {
    randomArr1[i] = Math.floor(Math.random() * (732 - 8)) + 8;
    document.write(`<div> ${randomArr1[i]} </div>`);
}


//2. Вивести за допомогою console.log кожен третій елемен
console.log(randomArr1);
for (let i = 0; i < randomArr1.length; i += 3) {
    console.log(randomArr1[i]);
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
let j = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 234, 27654, 354, 645, 78, 6234238, 798, 6786, 68, 67, 23, 4234, 1, 41246, 45, 675, 7, 5687, 345, 6757, 5, 675, 75, 75, 7, 43, 563, 456, 547, 54, 67, 36, 346];

for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) {
        newArr[j] = arr[i];
        j++;
    }
}
console.log(newArr);

//5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let exampleArr = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < exampleArr.length; i++) {
    if (exampleArr[i + 1] % 2 === 0) {
        console.log(exampleArr[i]);
    }
}

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let priceArr = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;

for (let i = 0; i < priceArr.length; i++) {
    sum += priceArr[i];
}
let result = sum / priceArr.length;
console.log(result);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrSevenTask = [];
let arrSevenTaskMul = [];
for (let i = 0; i < 10; i++) {
    arrSevenTask[i] = Math.floor(Math.random() * 100);
    arrSevenTaskMul[i] = arrSevenTask[i] * 5;
}
console.log(arrSevenTask);
console.log(arrSevenTaskMul);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
let mixArr = [1, 2, 3, 4, 5, 1, 2, "a", "b", false, true, "a", "b", "c", "d", "e",234,456,547,567,234];
let numberArr=[];
let k=0;

for (let i=0; i< mixArr.length; i++){
    if (typeof mixArr[i]==="number"){
        numberArr[k] = mixArr[i];
        k++;
    }
}
console.log(numberArr);

