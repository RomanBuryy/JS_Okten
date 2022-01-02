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
loginText.classList.add('user_key');

let userValue = document.createElement('div');
userValue.classList.add('user_value','m53');
userValue.innerText = userDetail.username;

let email= document.createElement('div');
email.classList.add('email');
let emailText = document.createElement('div');
emailText.innerText = 'Email:';
emailText.classList.add('user_key');
let emailValue = document.createElement('div');
emailValue.innerText = userDetail.email;
emailValue.classList.add('user_value',  'm120');



let phone = document.createElement('div');
phone.classList.add('phone');
let phoneText = document.createElement('div');
let phoneValue = document.createElement('div');
phoneText.innerText = 'Phone:';
phoneText.classList.add('user_key');
phoneValue.innerText = userDetail.phone;
phoneValue.classList.add('user_value', 'm110');


let website = document.createElement('div');
website.classList.add('website');
let websiteText = document.createElement('div');
let websiteValue = document.createElement('div');
websiteText.innerText = 'Website:';
websiteText.classList.add('user_key');
websiteValue.innerText = userDetail.website;
websiteValue.classList.add('user_value', 'm90');


wrapDiv.append(userHeader);
userHeader.append(userImage);
userHeader.append(userInfo);
userInfo.append(userName);
userInfo.append(login);
login.append(loginText);
login.append(userValue);

userInfo.append(email);
email.append(emailText);
email.append(emailValue);



userInfo.append(phone);
phone.append(phoneText);
phone.append(phoneValue);

userInfo.append(website);
website.append(websiteText);
website.append(websiteValue);