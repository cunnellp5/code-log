(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(n,e,r){"use strict";r.r(e);var t={};r.r(t),r.d(t,"question",function(){return N}),r.d(t,"blockcode",function(){return M});var o={};r.r(o),r.d(o,"question",function(){return P}),r.d(o,"blockcode",function(){return R});var i={};r.r(i),r.d(i,"question",function(){return E}),r.d(i,"blockcode",function(){return I});var s={};r.r(s),r.d(s,"question",function(){return B}),r.d(s,"blockcode",function(){return _});var c={};r.r(c),r.d(c,"question",function(){return G}),r.d(c,"blockcode",function(){return z});var a={};r.r(a),r.d(a,"question",function(){return F}),r.d(a,"blockcode",function(){return U});var l={};r.r(l),r.d(l,"question",function(){return Y}),r.d(l,"blockcode",function(){return Z});var u={};r.r(u),r.d(u,"question",function(){return V}),r.d(u,"blockcode",function(){return K});var g={};r.r(g),r.d(g,"question",function(){return Q}),r.d(g,"blockcode",function(){return X});var f={};r.r(f),r.d(f,"question",function(){return $}),r.d(f,"blockcode",function(){return nn});var d={};r.r(d),r.d(d,"question",function(){return en}),r.d(d,"blockcode",function(){return rn});var h={};r.r(h),r.d(h,"question",function(){return tn}),r.d(h,"blockcode",function(){return on});var p={};r.r(p),r.d(p,"question",function(){return sn}),r.d(p,"blockcode",function(){return cn});var v={};r.r(v),r.d(v,"question",function(){return an}),r.d(v,"blockcode",function(){return ln});var m={};r.r(m),r.d(m,"question",function(){return un}),r.d(m,"blockcode",function(){return gn});var b={};r.r(b),r.d(b,"question",function(){return fn}),r.d(b,"blockcode",function(){return dn});var k={};r.r(k),r.d(k,"question",function(){return hn}),r.d(k,"blockcode",function(){return pn});var y={};r.r(y),r.d(y,"question",function(){return vn}),r.d(y,"blockcode",function(){return mn});var w={};r.r(w),r.d(w,"question",function(){return bn}),r.d(w,"blockcode",function(){return kn});var S={};r.r(S),r.d(S,"question",function(){return yn}),r.d(S,"blockcode",function(){return wn});var O={};r.r(O),r.d(O,"question",function(){return Sn}),r.d(O,"blockcode",function(){return On});var T={};r.r(T),r.d(T,"question",function(){return Tn}),r.d(T,"blockcode",function(){return Jn});var J={};r.r(J),r.d(J,"question",function(){return Wn}),r.d(J,"blockcode",function(){return qn});var W={};r.r(W),r.d(W,"question",function(){return An}),r.d(W,"blockcode",function(){return Cn});var q={};r.r(q),r.d(q,"question",function(){return Dn}),r.d(q,"blockcode",function(){return xn});var A={};r.r(A),r.d(A,"question",function(){return Hn}),r.d(A,"blockcode",function(){return jn});var C={};r.r(C),r.d(C,"question",function(){return Ln}),r.d(C,"blockcode",function(){return Nn});var D={};r.r(D),r.d(D,"question",function(){return Mn}),r.d(D,"blockcode",function(){return Pn});var x={};r.r(x),r.d(x,"question",function(){return Rn}),r.d(x,"blockcode",function(){return En});var H={};r.r(H),r.d(H,"question",function(){return In}),r.d(H,"blockcode",function(){return Bn});var j={};r.r(j),r.d(j,"question",function(){return _n}),r.d(j,"blockcode",function(){return Gn});var L={};r.r(L),r.d(L,"question",function(){return zn}),r.d(L,"blockcode",function(){return Fn});const N="17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.",M="<code>\n  function absoDiff(number) {\n    return (number > 19) ? (3 * (number - 19)) : (19 - number);\n  }\n\n  console.log(absoDiff(9)) // 10\n  console.log(absoDiff(33)) // 42\n  </code>";const P="18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.",R="<code>\n  function fiftyChecker(first, second) {\n    return (first === 50 || second === 50 || first + second === 50) ? true : false;\n  }\n\n  console.log(fiftyChecker(9, 3)) // false\n  console.log(fiftyChecker(50, 23)) // true\n  console.log(fiftyChecker(25, 25)) // true\n  console.log(fiftyChecker(40, 10)) // true\n  console.log(fiftyChecker(20, 50)) // true\n  console.log(fiftyChecker(320, 540)) // false\n    </code>";const E="19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.",I="<code>\n  function checkGivenInt(integer) {\n    let check1 = Math.abs(100 - integer) <= 20;\n    let check2 = Math.abs(400 - integer) <= 20;\n    return check1 || check2\n  }\n\n  console.log(checkGivenInt(100)) // true\n  console.log(checkGivenInt(421)) // false\n  console.log(checkGivenInt(25)) // false\n  console.log(checkGivenInt(80)) // true\n  console.log(checkGivenInt(120)) // true\n  console.log(checkGivenInt(320)) // false\n    </code>";const B="20. Write a JavaScript program to check from two given integers, if one is positive and one is negative",_="<code>\n  function posAndNeg(first, second) {\n    if (typeof(first || second) !== 'number') return false\n    let check1 = first >= 0;\n    let check2 = second >= 0;\n    return check1 !== check2;\n  }\n\n  console.log(posAndNeg(3, 4)) // false\n  console.log(posAndNeg(3, -4)) // true\n  console.log(posAndNeg(3, 0)) // false\n  console.log(posAndNeg(3, 30)) // false\n  console.log(posAndNeg(-4, -1)) // false\n  console.log(posAndNeg(undefined, null)) // false\n  console.log(posAndNeg('poop', 3)) // false\n    </code>";const G='21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.',z="<code>\nfunction appendStringPy(string) {\n  return string.substring(0, 2).toLowerCase() === 'py' ? string : 'Py' + string;\n}\n\nconsole.log(appendStringPy('somestring')) // Pysomestring\nconsole.log(appendStringPy('44')) // Py44\nconsole.log(appendStringPy('python')) // python\nconsole.log(appendStringPy('PYthon')) // PYthon\nconsole.log(appendStringPy('oneMoreString')) // PyoneMoreString\n    </code>";const F="22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.",U="<code>\nfunction removeLetter(string, index) {\n  var ray = string.split('');\n  var removed = ray.splice(index, 1);\n  return ray.join('');\n}\n\nconsole.log(removeLetter('somestring', 4)) // sometring\nconsole.log(removeLetter('44', 1)) // 4\n    </code>";const Y="23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1",Z="<code>\nfunction swapFirstWithLast(string) {\n  var ray = string.split('');\n  var first = ray.shift();\n  var last = ray.pop();\n  ray.unshift(last);\n  ray.push(first);\n  return ray.join('');\n}\n\nconsole.log(swapFirstWithLast('somestring')) // gomestrins\nconsole.log(swapFirstWithLast('belly')) // yellb\n    </code>";const V="24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.",K="<code>\nfunction firstLetterJam(string) {\n  var ray = string.split('');\n  var first = ray[0];\n\n  ray.unshift(first);\n  ray.push(first);\n  return ray.join('');\n}\n\nconsole.log(firstLetterJam('somestring')) // ssomestrings\nconsole.log(firstLetterJam('belly')) // bbellyb\n    </code>";const Q="25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.",X="<code>\nfunction multOfThreeOrSeven(number) {\n  return (number % 3 === 0 || number % 7 === 0);\n}\n\nconsole.log(multOfThreeOrSeven(6)); // true\nconsole.log(multOfThreeOrSeven(7)); // true\nconsole.log(multOfThreeOrSeven(4)); // false\n    </code>";const $="26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.",nn="<code>\nfunction frontNBack3(string) {\n  let lastThree = string.substring(string.length - 3)\n  return lastThree + string + lastThree;\n}\n\nconsole.log(frontNBack3('rapper')) // perrapperper\nconsole.log(frontNBack3('peppermint')) // intpeppermintint\nconsole.log(frontNBack3('poopy')) // opypoopyopy\n    </code>";const en="27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.",rn="<code>\nfunction checkJavaString(string) {\n  let java = string.substring(0,4).toLowerCase();\n  return java === 'java' ? true : false;\n}\n\nconsole.log(checkJavaString('java Chocolate Chip')); // true\nconsole.log(checkJavaString('Jovial')); // false\nconsole.log(checkJavaString('javaScript')); // true\n    </code>";const tn="28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range",on="<code>\nfunction rangeOf(first, second) {\n  let args = [first, second];\n  return args.some((range) => range >= 50 && range <= 99)\n}\nconsole.log(rangeOf(33, 4)); // false\nconsole.log(rangeOf(455, 95)); // true\nconsole.log(rangeOf(50, 99)); // true\nconsole.log(rangeOf(503, 929)); // false\nconsole.log(rangeOf(73, 929)); // true\n    </code>";const sn="29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.",cn="<code>\nfunction rangeOfThree(first, second, third) {\n  let args = [first, second, third];\n  return args.some((range) => range >= 50 && range <= 99)\n}\nconsole.log(rangeOfThree(1, 22, 55)); // true\nconsole.log(rangeOfThree(1, 22, 5)); // false\nconsole.log(rangeOfThree(1, 242, 5)); // false\nconsole.log(rangeOfThree(31, 242, 5)); // false\nconsole.log(rangeOfThree(77, 242, 5)); // true\nconsole.log(rangeOfThree(77, 99, 5)); // true\nconsole.log(rangeOfThree(0, 99, 5)); // true\n    </code>";const an='30. Write a JavaScript program to check if a string "Script"\npresents at 5th (index 4) position in a given string, if "Script" presents in the\nstring return the string without "Script" otherwise return the original one.',ln="<code>\nfunction scriptThing(string) {\n  let split = string.split('');\n  let script = split.splice(4, 6).join('').toLowerCase();\n  if(script === 'script') {\n    return split.join('');\n  } else {\n    return string\n  }\n}\n\nconsole.log(scriptThing('javaScript')); // java\nconsole.log(scriptThing('javScript')); // javScript\nconsole.log(scriptThing('poop')); // poop\nconsole.log(scriptThing('poopscripthair')); // poophair\n    </code>";const un="31. Write a JavaScript program to find the largest of three given integers.",gn="<code>\nfunction largestOfThree(...numbers) {\n    return numbers.reduce((prev, curr) => {\n        return prev > curr ? prev : curr;\n    })\n}\n\nconsole.log(largestOfThree(1, 2, 3)); // 3\nconsole.log(largestOfThree(1, 23, 3)); // 23\nconsole.log(largestOfThree(100, 23, 3)); // 100\nconsole.log(largestOfThree(-100, 3, 3)); // 3\n    </code>";const fn="32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.",dn="<code>\nfunction nearestToOneHundo(...numbers) {\n  return numbers.reduce((prev, curr) => {\n    if(checkHair(prev) === checkHair(curr)) return [prev, curr] + ' BOTH SAMEZ's';\n    return checkHair(prev) < checkHair(curr) ? prev : curr;\n  })\n}\n\nfunction checkHair(val) {\n  return Math.abs(100 - val)\n}\n\nconsole.log(nearestToOneHundo(3, 5)); // 5\nconsole.log(nearestToOneHundo(333, 15)); // 15\nconsole.log(nearestToOneHundo(95, 102)); // 102\nconsole.log(nearestToOneHundo(99, 100)); // 100\nconsole.log(nearestToOneHundo(99, 99)); // 99,99 BOTH SAMEZ's\nconsole.log(nearestToOneHundo(99, 101)); // 99,101 BOTH SAMEZ's\n\n    </code>";const hn="33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.",pn="<code>\n\nFIRST ONE:\nfunction rangerWillRobinson(...numbers) {\n  ray = [];\n  numbers.forEach((el) => {\n    if((el >= 40 && el <= 60) || (el <= 100 && el >= 70)) {\n      ray.push(true);\n    } else {\n      ray.push(false);\n    }\n  })\n  return ray.includes(false) ? false : true;\n}\n\nSECOND ONE:\nfunction rangerWillRobinson(...numbers) {\n  return numbers.every((el) => {\n    return (el >= 40 && el <= 60) || (el <= 100 && el >= 70);\n  });\n}\n\nconsole.log(rangerWillRobinson(44, 7)); // false\nconsole.log(rangerWillRobinson(44, 70)); // true\nconsole.log(rangerWillRobinson(60, 100)); // true\nconsole.log(rangerWillRobinson(40, 41)); // true\nconsole.log(rangerWillRobinson(40, 111)); // false\n\n    </code>";const vn="34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.",mn="<code>\n\nfunction betwixt4060(...numbers) {\n  if(!numbers.every((el) => el >= 40 && el <= 60)) return false;\n  return numbers.reduce((prev, cur) => {\n    return prev > cur ? prev : cur;\n  });\n}\n\nconsole.log(betwixt4060(33, 40)) // false\nconsole.log(betwixt4060(3, 40)) // false\nconsole.log(betwixt4060(40, 60)) // 60\nconsole.log(betwixt4060(60, 40)) // 60\n\n    </code>";const bn="35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.",kn="<code>\nfunction contains2to4instances(word, letter) {\n  let ray = word.split('');\n  let count = ray.filter((el) => el === letter).length;\n  return (count >= 2 && count <= 4) ? true : false\n}\n\nconsole.log(contains2to4instances('Python', 'y')); // false\nconsole.log(contains2to4instances('JavaScript', 'a')); // true\nconsole.log(contains2to4instances('Console', 'o')); // true\n    </code>";const yn="36. Write a JavaScript program to check if the last digit of the three given positive integers is same.",wn="<code>\n\nfunction lastDigitsyo(...digits) {\n  if (digits.find((el) => el < 0)) return false;\n\n  let lastDigit = digits.map(el => {\n    let ray = el.toString().split('');\n    let lastNumber = ray[ray.length - 1];\n    return lastNumber;\n  });\n\n  for (let i = 0; i < lastDigit.length; i++) {\n    return (lastDigit[i] === lastDigit[i+1]) ? true : false\n  }\n}\n\nconsole.log(lastDigitsyo(12,22,42)); // true\nconsole.log(lastDigitsyo(1,2,4)); // false\nconsole.log(lastDigitsyo(11,22,44)); // false\n\nconsole.log(lastDigitsyo(20, 30, 400)); // true\nconsole.log(lastDigitsyo(-20, 30, 400)); // false\nconsole.log(lastDigitsyo(20, -30, 400)); // false\nconsole.log(lastDigitsyo(20, 30, -400)); // false\n\n    </code>";const Sn="37. Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.",On="<code>\nfunction newStringOThree(string) {\n  if(string.length < 3) return string.toUpperCase();\n  return string.split('').splice(0, 3).join('').toLowerCase() + string.substring(3);\n}\n\nconsole.log(newStringOThree('HELLO')); // helLO\nconsole.log(newStringOThree('ah')); // AH\nconsole.log(newStringOThree(\"Python\")); // python\nconsole.log(newStringOThree(\"Py\")); // PY\nconsole.log(newStringOThree(\"JAVAScript\")); // javAScript\n    </code>";const Tn='38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.',Jn='<code>\nfunction grades(mark, final) {\n  return (!final.includes(\'true\') && mark >= 89) ?\n          true : (final.includes(\'true\') && +mark >= 90) ?\n            true : false;\n}\n\nconsole.log(grades("78", " ")); // false\nconsole.log(grades("89", "true ")); // false\nconsole.log(grades("99", "true ")); // true\nconsole.log(grades("89", " aafafaf")); // true\nconsole.log(grades("90", " true")); // true\n    </code>';const Wn="39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.",qn="<code>\nfunction summation(one, two) {\n  let result = one + two;\n  return (result <= 80 && result >= 50) ? 65 : 80;\n}\n\nconsole.log(summation(30,20)); // 65\nconsole.log(summation(90,80)); // 80\n    </code>";const An="40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.",Cn="<code>\nfunction sumDiff(one, two) {\n  if(one === 8 || two === 8) {\n    return true;\n  } else if (one + two === 8) {\n    return true;\n  } else if (Math.abs(one - two) === 8) {\n    return true;\n  } else {\n    return false\n  }\n\n}\n\nconsole.log(sumDiff(7, 8)); // true\nconsole.log(sumDiff(16, 8)); // true\nconsole.log(sumDiff(24, 32)); // true\nconsole.log(sumDiff(17, 18)); // false\n    </code>";const Dn="41. Write a JavaScript program to Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40",xn="<code>\nfunction threes(x, y, z) {\n  if(x === y && y === z) {\n    return 30;\n  } else if (x === y || y === z || z === x) {\n    return 40;\n  } else {\n    return 20;\n  }\n}\n\nconsole.log(threes(8, 8, 8)); // 30\nconsole.log(threes(8, 8, 18)); // 40\nconsole.log(threes(8, 7, 18)); // 20\n    </code>";const Hn="42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode. Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31",jn="<code>\nfunction number_order(x, y, z) {\n  if(x < y && y < z) {\n    return 'Strict mode'\n  } else {\n    return 'Soft mode'\n  }\n}\n\nconsole.log(number_order(10,15,31));\nconsole.log(number_order(24,22,31));\nconsole.log(number_order(50,21,15));\n    </code>";const Ln="43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.",Nn="<code>\nfunction rightdigit(...numbers) {\n  let lastDigitArray = numbers.map((el) => {\n    var numberRay = el.toString().split('');\n    var lastDig = +numberRay[numberRay.length -1];\n    return lastDig;\n  })\n  return lastDigitArray.every(el => {\n    return el === lastDigitArray[0];\n  })\n}\n\nconsole.log(rightdigit(22,32,42)); // true\nconsole.log(rightdigit(102,302,2)); // true\nconsole.log(rightdigit(20,22,45)); // false\n    </code>";const Mn="44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.",Pn="<code>\nfunction intChecker(...numbers) {\n  return numbers.filter((el)=>el>20).reduce((pre,cur)=>(cur>pre||pre>cur)?true:false);\n}\n\nconsole.log(intChecker(23, 45, 10)); // true\nconsole.log(intChecker(23, 23, 10)); // false\nconsole.log(intChecker(21, 66, 75)); // true\n    </code>";const Rn="45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.",En="<code>\nfunction twointegers(...int) {\n  return int.reduce((pre, cur) => {\n    if (pre === 15 || cur === 15) {\n      return true;\n    } else if (Math.abs(pre) + Math.abs(cur) === 15 || Math.abs(pre) - Math.abs(cur) === 15 ) {\n      return true;\n    } else {\n      return false;\n    }\n  })\n}\n\nconsole.log(twointegers(15, 9)); // true\nconsole.log(twointegers(25, 15)); // true\nconsole.log(twointegers(7, 8)); // true\nconsole.log(twointegers(25, 10)); // true\nconsole.log(twointegers(5, 9)); // false\nconsole.log(twointegers(7, 9)); // false\nconsole.log(twointegers(9, 25)); // false\n    </code>";const In="46. Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.",Bn="<code>\nfunction valCheck(...int) {\n  return int.filter(el => (el % 7 === 0 || el % 11 === 0)).length === 1 ? true : false;\n}\n\nconsole.log(valCheck(14, 21)); // false\nconsole.log(valCheck(14, 20)); // true\nconsole.log(valCheck(16, 20)); // false\n    </code>";const _n="47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range). For example 40 presents in 400 and 4000",Gn="<code>\nfunction test_digit(x, y, n) {\n  if(n < 40 || n > 10000) {\n     return false;\n  }\n  if((n <= x && n >= y) || n >= x && n <= y) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nconsole.log(test_digit(40, 4000, 45)); // true\nconsole.log(test_digit(80, 320, 79)); // false\nconsole.log(test_digit(89, 4000, 30)); // false\n    </code>";const zn="48. Write a JavaScript program to reverse a given string.",Fn='<code>\nfunction reverseNew(string) {\n  return string.split(\'\').reverse().join(\'\');\n}\n\nvar reverseOld = (string) => {\n  var result = "";\n  for (var i = string.length - 1; i >= 0; i--) {\n    result += string[i];\n  }\n  return result\n}\n\nvar reverseOther = (string) => {\n  var result = [];\n  for (var i = 0; i < string.length; i++) {\n    result.unshift(string[i]);\n  }\n  return result.join(\'\')\n}\n\nvar reverseWhile = (string) => {\n  var result = "";\n  var i = string.length\n  while (i > 0) {\n    result += string.substring(i - 1, i);\n    i--;\n  }\n  return result\n}\n\nconsole.log(reverseWhile("w3resource")); // ecruoser3w\nconsole.log(reverseWhile("www")); // www\nconsole.log(reverseWhile("JavaScript")); // tpircSavaJ\n    </code>';const Un=[t,o,i,s,c,a,l,u,g,f,d,h,p,v,m,b,k,y,w,S,O,T,J,W,q,A,C,D,x,H,j,L];var Yn=r(16).domUtils;e.default=(()=>{!function(n){n.map(n=>Yn.masterCreator(n.question.slice(0,2),n.question,n.blockcode))}(Un)})},16:function(n,e){e.domUtils={createAndSetAnchor(n){var e=document.createElement("a");return e.setAttribute("name",n),e.setAttribute("href","#"+n),e},createAndSetHR:()=>document.createElement("hr"),createAndSetMainDiv(n){var e=document.createElement("div");return e.innerText=n,e},createCodeBlock(n){var e=document.createElement("pre");return e.innerHTML=n,e},generateHTML:(n,e,r,t)=>(n.appendChild(e),document.getElementById("jsbasics").append(r,t,n)),masterCreator(n,e,r){var t=this.createAndSetAnchor(n),o=this.createAndSetHR(),i=this.createAndSetMainDiv(e),s=this.createCodeBlock(r);return this.generateHTML(i,s,t,o)}}}}]);