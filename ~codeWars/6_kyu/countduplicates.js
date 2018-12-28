// Count the number of Duplicates
//
// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the input
// string. The input string can be assumed to contain only alphanumeric characters,
// including digits, uppercase and lowercase alphabets.
//
// Example
//
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'


function duplicateCount(text){
  let counter = {};
  text = text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    if (text[i] <= 'z' && text[i] >= 'a' || text[i] >= 0 && text[i] <= 9) {
      (counter[(text[i])]) ? counter[text[i]] ++ : counter[text[i]] = 1;
    }
  }
  let result = [];
  for (var i = 0 in counter) {
    if (counter[i] >= 2) {
      result.push(counter[i])
    }
  }
  return result.length
}

console.log(duplicateCount("aabbcde"));
console.log(duplicateCount('pP33oop'));
