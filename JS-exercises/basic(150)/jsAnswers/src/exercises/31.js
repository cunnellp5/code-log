const question = `31. Write a JavaScript program to find the largest of three given integers.`;
const blockcode =`<code>
function largestOfThree(...numbers) {
    return numbers.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
}

console.log(largestOfThree(1, 2, 3)); // 3
console.log(largestOfThree(1, 23, 3)); // 23
console.log(largestOfThree(100, 23, 3)); // 100
console.log(largestOfThree(-100, 3, 3)); // 3
    </code>`;

function largestOfThree(...numbers) {
    return numbers.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
}

export { question, blockcode }
