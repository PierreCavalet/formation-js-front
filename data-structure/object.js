// TODO: 1) create an object named 'cat' with 'name', 'legs' and 'tails' properties
var cat = {
  name: 'felix',
  legs: 4,
  tails: 1
};

// TODO: 2) access the name property with the dot operator (.)
console.log(cat.name);

// TODO: 3) access the legs property with the bracket notation ([])
console.log(cat['legs']);

// TODO: 4) access the legs property with the bracket notation and a variable
var legs = 'legs';
console.log(cat[legs]);

// TODO: 5) modify the legs property
cat.legs = 3;

// TODO: 6) add a new head property
cat.head = 1;

// TODO: 7) remove the tails property
delete cat.tails;

// TODO: 8) check if the head property exist in the cat object
console.log(cat.hasOwnProperty('head'));

// TODO: 9) nest the cat inside an other object (for example, John, who owns the cat)
var john = {
  name: 'John',
  cat: cat
}
