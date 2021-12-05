
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let f1 = document.forms.f1;
let f2 = document.forms.f2;

let btn = document.getElementById('btn');

btn.onclick = function () {
    console.log(f1.text1.value);
    console.log(f1.text2.value);
    console.log(f2.text3.value);
    console.log(f2.text4.value);
}

