// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.createElement('table');
let f1 = document.forms.form1;

document.body.appendChild(table);
f1.onsubmit = function (e) {
    e.preventDefault();
    for (let i = 0; i < f1.rows.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < f1.td.value; j++) {
            let td = document.createElement('td');
            td.innerText = f1.text.value;
            tr.appendChild(td);
        }
    }

}


// (Додатковачастина для завдання)1
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let censoredWords = ['foo', 'boo', 'too'];
let div = document.createElement('div');
let f2 = document.forms.form2;
let btn = document.getElementById('checkWord');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < censoredWords.length; i++) {
        if (censoredWords[i] === f2.word.value) {
            return alert('You entered censored word!!!');
        }


    }
    return alert('You entered correct word!!!');


});

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let div2 = document.createElement('div');
let f3 = document.forms.form3;
let btn2 = document.getElementById('checkString');

btn2.addEventListener('click', function (e) {
    e.preventDefault();

    for (const str of f3.word1.value.split(' ')) {
        for (let i = 0; i < censoredWords.length; i++) {
            if (censoredWords[i] === str) {
                return alert('You entered censored word!!!');
            }
        }
    }
    return alert('You entered correct STRING!!!');
});