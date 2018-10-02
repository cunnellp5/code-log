var domUtils = require('../helper-functions/domUtils');
const util = domUtils.domUtils;

(function () {
  const question = `27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.`;
  const blockocode =`<code>
  function checkJavaString(string) {
    let java = string.substring(0,4).toLowerCase();
    return java === 'java' ? true : false;
  }

  console.log(checkJavaString('java Chocolate Chip')); // true
  console.log(checkJavaString('Jovial')); // false
  console.log(checkJavaString('javaScript')); // true
      </code>`;
  util.masterCreator(question[0]+question[1], question, blockocode);

  function checkJavaString(string) {
    let java = string.substring(0,4).toLowerCase();
    return java === 'java' ? true : false;
  }
}());
