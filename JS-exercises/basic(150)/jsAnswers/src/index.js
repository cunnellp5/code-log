import _ from 'lodash';
var nav = require('./nav');
var header = require('./header');
var sidenav = require('./sidenav');
var seventeen = require('./17');

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
