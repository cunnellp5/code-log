const question = `23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1`;
const blockcode =`<code>
function swapFirstWithLast(string) {
  var ray = string.split('');
  var first = ray.shift();
  var last = ray.pop();
  ray.unshift(last);
  ray.push(first);
  return ray.join('');
}

console.log(swapFirstWithLast('somestring')) // gomestrins
console.log(swapFirstWithLast('belly')) // yellb
    </code>`;

function swapFirstWithLast(string) {
  var ray = string.split('');
  var first = ray.shift();
  var last = ray.pop();
  ray.unshift(last);
  ray.push(first);
  return ray.join('');
}

export { question, blockcode }
