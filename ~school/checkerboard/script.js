// Your JS goes here

$(document).ready(function(){

// for (var i = 0; i < 31; i++) {
//   $('body').append('<div class="red"></div>');
//   $('body').append('<div class="black"></div>');
// }
//
// $('div').css('width', '11.1%').css('padding-bottom', '11.1%').css('background-color','red').css('float','left');
// $('.black').css('background-color', 'black');


//OOOORRRRRRR

var dimension = 30;
var percentage = 100/dimension;
  for (var i = 0; i < dimension; i++) {
    for (var j = 0; j < dimension; j++) {
      if ((i + j) % 2 == 0) {
        $('body').append('<div class="red"></div>')
        $('.red').css('background-color', 'red').width(percentage + '%').css('padding-bottom', percentage + '%').css('float', 'left')
      } else {
        $('body').append('<div class="black"></div>')
        $('.black').css('background-color', 'black').width(percentage + '%').css('padding-bottom', percentage + '%').css('float', 'left')
    }
  }
}

});


// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
//
