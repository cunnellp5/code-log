function parseQueryString (str){
  str = str.slice(1);
  let split1 = str.split('&')
  var emptyArr = [];
  for (var i = 0; i < split1.length; i++) {
    emptyArr.push(split1[i].split('='))
  }
    return emptyArr.reduce(function(result, emptyArr){
      result[emptyArr[0]] = emptyArr[1];
      return result
    }, {});
}
console.log(parseQueryString('?find_desc=tacos&find_loc=San+FranciscoCA'));
console.log(parseQueryString('?q=dogs&sort=top&t=week'));
