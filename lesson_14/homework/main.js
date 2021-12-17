//
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


// function getUp() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Get up');
//             resolve(200);
//         }, 1000);
//     })
// }
//
// function washUp() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('I wash up');
//             resolve(200);
//         }, 10);
//     })
// }
//
// function drinkCoffee() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Drink coffee');
//             resolve(200);
//         }, 350);
//     })
// }
//
// function dress() {
//     return new Promise((resolve => {
//         setTimeout(() => {
//             console.log('Dress');
//             resolve(200);
//         }, 10);
//     }))
// }
//
// function driveToWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Drive to work');
//             resolve(200);
//         }, 2000);
//     })
// }
//
// function doWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Work hard');
//             resolve(200);
//         }, 500);
//     })
// }
//
// function goHome() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Go home');
//             resolve(200);
//         }, 1234);
//     })
// }
//
//
// getUp()
//     .then((response) => {
//         if (response === 200) {
//             return washUp();
//         }
//     })
//     .then((response) => {
//         if (response === 200) {
//             return drinkCoffee();
//         }
//     })
//     .then((response) => {
//         if (response === 200) {
//             return dress();
//         }
//     })
//     .then((response) => {
//         if (response === 200) {
//             return driveToWork();
//         }
//     })
//     .then((response) => {
//         if (response === 200) {
//             return doWork();
//         }
//     })
//     .then((response) => {
//             if (response === 200) {
//                 return goHome();
//             }
//         }
//     );

/*============================== end Promise =======================*/


/*============================== async await =========================================== */

function getUp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Get up');
            resolve(200);
        }, 1000);
    })
}

function washUp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('I wash up');
            resolve(200);
        }, 10);
    })
}

function drinkCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Drink coffee');
            resolve(200);
        }, 350);
    })
}

function dress() {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log('Dress');
            resolve(200);
        }, 10);
    }))
}

function driveToWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Drive to work');
            resolve(200);
        }, 2000);
    })
}

function doWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Work hard');
            resolve(200);
        }, 500);
    })
}

function goHome() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Go home');
            resolve(200);
        }, 1234);
    })
}

async function myDay() {
    await getUp();
    await washUp();
    await drinkCoffee();
    await dress();
    await driveToWork();
    await doWork();
    await goHome();

}

myDay();

/*============================== End async await =========================================== */





















