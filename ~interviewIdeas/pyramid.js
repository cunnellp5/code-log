// print all kinds of triangles with #


// first triangle
//   #
//   ##
//   ###
//   ####

// for (var i = '*'; i.length < 10; i+='*') {
//   console.log(i);
// }


//second triangle
//   ####
//   ###
//   ##
//   #


// third  (not a right tri)
//   #####
//   ####
//   ###
//   ##
//   #
  //  for (var i = 0; i < 5; i++) {
  //     for (var j = 0; j < i; j++) {
  //       document.write("&nbsp;");
  //     }
  //     for (var j = 5; j > i; j--) {
  //       document.write("*");
  //       if (j > i + 1) document.write("&nbsp;");
  //     }
  //     document.write('<br/>')
  //   }


// fourth
//      #
//     ##
//    ###
//   ####
    // for (var i=0; i < 5; i++) {
    //   for(var j=5; j > i; j--) {
    //     document.write('&nbsp;');
    //   }
    //   for(var j=0; j < i; j++) {
    //     document.write('*');
    //     if (j > i) {
    //       document.write('$nbsp')
    //     }
    //   }
    //   document.write('<br/>')
    // }




for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i; j++) {
    console.log(' ');
  }
  for (var j = 5; j > i; j--) {
    console.log('*');
    if (j > i + 1) {
      console.log(' ');
    }
  }
  console.log(</br>);
}
