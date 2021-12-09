// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let formUser = document.forms.formUser;

formUser.onsubmit = () => {

    let userName = formUser.name.value;
    let userAge = formUser.age.value;

    localStorage.setItem('User name', userName);
    localStorage.setItem('User age', userAge);
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carInfo = document.forms.carInfo;

carInfo.onsubmit = (e) => {
    e.preventDefault();
    let carModel = carInfo.model.value;
    let carType = carInfo.type.value;
    let carVolume = carInfo.volume.value;

    localStorage.setItem('Car', JSON.stringify([carModel, carType, carVolume]));
}

