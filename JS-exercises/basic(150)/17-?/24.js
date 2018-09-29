(function () {
  var a = document.createElement('a')
  a.setAttribute("name", "24");
  var javaScriptDiv = document.createElement('div');
  javaScriptDiv.innerText = '24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. '

  function firstLetterJam(string) {
    var ray = string.split('');
    var first = ray[0];
    ray.unshift(first);
    ray.push(first);
    return ray.join('');
  }

  var javaScriptDivPre = document.createElement('pre')
  javaScriptDivPre.innerHTML =
  `<code>
  function firstLetterJam(string) {
    var ray = string.split('');
    var first = ray[0];

    ray.unshift(first);
    ray.push(first);
    return ray.join('');
  }

  console.log(firstLetterJam('somestring')) // ssomestrings
  console.log(firstLetterJam('belly')) // bbellyb
    </code>
  `;

  javaScriptDiv.appendChild(javaScriptDivPre);
  var hr = document.createElement('hr');
  var body = document.getElementsByTagName('body')[0];
  body.append(a, hr, javaScriptDiv);
}());
