
var inputOne = document.createElement('input');
    inputOne.setAttribute('id', 'one');
    inputOne.setAttribute('placeholder', 'first integer');
    inputOne.setAttribute('type', 'number');

var inputTwo = document.createElement('input');
    inputTwo.setAttribute('id', 'two');
    inputTwo.setAttribute('placeholder', 'second integer');
    
var button = document.createElement('button');
    button.innerText = 'add!'
    button.setAttribute('type', 'button');
    button.addEventListener('click', addTwoTriple)
    
var clear = document.createElement('button');
    clear.innerText = 'clear'
    clear.setAttribute('type', 'button');
    clear.addEventListener('click', erase)

var result = document.createElement('p')
    result.innerText = 'Result:'


var parent = document.getElementsByTagName('body')[0];
    parent.append(inputOne, inputTwo, button, clear, result)




function erase() {
  result.animate([
    { opacity: '1' }, 
    { opacity: '0' }
  ], { 
    // timing options
    duration: 1000
  });
  setTimeout(() => {
    inputOne.value = '';
    inputTwo.value = '';
    result.innerText = 'Result:'
  }, 1000)

}

function addTwoTriple() {

  let val1 = parseInt(inputOne.value);
  let val2 = parseInt(inputTwo.value);
  let answer = (val1 === val2) ? (3 * (val1 + val2)) : (val1 + val2);
  return result.innerText += ' ' + answer;
}

