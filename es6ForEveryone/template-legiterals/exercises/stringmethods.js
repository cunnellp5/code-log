const courst = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// .startsWith()

// .endsWith()

// .includes()

// .repeat()


function leftPad(str, length = 20) {
    return `>> ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(colour))