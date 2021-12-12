// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {

        for (const post of json) {

            let card = document.createElement('div');
            card.classList.add('card');
            let cardWrap = document.createElement('div');
            cardWrap.classList.add('card__wrap');
            let cardTitle = document.createElement('div');
            cardTitle.classList.add('card__title');
            cardTitle.innerText = post.title;
            let line = document.createElement('div');
            line.classList.add('line');
            let cardBody = document.createElement('div');
            cardBody.classList.add('card__body');
            cardBody.innerText = post.body;
            let wrapId = document.createElement('div');
            wrapId.classList.add('wrap-id');
            let cardUserId = document.createElement('div');
            cardUserId.classList.add('card__userId');
            cardUserId.innerText = `userId: ${post.userId}`;
            let cardId = document.createElement('div');
            cardId.classList.add('card__id');
            cardId.innerText = `Id: ${post.id}`;
            wrap.appendChild(card);
            card.appendChild(cardWrap);
            cardWrap.appendChild(cardTitle);
            cardWrap.appendChild(line);
            cardWrap.appendChild(cardBody);
            card.appendChild(wrapId);
            wrapId.appendChild(cardUserId);
            wrapId.appendChild(cardId);
        }
    });


