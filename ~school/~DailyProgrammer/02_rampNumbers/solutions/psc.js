function ramp (n) {
  n = n.toString().split('');
  for (var i = 0; i < n.length; i++) {
    if (n[i] < n[i+1]) {
      return true
    } else {
      return false
    }
  }
}

console.log(ramp(2039485));
console.log(ramp(1234));
console.log(ramp(1234321));
