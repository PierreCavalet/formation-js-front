// ex 1
// TODO: Import axios HTTP client with the unpkg CDN

// ex 2
// TODO: Fill the post1 title and body with an HTTP request on the JSONPlaceholder API
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    document.querySelector('#post1-title').textContent = response.data.title;
    document.querySelector('#post1-body').textContent = response.data.body;
  });

// ex 3
// TODO: Send a new post to the server
var postTitle = document.querySelector('#post-title');
var postBody = document.querySelector('#post-body');

var postButton = document.querySelector('#post');
postButton.addEventListener('click', event => {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: postTitle.value,
    body: postBody.value
  })
  .then(() => {
    postTitle.value = '';
    postBody.value = '';
  })
})
