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

function getUp(){
   return new Promise((resolve) => {
       setTimeout(() =>{
           console.log('Get up');
           resolve(200);
       }, 1000);
   })
}

function washUp(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('I wash up');
            resolve(200);
        }, 10);
    })
}

function drinkCoffee() {
    setTimeout(() =>{
        console.log('Drink coffee');
    }, 350);
}

function dress() {
    setTimeout(()=>{
        console.log('Dress');
    }, 10);
}
function driveToWork() {
    setTimeout(() => {
        console.log('Drive to work');
    }, 2000);
}

function doWork() {
    setTimeout(()=>{
        console.log('Work hard');
    }, 500);
}

function goHome(){
    setTimeout(()=>{
        console.log('Go home');
    }, 1234);
}

// getUp();
// washUp();
// goHome();
// doWork();
// driveToWork();
// dress();
// drinkCoffee();

getUp().then(()=>{
    washUp();
})





























