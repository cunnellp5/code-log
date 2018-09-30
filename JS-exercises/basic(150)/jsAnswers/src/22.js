var helpers = require('./helpers');
const util = helpers.helpers;

exports.twentytwo = (function () {
  const question = `22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.`;
  const blockocode =`<code>
  function removeLetter(string, index) {
    var ray = string.split('');
    var removed = ray.splice(index, 1);
    return ray.join('');
  }

  console.log(removeLetter('somestring', 4)) // sometring
  console.log(removeLetter('44', 1)) // 4
      </code>`;
  util.masterCreator('22', question, blockocode);

  function removeLetter(string, index) {
    var ray = string.split('');
    var removed = ray.splice(index, 1);
    return ray.join('');
  }
}());
