// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').innerText = 'sept-2021';


// b) робить шириниу елементу ul 400px
let resizeUl = document.getElementsByTagName('ul');

for (const resizeUlElement of resizeUl) {
    resizeUlElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');

for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listText = document.getElementsByClassName('listElement2');

for (const text of listText) {
    console.log(text.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLi = document.getElementsByTagName('li');

for (const allLiElement of allLi) {
    allLiElement.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

// let addClassToLink =





// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів







// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a






// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()








// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()






// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()










// l) отримати елементи p та змінити їм padding на 20px









// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
