const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
let lastClicked;

function shifty(e) {
  let inBetween = false;

  if(e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if(this === checkbox || checkbox === lastClicked) {
        inBetween = !inBetween;
      }
      if (inBetween){
        checkbox.checked = true;
      }
    })
  }

  lastClicked = this;
}


checkboxes.forEach((checkbox) => checkbox.addEventListener('click', shifty))