// Remove all exclamation marks from the end of sentence.
// for example
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s){
return s = s.replace(/!+$/gm, '');
}


console.log(remove("He!! ho!!!!!!!!"));
