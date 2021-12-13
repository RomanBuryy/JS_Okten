//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться
//     в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((request) => request.json())
    .then((posts) => {
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.innerHTML = `<h3>${post.title}</h3>`;
            let btn = document.createElement('button');
            btn.innerText = 'Comments';
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then((request) => request.json())
                    .then((comments) => {
                        for (const comment of comments) {
                            if (comment.postId === post.id) {
                                commentDiv.innerText = comment.body;
                            }
                        }
                    })
            }

            document.body.append(postDiv);
            postDiv.append(btn);
            postDiv.append(commentDiv);

        }
    })