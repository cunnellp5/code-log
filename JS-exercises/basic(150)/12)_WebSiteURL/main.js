function getURL () {
  console.log(document.URL) // another way to grab the url
  let url = window.location.href
  let title = document.createElement('h1')
  title.innerText = 'This website Url is: ' + url
  let body = document.getElementsByTagName('body')[0]
  let result = body.appendChild(title)

  let val = 0
  let id = setInterval(frame, 50)
  function frame () {
    if (val === 1) {
      clearInterval(id)
    } else {
      val = val + 0.01
      result.style.opacity = val
    }
  }
  result.setAttribute('style', 'opacity: .2;')
};

getURL()
