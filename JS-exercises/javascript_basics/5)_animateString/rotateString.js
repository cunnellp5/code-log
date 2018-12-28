// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// define first variables
var div = document.getElementById('string');
let string = div.innerHTML = 'poopstring';
var speed = document.getElementById('speed')
speed.innerHTML = 'Current speed: 500';

// construct a timer object
const Timer = function(fn, time) {
  var timerObj = setInterval(fn, time);
  this.stop = function() {
      if(timerObj) {
          clearInterval(timerObj);
          timerObj = null;
      }
      return this;
  }
  this.start = function() {
      if(!timerObj) {
        this.stop();
        timerObj = setInterval(fn, time);
      }
      return this;
  }
  this.reset = function(newTime) {
    time = newTime;
    return this.stop().start();
  }
}
// start with default interval
var timer = new Timer(() => {
  string = string[string.length - 1] + string.substring(0, string.length - 1)
  div.innerHTML = string
  document.body.appendChild(div)
}, 500)

// adjust the timing using an input slider
const changeTimeWithInput = () => {
  const input = document.querySelector('.input input');
  input.addEventListener('change', handleUpdate)
  input.addEventListener('mousemove', handleUpdate)
}
// call back function to reset the timer
const handleUpdate = function() {
  console.log(this)
  speed.innerHTML = `Current speed: ${this.value}`
  timer.reset(this.value)
}
// call function to put event handlers on slider
changeTimeWithInput();
