// Write function replaceAll (Python: replace_all) that will replace all
//  occuriencies of an item with another.
//
// Python: The function has to work for strings and lists.
//
// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to
// get new list [2,2,2]
//
// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]


function replaceAll (seq, find, replace) {
  var holdArr = [];
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] === find) {
      holdArr.push(replace)
    } else {
      seq[i] = replace
      holdArr.push(seq[i])
    }
  }
  if (holdArr[0] === isNaN) {
    return holdArr.join('')
  } else {
    return holdArr
  }
}
console.log(replaceAll([1,2,2], 1, 2));
console.log(replaceAll(['Hello World'], 'o', 0));
