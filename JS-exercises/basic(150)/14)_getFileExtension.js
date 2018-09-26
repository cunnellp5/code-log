// 14. Write a JavaScript exercise to get the extension of a filename.

function getExtension(file) {
  return file.split('.').pop();
}

function getExtensionRegex(file) {
  let pattern = /[^.]*$/;
  return pattern.exec(file)[0]
}

function subStringExtension(file) {
  return file.slice((file.lastIndexOf('.') - 1 >>> 0) + 2); // Zero-fill right shift operator is wack!
}

function lastOne(file) {
  let lio = file.lastIndexOf('.');
  return lio < 0 ? '' : file.slice(lio + 1, file.length)
}

console.log(lastOne('phil.txt'))
console.log(lastOne('.hiddenfile'))
console.log(lastOne('phil.xml'))
console.log(lastOne('filename.with.many.dots.ext'))
console.log(lastOne('filename'))

console.log(subStringExtension('phil.txt'))
console.log(subStringExtension('.hiddenfile'))
console.log(subStringExtension('phil.xml'))
console.log(subStringExtension('filename.with.many.dots.ext'))
console.log(subStringExtension('filename'))

console.log(getExtensionRegex('phil.txt'))
console.log(getExtensionRegex('.hiddenfile'))
console.log(getExtensionRegex('phil.xml'))
console.log(getExtensionRegex('filename.with.many.dots.ext'))
console.log(getExtensionRegex('filename'))

console.log(getExtension('phil.txt'))
console.log(getExtension('.hiddenfile'))
console.log(getExtension('phil.xml'))
console.log(getExtension('filename.with.many.dots.ext'))
console.log(getExtension('filename'))