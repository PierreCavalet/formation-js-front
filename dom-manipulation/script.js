// ex 1
// TODO: Transform the following text in red
document.querySelector('#i-should-be-red').style.color = "red";

// ex 2
// TODO: Transform the following texts in blue
var shouldBeBlue = document.querySelectorAll('.we-should-be-blue');
shouldBeBlue.forEach(element => {
  element.style.color = "blue";
});

// ex 3
// TODO: Transform Jack in green using the jack-list list
var goodList = document.querySelector('#good-list');
var shouldBeGreen = goodList.querySelectorAll('li');
shouldBeGreen.forEach(element => {
  element.style.color = "green";
});


// ex 4
var displayButton4 = document.querySelector('#ex4-display')
displayButton4.addEventListener('click', function (event) {
  // TODO: display the value of the input
  var value = document.querySelector('#ex4-input').value;
  console.log(value);
});

// ex 5
// TODO: Add a 'first' class to the first span
var first = document.querySelector('#first')
first.classList.add('first');

// ex 6
// TODO: Remove the 'second' class to the second span
var second = document.querySelector('#second')
second.classList.remove('second');

// ex 7
var toggleButton7 = document.querySelector('#ex7-toggle')
toggleButton7.addEventListener('click', function (event) {
  // TODO: display the value of the input
  document.querySelector('#third').classList.toggle('third');
});

// ex 8
// TODO: Remove the paragraph 'remove-me'
var removeMe = document.querySelector('#remove-me');
removeMe.parentNode.removeChild(removeMe);

// ex 9
// TODO: Display the span value in the console when you click on the button
var displayButton9 = document.querySelector('#ex9-display')
displayButton9.addEventListener('click', function (event) {
  // TODO: display the value of the span
  var getText = document.querySelector('#get-text');
  console.log(getText.textContent)
});


// ex 10
// TODO: Display the div inner HTML in the console when you click on the button
var displayButton10 = document.querySelector('#ex10-display')
displayButton10.addEventListener('click', function (event) {
  // TODO: display the value of the span
  var getText = document.querySelector('#ex10');
  console.log(getText.innerHTML)
});


// ex 11
// TODO: Create a paragraph element and insert it in the div
var paragraph = document.createElement('p');
var node = document.createTextNode('a new paragraph');
paragraph.appendChild(node);

var container = document.getElementById('paragraph-container');
container.appendChild(paragraph);
