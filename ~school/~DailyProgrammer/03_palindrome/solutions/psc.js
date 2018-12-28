function palindrome (str) {
  let forwards = str.replace(/[\s\"\'?!.,;:!@#$%^&*()_+-]/g, '').toLowerCase()
  let backwards = forwards.split('').reverse().join('')
  return forwards === backwards ? true : false
}
console.log(palindrome('Was it a car or a cat I saw?!'));
console.log(palindrome('No \'x\' in Nixon'));
