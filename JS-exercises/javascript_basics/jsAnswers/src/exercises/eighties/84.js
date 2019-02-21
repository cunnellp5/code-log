const question = `84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.`;
const blockcode =`<code>
    
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
    </code>`;

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

export { question, blockcode }


// 1  SOH (start of heading)          33  !         65  A         97  a
// 2  STX (start of text)             34  "         66  B         98  b
// 3  ETX (end of text)               35  #         67  C         99  c
// 4  EOT (end of transmission)       36  $         68  D        100  d
// 5  ENQ (enquiry)                   37  %         69  E        101  e
// 6  ACK (acknowledge)               38  &         70  F        102  f
// 7  BEL (bell)                      39  '         71  G        103  g
// 8  BS  (backspace)                 40  (         72  H        104  h
// 9  TAB (horizontal tab)            41  )         73  I        105  i
// 10  LF  (NL line feed, new line)    42  *         74  J        106  j
// 11  VT  (vertical tab)              43  +         75  K        107  k
// 12  FF  (NP form feed, new page)    44  ,         76  L        108  l
// 13  CR  (carriage return)           45  -         77  M        109  m
// 14  SO  (shift out)                 46  .         78  N        110  n
// 15  SI  (shift in)                  47  /         79  O        111  o
// 16  DLE (data link escape)          48  0         80  P        112  p
// 17  DC1 (device control 1)          49  1         81  Q        113  q
// 18  DC2 (device control 2)          50  2         82  R        114  r
// 19  DC3 (device control 3)          51  3         83  S        115  s
// 20  DC4 (device control 4)          52  4         84  T        116  t
// 21  NAK (negative acknowledge)      53  5         85  U        117  u
// 22  SYN (synchronous idle)          54  6         86  V        118  v
// 23  ETB (end of trans. block)       55  7         87  W        119  w
// 24  CAN (cancel)                    56  8         88  X        120  x
// 25  EM  (end of medium)             57  9         89  Y        121  y
// 26  SUB (substitute)                58  :         90  Z        122  z