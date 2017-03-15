
function dirReduc(arr){
  var n = [];
  var s = [];
  var e = [];
  var w = [];
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH") {
      n.push(arr[i])
    } else if (arr[i] === "SOUTH") {
      s.push(arr[i])
    } else if (arr[i] === "EAST") {
      e.push(arr[i])
    } else if (arr[i] === "WEST") {
      w.push(arr[i])
    }
  }

}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]));
