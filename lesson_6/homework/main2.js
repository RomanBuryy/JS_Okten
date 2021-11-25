// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    newArr = [];
    for (let i = 0; i < str.length; i += 3) {
        newArr.push(str.substr(i, n))

    }
    return newArr.join(",");
}

console.log(cutString('наслаждение', 3));

//------------------------------------------------------------------------------------------------------------

coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sortObj = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length);

console.log(sortObj(coursesArray));
//-------------------------------------------------------------------------------------------------------------

/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/


let symb = "о", str = "Астрономия это наука о небесных объектах";

let count = (str, stringSearch) => {
    let count = 0;
    let newArr = str.split('');
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === stringSearch) {
            count++;
        }
    }
    return count;
}

console.log(count(str, symb));

//-----------------------------------------------------------------------------------------------------------------

/*- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'*/

let cutString1 = (str, n) => {
    let newArr = str.split(" ");
    let newArr1 = [];
    for (let i = 0; i < n; i++) {
        newArr1.push(newArr[i]);
    }
    return newArr1.join(' ');
}
let str1 = "Сила тяжести приложена к центру масс тела";

console.log(cutString1(str1, 5));

//------------------------------------------------------------------------------------------------------------------

/*
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
:данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com*/

let checkEmail = (email) => {

    if (email.includes("@") && email.includes(".") && email.indexOf(".") > email.indexOf("@")) {
        return "Correct";
    } else return "Incorrect";


}

console.log(checkEmail("someemail@l.com"));


























