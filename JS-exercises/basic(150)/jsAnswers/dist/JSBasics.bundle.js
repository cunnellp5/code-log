(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(n,e,r){"use strict";r.r(e);var t={};r.r(t),r.d(t,"question",function(){return J}),r.d(t,"blockcode",function(){return W});var o={};r.r(o),r.d(o,"question",function(){return A}),r.d(o,"blockcode",function(){return q});var i={};r.r(i),r.d(i,"question",function(){return C}),r.d(i,"blockcode",function(){return H});var s={};r.r(s),r.d(s,"question",function(){return L}),r.d(s,"blockcode",function(){return P});var c={};r.r(c),r.d(c,"question",function(){return D}),r.d(c,"blockcode",function(){return j});var a={};r.r(a),r.d(a,"question",function(){return N}),r.d(a,"blockcode",function(){return R});var l={};r.r(l),r.d(l,"question",function(){return E}),r.d(l,"blockcode",function(){return M});var g={};r.r(g),r.d(g,"question",function(){return x}),r.d(g,"blockcode",function(){return I});var u={};r.r(u),r.d(u,"question",function(){return B}),r.d(u,"blockcode",function(){return G});var f={};r.r(f),r.d(f,"question",function(){return F}),r.d(f,"blockcode",function(){return U});var d={};r.r(d),r.d(d,"question",function(){return Y}),r.d(d,"blockcode",function(){return Z});var h={};r.r(h),r.d(h,"question",function(){return V}),r.d(h,"blockcode",function(){return z});var p={};r.r(p),r.d(p,"question",function(){return K}),r.d(p,"blockcode",function(){return Q});var v={};r.r(v),r.d(v,"question",function(){return X}),r.d(v,"blockcode",function(){return $});var m={};r.r(m),r.d(m,"question",function(){return _}),r.d(m,"blockcode",function(){return nn});var b={};r.r(b),r.d(b,"question",function(){return en}),r.d(b,"blockcode",function(){return rn});var k={};r.r(k),r.d(k,"question",function(){return tn}),r.d(k,"blockcode",function(){return on});var y={};r.r(y),r.d(y,"question",function(){return sn}),r.d(y,"blockcode",function(){return cn});var S={};r.r(S),r.d(S,"question",function(){return ln}),r.d(S,"blockcode",function(){return gn});var w={};r.r(w),r.d(w,"question",function(){return fn}),r.d(w,"blockcode",function(){return dn});var T={};r.r(T),r.d(T,"question",function(){return pn}),r.d(T,"blockcode",function(){return vn});var O={};r.r(O),r.d(O,"question",function(){return mn}),r.d(O,"blockcode",function(){return bn});const J="17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.",W="<code>\n  function absoDiff(number) {\n    return (number > 19) ? (3 * (number - 19)) : (19 - number);\n  }\n\n  console.log(absoDiff(9)) // 10\n  console.log(absoDiff(33)) // 42\n  </code>";const A="18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.",q="<code>\n  function fiftyChecker(first, second) {\n    return (first === 50 || second === 50 || first + second === 50) ? true : false;\n  }\n\n  console.log(fiftyChecker(9, 3)) // false\n  console.log(fiftyChecker(50, 23)) // true\n  console.log(fiftyChecker(25, 25)) // true\n  console.log(fiftyChecker(40, 10)) // true\n  console.log(fiftyChecker(20, 50)) // true\n  console.log(fiftyChecker(320, 540)) // false\n    </code>";const C="19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.",H="<code>\n  function checkGivenInt(integer) {\n    let check1 = Math.abs(100 - integer) <= 20;\n    let check2 = Math.abs(400 - integer) <= 20;\n    return check1 || check2\n  }\n\n  console.log(checkGivenInt(100)) // true\n  console.log(checkGivenInt(421)) // false\n  console.log(checkGivenInt(25)) // false\n  console.log(checkGivenInt(80)) // true\n  console.log(checkGivenInt(120)) // true\n  console.log(checkGivenInt(320)) // false\n    </code>";const L="20. Write a JavaScript program to check from two given integers, if one is positive and one is negative",P="<code>\n  function posAndNeg(first, second) {\n    if (typeof(first || second) !== 'number') return false\n    let check1 = first >= 0;\n    let check2 = second >= 0;\n    return check1 !== check2;\n  }\n\n  console.log(posAndNeg(3, 4)) // false\n  console.log(posAndNeg(3, -4)) // true\n  console.log(posAndNeg(3, 0)) // false\n  console.log(posAndNeg(3, 30)) // false\n  console.log(posAndNeg(-4, -1)) // false\n  console.log(posAndNeg(undefined, null)) // false\n  console.log(posAndNeg('poop', 3)) // false\n    </code>";const D='21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.',j="<code>\nfunction appendStringPy(string) {\n  return string.substring(0, 2).toLowerCase() === 'py' ? string : 'Py' + string;\n}\n\nconsole.log(appendStringPy('somestring')) // Pysomestring\nconsole.log(appendStringPy('44')) // Py44\nconsole.log(appendStringPy('python')) // python\nconsole.log(appendStringPy('PYthon')) // PYthon\nconsole.log(appendStringPy('oneMoreString')) // PyoneMoreString\n    </code>";const N="22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.",R="<code>\nfunction removeLetter(string, index) {\n  var ray = string.split('');\n  var removed = ray.splice(index, 1);\n  return ray.join('');\n}\n\nconsole.log(removeLetter('somestring', 4)) // sometring\nconsole.log(removeLetter('44', 1)) // 4\n    </code>";const E="23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1",M="<code>\nfunction swapFirstWithLast(string) {\n  var ray = string.split('');\n  var first = ray.shift();\n  var last = ray.pop();\n  ray.unshift(last);\n  ray.push(first);\n  return ray.join('');\n}\n\nconsole.log(swapFirstWithLast('somestring')) // gomestrins\nconsole.log(swapFirstWithLast('belly')) // yellb\n    </code>";const x="24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.",I="<code>\nfunction firstLetterJam(string) {\n  var ray = string.split('');\n  var first = ray[0];\n\n  ray.unshift(first);\n  ray.push(first);\n  return ray.join('');\n}\n\nconsole.log(firstLetterJam('somestring')) // ssomestrings\nconsole.log(firstLetterJam('belly')) // bbellyb\n    </code>";const B="25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.",G="<code>\nfunction multOfThreeOrSeven(number) {\n  return (number % 3 === 0 || number % 7 === 0);\n}\n\nconsole.log(multOfThreeOrSeven(6)); // true\nconsole.log(multOfThreeOrSeven(7)); // true\nconsole.log(multOfThreeOrSeven(4)); // false\n    </code>";const F="26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.",U="<code>\nfunction frontNBack3(string) {\n  let lastThree = string.substring(string.length - 3)\n  return lastThree + string + lastThree;\n}\n\nconsole.log(frontNBack3('rapper')) // perrapperper\nconsole.log(frontNBack3('peppermint')) // intpeppermintint\nconsole.log(frontNBack3('poopy')) // opypoopyopy\n    </code>";const Y="27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.",Z="<code>\nfunction checkJavaString(string) {\n  let java = string.substring(0,4).toLowerCase();\n  return java === 'java' ? true : false;\n}\n\nconsole.log(checkJavaString('java Chocolate Chip')); // true\nconsole.log(checkJavaString('Jovial')); // false\nconsole.log(checkJavaString('javaScript')); // true\n    </code>";const V="28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range",z="<code>\nfunction rangeOf(first, second) {\n  let args = [first, second];\n  return args.some((range) => range >= 50 && range <= 99)\n}\nconsole.log(rangeOf(33, 4)); // false\nconsole.log(rangeOf(455, 95)); // true\nconsole.log(rangeOf(50, 99)); // true\nconsole.log(rangeOf(503, 929)); // false\nconsole.log(rangeOf(73, 929)); // true\n    </code>";const K="29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.",Q="<code>\nfunction rangeOfThree(first, second, third) {\n  let args = [first, second, third];\n  return args.some((range) => range >= 50 && range <= 99)\n}\nconsole.log(rangeOfThree(1, 22, 55)); // true\nconsole.log(rangeOfThree(1, 22, 5)); // false\nconsole.log(rangeOfThree(1, 242, 5)); // false\nconsole.log(rangeOfThree(31, 242, 5)); // false\nconsole.log(rangeOfThree(77, 242, 5)); // true\nconsole.log(rangeOfThree(77, 99, 5)); // true\nconsole.log(rangeOfThree(0, 99, 5)); // true\n    </code>";const X='30. Write a JavaScript program to check if a string "Script"\npresents at 5th (index 4) position in a given string, if "Script" presents in the\nstring return the string without "Script" otherwise return the original one.',$="<code>\nfunction scriptThing(string) {\n  let split = string.split('');\n  let script = split.splice(4, 6).join('').toLowerCase();\n  if(script === 'script') {\n    return split.join('');\n  } else {\n    return string\n  }\n}\n\nconsole.log(scriptThing('javaScript')); // java\nconsole.log(scriptThing('javScript')); // javScript\nconsole.log(scriptThing('poop')); // poop\nconsole.log(scriptThing('poopscripthair')); // poophair\n    </code>";const _="31. Write a JavaScript program to find the largest of three given integers.",nn="<code>\nfunction largestOfThree(...numbers) {\n    return numbers.reduce((prev, curr) => {\n        return prev > curr ? prev : curr;\n    })\n}\n\nconsole.log(largestOfThree(1, 2, 3)); // 3\nconsole.log(largestOfThree(1, 23, 3)); // 23\nconsole.log(largestOfThree(100, 23, 3)); // 100\nconsole.log(largestOfThree(-100, 3, 3)); // 3\n    </code>";const en="32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.",rn="<code>\nfunction nearestToOneHundo(...numbers) {\n  return numbers.reduce((prev, curr) => {\n    if(checkHair(prev) === checkHair(curr)) return [prev, curr] + ' BOTH SAMEZ's';\n    return checkHair(prev) < checkHair(curr) ? prev : curr;\n  })\n}\n\nfunction checkHair(val) {\n  return Math.abs(100 - val)\n}\n\nconsole.log(nearestToOneHundo(3, 5)); // 5\nconsole.log(nearestToOneHundo(333, 15)); // 15\nconsole.log(nearestToOneHundo(95, 102)); // 102\nconsole.log(nearestToOneHundo(99, 100)); // 100\nconsole.log(nearestToOneHundo(99, 99)); // 99,99 BOTH SAMEZ's\nconsole.log(nearestToOneHundo(99, 101)); // 99,101 BOTH SAMEZ's\n\n    </code>";const tn="33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.",on="<code>\n\nFIRST ONE:\nfunction rangerWillRobinson(...numbers) {\n  ray = [];\n  numbers.forEach((el) => {\n    if((el >= 40 && el <= 60) || (el <= 100 && el >= 70)) {\n      ray.push(true);\n    } else {\n      ray.push(false);\n    }\n  })\n  return ray.includes(false) ? false : true;\n}\n\nSECOND ONE:\nfunction rangerWillRobinson(...numbers) {\n  return numbers.every((el) => {\n    return (el >= 40 && el <= 60) || (el <= 100 && el >= 70);\n  });\n}\n\nconsole.log(rangerWillRobinson(44, 7)); // false\nconsole.log(rangerWillRobinson(44, 70)); // true\nconsole.log(rangerWillRobinson(60, 100)); // true\nconsole.log(rangerWillRobinson(40, 41)); // true\nconsole.log(rangerWillRobinson(40, 111)); // false\n\n    </code>";const sn="34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.",cn="<code>\n\nfunction betwixt4060(...numbers) {\n  if(!numbers.every((el) => el >= 40 && el <= 60)) return false;\n  return numbers.reduce((prev, cur) => {\n    return prev > cur ? prev : cur;\n  });\n}\n\nconsole.log(betwixt4060(33, 40)) // false\nconsole.log(betwixt4060(3, 40)) // false\nconsole.log(betwixt4060(40, 60)) // 60\nconsole.log(betwixt4060(60, 40)) // 60\n\n    </code>";function an(...n){return!!n.every(n=>n>=40&&n<=60)&&n.reduce((n,e)=>n>e?n:e)}console.log(an(33,40)),console.log(an(3,40)),console.log(an(40,60)),console.log(an(60,40));const ln="35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.",gn="<code>\nfunction contains2to4instances(word, letter) {\n  let ray = word.split('');\n  let count = ray.filter((el) => el === letter).length;\n  return (count >= 2 && count <= 4) ? true : false\n}\n\nconsole.log(contains2to4instances('Python', 'y')); // false\nconsole.log(contains2to4instances('JavaScript', 'a')); // true \nconsole.log(contains2to4instances('Console', 'o')); // true\n    </code>";function un(n,e){let r=n.split("").filter(n=>n===e).length;return r>=2&&r<=4}console.log(un("Python","y")),console.log(un("JavaScript","a")),console.log(un("Console","o"));const fn="36. Write a JavaScript program to check if the last digit of the three given positive integers is same.",dn="<code>\n    \nfunction lastDigitsyo(...digits) {\n  if (digits.find((el) => el < 0)) return false;\n\n  let lastDigit = digits.map(el => {\n    let ray = el.toString().split('');\n    let lastNumber = ray[ray.length - 1];\n    return lastNumber;\n  });\n\n  for (let i = 0; i < lastDigit.length; i++) {\n    return (lastDigit[i] === lastDigit[i+1]) ? true : false\n  }\n}\n\nconsole.log(lastDigitsyo(12,22,42)); // true\nconsole.log(lastDigitsyo(1,2,4)); // false\nconsole.log(lastDigitsyo(11,22,44)); // false\n\nconsole.log(lastDigitsyo(20, 30, 400)); // true\nconsole.log(lastDigitsyo(-20, 30, 400)); // false\nconsole.log(lastDigitsyo(20, -30, 400)); // false\nconsole.log(lastDigitsyo(20, 30, -400)); // false\n\n    </code>";function hn(...n){if(n.find(n=>n<0))return!1;let e=n.map(n=>{let e=n.toString().split("");return e[e.length-1]});for(let n=0;n<e.length;n++)return e[n]===e[n+1]}console.log(hn(12,22,42)),console.log(hn(1,2,4)),console.log(hn(11,22,44)),console.log(hn(20,30,400)),console.log(hn(-20,30,400)),console.log(hn(20,-30,400)),console.log(hn(20,30,-400));const pn="37. Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.",vn="<code>\nfunction newStringOThree(string) {\n  if(string.length < 3) return string.toUpperCase();\n  return string.split('').splice(0, 3).join('').toLowerCase() + string.substring(3);\n}\n\nconsole.log(newStringOThree('HELLO')); // helLO\nconsole.log(newStringOThree('ah')); // AH\nconsole.log(newStringOThree(\"Python\")); // python\nconsole.log(newStringOThree(\"Py\")); // PY\nconsole.log(newStringOThree(\"JAVAScript\")); // javAScript\n    </code>";const mn='38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.',bn='<code>\nfunction grades(mark, final) {\n  return (!final.includes(\'true\') && mark >= 89) ? true : (final.includes(\'true\') && +mark >= 90) ? true : false;;\n}\n\nconsole.log(grades("78", " ")); // false\nconsole.log(grades("89", "true ")); // false\nconsole.log(grades("99", "true ")); // true\nconsole.log(grades("89", " aafafaf")); // true\nconsole.log(grades("90", " true")); // true\n    </code>';const kn=[t,o,i,s,c,a,l,g,u,f,d,h,p,v,m,b,k,y,S,w,T,O];var yn=r(16).domUtils;e.default=(()=>{!function(n){n.map(n=>yn.masterCreator(n.question.slice(0,2),n.question,n.blockcode))}(kn)})},16:function(n,e){e.domUtils={createAndSetAnchor(n){var e=document.createElement("a");return e.setAttribute("name",n),e.setAttribute("href","#"+n),e},createAndSetHR:()=>document.createElement("hr"),createAndSetMainDiv(n){var e=document.createElement("div");return e.innerText=n,e},createCodeBlock(n){var e=document.createElement("pre");return e.innerHTML=n,e},generateHTML:(n,e,r,t)=>(n.appendChild(e),document.getElementById("jsbasics").append(r,t,n)),masterCreator(n,e,r){var t=this.createAndSetAnchor(n),o=this.createAndSetHR(),i=this.createAndSetMainDiv(e),s=this.createCodeBlock(r);return this.generateHTML(i,s,t,o)}}}}]);