// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let btnHideText = document.getElementById('btnHideText');

btnHideText.onclick = function () {
    document.getElementById('text').style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hideButton = document.getElementById('hideButton');

hideButton.onclick = function () {
    document.getElementById('hideButton').style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault();
    if (f1.age.value < 18) {
        alert('Age < 18 years');
    } else {
        console.log(f1.age.value);
    }
};


// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById('menu');
let listElem = document.getElementsByClassName('menuList')[0];
menu.onclick = function (){
    listElem.classList.toggle('hide')
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let div = document.createElement('div');
div.classList.add('comments');

for (let c of comments){
    let comment =  document.createElement('div');
    let commentName = document.createElement('h2');
    let commentBody = document.createElement('p');
    let btn = document.createElement('button');
    comment.classList.add('comment');
    commentName.innerText = c.name;
    commentBody.innerText = c.body;
    btn.innerText = 'more';

    btn.addEventListener('click', function (){
        commentBody.classList.toggle('hide');
    })

    div.append(comment);
    comment.append(commentName, commentBody,btn);
}

document.body.appendChild(div);


