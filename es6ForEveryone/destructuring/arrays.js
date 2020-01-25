const details = ["poo", "py", 1333];
const [name, nametwo, id] = details;

console.log(name, nametwo, id);

const data = "basketball, sport, 94949, 11, poo, wbo, bose";
const [itemName, category, sku, inventory] = data.split(",");

const team = ["wes", "merry", "sarah", "keegan", "riker"];
const [captain, assistant, ...players] = team;
