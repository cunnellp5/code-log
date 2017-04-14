// Invert a given list of integer values.
//
// Python/JS/PHP:
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.


function invert(array) {
 return array.map((element)=>{
   return element !== 0 ? -element : 0;
 })
}

console.log(invert([1,2,3,4,5]));
