// const people = document.querySelectorAll('.people p');
// const peopleArray = Array.from(people, person => {
//     console.log(person)
//     return person.textContent
// });

// console.log(peopleArray)

// const names = peopleArray.map((person) => person.textContent)

function sumAll() {
    const nums = Array.from(arguments);
    return nums.reduce((previous,next) => {
        return previous + next;
    }, 0)
}

sumAll(2,3,4,5,4,3,3,53,5,34,35,3,5,4,6,55);

const ages = Array.of(23,4,5,6,54,3,3);
console.log(ages)