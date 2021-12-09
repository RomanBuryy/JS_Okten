// є масив -
//
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let favouriteUsers = [];
localStorage.setItem('favUsers', JSON.stringify(favouriteUsers));

for (const user of users) {

    let div = document.createElement('div');
    let h2Name = document.createElement('h2');
    let h3Age = document.createElement('h3');
    let h3Status = document.createElement('h3');
    let btn = document.createElement('button');

    btn.innerText = 'add';
    btn.setAttribute('id', 'btn');
    h2Name.innerText = user.name;
    h3Age.innerText = user.age;
    h3Status.innerText = user.status;

    btn.onclick = () => {
        let data = localStorage.getItem('favUsers');
        let favUsers = JSON.parse(data);
        favUsers.push(user);
        localStorage.setItem('favUsers', JSON.stringify(favUsers));
        btn.classList.add('hide');
    }

    document.body.appendChild(div);
    div.append(h2Name, h3Age, h3Status, btn);
}
