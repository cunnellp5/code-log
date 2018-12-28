// Description:
//
// Complete the method so that it returns an array of all ID's passed in.
//  The data structure will be similar to the following:
//
var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}
//
// extractIds(data) // should return [1,2,3,4,5]
// The method should be able to handle the case of empty data being passed in.
//
// Note: The only arrays that need to be traversed are those assigned to the
// "items" property.

// function extractIds(data){
//   for (var prop in data) {
//     var tierOne = ('data.' + prop, '=', data[prop])
//     console.log(tierOne);
//   }
// }
function extractIds(data){
  if (Object.keys(data).length === 0) {
    return []
  }
  var answer = [];
  answer.push(data.id)

  for (var prop in data) {
    data[prop]

    for (var i = 0; i < data[prop].length; i++) {
      var twoThree = data[prop][i].id
      answer.push(twoThree)

      if (data[prop][i].items !== undefined) {
        let ray = data[prop][i].items

        for (var i = 0; i < ray.length; i++) {
          answer.push(ray[i].id)
          if (ray[i].items !== undefined) {
            answer.push(ray[i].items[0].id)
          }
        }
      }
    }
  }
  return answer
}
console.log(extractIds(data));
