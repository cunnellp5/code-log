var domUtils = require('../helper-functions/domUtils');
const util = domUtils.domUtils;

exports.seventeen = (function () {
  const question = `17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.`;
  const blockocode =`<code>
    function absoDiff(number) {
      return (number > 19) ? (3 * (number - 19)) : (19 - number);
    }

    console.log(absoDiff(9)) // 10
    console.log(absoDiff(33)) // 42
    </code>`;
  util.masterCreator('17', question, blockocode);

  function absoDiff(number) {
    return (number > 19) ? (3 * (number - 19)) : (19 - number);
  };
}());
