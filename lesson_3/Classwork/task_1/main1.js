/*1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/


let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arr_okten = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let a = 0;
while (a < arr.length) {
    console.log(arr[a]);
    a++;
}
console.log("----------------------2---------------------");

// 2. перебрати його циклом for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("--------------------3-----------------------");

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let b = 0;
while (b < arr.length) {
    if (arr[b] % 2 === 1) {
        console.log(arr[b]);
    }
    b++;
}
console.log("--------------------4-----------------------");
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

console.log("--------------------5------------------------");

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let c = 0;
while (c < arr.length) {
    if (arr[c] % 2 === 0) {
        console.log(arr[c]);
    }
    c++;
}

console.log("-------------------6------------------------");

//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

console.log("---------------------7----------------------");

//7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
        arr_okten[i] = "okten";
    }
    console.log(arr_okten[i]);
}
console.log("-----------------8-------------------------");

// 8. вивести масив в зворотньому порядку.
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/
console.log("-------------------rev1------------------------");

let a_rev = arr.length - 1;
while (a_rev >= 0) {
    console.log(arr[a_rev]);
    a_rev--;
}

console.log("---------------------rev2----------------------");

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

console.log("----------------------rev3---------------------");

let b_rev = arr.length - 1;
while (b_rev >= 0) {
    if (arr[b_rev] % 2 === 1) {
        console.log(arr[b_rev]);
    }
    b_rev--;
}

console.log("-----------------------rev4--------------------");

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

console.log("-----------------------rev5---------------------");

let c_rev = arr.length - 1;
while (c_rev >= 0) {
    if (arr[c_rev] % 2 === 0) {
        console.log(arr[c_rev]);
    }
    c_rev--;
}

console.log("----------------------rev6---------------------");

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

console.log("----------------------rev7---------------------");

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 3 === 0) {
        arr_okten[i] = "okten";
    }
    console.log(arr_okten[i]);
}