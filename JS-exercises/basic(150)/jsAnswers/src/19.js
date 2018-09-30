var helpers = require('./helpers');
const util = helpers.helpers;

exports.ninteen = (function () {
  const question = `19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.`;
  const blockocode =`<code>
    function checkGivenInt(integer) {
      let check1 = Math.abs(100 - integer) <= 20;
      let check2 = Math.abs(400 - integer) <= 20;
      return check1 || check2
    }

    console.log(checkGivenInt(100)) // true
    console.log(checkGivenInt(421)) // false
    console.log(checkGivenInt(25)) // false
    console.log(checkGivenInt(80)) // true
    console.log(checkGivenInt(120)) // true
    console.log(checkGivenInt(320)) // false
      </code>`;
  util.masterCreator('19', question, blockocode);

  function checkGivenInt(integer) {
    let check1 = Math.abs(100 - integer) <= 20;
    let check2 = Math.abs(400 - integer) <= 20;
    return check1 || check2
  }
}())
