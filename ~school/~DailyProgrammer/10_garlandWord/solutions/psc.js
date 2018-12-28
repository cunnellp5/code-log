

function garland (str) {
  var letterCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.substr(0, i) == str.substr(-i)) {
      letterCount = i
      // console.log(str.substr(0,i));
      // console.log(str.substr(-i));
    }
  }
  return letterCount
}

console.log(garland('programmer'));  //0
console.log(garland('ceramic'));     //1
console.log(garland('onion'));       //2
console.log(garland('alfalfa'));     //4
console.log(garland('hotshots'));    //4
console.log(garland('abracadabra')); //4
console.log(garland('couscous'));    //4
