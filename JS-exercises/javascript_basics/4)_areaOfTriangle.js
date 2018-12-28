// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// const a = 5;
// const b = 6;
// const c = 7;

function areaTriangle(a, b, c) {
 let S = getSide(a, b, c);
 let A = getArea(S, a, b, c);
 return A
}

function getSide(...sides) {
  let tot = sides.reduce((prev, curr) => prev + curr)
  return tot / 2
}

function getArea(S, a, b, c) {
  let innerGuts = ((S*S) - (S*a))*(S - b)*(S - c);
  return Math.sqrt(innerGuts)
}

console.log(areaTriangle(5, 6, 7))