// Multiply two numbers! Simple!
//
// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b) {
  if ((a) == 0 || (b) == 0) {
    return '0'
  }
    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];
    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += a[i] * b[j];
        }
    }
    for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('').replace(/^0+/, '');;
  }

console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
// "2830869077153280552556547081187254342445169156730"
console.log(multiply("2", "0")); // 0
console.log(multiply("0", "30")); // 0
console.log(multiply("0000001", "3")); // 3
console.log(multiply("1009", "03")); // 3027
