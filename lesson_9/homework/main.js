// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

let div = document.createElement('div');
div.classList.add('wradp', 'collapse', 'alpha', 'beta');
div.style.color = 'green';
div.style.backgroundColor = 'aqua';
div.style.fontSize = '20px';
div.innerText = 'div element';

let divClone = div.cloneNode(true);
divClone.innerText = 'div clone';

document.body.appendChild(div);
document.body.appendChild(divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

let arr = ['Main', 'Products', 'About us', 'Contacts'];

for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    document.getElementsByClassName('menu')[0].appendChild(li);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`;
    document.body.appendChild(div);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let coursesArr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesArrElement of coursesArr) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    h1.classList.add('heading');
    div.classList.add('item');
    p.classList.add('description');

    h1.innerText = `${coursesArrElement.title}`;
    p.innerText = `${coursesArrElement.monthDuration}`;

    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);

}

