// Create a function that takes two arguments:
//
// 1) An array of objects which feature the season, the team and the country of
// the Champions League winner.
//
// 2) Country (as a string, for example, 'Portugal')
//
// You function should then return the number which represents the number of times
//  a team from a given country has won. Return 0 if there have been no wins.
//
// For example if the input array is as follows:
//
//
//
// countWins(winnerList1, 'Spain') => should return 2
// countWins(winnerList1, 'Portugal') => should return 1
// countWins(winnerList1, 'Sportland') => should return 0

const winnerList1 = [
  { season: '1999-00', team: 'Real Madrid', country: 'Spain' },
  { season: '2000-01', team: 'Bayern Munich', country: 'Germany' },
  { season: '2001-02', team: 'Real Madrid', country: 'Spain' },
  { season: '2002-03', team: 'Milan', country: 'Italy' },
  { season: '2003-04', team: 'Porto', country: 'Portugal' }
]

// function countWins(winnerList, country) {
//   let winners = winnerList.map(element => element.country)
//   let countries = winners.filter(element => element === country)
//   return countries.length
// }


// super refactor
function countWins(winnerList, country) {
  return winnerList.map(element => element.country).filter(el => el === country).length
}

console.log(countWins(winnerList1, 'Spain'));
