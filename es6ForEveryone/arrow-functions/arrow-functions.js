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


// *****************************

const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
  console.log(this)
  this.classList.toggle('on')
})