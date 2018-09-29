// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
var a = document.createElement('a')
a.setAttribute("name", "22");
var javaScriptDiv = document.createElement('div');
javaScriptDiv.innerText = '22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.'

function removeLetter(string, index) {
  var ray = string.split('');
  var removed = ray.splice(index, 1);
  return ray.join('');
}

console.log(removeLetter('somestring', 4)) // sometring
console.log(removeLetter('44', 1)) // 4


var javaScriptDivPre = document.createElement('pre')
javaScriptDivPre.innerHTML =
`<code>
function removeLetter(string, index) {
  var ray = string.split('');
  var removed = ray.splice(index, 1);
  return ray.join('');
}

console.log(removeLetter('somestring', 4)) // sometring
console.log(removeLetter('44', 1)) // 4
  </code>
`;

javaScriptDiv.appendChild(javaScriptDivPre);
var hr = document.createElement('hr');


var body = document.getElementsByTagName('body')[0];
body.append(a, hr, javaScriptDiv);
