// Use jQuery for all of the functions below

// Define a function named getTextById
// The function should accept 1 parameter: id
// The function should select the element with the given id
// The function should return the element's textContent
function getTextById (id) {
  return $("#" + id).text();
}

// Define a function named setTextById
// The function should accept 2 parameters: id and text
// The function should select the element with the given id
// The function should set the element's textContent to be the given text
function setTextById (id, text) {
  return $("#" + id).text(text);
}

// Define a function named getTextByClassName
// The function should accept 1 parameter: className
// The function should select the element with the given className
// Assume there is only 1 element with the given className on the page
// The function should return the element's textContent
function getTextByClassName (className) {
  return $("." + className).text()
}

// Define a function named setTextByClassName
// The function should accept 2 parameters: className and text
// The function should select the element with the given className
// Assume there is only 1 element with the given className on the page
// The function should set the element's textContent to be the given text
function setTextByClassName (className, text) {
  return $("." + className).text(text)
}

// Define a function named addClassById
// The function should accept 2 parameters: id and className
// The function should select the element with the given id
// Assume there is only 1 element with the given className on the page
// The function should add the given class to the elements classList
function addClassById (id, className) {
  return $("#" + id).addClass("" + className)
}

// Define a function named getValueByName
// The function should accept 1 parameter: name
// The function should select the element with the given name
// Assume there is only 1 element with the given name on the page
// The function should return the element's value
function getValueByName (name) {
  return $('[name="' + name + '"]').val();
}

// Define a function named setValueByName
// The function should accept 2 parameters: name and value
// The function should select the element with the given name
// Assume there is only 1 element with the given name on the page
// The function should set the element's value to be the given value
function setValueByName (name, value) {
return $('[name="' + name + '"]').val("" +value);
}

// Define a function named hideByClassName
// The function should accept 1 parameter: className
// The function should set the display property to 'none' on all elements with the given className
function hideByClassName (className) {
  return $("." + className).hide()
}




// Define a function named setStyleByClassName
// The function should accept 3 parameters: className, styleProperty and value
// The function should set the given style property to the given value on all elements with the given className
function setStyleByClassName (className, styleProperty, value) {
  return $("." + className).css("" + styleProperty, "" + value)
}
