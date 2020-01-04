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

console.table(win);

const ages = [12, 14, 42, 63, 74, 24, 13, 24, 62, 84, 96, 75, 355];
const old = ages.filter(age => age >= 60);

console.log(old);
