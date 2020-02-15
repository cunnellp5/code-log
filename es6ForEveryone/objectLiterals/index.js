const first = 'snicmers';
const last = 'box';
const age = 2;
const breed = 'ing charse cav ';

const dog = {
    first,
    last,
    age,
    breed,
    pals: ['hugo', 'scummy']
}

// console.log(dog);

const modal = {
    create(selector) {

    },
    open(content) {

    },
    close(goodbye) {

    }
}

const invertColor = (color) => {
    return '#' + ('000000' + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';
const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColor(value)
}

console.log(tShirt)

const keys = ['xize', 'color', 'wight'];
const values = ['medium', 'red', 222];

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
}

console.log(shirt)