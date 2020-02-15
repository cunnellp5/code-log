// const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
// const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// // const pizzas = featured.concat(specialty);
// let pizzas = [...featured, 'veg', ...specialty];
// // const fridayPizzas = [].concat(pizzas)
// const fridayPizzas = [...pizzas];
// console.log(pizzas)

// const deepDish = {
//   pizzaName: 'Deep Dish',
//   size: 'Medium',
//   ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
// };

// const title = Array.from(document.querySelector('.jump'), (title) => {
//     const word = title.textContent;
    
//     console.log([...word])
//     return title
// });
// const title = document.querySelector('.jump');
// title.innerHTML = sparanWrap(title.textContent);


// function sparanWrap(word) {
//     return [...word].map(letter => `<span>${letter}</span>`).join('');
// }


const people = [...document.querySelectorAll('.people p')];
const names = people.map((person) => person.textContent)
// console.log(names)

const deepDish = {
    pizzaName: 'DeepDish',
    size: 'medium',
    ingredients: ['marinatirea', 'itamlins sausage', 'doh', 'cheese']
}

const shoppingList = ['milk', 'flour', ...deepDish.ingredients];
// console.log(shoppingList)

const comments = [
    {id: 1, text: 'yaya'},
    {id: 2, text: 'ya'},
    {id: 3, text: 'yya'},
    {id: 4, text: 'y'},
    {id: 5, text: 'yaaaaa'},
]

// const id = 3;
// const commentIndex = comments.findIndex(comment => comment.id === id);
// console.log(commentIndex, 'hh')

// const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
// console.log(newComments);


const inventors = ['einstein', 'newton', 'galileo'];
const newInventors = ['must', 'jobs'];

// inventors.push.apply(inventors, newInventors);

// spread directly into a function
inventors.push(...newInventors);
// console.log(inventors)

// const name = ['phil', 'bear'];
// const sayHi = (first, last) => {
//     alert(`hey there ${first} ${last}`);
// }


// const convertCurrency = (rate, ...amounts) => {
//     return amounts.map((amount) => amount * rate);
// };

// const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
// console.log(amounts)


const runner = ['west bos', 22, 5.4, 4, 2, 6, 34];
// name , runner id , rest are kms
const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['phil', 'we', 'beau', 'lux', 'sheena'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players);