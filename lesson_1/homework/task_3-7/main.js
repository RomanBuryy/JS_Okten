//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = "Roman";
let middleName = "Evgenovych"
let lastName = "Buryi";
let person1 = [firstName, middleName, lastName];
let person2 = firstName + middleName + lastName;
console.log(person1);
console.log(person2);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt("Enter your name: ");
let secondName = prompt("Enter your secondname: ");
let age = prompt("Enter your age: ");
console.log(`Вітаю ${name} ${secondName}. Тобі ${age} років`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
console.log(5 !== 6);                    // 5 ? 6 -> true
console.log(5 === 6);                     //5 ? 6 -> false
console.log(5 > 6);                    //5 ? 6 -> false
console.log(5 >= 6);                      //5 ? 6 -> false
console.log(10 >= 10);                    //10 ? 10 -> true
console.log(10 === 10);                    //10 ? 10 -> true
console.log(10 !== 10);                    //10 ? 10 -> false
console.log(10 > 10);                    //10 ? 10 -> false
console.log(10 !== 10);                    //10 ? 10 -> false
console.log(123 === '123');                    //123 ? '123' -> false
console.log(123 >= '123');                    //123 ? '123' -> true

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a1 = 5;
document.write(str + a1 + "<br/>"); // Опреатор "+" приведе число до стрінга і обєднає результат "205"
document.write(str - a1 + "<br/>"); //Оператор "-" працює з числами тому приведе стрінг до числа результат 15
document.write(str * "2" + "<br/>"); //Оператор "*" працює з числами тому приведе стрінг до числа результат 40
document.write(str / 2 + "<br/>"); //Оператор "/" працює з числами тому приведе стрінг до числа результат 10


