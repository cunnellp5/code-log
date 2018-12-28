function rpc (str){
  var arr = str.split(' ');
  var emptyArr = [];
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === "+") {
      var pone = emptyArr.pop()
      var ptwo = emptyArr.pop()
      emptyArr.push(parseInt(pone) + parseInt(ptwo))
    } else if (arr[i] === "x"|| arr[i] === "*") {
      var pthree = emptyArr.pop()
      var pfour = emptyArr.pop()
      emptyArr.push(parseInt(pthree) * parseInt(pfour))
    } else if (arr[i] === "/") {
      var pseven = emptyArr.pop()
      var peight = emptyArr.pop()
      emptyArr.push(parseInt(peight) / parseInt(pseven))
    } else if (arr[i] === "-") {
      var pfive = emptyArr.pop()
      var psix = emptyArr.pop()
      emptyArr.push(parseInt(psix) - parseInt(pfive))
    } else {
      emptyArr.push(arr[i])
    }
  }
  return emptyArr
}
console.log(rpc('5 1 2 + 4 x + 3 -')); //[14]
console.log(rpc('1 2 + 4 5 6 8 * - + +')); //-36
