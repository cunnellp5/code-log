var domUtils = require('../helper-functions/domUtils');
const util = domUtils.domUtils;

exports.twentyfour = (function () {

  const question = `24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.`;
  const blockocode =`<code>
  function firstLetterJam(string) {
    var ray = string.split('');
    var first = ray[0];

    ray.unshift(first);
    ray.push(first);
    return ray.join('');
  }

  console.log(firstLetterJam('somestring')) // ssomestrings
  console.log(firstLetterJam('belly')) // bbellyb
      </code>`;
  util.masterCreator('24', question, blockocode);

  function firstLetterJam(string) {
    var ray = string.split('');
    var first = ray[0];
    ray.unshift(first);
    ray.push(first);
    return ray.join('');
  }
}());
