// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

var a = document.createElement('a')
a.setAttribute("name", "23");
var javaScriptDiv = document.createElement('div');
    // javaScriptDiv.setAttribute("id", "21");
javaScriptDiv.innerText = '23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1'

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


var javaScriptDivPre = document.createElement('pre')
javaScriptDivPre.innerHTML =
`<code>
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

  </code>
`;

javaScriptDiv.appendChild(javaScriptDivPre);
var hr = document.createElement('hr');


var body = document.getElementsByTagName('body')[0];
body.append(a, hr, javaScriptDiv);
