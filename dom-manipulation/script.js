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
