// Retrieve all the post from the JSON Placeholder API
// Display only the post from the user 1
// When you submit the form, create a new post from the user 1
// Automatically add this post if the response is successful, else handle the error

(function() {

  var app = {
    userId: 1,
    userPosts: []
  };


  /*****************************************************************************
  *
  * Event listeners for UI elements
  *
  ****************************************************************************/

  document.getElementById('post-submit').addEventListener('click', function() {
    // Post a new 'post' to the JSONPlaceholder API
    app.createPost().then(app.renderPost);
  });


  /*****************************************************************************
  *
  * Methods to update/refresh the UI
  *
  ****************************************************************************/

  // render all the user posts in app.userPosts
  app.renderPosts = function () {
    app.userPosts.forEach(function (post) {
      app.renderPost(post);
    });
  };

  // render a post
  app.renderPost = function (post) {
    var postNode = document.getElementById('postTemplate').cloneNode(true);
    postNode.removeAttribute('id');
    postNode.removeAttribute('hidden');
    postNode.querySelector('.post-title').textContent = post.title;
    postNode.querySelector('.post-body').textContent = post.body;
    document.getElementById('posts').appendChild(postNode);
  };

  // Handle post creation success
  app.handlePostCreation = function (response) {
    title.value = '';
    body.value = '';

    return response.data;
  };

  // Handle post creation failure
  app.handlePostFailure = function (error) {
    // Handle error here
    console.log('Error during the post creation.')
  };

  /*****************************************************************************
  *
  * Methods for dealing with the model
  *
  ****************************************************************************/

  // Retrieve all the post from the JSONPlaceholder API
  app.getPosts = function () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.data;
      });
  };

  // Retrieve the user posts
  app.updateUserPosts = function () {
    return app.getPosts().then(app.setUserPosts);
  };

  // Set userPosts
  app.setUserPosts = function (posts) {
    app.userPosts = posts.filter(app.userFilter);
  };

  // Filter function used in setUserPosts
  app.userFilter = function (post) {
    return post.userId === app.userId;
  };

  // Create a new post
  app.createPost = function () {
    var title = document.getElementById('post-title-form');
    var body = document.getElementById('post-body-form');

    var data = {
      title: title.value,
      body: body.value,
      userId: 1
    };

    return axios
      .post('http://jsonplaceholder.typicode.com/posts', data)
      .then(app.handlePostCreation);
      .catch(app.handlePostFailure);
  };

  /*****************************************************************************
  *
  * Code required to start the app
  *
  ****************************************************************************/

  app.updateUserPosts().then(app.renderPosts);

})();
