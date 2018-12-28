
## Array Access
// 1. Given the following array:
//
// var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

// console.log(books[0]);
// console.log(books[2]);

//
// 2. Given the following array
//
// var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"]
// for (var i = 0; i < songs.length; i++) {
//   songs[i]
// }
//
// console.log(songs);

//
// 3. Given the following arrays:
//
// var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"]
// var riders = ["Kelly", "Steve", "Georgio", "Fabio"]
//
// for (var i = 0; i < riders.length; i++) {
//   // riders[i]+= (" drives a " + cars)
// for (var i = 0; i < cars.length; i++) {
//   // cars[i]
// console.log(riders[i] + " drives a " + cars[i]);
// }
// }


## Nested Array Access

1. Given the following array of arrays:

var trilogies = [
	["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
	["The Empire Strikes Back","Return of the Jedi","A New Hope"],
	["Back to the Future", "Back to the Future II", "Back to the Future III"],
	["The Hunger Games", "Catching Fire", "Mockingjay"],
	["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
	["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
	["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
]

// * Write a loop that prints all movies
for (var i = 0; i < trilogies.length; i++) {
    console.log(trilogies[i]);
}
// * Write a loop that prints only the last movie in the trilogy
  for (var i = 0; i < trilogies.length; i++) {
    console.log(trilogies.length-1);
}
//
// * Write a loop that prints only the first movie in the trilogy
// * Write a loop that prints only odd-numbered movies
