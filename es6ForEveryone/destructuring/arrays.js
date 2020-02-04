// const details = ["poo", "py", 1333];
// const [name, nametwo, id] = details;

// console.log(name, nametwo, id);

// const data = "basketball, sport, 94949, 11, poo, wbo, bose";
// const [itemName, category, sku, inventory] = data.split(",");

// const team = ["wes", "merry", "sarah", "keegan", "riker"];
// const [captain, assistant, ...players] = team;


let inring = 'hulk hogan';
let onside = 'the rock';

// old way
// var tmp = inring;
// inring = onside;
// onside = tmp;
// delete tmp;

// new way

console.log(inring, onside);

[inring, onside] = [onside, inring];

console.log(inring, onside);