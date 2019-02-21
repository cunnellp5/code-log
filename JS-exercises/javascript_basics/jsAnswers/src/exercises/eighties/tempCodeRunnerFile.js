
function alphabet_char_Shift(string) {
  const array = string.split('');
  const coded = array.map((el) => {
    let num = el.charCodeAt() + 1;
    if(num === 123) {
      num = 97;
    }
    return String.fromCharCode(num)
  }).join('');
  return coded;
}

console.log(alphabet_char_Shift("abcdxyz")) // bcdeyza