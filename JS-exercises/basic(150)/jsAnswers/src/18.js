(function () {
  var a = document.createElement('a')
  a.setAttribute("name", "18");
  var javaScriptDiv = document.createElement('div');
  javaScriptDiv.innerText = '18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.'

  function fiftyChecker(first, second) {
    return (first === 50 || second === 50 || first + second === 50) ? true : false;
  }

  var javaScriptDivPre = document.createElement('pre')
  javaScriptDivPre.innerHTML =
  `<code>
  function fiftyChecker(first, second) {
    return (first === 50 || second === 50 || first + second === 50) ? true : false;
  }

  console.log(fiftyChecker(9, 3)) // false
  console.log(fiftyChecker(50, 23)) // true
  console.log(fiftyChecker(25, 25)) // true
  console.log(fiftyChecker(40, 10)) // true
  console.log(fiftyChecker(20, 50)) // true
  console.log(fiftyChecker(320, 540)) // false
    </code>`;
  javaScriptDiv.appendChild(javaScriptDivPre);
  var hr = document.createElement('hr');
  var body = document.getElementsByTagName('body')[0];
  body.append(a, hr, javaScriptDiv);
}());
