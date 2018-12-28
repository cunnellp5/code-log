// The aim of this Kata is to write a function which will reverse the case of all
// consecutive duplicate letters in a string. That is, any letters that occur one
// after the other and are identical.
//
// If the duplicate letters are lowercase then they must be set to uppercase, and
// if they are uppercase then they need to be changed to lowercase.
//
// Examples:
//
// reverseCase("puzzles")    Expected Result: "puZZles"
// reverseCase("massive")    Expected Result: "maSSive"
// reverseCase("LITTLE")     Expected Result: "LIttLE"
// reverseCase("shhh")       Expected Result: "sHHH"

function reverseCase(string) {
  let letters = [];
  string = string.split('');

}

function upper (word) {
  return word.toUpperCase();
}
function lower (word) {
  return word.toLowerCase();
}
console.log(reverseCase("puzzles"));
console.log(reverseCase("www"));
