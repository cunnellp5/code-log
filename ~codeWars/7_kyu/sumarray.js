// Your job is to add a method 'sum' to all array objects, which sums all the
// numbers in it. You should return 0 if the array is empty.

var arr = [1,2,3,4];
arr.sum = function() {
  return arr.reduce((a,b) => a+b)
}
arr.sum();  //returns 10

var sum = {
  arr: [],
  sum: function() {
    return arr.reduce((a,b) => a+b)
  }
}



var circle = {
    radius: 2,
    circumference: function() {
        return Math.PI * 2 * this.radius;
    },
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
}
circle.radius; // 2
circle.area;   // function () { ...
circle.area(); // 12.566370614359172
