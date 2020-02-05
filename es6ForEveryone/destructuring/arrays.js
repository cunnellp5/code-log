// strict mode
// const details = ["poo", "py", 1333];
// const [name, nametwo, id] = details;

// console.log(name, nametwo, id);

// const data = "basketball, sport, 94949, 11, poo, wbo, bose";
// const [itemName, category, sku, inventory] = data.split(",");

// const team = ["wes", "merry", "sarah", "keegan", "riker"];
// const [captain, assistant, ...players] = team;


// let inring = 'hulk hogan';
// let onside = 'the rock';

// // old way
// // var tmp = inring;
// // inring = onside;
// // onside = tmp;
// // delete tmp;

// // new way

// console.log(inring, onside);

// [inring, onside] = [onside, inring];

// console.log(inring, onside);

// canadian base
function convertCurrency(amount) {
    const converted = {
        UDS: amount * .76,
        GPB: amount * .53,
        AUD: amount * 1.01,
        MEX: amount * 13.36,
    };
    return converted;
}
// // canadian base
// const hundo = convertCurrency(100);
// console.log(hundo.AUD);
// console.log(hundo.GPB);
// console.log(hundo.MEX);

// destructuring immediagely
// const { UDS, GPB, AUD, MEX } = convertCurrency(100);

function tipCalc({total = 100, tip = 0.15, tax = 0.13} = {}) {
    return total + (tip * total) + (tax * total);
}

// const bill = tipCalc({ total: 200, tip: 0.20, tax: 0.13 });
// const bill = tipCalc({ total: 200, tip: 0.20 });
// const bill = tipCalc({ total: 200 });
const obj = { total: 200, tip: 0.20, tax: 0.13 }
const bill = tipCalc(obj);
console.log(bill);