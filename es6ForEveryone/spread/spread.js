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
const title = document.querySelector('.jump');
title.innerHTML = sparanWrap(title.textContent);


function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}