exports.header = (function () {
  let header = document.createElement('header');
  let hone = document.createElement('h1');
  let hfive = document.createElement('h5');
  let hsix = document.createElement('h6');
  hone.innerText = 'Random Javascrizzurp:';
  hfive.innerText = '150 exercises from the javascript basic w3resources';
  hsix.innerText = '-philthy';
  header.append(hone, hfive, hsix);
  var body = document.getElementsByTagName('body')[0]
  body.append(header);
}());
