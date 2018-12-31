$(document).ready(function(){

// ###Checkerboard
  // var dimension = 30;
  // var percentage = 100/dimension;
  //   for (var i = 0; i < dimension; i++) {
  //     for (var j = 0; j < dimension; j++) {
  //       if ((i + j) % 2 == 0) {
  //         $('body').append('<div class="red"></div>')
  //         $('.red').css('background-color', 'red').width(percentage + '%').css('padding-bottom', percentage + '%').css('float', 'left')
  //       } else {
  //         $('body').append('<div class="black"></div>')
  //         $('.black').css('background-color', 'black').width(percentage + '%').css('padding-bottom', percentage + '%').css('float', 'left')
  //     }
  //   }
  // }

  // ###Random Colors
  var dimension = 14;
  var percentage = 100 / dimension;
    for (var i = 0; i < dimension; i++) {
      for (var j = 0; j < dimension; j++) {
          let body = $('body');
          let div = $('<div></div>')
              .css('background-color', randomColor())
              .width(percentage + '%')
              .css('padding-bottom', percentage + '%')
              .css('float', 'left');
          body.append(div)
      }
    }
    function randomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }


});
