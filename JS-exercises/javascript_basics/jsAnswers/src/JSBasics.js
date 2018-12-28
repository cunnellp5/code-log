// This file should just render the jsBasics questions on some click

import { masterArray } from './exercises/main';
var domUtils = require('./helper-functions/domUtils').domUtils;

function createPage(ray) {
  return ray.map((el) => {
    return domUtils.masterCreator(el.question.slice(0,2), el.question, el.blockcode);
  })
}

export default () => {
  createPage(masterArray)
}