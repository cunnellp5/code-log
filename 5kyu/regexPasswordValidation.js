// You need to write regex that will validate a password to make sure it meets
// the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
console.log(validate('djI38D55')); // true
console.log(validate('a2.d412')); // false

//    /^[a-z]{6,}$/     >> shows at least 6 characters
//    ^                  // the start of the string
//    (?=.*[a-z])        // use positive look ahead to see if at least one lower case letter exists
//    (?=.*[A-Z])        // use positive look ahead to see if at least one upper case letter exists
//    (?=.*\d)           // use positive look ahead to see if at least one digit exists
//    (?=.*[_\W])        // use positive look ahead to see if at least one underscore or non-word character exists
//    .+                 // gobble up the entire string
//    $                  // the end of the string
