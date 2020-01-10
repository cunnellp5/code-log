const names = ["phil", "arms", "jazz"];

const fullNamesOne = names.map(function(name) {
  return `${name} bos`;
});

const fullNames2 = names.map(name => {
  return `${name} bos`;
});

const fullNames3 = names.map(name => `${name} bos`);

const fullNames4 = names.map(name => `${name} bos`);

const fullNames5 = names.map(() => `cool boss`);

// console.log(fullNamesOne5);

// function sayMyName(name) {
//   alert('hello' + name);
// }

const sayMyName = name => {
  alert("hello " + name);
};

// sayMyName("flip");

const race = "100m dash";
const winners = ["hunter gath", "singag song", "simagbos"];

const win = winners.map((winner, i) => ({
  name: winner,
  race,
  place: i + 1
}));

// console.table(win);

const ages = [12, 14, 42, 63, 74, 24, 13, 24, 62, 84, 96, 75, 355];
const old = ages.filter(age => age >= 60);

// console.log(old);

const box = document.querySelector(".box");
box.addEventListener("click", function() {
  let first = "opening";
  let second = "open";
  if (this.classList.contains(first)) {
    [first, second] = [second, first];
  }
  this.classList.toggle(first);
  setTimeout(() => {
    this.classList.toggle(second);
  }, 500);
});

function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

const totalBill = calculateBill(100, undefined, undefined);
console.log(totalBill);


// ***************when not to use fat arrow**************

const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
  console.log(this)
  this.classList.toggle('on')
})

// when you need a method to bind to an object

const person = {
  points: 23,
  score() {
    console.log(this)
    this.points++;
  }
}

// whn you need to add a prototype method

class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const beemer = new Car('bmw', 'blue');
const subi = new Car('subaru', 'white');

Car.prototype.summarize = function() {
  console.log(this)
  return `This car is a ${this.make} in the color ${this.color}`;
}

// when you need arguments object

const orderChildren = function() {
  const children = Array.from(arguments);
  console.log(arguments);
  return children.map((child, i) => {
    return `${child} was child #${i}`;
  })
}