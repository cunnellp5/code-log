// All Star Code Challenge #1
//
// Write a function, called sumPPG, that takes two NBA player objects and sums their PPG
//
function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);


function sumPPG(playerOne, playerTwo){
  var summate = playerOne.ppg + playerTwo.ppg
  return summate
}
console.log(sumPPG(iverson, jordan));
