var domUtils = require('../helper-functions/domUtils');
const util = domUtils.domUtils;

exports.twentysix= (function () {
  const question = `26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.`;
  const blockocode =`<code>
  function frontNBack3(string) {
    let lastThree = string.substring(string.length - 3)
    return lastThree + string + lastThree;
  }

  console.log(frontNBack3('rapper')) // perrapperper
  console.log(frontNBack3('peppermint')) // intpeppermintint
  console.log(frontNBack3('poopy')) // opypoopyopy
      </code>`;
  util.masterCreator(question[0]+question[1], question, blockocode);

  function frontNBack3(string) {
    let lastThree = string.substring(string.length - 3)
    return lastThree + string + lastThree;
  }
}());
