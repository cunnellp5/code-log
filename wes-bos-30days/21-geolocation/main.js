const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition((data) => {
  speed.textContent = data.coords.speed
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err)
  alert('HEY! YOU NEED TO ALLOW THAT TO HAPPEN')
})