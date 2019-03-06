const items = document.querySelectorAll('.item');

items.forEach((item) => {
  // item.addEventListener('mousedown', shifty);
  item.addEventListener('keydown', shifty);
})

function shifty(e) {
  console.log(items);
  if(e.shiftKey) {
    const text = this.querySelector('p').innerHTML;
    console.log(text)
  } else {
    console.log('false')
  }
  // console.log(items)
  // console.log(this.querySelector('p').innerHTML)
}

// console.log(item);