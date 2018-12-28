// Write a function that returns the total surface area and volume of a box as an
//  array: [area, volume].


function getSize(width, height, depth) {

  var surfaceArea = 2 * width * height + 2 * height * depth + 2 * width * depth
  var valiume = width * depth * height;

  return [surfaceArea, valiume]
}
console.log(getSize(4, 2, 6)); // [88, 48]
console.log(getSize(10, 10, 10));
console.log(getSize(4, 2, 6));
console.log(getSize(4, 2, 6));
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
// Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
// Test.assertEquals(getSize(4, 2, 6)[0], 88);
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
