// This file is just all the info from the above files mashed into one
import * as seventeen from './teens/17';
import * as eighteen from './teens/18';
import * as ninteen from './teens/19';
// import * as teens from './teens/index';
import * as twenty from './twenties/20';
import * as twentyone from './twenties/21';
import * as twentytwo from './twenties/22';
import * as twentythree from './twenties/23';
import * as twentyfour from './twenties/24';
import * as twentyfive from './twenties/25';
import * as twentysix from './twenties/26';
import * as twentyseven from './twenties/27';
import * as twentyeight from './twenties/28';
import * as twentynine from './twenties/29';
import * as thirty from './thirties/30';
import * as thirtyone from './thirties/31';
import * as thirtytwo from './thirties/32';
import * as thirtythree from './thirties/33';
import * as thirtyfour from './thirties/34';
import * as thirtyfive from './thirties/35';
import * as thirtysix from './thirties/36';
import * as thirtyseven from './thirties/37';
import * as thirtyeight from './thirties/38';
import * as thirtynine from './thirties/39';
import * as forty from './40';
import * as fortyone from './41';
import * as fortytwo from './42';
import * as fortythree from './43';
import * as fortyfour from './44';
import * as fortyfive from './45';
import * as fortysix from './46';
import * as fortyseven from './47';

const masterArray = [
  seventeen,
  eighteen,
  ninteen,
  twenty,
  twentyone,
  twentytwo,
  twentythree,
  twentyfour,
  twentyfive,
  twentysix,
  twentyseven,
  twentyeight,
  twentynine,
  thirty,
  thirtyone,
  thirtytwo,
  thirtythree,
  thirtyfour,
  thirtyfive,
  thirtysix,
  thirtyseven,
  thirtyeight,
  thirtynine,
  forty,
  fortyone,
  fortytwo,
  fortythree,
  fortyfour,
  fortyfive,
  fortysix,
  fortyseven
]

// const teenagers = teens.teens.forEach((el) => {
//   masterArray.unshift({ blockcode: el.blockcode, question: el.question })
// })
// console.log(teenagers)

// create an import array, then an extraction function like above to push the nested blockcode and question object


export { masterArray };
