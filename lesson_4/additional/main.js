/*


- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]

- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

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
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                emptyArr[j] = arr1[i] + arr2[j];
            }
        }
    }
    return emptyArr;
}

console.log(addArrays([1, 2, 3, 4], [2, 3, 4, 5]));





