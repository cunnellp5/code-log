const question = `86. Write a JavaScript program to find the types of a given angle.  Go to the editor
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
`;


const blockcode = `<code>
function angle_Type(angle) {
  let angleName;

  if (angle < 90) angleName = 'Acute';
  if (angle === 90) angleName = 'Right';
  if (angle > 90 && angle < 180) angleName = 'Obtuse';
  if (angle > 180) angleName = 'Straight';

  return \`${ angleName} angle\`;
}

console.log(angle_Type(47)); // Acute angle.
console.log(angle_Type(90)); // Right angle.
console.log(angle_Type(145)); // Obtuse angle.
console.log(angle_Type(180)); // Straight angle.
    </code>`;

function angle_Type(angle) {
  let angleName;

  if (angle < 90) angleName = 'Acute';
  if (angle === 90) angleName = 'Right';
  if (angle > 90 && angle < 180) angleName = 'Obtuse';
  if (angle > 180) angleName = 'Straight';

  return `${angleName} angle`;
}


export { question, blockcode }


