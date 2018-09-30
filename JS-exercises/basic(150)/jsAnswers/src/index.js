import _ from 'lodash';

var header = require('./domscripts/header');
var sidenav = require('./domscripts/sidenav');

var seventeen = require('./exercises/17');
var eighteen = require('./exercises/18');
var ninteen = require('./exercises/19');
var twenty = require('./exercises/20');
var twentyone = require('./exercises/21');
var twentytwo = require('./exercises/22');
var twentythree = require('./exercises/23');
var twentyfour = require('./exercises/24');
var twentyfive = require('./exercises/25');
var twentysix = require('./exercises/26');

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
