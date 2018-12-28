var arr1 = [ "cat", "dog", "fish", "zebra" ],
    arr2 = [ "lion", "aardvark", "gorilla" ]

function combineAndSort (arr1, arr2){
  var arr3 = arr1.concat(arr2)
  return arr3.sort();
}

console.log(combineAndSort(arr1, arr2));
