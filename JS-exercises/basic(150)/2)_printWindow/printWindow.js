// 2. Write a JavaScript program to print the contents of the current window.


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "printScweeen";
button.style.height = "200px";
button.style.width = "80vw";
button.style.color = "blue";
button.style.backgroundColor = "pink";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", () => {
  window.print();
});