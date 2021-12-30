let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');
document.body.append(wrapDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            let userInfo = document.createElement('div');
            let userImg = document.createElement('img');
            let userName = document.createElement('div');
            let userBtn = document.createElement('a');
            let userId = document.createElement('div');

            userDiv.classList.add('user');
            userInfo.classList.add('userInfo');
            userImg.src = `./images/${user.id}.jpg`;
            userName.innerText = user.name;

            userId.innerText = `User ID: ${user.id}`;
            userName.classList.add('userName');
            userId.classList.add('userId');
            userBtn.classList.add('btn');
            userBtn.innerText = 'User detail';
            userBtn.href = 'user-details.html';

            userBtn.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
            }
            wrapDiv.append(userDiv);
            userDiv.append(userInfo);
            userInfo.appendChild(userImg);
            userInfo.append(userName);
            userInfo.append(userId);
            userDiv.append(userBtn);

        }
    })