// Remove a exclamation mark from the end of string. For a beginner kata,
// you can assume that the input data is always a string, no need to verify it.

function remove(marks){
return marks.replace(/!$/igm, '');
}

console.log(remove("He!! ho!"));
