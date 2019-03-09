const sliderImages = document.querySelectorAll('.slide-in');
const sliderText = document.querySelectorAll('.text-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // window.scrollY + window.innerHeight slideinat tells us PX at the bottom of the window
    // but this gets us half way through the image
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  })
}

function slideText() {
  sliderText.forEach(text => {

    const slideTextInAt = window.scrollY + window.innerHeight - text.clientHeight / 2;
    const textBottom = text.offsetTop + text.clientHeight;
    const isHalfTextShown = slideTextInAt > text.offsetTop;

    const isNotScrolledPastText = window.scrollY < textBottom;

    if(isHalfTextShown && isNotScrolledPastText) {
      text.classList.add('active');
    } else {
      text.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', debounce(slideText));