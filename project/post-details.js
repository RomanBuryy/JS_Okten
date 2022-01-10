let post = localStorage.getItem('post');
let postDetail = JSON.parse(post);

let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');

let postId = document.createElement('div');
postId.innerHTML = `<div><span>Id:</span> ${postDetail.id}</div>`;

let postUserId = document.createElement('div');
postUserId.innerHTML = `<div><span>User Id:</span>  ${postDetail.userId}</div>`;

let postTitle = document.createElement('div');
postTitle.innerHTML = `<span>Title:</span>  ${postDetail.title}`;

let postBody = document.createElement('div');
postBody.innerHTML = `<div><span>Body:</span>  ${postDetail.body}</div>`;










document.body.append(wrapDiv);
wrapDiv.append(postId);
wrapDiv.append(postUserId);
wrapDiv.append(postTitle);
wrapDiv.append(postBody);

console.log(postDetail);