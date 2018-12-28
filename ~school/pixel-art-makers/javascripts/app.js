$(document).ready(function(){

// var dimension = 8;
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

// var dimension = 50;
// var percentage = 100/dimension;
  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 30; j++) {
      $('.box').append('<div class = "pixel"></div>')
      $('.pixel').css('width','8px')
      $('.pixel').css('height','8px')
      // $('.pixel').css('float', 'left')
      // $('.pixel').css('border', '1px solid black')
      // $('.pixel').css('margin', '1px')
    }
  }
  $( ".pixel" ).click(function() {
  $( this ).css('background-color','red');
  });
});
