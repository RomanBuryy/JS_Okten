//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => {
        for (const comment of comments) {

            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            let commentName = document.createElement('div');
            commentName.classList.add('comment__name');
            commentName.innerText = comment.name;
            let commentEmail = document.createElement('div');
            commentEmail.classList.add('comment__email');
            commentEmail.innerText = comment.email;
            let commentBody = document.createElement('div');
            commentBody.classList.add('comment__body');
            commentBody.innerText = comment.body;
            wrap.appendChild(commentDiv);
            commentDiv.appendChild(commentName);
            commentDiv.appendChild(commentEmail);
            commentDiv.appendChild(commentBody);
        }
    })