/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/




document.getElementById('controls').addEventListener('click', function (event){
  console.log(event.target.textContent);
  // console.log(document.getElementById('controls').text = document.getElementById('controls').textContent);
  // console.log(document.getElementById('stopButton').text = document.getElementById('stopButton').textContent);
  // console.log(document.getElementById('slowButton').text = document.getElementById('slowButton').textContent);
  // console.log(document.getElementById('goButton').text = document.getElementById('goButton').textContent);
});



//stottttooooooopppp
document.getElementById('stopButton').addEventListener('click', function (){
  // document.getElementById('stopLight').style.backgroundColor = 'red';
      if (document.getElementById('stopLight').style.backgroundColor === 'red') {
         document.getElementById('stopLight').style.backgroundColor = 'black';
    } else {
        document.getElementById('stopLight').style.backgroundColor = 'red'
      }
});


//   console.log(document.getElementById('stopButton').text = 'entered ' + document.getElementById('stopButton').textContent + ' Button');
// });
//
//
// document.getElementById('stopButton').addEventListener('mouseout', function (){
//   console.log(document.getElementById('stopButton').text = 'left ' + document.getElementById('stopButton').textContent + ' Button');
// });


//sloooooooooooowwwwwww

document.getElementById('slowButton').addEventListener('click', function (){
  // document.getElementById('slowLight').style.backgroundColor = 'orange';
  if (document.getElementById('slowLight').style.backgroundColor === 'orange') {
     document.getElementById('slowLight').style.backgroundColor = 'black';
  } else {
    document.getElementById('slowLight').style.backgroundColor = 'orange'
  }



    console.log(document.getElementById('slowButton').text = 'entered ' + document.getElementById('slowButton').textContent + ' Button');
});

document.getElementById('slowButton').addEventListener('mouseout', function (){
    console.log(document.getElementById('slowButton').text = 'left ' + document.getElementById('slowButton').textContent + ' Button');
});

// goooooooooooo

document.getElementById('goButton').addEventListener('click', function (){
  // document.getElementById('goLight').style.backgroundColor = 'green';
    console.log(document.getElementById('goButton').text = 'Entered ' + document.getElementById('goButton').textContent + ' Button');
});

document.getElementById('goButton').addEventListener('mouseout', function (){
    console.log(document.getElementById('goButton').text = 'left ' + document.getElementById('goButton').textContent + ' Button');
});


document.getElementById("controls").addEventListener("click",function(){

})
