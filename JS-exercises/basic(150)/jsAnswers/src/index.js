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

createPage(masterArray)
