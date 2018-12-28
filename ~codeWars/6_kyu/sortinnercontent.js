// Srot the inner ctnnoet in dsnnieedcg oredr
//
// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.
//
// Some examples:
//
// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"
// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces.

function sortTheInnerContent(words) {
  var newWords = [];
  var word = words.split(" ")

  for (var i = 0; i < word.length; i++) {
    if (word[i].length < 3) {
      newWords.push[word[i]]
    }
    newWords.push(word[i].substr(0,1) + word[i].substr(1, word[i].length-2).split("").sort().reverse().join("") + word[i].substr(word[i].length-1, word[i].length))
  }
  return newWords.join(' ')
}
console.log(sortTheInnerContent("sort the inner content in descending order"));
