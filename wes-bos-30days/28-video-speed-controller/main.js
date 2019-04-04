const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const wrapper = document.querySelector('.wrapper');

let isDown = false;

function handleMove(e) {
    if(!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', (e) => {
  isDown = true;
})
speed.addEventListener('mouseleave', (e) => {
  isDown = false;
})
wrapper.addEventListener('mouseup', (e) => {
  isDown = false;
})
speed.addEventListener('mousemove', handleMove)