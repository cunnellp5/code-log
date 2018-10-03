import _ from 'lodash';
import { masterArray } from './exercises/main';
import './styles/styles.css';

var domUtils = require('./helper-functions/domUtils').domUtils;
require('./domscripts/header');
require('./domscripts/sidenav');

function createPage(ray) {
  return ray.map((el) => {
    return domUtils.masterCreator(el.question.slice(0,2), el.question, el.blockcode);
  })
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var br = document.createElement('br');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(br);
  element.appendChild(btn);

  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });
  return element;
}

document.body.appendChild(component());
createPage(masterArray)
