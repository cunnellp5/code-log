// Buying in bulk is often cheaper than buying individual items. You will have to
//  determine the total cost of apples. Write a function called apples that takes
//  the arguments kilos and price. Purchases of 1 or more kilograms get a discount
//   of 5%, purchases of 3 or more kilograms get a discount of 10%, purchases of 5
//    or more kilograms get a discount of 15%, and so on until you reach the maxium
//     discount of 30%.

function apples(kilos, price) {

  const poop = (kilos * price)

  switch (!!kilos) {
    case kilos < 3:
      var result = (poop * (0.05))
      return checker(result, price)
      break;
    case kilos < 5 && kilos >= 3:
      var result = (poop * (.1))
      return checker(result, price)
      break;x
    case kilos < 5 && kilos >= 3:
      var result = (poop * (.15))
      return checker(result, price)
      break;
    case kilos < 7 && kilos >= 5:
      var result = (poop * (.15))
      return checker(result, price)
      break;
    case kilos < 9 && kilos >= 7:
      var result = (poop * (.25))
      return checker(result, price)
      break;
    default:
      var result = (poop * (.3))
      return checker(result, price)
  }
}

function checker (result, price) {
  return result > price ? result - price : price - result
}
console.log(apples(0.5, 2.98)); // 1.49
console.log(apples(1, 6.7)); // 6.365
console.log(apples(6, 2.75)); // 14.025

// switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
// }
