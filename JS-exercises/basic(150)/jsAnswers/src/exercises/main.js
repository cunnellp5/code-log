// This file is just all the info from the above files mashed into one

import * as teens from './teens/index';
import * as twenties from './twenties/index';
import * as thirties from './thirties/index';
import * as forties from './forties/index';
import * as fifties from './fifties/index';

const loopMe = [
  teens,
  twenties,
  thirties,
  forties,
  fifties
]
const masterArray = []


const result = loopMe.forEach((el) => {
  el.data.forEach((el) => {
    masterArray.push({ blockcode: el.blockcode, question: el.question });
  })
})


export { masterArray };
