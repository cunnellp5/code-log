// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400. var javaScriptDiv = document.createElement('div');
var a = document.createElement('a')
a.setAttribute("name", "19");
var javaScriptDiv = document.createElement('div');
javaScriptDiv.innerText = '19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.'

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

var javaScriptDivPre = document.createElement('pre')
javaScriptDivPre.innerHTML =
`<code>
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

javaScriptDiv.appendChild(javaScriptDivPre);
var hr = document.createElement('hr');


var body = document.getElementsByTagName('body')[0];
body.append(a, hr, javaScriptDiv);
