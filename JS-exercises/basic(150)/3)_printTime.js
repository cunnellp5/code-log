// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function currentDate() {
  let month = getMonth();
  let day = getDay();
  let year = getYear();
  return `${month}-${day}-${year}`
}

function getMonth() {
  let month = new Date().getMonth()
  let adjusted = month + 1;
  return adjusted < 10 ? `0${adjusted}` : adjusted
}

function getDay() {
  let day = new Date().getUTCDate()
  return day
}

function getYear() {
  let year = new Date().getFullYear();
  return year
}

console.log(currentDate())
