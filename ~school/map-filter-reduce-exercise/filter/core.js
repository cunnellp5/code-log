function onlyEven(array) {
  return array.filter((el) => (el % 2 ==0))
  // filtered = array.filter(function(element){
  //   return (element % 2 == 0);
  // })
  // return filtered
}
console.log(onlyEven([10,15,20,25,30,35]));


function onlyOneWord (array) {
  return array.filter((el) => !(el.includes(' ')))
  // filtered = array.filter((element)=> {
  //   return !(element.includes(' '))
  // })
  // return filtered
};
console.log(onlyOneWord(['return', 'phrases', 'with one word']));


function positiveRowsOnly (array) {
  // return array.map((el) => el.filter((pos) => pos > 0))
  array.map(function(element){
     arr = (element.filter(function(poop){
      return poop > 0
    }))
  })
  return [arr]
};
console.log(positiveRowsOnly([[1, 10,-100], [2,-20, 200], [3, 30, 300]]));



var array = ['racecar', 'amalgam', 'oligopoly', 'zoom'];

function allSameVowels (array) {
  vowel = array.map(function(el) {
    return el.replace(/[^aeiou]/ig, '')
  })
  return vowel.filter(function(el, index, array){
    return el
  })
};
console.log(allSameVowels(array));



module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
