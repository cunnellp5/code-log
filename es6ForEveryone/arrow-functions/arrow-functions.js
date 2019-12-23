const names = ['phil', 'arms', 'jazz'];


const fullNamesOne = names.map(function(name) {
  return `${name} bos`;
});

const fullNames2 = names.map((name) => {
  return `${name} bos`;
});

const fullNames3 = names.map((name) => `${name} bos`);

const fullNames4 = names.map(name => `${name} bos`);

const fullNames5 = names.map(() => `cool boss`);


// console.log(fullNamesOne5);

// function sayMyName(name) {
//   alert('hello' + name);
// }

const sayMyName = (name) => {
  alert('hello ' + name);
}

sayMyName('flip')