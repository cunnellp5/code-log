function ramp (num) {
  var sorted = num.toString().split('').sort((a,b) => {
    return a - b
  }).join('')
  if (num == sorted) {
    return true
  } else {
    return false
  }
}

console.log(ramp(1234321));
console.log(ramp(1234));
