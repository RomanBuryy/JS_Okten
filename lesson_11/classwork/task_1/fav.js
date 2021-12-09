let favUsers = localStorage.getItem('favUsers');

for (const favUser of JSON.parse(favUsers)) {
    let div = document.createElement('div');
    div.append(`Name: ${favUser.name}, Age: ${favUser.age}, Status: ${favUser.status}`);
    document.body.appendChild(div);
}