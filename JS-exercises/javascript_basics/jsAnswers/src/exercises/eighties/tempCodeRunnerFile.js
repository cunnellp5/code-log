function add_two_digits(number) {
  return number.toString().split('').reduce((a,b) =>+a+(+b));
}

console.log(add_two_digits(25)) // 7
console.log(add_two_digits(50)) // 5