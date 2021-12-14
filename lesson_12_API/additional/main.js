// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку,
//     при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку,
//     при клику на яку в окремий блок виводяться всі коментарі поточного поста

let userDiv = document.createElement('div');
userDiv.classList.add('wrap');
document.body.append(userDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {

            let userName = document.createElement('div');
            let userTitle = document.createElement('div');
            let userBtn = document.createElement('button');
            userBtn.setAttribute('type', 'button');
            userBtn.classList.add('btn');
            userBtn.classList.add('btn-primary');
            userBtn.innerText = 'User posts'
            userName.classList.add('user');
            userTitle.classList.add('user__title');
            userTitle.innerText = user.name;
            userDiv.append(userName);
            userName.append(userTitle);
            userName.append(userBtn);

            userBtn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then((response) => response.json())
                    .then((posts) => {
                        for (const post of posts) {
                            let postDiv = document.createElement('div');
                            let commentButton = document.createElement('button');
                            commentButton.innerText = 'comments';
                            postDiv.innerHTML = `<p>Post ${post.id} - ${post.title}</p>`;
                            userName.append(postDiv);
                            postDiv.append(commentButton);
                            userBtn.disabled = true;

                            commentButton.onclick = () => {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then((response) => response.json())
                                    .then((comments) => {
                                        for (const comment of comments) {
                                            if (comment.postId === post.id) {
                                                let commentDiv = document.createElement('div');
                                                commentDiv.innerText = comment.name;
                                                postDiv.append(commentDiv);

                                            }
                                        }
                                    })
                            }


                        }
                    })
            }
        }
    })

