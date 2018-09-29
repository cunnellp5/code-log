(function () {
  var a = document.createElement('a')
  a.setAttribute("name", "25");
  var javaScriptDiv = document.createElement('div');
  javaScriptDiv.innerText = '25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.'

  function multOfThreeOrSeven(number) {
    return (number % 3 === 0 || number % 7 === 0);
  }

  var javaScriptDivPre = document.createElement('pre')
  javaScriptDivPre.innerHTML =
  `<code>
  function multOfThreeOrSeven(number) {
    return (number % 3 === 0 || number % 7 === 0);
  }

  console.log(multOfThreeOrSeven(6)); // true
  console.log(multOfThreeOrSeven(7)); // true
  console.log(multOfThreeOrSeven(4)); // false
    </code>
  `;

  javaScriptDiv.appendChild(javaScriptDivPre);
  var hr = document.createElement('hr');
  var body = document.getElementsByTagName('body')[0];
  body.append(a, hr, javaScriptDiv);
}());
