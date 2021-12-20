// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії
// за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка.
// При тому ваші дії мають бути синхронізовані.
// // Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с


/*==================== Promise ==============================*/
function getUp(alarmClock = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alarmClock) {
                resolve('I am wake up');
            }
            reject('I am late');

        }, 3000);
    })
}

function washUp(isThereHotWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isThereHotWater) {
                resolve('I am wash up')
            }
            reject('There is no water');

        }, 10)
    })
}

function drinkCoffee(doIHaveCoffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (doIHaveCoffee) {
                resolve('I am drinking coffee');
            }
            reject('I dont have coffee');
        }, 200)

    })
}

function dress(coffeeCup) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (coffeeCup === 'I am drinking coffee') {
                resolve('Dress');
            }
            reject('Iam naked');
        }, 2000);
    })

}

//
// getUp(true).then((wake) => {
//     console.log(wake);
//     return washUp(true);
// }).then((hotWater)=>{
//     console.log(hotWater);
//     return drinkCoffee(true);
// }).then((coffee)=>{
//     console.log(coffee)
//     return dress(ee);
// }).catch(reason => {
//     console.log('Error:', reason);
// })
/*============================== end Promise ========================*/

/*============================== async await ========================*/

async function myDay() {
    const up = await getUp(true);
    const wash = await washUp(true);
    const drink = await drinkCoffee(true);
    const closes = await dress(drink);
    console.log(up);
    console.log(wash);
    console.log(drink);
    console.log(closes);
}

myDay();







