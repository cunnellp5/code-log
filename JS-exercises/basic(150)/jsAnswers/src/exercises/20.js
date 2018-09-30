var domUtils = require('../helper-functions/domUtils');
const util = domUtils.domUtils;

exports.twenty = (function () {
  const question = `20. Write a JavaScript program to check from two given integers, if one is positive and one is negative`;
  const blockocode =`<code>
    function posAndNeg(first, second) {
      if (typeof(first || second) !== 'number') return false
      let check1 = first >= 0;
      let check2 = second >= 0;
      return check1 !== check2;
    }

    console.log(posAndNeg(3, 4)) // false
    console.log(posAndNeg(3, -4)) // true
    console.log(posAndNeg(3, 0)) // false
    console.log(posAndNeg(3, 30)) // false
    console.log(posAndNeg(-4, -1)) // false
    console.log(posAndNeg(undefined, null)) // false
    console.log(posAndNeg('poop', 3)) // false
      </code>`;
  util.masterCreator('20', question, blockocode);

  function posAndNeg(first, second) {
    if (typeof(first || second) !== 'number') return false
    let check1 = first >= 0;
    let check2 = second >= 0;
    return check1 !== check2;
  }
}());
