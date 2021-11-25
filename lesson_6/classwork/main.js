/*- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

let n1 = 'Harry......Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';


let normalize = (str, char) => str.split(char).filter(value => value !== '').join(" ");

console.log(normalize(n1, "."));
console.log(normalize(n2, "-"));
console.log(normalize(n3, "_"));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArray = (arrLenght) => {
    let emptyArr = [];
    for (let i = 0; i < arrLenght; i++) {
        emptyArr[i] = Math.round(Math.random() * 100);
    }
    return emptyArr;
}
console.log(randomArray(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortArray = randomArray(10).sort((a, b) => a - b);

console.log(sortArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let evenRandomNumbers = randomArray(10).filter(value => value % 2 === 0);
console.log(evenRandomNumbers);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let convertArrayItemsToString = randomArray(10).map(value => value + "");

console.log(convertArrayItemsToString);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

let sortNums = (direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    } else return nums;
    return nums;
}

console.log(sortNums('ascending')); // [3,11,21]
console.log(sortNums('descending')); // [21,11,3]


// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let arraySort = (arr) => arr.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(arraySort(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let monthDurationFilter = (arr) => arr.filter(value => value.monthDuration > 5);

console.log(monthDurationFilter(coursesAndDurationArray));


/*
- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/










