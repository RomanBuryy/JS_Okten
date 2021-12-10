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
localStorage.setItem('Car', JSON.stringify(['Mers', 'hetch', 2.2]));

carInfo.onsubmit = (e) => {
    e.preventDefault();
    let carModel = carInfo.model.value;
    let carType = carInfo.type.value;
    let carVolume = carInfo.volume.value;
    let car = [carModel, carType, carVolume];

    let res = localStorage.getItem('Car');
    let cars = JSON.parse(res);
    cars.push(car);

    localStorage.setItem('Car', JSON.stringify(cars));
}

