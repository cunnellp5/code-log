const question = `66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.`;
const blockcode =`<code>
function city_name(string) {
  return string.startsWith('Los') || string.startsWith('New') ? string : '';
}

console.log(city_name("New York")); // New York
console.log(city_name("Los Angeles")); // Los Angles
console.log(city_name("London")); // ''
    </code>`;

function city_name(string) {
  return string.startsWith('Los') || string.startsWith('New') ? string : '';
}

export { question, blockcode }
