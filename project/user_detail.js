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
userValue.classList.add('user_value', 'm53');
userValue.innerText = userDetail.username;

let email = document.createElement('div');
email.classList.add('email');
let emailText = document.createElement('div');
emailText.innerText = 'Email:';
emailText.classList.add('user_key');
let emailValue = document.createElement('div');
emailValue.innerText = userDetail.email;
emailValue.classList.add('user_value', 'm120');


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

let address = document.createElement('div');
address.classList.add('address');
let addressHeader = document.createElement('div');
addressHeader.classList.add('address_header');
addressHeader.innerText = 'Address';

let addressStreet = document.createElement('div');
addressStreet.classList.add('street');
let streetKey = document.createElement('div');
let streetVal = document.createElement('div');
streetKey.innerText = 'Street';
streetKey.classList.add('user_key');
streetVal.innerText = userDetail.address.street;
streetVal.classList.add('user_value', 'm120');

let addressSuite = document.createElement('div');
addressSuite.classList.add('suite');
let suiteKey = document.createElement('div');
let suiteVal = document.createElement('div');
suiteKey.innerText = 'Suite';
suiteKey.classList.add('user_key');
suiteVal.innerText = userDetail.address.suite;
suiteVal.classList.add('user_value', 'm133');

let addressCity = document.createElement('div');
addressCity.classList.add('city');
let cityKey = document.createElement('div');
let cityVal = document.createElement('div');
cityKey.innerText = 'City';
cityKey.classList.add('user_key');
cityVal.innerText = userDetail.address.city;
cityVal.classList.add('user_value', 'm146');

let addressZipcode = document.createElement('div');
addressZipcode.classList.add('city');
let zipcodeKey = document.createElement('div');
let zipcodeVal = document.createElement('div');
zipcodeKey.innerText = 'Zipcode';
zipcodeKey.classList.add('user_key');
zipcodeVal.innerText = userDetail.address.zipcode;
zipcodeVal.classList.add('user_value', 'm96');


let geo = document.createElement('div');
geo.classList.add('geo');
let geoHeader = document.createElement('div');
geoHeader.classList.add('address_header');
geoHeader.innerText = 'Geo';


let geoLat = document.createElement('div');
geoLat.classList.add('lat');
let geoKey = document.createElement('div');
let geoVal = document.createElement('div');
geoKey.innerText = 'lat';
geoKey.classList.add('user_key');
geoVal.innerText = userDetail.address.geo.lat;
geoVal.classList.add('user_value', 'm165');


let geoLng = document.createElement('div');
geoLng.classList.add('lng');
let geoLngKey = document.createElement('div');
let geoLngVal = document.createElement('div');
geoLngKey.innerText = 'lng';
geoLngKey.classList.add('user_key');
geoLngVal.innerText = userDetail.address.geo.lng;
geoLngVal.classList.add('user_value', 'm165');


let company = document.createElement('div');
company.classList.add('company');
let companyHeader = document.createElement('div');
companyHeader.classList.add('address_header');
companyHeader.innerText = 'Company';


let companyName = document.createElement('div');
companyName.classList.add('lng');
let companyNameKey = document.createElement('div');
let companyNameVal = document.createElement('div');
companyNameKey.innerText = 'Name';
companyNameKey.classList.add('user_key');
companyNameVal.innerText = userDetail.company.name;
companyNameVal.classList.add('user_value', 'm129');


let companyCatchPhrase = document.createElement('div');
companyCatchPhrase.classList.add('lng');
let companyCatchPhraseKey = document.createElement('div');
let companyCatchPhraseVal = document.createElement('div');
companyCatchPhraseKey.innerText = 'CatchPhrasee';
companyCatchPhraseKey.classList.add('user_key');
companyCatchPhraseVal.innerText = userDetail.company.catchPhrase;
companyCatchPhraseVal.classList.add('user_value', 'm33');


let companyBs = document.createElement('div');
companyBs.classList.add('lng');
let companyBsKey = document.createElement('div');
let companyBsVal = document.createElement('div');
companyBsKey.innerText = 'Bs';
companyBsKey.classList.add('user_key');
companyBsVal.innerText = userDetail.company.bs;
companyBsVal.classList.add('user_value', 'm174');


wrapDiv.append(address);
wrapDiv.append(geo);
wrapDiv.append(company);
address.append(addressHeader, addressStreet, addressSuite, addressCity, addressZipcode);
addressStreet.append(streetKey, streetVal);
addressSuite.append(suiteKey, suiteVal);
addressCity.append(cityKey, cityVal);
addressZipcode.append(zipcodeKey, zipcodeVal);
geo.append(geoHeader)
geo.append(geoLat);
geo.append(geoLng);
geoLat.append(geoKey, geoVal);
geoLng.append(geoLngKey, geoLngVal);
company.append(companyHeader);
company.append(companyName);
companyName.append(companyNameKey, companyNameVal);
company.append(companyCatchPhrase);
companyCatchPhrase.append(companyCatchPhraseKey, companyCatchPhraseVal);
company.append(companyBs);
companyBs.append(companyBsKey, companyBsVal);


let postBtnDiv = document.createElement('div');
postBtnDiv.classList.add('postBtnDiv');
let postBtn = document.createElement('a');
postBtn.innerText = 'Post of current user';
postBtn.classList.add('btn');
wrapDiv.append(postBtnDiv);
postBtnDiv.append(postBtn);

postBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userDetail.id}/posts`)
        .then((response) => response.json())
        .then((posts) => {
            for (const post of posts) {
                //console.log(post);
                let userPostDiv = document.createElement('div');
                let userPostId = document.createElement('div');
                let userPostTitle = document.createElement('div');
                userPostDiv.classList.add('userPostDiv');
                userPostId.innerHTML = `<p class="post_number">Post #${post.id}</p>`;
                userPostTitle.innerHTML = `<p class="post_title"><a href="post-details.html"> ${post.title}</a></p>`;

                userPostTitle.onclick = () => {

                    localStorage.setItem('post', JSON.stringify(post));
                }

                postBtn.classList.add('disable');

                wrapDiv.append(userPostDiv);
                userPostDiv.append(userPostId);
                userPostDiv.append(userPostTitle);



            }
        })
}











