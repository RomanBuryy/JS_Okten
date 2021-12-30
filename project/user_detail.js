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









wrapDiv.append(userHeader);
userHeader.append(userImage);
userHeader.append(userInfo);
userInfo.append(userName);