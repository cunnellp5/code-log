const question = `64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.`;
const blockcode =`<code>
function str_con_cat(a, b) {
  let al = a.length;
  let bl = b.length;
  let bEnd = b.substring(bl - al);
  let aEnd = a.substring(al - bl);

  if (al > bl) {
    return aEnd.concat(b)
  } else if (al < bl) {
    return a.concat(bEnd)
  } else  {
    return a.concat(b);
  }
}

console.log(str_con_cat("Python", "JS")); // onJS
console.log(str_con_cat("ab", "cdef")); // abef
    </code>`;

function str_con_cat(a, b) {
  let al = a.length;
  let bl = b.length;
  let bEnd = b.substring(bl - al);
  let aEnd = a.substring(al - bl);

  if (al > bl) {
    return aEnd.concat(b)
  } else if (al < bl) {
    return a.concat(bEnd)
  } else  {
    return a.concat(b);
  }
}

export { question, blockcode }
