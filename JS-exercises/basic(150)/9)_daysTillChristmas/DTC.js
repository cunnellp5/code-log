var div = document.createElement('div');

div.setAttribute(
  "style",
  "color:red; display:flex; justify-content:center;");

function calcDaysTillXMas() {
  setInterval(() => {
    let diff;
    let thisYear = new Date().getFullYear();
    let xMas = new Date(`December 25, ${thisYear}`);
    // get time in ms
    let date1xmas = xMas.getTime();
    let currentTime = new Date().getTime();
    // diff in ms
    diff = currentTime - date1xmas;
    // strip ms
    diff = diff / 1000;
    var seconds = Math.abs(Math.floor(diff % 60));
    // strip sec
    diff = diff / 60;
    var minutes = Math.abs(Math.floor(diff % 60));
    // strip min
    diff = diff / 60;
    var hours = Math.abs(Math.floor(diff % 24));
    var days = Math.abs(Math.floor(diff / 24));

    date = `🎄 ${days}:${hours}:${minutes}:${seconds} 🎄`;
    div.innerHTML = date
    document.body.appendChild(div)
  },1000)
}
calcDaysTillXMas();



function alternateColors() {
  let el = document.getElementsByTagName('h1')[0];
  let string = document.getElementsByTagName('h1')[0].innerHTML;
  let output = '';
  // string.setAttribute(
  //   "style",
  //   "color:red; display:flex; justify-content:center;");
  console.log(string)
  for (let i = 0; i < string.length; i++) {
    color = i % 2 === 0 ? 'red' : 'green';
    output += '<span style="color:'+color+';">' + string[i] + '</span>';
  }
  console.log(el.innerHTML + 'loook')
  return el.innerHTML = output;
}
// document.getElementsByTagName('h1')[0].setAttribute(
//   "style",
//   "color:red; display:flex; justify-content:center;");

alternateColors()
console.log(alternateColors())

// NOTES: by starting with ms we can redefine our diff var 
// (that is in ms from smallest to largest) making use of the % operator to show
// the right unit of time.
