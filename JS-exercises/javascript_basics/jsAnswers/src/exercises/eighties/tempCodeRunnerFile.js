
function longest_string(array) {
  return array.reduce((a,b) => a.length > b.length ? a : b);
}

console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa'])) // ["aaaaa"]