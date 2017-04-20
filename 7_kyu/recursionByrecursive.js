// Recurrence by Recursion
//
// Overview
//
// In mathematics, a recurrence formula is a formula that shows the relationship
// between each term and the next in a numerical sequence. For example, a sequence
//  may be defined as follows:
//
// n = t + 3, f = 1
// ... where n is the next term, t is the current term and f is the first term in
//  the sequence.
//
// Recurrence in mathematics is very similar to recursion in computer programming
//  in a lot of ways:
//
// In both recurrence and recursion, the main problem invokes a simpler problem of
// the same nature. For example, in recurrence formulae, calculation of the seventh
//  term of the sequence requires the sixth term of the sequence, whose calculation
//   then requires the fifth term of the sequence and so on.
// In both recurrence and recursion, there is always something called the base case
//  which kind of acts like a floor - without it, the calculation (or invocation)
//   process would never end and nothing would be solved! For example, the base case
//   in recurrence formulae is the first term, which always has to be explicitly
//   and separately defined for the whole sequence to work. In computer programming,
//    it would be a special case where the function no longer invokes itself and
//     instead just returns a value.
// Going back to the formula above, our first term is 1 and each next term is the
//  current term added by 3. Thus we have:
//
// First term: 1
// Second term: 1 + 3 = 4
// Third term: 4 + 3 = 7
// 7 + 3 = 10
// 13
//
// ... and so on.
// Task
//
// Your task is to create a function, recurrence(base, formula, term) where base
//  is the base case or first term of the sequence, formula is the recurrence
//  formula given as a function/method and term is the number of the term of the
//   series which your function/method has to calculate. For example:
//
// recurrence(1, n => n + 3, 4) === 10
// recurrence(3, n => 2 * n, 5) === 48


function recurrence(base, formula, term) {
  if (term <= base) {
    return base
  } else {
    return recurrence(base)
  }
}
console.log(recurrence (1, n => n + 3, 5));
// console.log(recurrence (3, n => 2 * n, 5));

//
// function revString(str){
//   if (str.length <= 1) {
//     return  str
//   }
//   return revString(str.substr(1)) + str[0]
// }
// console.log(revString('erofatrev'));
// function fib (n) {
//   if (n <= 0) {
//     return 0
//   } else if (n <= 2) {
//     return 1
//   } else {
//     return fib(n-2) + fib(n-1)
//   }
// }
// console.log(fib(2)); // 8

// recursion of sum example
// function sum (n) {
//   if (n == 0) {
//     return 1
//   } else {
//     return n + sum(n-1)
//   }
// }
// console.log(sum(5));

function factorial (n) {
  if (n == 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}
console.log(factorial(3));

// assert.equal(sum(10, 89, 4), 103);


// function sum (int) {
//   return (x + y + z)
// }
// console.log(sum(10, 89, 4));


// var numbers = [1,2,3,4]
// var string = ['a', 'b', 'c']
// function spread (ray1, ray2) {
//
//   return [...ray1, ...ray2]
// }
// console.log(spread(numbers, string));