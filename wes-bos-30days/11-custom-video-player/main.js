// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.full');
let isFullScreen = false
let isScrubbing = false;

function togglePlay() {
  video.paused ? video.play() : video.pause();
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // playbackrate or volume are properties on the video object
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // if (!isScrubbing) return;
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullSize() {
  isFullScreen = !isFullScreen;
  if(isFullScreen) {
    // player.classList.toggle(':fullscreen')
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(slider => slider.addEventListener('change', handleRangeUpdate));
ranges.forEach(slider =>
  slider.addEventListener('mousemove', handleRangeUpdate)
);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => isScrubbing && scrub(e));
progress.addEventListener('mousedown', () => (isScrubbing = true));
progress.addEventListener('mouseup', () => (isScrubbing = false));

fullScreen.addEventListener('click', fullSize);