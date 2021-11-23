/*

Всі функції повинні бути описані стрілочним типом!!!!



- створити функцію яка повертає найменьше число з масиву
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a,b,c) =>{
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

console.log(minNumber(100,20,3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a,b,c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxNumber(1,20,3));

//- створити функцію яка повертає найменьше число з масиву
let arr = [1,2,3,4,5,6,78,8,9];
let minElementOfArray = (arr) => {
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minElement > arr[i]) {
            minElement = arr[i];
        }
    }
    return minElement;
}

console.log(minElementOfArray(arr));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let maxElementOfArray = (arr) => {
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxElement < arr[i]) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

console.log(maxElementOfArray(arr));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmeticMeanArrayElem = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(arithmeticMeanArrayElem([1, 2, 9]));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let manyNumbers = (...arr) => {
    let minElem = arr[0];
    let maxElem = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minElem > arr[i]) {
            minElem = arr[i];
        }
        if (maxElem < arr[i]) {
            maxElem = arr[i];
        }
    }
    console.log(maxElem);
    return minElem;
}

console.log(manyNumbers(1234, 345256, 653, 423, 565, 68));

//- створити функцію яка заповнює масив рандомними числами
let randomArray = (elemNum) => {
    let arr = [];
    for (let i = 0; i < elemNum; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
console.log(randomArray(10));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArrayLimit = (elemNum, limit) => {
    let arr = [];
    for (let i = 0; i < elemNum; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}

console.log(randomArrayLimit(10, 200));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]
let reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) {
        newArr[j] = arr[i];
    }
    return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));



