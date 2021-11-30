//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

  //  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').innerText);

//-- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);

//-- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'asdwefqwfqwjehfgqwefqweiuhfoqiuew ho quiweho uhqweo ruihoqew uirh';

//-- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'swefj qlwei rhjlwoier hjqlwoire hjqlwrei jqwoe rj;wqerj oqwerjpol iqwjper oji';

//-- змініть кожному елементу колір фону на червоний
let allElem = document.body.children;
for (const tags of allElem) {
    tags.style.background = 'red';

}
//-- змініть кожному елементу колір тексту на синій
let allTextBlue = document.body.children;

for (const tag of allTextBlue) {
    tag.style.color = 'blue';
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsArray = document.getElementsByClassName('fc_rules');

for (const elementsArrayElement of elementsArray) {
    elementsArrayElement.style.background = 'red';
}