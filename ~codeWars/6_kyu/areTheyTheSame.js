// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in
// Clojure) that checks whether the two arrays have the "same" elements, with
// the same multiplicities. "Same" means, here, that the elements in b are the
// elements in a squared, regardless of the order.
//
// Examples
//
// Valid arrays
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the
// square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square
// of 161, and so on. It gets obvious if we write b's elements in terms of squares:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
//
// If we change the first number to something else, comp may not return true anymore:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
//
// Remarks
//
// a or b might be [] (all languages). a or b might be nil or null or None (except
//    in Haskell, Elixir, C++, Rust).
//
// If a or b are nil (or null or None), the problem doesn't make sense so return
//  false.
//
// If a or b are empty the result is evident by itself.
//
// Note for C
//
// The two arrays have the same size (> 0) given as parameter in function comp.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2){
  if (!array2) {
    return false
  } else if (array1.length === 0 && array2.length === 0) {
    return true
  } else {
    var one = array1.sort(function(a, b) {
      return a - b;
    })
    var two = array2.sort(function(a, b) {
      return a - b;
    })
    var squareMe = one.map(function(element) {
      return element * element;
    })
    for (var i = 0; i < squareMe.length; i++) {
      if (squareMe[i] !== two[i]) {
        return false
      }
    }
    return true
  }
}


console.log(comp(a,b));
// console.log(comp([41, 95, 66, 86, 2, 76, 14],[1682, 9025, 4356, 7396, 4, 5776, 196]));
