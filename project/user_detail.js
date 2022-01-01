let user = localStorage.getItem('user');
let userDetail = JSON.parse(user);

// console.log(userDetail.name);

let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');
document.body.append(wrapDiv);

let userHeader = document.createElement('div');
userHeader.classList.add('userHeader');

let userImage = document.createElement('img');
userImage.src = `./images/${userDetail.id}.jpg`;

let userInfo = document.createElement('div');
userInfo.classList.add('userInfo');


let userName = document.createElement('div');
userName.innerText = userDetail.name;
userName.classList.add('userName');

let login = document.createElement('div');
login.classList.add('login');
let loginText = document.createElement('div');
loginText.innerText = 'User Name:';
loginText.classList.add('')

let email= document.createElement('div');
email.classList.add('email');

let phone = document.createElement('div');
phone.classList.add('phone');

let website = document.createElement('div');
website.classList.add('website');



wrapDiv.append(userHeader);
userHeader.append(userImage);
userHeader.append(userInfo);
userInfo.append(userName);
userInfo.append(login);
login.append(loginText);

userInfo.append(email);

userInfo.append(phone);

userInfo.append(website);