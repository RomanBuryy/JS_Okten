

//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function printAdd() {
    if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
}

console.log(printAdd(1, 10));


/*

- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/

function addArrays(arr1, arr2) {
    let emptyArr = [];
    for (let i = 0; i < arr1.length; i++) {
        emptyArr[i] = arr1[i] + arr2[i];
    }
    return emptyArr;
}

console.log(addArrays([1, 2, 3, 4], [2, 3, 4, 5]));

/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/

function keysArr(objects) {
    let keys = [];
    let i = 0;
    for (let obj of objects) {
        //console.log();
        for (const objKey in obj) {
            keys[i] = objKey;
            i++;
        }
    }
    return keys;
}

console.log(keysArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));


/*
- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/
function valueArr(objects) {
    let keys = [];
    let i = 0;
    for (let obj of objects) {
        for (const objKey in obj) {
            keys[i] = obj[objKey];
            i++;
        }
    }
    return keys;
}

console.log(valueArr(([{name: 'Dima', age: 13}, {model: 'Camry'}])));