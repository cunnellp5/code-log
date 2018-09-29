(function () {
  var a = document.createElement('a')
  a.setAttribute("name", "17");
  var hr17 = document.createElement('hr');
  var seventeen = document.createElement('div');
  seventeen.innerText = '17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.'

  function absoDiff(number) {
    return (number > 19) ? (3 * (number - 19)) : (19 - number);
  }

  var seventeenPre = document.createElement('pre')
  seventeenPre.innerHTML =
  `<code>
  function absoDiff(number) {
    return (number > 19) ? (3 * (number - 19)) : (19 - number);
  }

  console.log(absoDiff(9)) // 10
  console.log(absoDiff(33)) // 42
    </code>`;
  seventeen.appendChild(seventeenPre);
  var hr17post = document.createElement('hr');
  var body = document.getElementsByTagName('body')[0];
  body.append(a, hr17, seventeen);
}());
