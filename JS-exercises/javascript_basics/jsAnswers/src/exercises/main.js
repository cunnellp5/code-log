// This file is just all the info from the above files mashed into one

import * as teens from './teens/index';
import * as twenties from './twenties/index';
import * as thirties from './thirties/index';
import * as forties from './forties/index';
import * as fifties from './fifties/index';
import * as sixties from './sixties/index';
import * as seventies from './sixties/index';

const loopMe = [
  teens,
  twenties,
  thirties,
  forties,
  fifties,
  sixties,
  seventies
]
const masterArray = []


const result = loopMe.forEach((el) => {
  el.data.forEach((el) => {
    masterArray.push({ blockcode: el.blockcode, question: el.question });
  })
})


export { masterArray };
