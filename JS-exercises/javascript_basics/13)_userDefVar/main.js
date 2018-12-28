var imaVariable = 'i aint never heard of a \'user-defined var\''
var n = 3
this[imaVariable] = n;
this.imaVariable = n;
console.log(this[imaVariable]) // undefined
console.log(imaVariable) // 3
console.log(this.imaVariable) // 3
