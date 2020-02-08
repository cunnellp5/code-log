// Array.prototype.shuffle = function() {
//     var i = this.length, j, temp;
//     if(i == 0) return this;
//     while(--i) {
//         j = Math.floor(Math.random() * (i + 1));
//         temp = this[i];
//         this[i] = this[j];
//         this[j] = temp;
//     }
//     return this;
// };

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
// for (const cut of cuts) {
//     if(cut === 'brisket') {
//         continue;
//     }
//     console.log(cut)
// }

// *******************************************
// how can we get the index in the for of loop
// >> just iterate over the 'array iterator', destructure the index and the value immediately
// for (const [i, cut] of cuts.entries()) {
//     console.log(`${cut} is the ${i + 1} item`)
// }

// function addUpNumbers() {
//     // console.log([1,2])
//     // console.log(arguments);
//     let total = 0;
//     for(const num of arguments) {
//         total += num;
//     }
//     console.log(total)
//     return total;
// }
// addUpNumbers(13,41,24,5,3,45,5,3,32,4,532,3);

// looping strings
// const name = 'phil bos';
// for(const char of name) {
//     console.log(char);
// }

// loop dom collections
const ps = document.querySelectorAll('p');
// console.log(ps)

for(const p of ps) {
    console.log(p)
    p.addEventListener('click', function() {
        console.log(this.textContent);
    })
}