// Create a function taking a positive integer as its parameter and returning a
// string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting
// with the left most digit and skipping any digit with a value of zero. In Roman
// numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is
// written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in
// descending order: MDCLXVI.

// Example:
//
// solution(1000); // should return 'M'
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// CM         900
// CD         400
// XC         90
// XL         40
// VX         9
// IV         4

function solution (num) {
  if (num > 999) {
    var thousand = Math.floor((num / 1000));
  }

  let hundredsPlace = num % 1000;
  if (hundredsPlace >= 900) {
    var ninehundred = Math.floor(hundredsPlace / 900);
  } else if (hundredsPlace < 900 && hundredsPlace > 500) {
    var fiveshun = Math.floor(hundredsPlace / 500);
    var hundreds = Math.floor((num % 500) / 100);
  } else if (hundredsPlace == 500) {
    var fiveshun = Math.floor(hundredsPlace / 500);
  } else if (hundredsPlace >= 400 && hundredsPlace < 500) {
    var fourhundred = Math.floor(hundredsPlace / 400);
  } else if (hundredsPlace < 400) {
    var hundreds = Math.floor((num % 500) / 100);
  }

  let tensPlace = num % 100;
  if (tensPlace >= 90) {
    var ninty = Math.floor(tensPlace / 90);
  } else if (tensPlace < 90 && tensPlace > 50) {
    var fifty = Math.floor(tensPlace / 50);
    var tens = Math.floor((num % 50) / 10);
  } else if (tensPlace == 50) {
    var fifty = Math.floor(tensPlace / 50);
  } else if (tensPlace < 50 && tensPlace >= 40) {
    var forty = Math.floor(tensPlace / 40);
  } else if (tensPlace < 40) {
    var tens = Math.floor((num % 50) / 10);
  }

  let singlesPlace = num % 10
  if (singlesPlace == 9) {
    var nine = Math.floor(singlesPlace / 9);
  } else if (singlesPlace < 9 && singlesPlace > 5) {
    var five = Math.floor(singlesPlace / 5);
    var ones = (num % 5) / 1;
  } else if (singlesPlace == 5) {
    var five = Math.floor(singlesPlace / 5);
  } else if (singlesPlace >= 4 && singlesPlace < 5) {
    var four = Math.floor((num % 5) / 4);
  } else if (singlesPlace < 4) {
    var ones = (num % 5) / 1;
  }

  let obj = {
    M: thousand,
    CM: ninehundred,
    D: fiveshun,
    CD: fourhundred,
    C: hundreds,
    XC: ninty,
    L: fifty,
    XL: forty,
    X: tens,
    IX: nine,
    V: five,
    IV: four,
    I: ones
  };
  return answer(obj)
}

function answer (obj) {
  let result = [];
  for (var prop in obj) {
    if (obj[prop]) {
      if (obj[prop] > 1) {
        for (var i = 0; i < obj[prop]; i++) {
          result.push(prop)
        }
      } else {
        result.push(prop)
      }
    }
  }
    return result.join('')
}

// console.log(solution(1));
console.log(solution(345)); // CCCXLV
// console.log(solution(746));
// console.log(solution(1990)); // MCMXC
// console.log(solution(2007));
