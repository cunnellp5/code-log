// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  let split = str.split(' ')
  let answer = '';
  for (var i = 0; i < split.length; i++) {
    let firstLetter = split[i].split('').shift()
    let rest = split[i].split('').splice(1,split[i].length).join('')
    answer += rest + firstLetter + 'ay' + ' ';
  }
  return answer.trim()
}
console.log(pigIt('Pig latin is cool'));
