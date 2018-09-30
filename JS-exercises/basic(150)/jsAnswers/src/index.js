import _ from 'lodash';

var nav = require('./nav');
var header = require('./header');
var sidenav = require('./sidenav');
var seventeen = require('./17');
var eighteen = require('./18');
var ninteen = require('./19');
var twenty = require('./20');
var twentyone = require('./21');
var twentytwo = require('./22');
var twentythree = require('./23');
var twentyfour = require('./24');
var twentyfive = require('./25');

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
