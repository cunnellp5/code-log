// Given an array of positive integers, return true if the average of its elements
// is an integer and false otherwise.
// Code Limit
//
// Less than 46 characters.
// Example
//
// For a = [1, 2, 3], the output should be true.
//
// (1 + 2 + 3) / 3 = 2
//
// For a = [1, 2, 2], the output should be false.
//
// (1 + 2 + 2) / 3 = 1.666666667
//
// For a = [1, 9, 8, 2], the output should be true.
//

// integerAverage=a=>{var avg = a.reduce((p,c)=>{(p+c)})/a.length  Number.isInteger(avg)}

// integerAverage=a=>{return Number.isInteger(a.reduce((p,c)=>{return(p+c)})/a.length)}


// integerAverage=a=>a.reduce((p,c)=>p+c)/a.length)%1==0?true:false;
//
// integerAverage=a=>Number.isInteger(a.reduce((a,v)=>a+v)/a.length)

integerAverage=a=>eval(a.join`+`)%a.length==0
console.log(integerAverage([5]));
