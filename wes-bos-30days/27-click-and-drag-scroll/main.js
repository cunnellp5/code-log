const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
let startTime;
let endTime;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft
  timerId();
});

slider.addEventListener('mouseleave', () => {
  endTime = Date.now();
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  endTime = Date.now();
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  startTime = Date.now();
  if(!isDown) return; // stop running function
  e.preventDefault(); // stops selecting text or weird stuff
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 5;
  slider.scrollLeft = scrollLeft - walk;
  let delta = endTime - startTime
  let speed = -1 * (slider.scrollLeft / delta)
  console.log({speed})
});