// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

var div = document.createElement('div');
let string = div.innerHTML = 'w3resource ';

function animate() {
  setInterval(() => {
    string = string[string.length - 1] + string.substring(0, string.length - 1)
    div.innerHTML = string
    document.body.appendChild(div)
  }, 500)
}

animate();