var div = document.createElement('div');
div.setAttribute("style", "color: red; display:flex; justify-content:center;");

document.getElementsByTagName('html')[0].setAttribute(
  'style', 
    `display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `)

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

function alternateColors(element) {
  let string = document.getElementsByTagName('h1')[0].innerHTML;
  let output = '';
  for (let i = 0; i < string.length; i++) {
    color = i % 2 === 0 ? 'red' : 'green';
    output += '<span style="color:'+color+';">' + string[i] + '</span>';
  }
  return element.innerHTML = output;
}
alternateColors(document.getElementsByTagName('h1')[0])
calcDaysTillXMas();


// NOTES: by starting with ms we can redefine our diff var 
// (that is in ms from smallest to largest) making use of the % operator to show
// the right unit of time.
