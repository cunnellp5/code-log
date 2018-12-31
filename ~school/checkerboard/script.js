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
  // var dimension = 14;
  // var percentage = 100 / dimension;
  //   for (var i = 0; i < dimension; i++) {
  //     for (var j = 0; j < dimension; j++) {
  //         let body = $('body');
  //         let div = $('<div></div>')
  //             .css('background-color', randomColor())
  //             .width(percentage + '%')
  //             .css('padding-bottom', percentage + '%')
  //             .css('float', 'left');
  //         body.append(div)
  //     }
  //   }
  //   function randomColor() {
  //       var color = Math.floor(0x1000000 * Math.random()).toString(16);
  //       return '#' + ('000000' + color).slice(-6);
  //   }


  // ### Gradient
  var dimension = 14;
  var percentage = 100 / dimension;
  var body = $('body');
  var wrapper = body.append('<div class="wrapper"></div>')
    for (var i = 0; i < dimension; i++) {
      for (var j = 0; j < dimension; j++) {


          if ((i + j) % 2 == 0) {
            $('.wrapper').append('<div class="red"></div>')
            $('.red')
              .css('background-color', randomColor())
              .width(percentage + '%')
              .css('padding-bottom', percentage + '%')
              .css('float', 'left')
              .css('opacity', 0.3)
          } else {
            $('.wrapper').append('<div class="black"></div>')
            $('.black')
              .css('background-color', randomColor())
              .css('opacity', 0.3)
              .width(percentage + '%')
              .css('padding-bottom', percentage + '%')
              .css('float', 'left')
          }
          wrapper.css('background', `linear-gradient(transparent, ${randomColor()})`)
          // linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)
      }

    }

    function randomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }


});
