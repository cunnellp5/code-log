exports.sidenav = (function () {
  setTimeout(() => {
    let main = document.createElement('main');
    let divtitle = document.createElement('div');
    let divwrap = document.createElement('div');

    main.setAttribute('id', 'sideNav')
    divtitle.setAttribute('id', 'title')
    divtitle.innerText = 'Navigate:'
    divwrap.setAttribute('id', 'wrap')

    let count = document.querySelectorAll('a').length;

    let dynamicATags = "";
    for (var i = 17; i < (17 + count); i++) {
      dynamicATags += `<a href="#${i}">${i}</a>`;
    }

    divwrap.innerHTML = dynamicATags;

    main.append(divtitle, divwrap)
    var body = document.getElementsByTagName('body')[0]
    body.append(main);
  })

}());
