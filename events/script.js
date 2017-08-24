// ex 1
// TODO: Add a click event listener and log in the console 'clicked'
var clickMe = document.querySelector('#click-me');

var clickHandler =  function (event) {
  console.log('clicked');
};

clickMe.addEventListener('click', clickHandler);

// ex 2
// TODO: Remove the event listener (not the code, remove it from the element)
clickMe.removeEventListener('click', clickHandler);
