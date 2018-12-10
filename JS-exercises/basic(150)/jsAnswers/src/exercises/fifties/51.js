const question = `51. Write a JavaScript program to convert a given number to hours and minutes.`;
const blockcode =`<code>
function time_convert(numb) {
  let unconverted = numb/60;
  let hour = Math.floor(unconverted);
  let min = Math.round((unconverted % 1) * 60);
  return '\${hour}:\${min}';
}


console.log(time_convert(71)); // 1:11
console.log(time_convert(450)); // 7:30
console.log(time_convert(1441)); // 24:1

    </code>`;

function time_convert(numb) {
  let unconverted = numb/60;
  let hour = Math.floor(unconverted);
  let min = Math.round((unconverted % 1) * 60);
  return `${hour}:${min}`;
}

export { question, blockcode }
