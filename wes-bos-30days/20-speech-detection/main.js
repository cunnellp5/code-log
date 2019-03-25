window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result', e => {
  const transcripts = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcripts;
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
  if(transcripts.includes('weather')) {
    window.open(`https://weather.com/weather/tenday/l/USCO0105:1:US`, '_blank');
  }
})

recognition.addEventListener('end', recognition.start);
recognition.start();

