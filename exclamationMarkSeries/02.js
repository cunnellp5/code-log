// Remove all exclamation marks from the end of sentence.
// for example
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s){
  let spl = s.split('')
return s = spl.replace(/!+$/gm, '');
}


console.log(remove("He!! ho!"));
