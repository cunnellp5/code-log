Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if(i == 0) return this;
    while(--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

const cuts = ['chuck', 'brisket', 'shank', 'short ribs'];

// for (let i = 0; i < cuts.length; i++) {
//     console.log(cuts[i]);
// }


// cant skip any part of the loop
// cuts.forEach(cut => {
//     console.log(cut)
// });

cuts.shop = 'MM Measts';

// console.log(cuts, 'is ther an obj here?')

// loops modified prototype of arrays
// for(const index in cuts) {
//     console.log(cuts[index])
// };

// this works on everything except objects?!
for (const cut of cuts) {
    if(cut === 'brisket') {
        continue;
    }
    console.log(cut)
}