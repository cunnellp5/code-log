// require('http://www.cornify.com/js/cornify.js');
const pressed = [];
const secretCode = 'philbear';

window.addEventListener('keyup', (e) => {  
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed)
  if(pressed.join('').includes(secretCode)) {
    // cornify_add();
    cornami.input = "38384040373937396665"
  }
})
