// Description:
//
// Write a function
//
// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight
// triple of a number at any place in num1 and also a straight double of the
// same number in num2.
// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s
//
// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2
// has only a single 2
//
// tripledouble(12345, 12345) == 0
//
// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {

  num1 = num1.toString().split('')
  num2 = num2.toString().split('')

  triple = {}
  double = {}

  for (var i = 0; i < num1.length; i++) {
    if (num1[i] <= 9 && num1[i] >= 0) {
      if (triple[(num1[i])]) {
        triple[num1[i]]++;
      } else {
        triple[num1[i]] =1
      }
    }
  }
  //finds triple of a number
  var threes = Object.values(triple)
  var indexTrip = threes.indexOf(3)
  var keyRay = Object.keys(triple)[indexTrip]

  for (var i = 0; i < num2.length; i++) {
    if (num2[i] <= 9 && num2[i] >= 0) {
      if (double[(num2[i])]) {
        double[num2[i]]++;
      } else {
        double[num2[i]] =1
      }
    }
  }

  var findDoubles = Object.values(double)
  var dubb = Object.keys(double)
  var indexDubb = dubb.indexOf(keyRay)
  if (findDoubles[indexDubb] === 2) {
    return 1
  } else {
    return 0
  }
}


console.log(tripledouble(451999277,41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0
console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(666789, 12345667)); //1
console.log(tripledouble(10560002, 100)); // 1
