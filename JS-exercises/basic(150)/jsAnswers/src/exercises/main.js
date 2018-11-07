// This file is just all the info from the above files mashed into one
// import * as seventeen from './teens/17';
// import * as eighteen from './teens/18';
// import * as ninteen from './teens/19';
import * as teens from './teens/index';
import * as twenty from './20';
import * as twentyone from './21';
import * as twentytwo from './22';
import * as twentythree from './23';
import * as twentyfour from './24';
import * as twentyfive from './25';
import * as twentysix from './26';
import * as twentyseven from './27';
import * as twentyeight from './28';
import * as twentynine from './29';
import * as thirty from './30';
import * as thirtyone from './31';
import * as thirtytwo from './32';
import * as thirtythree from './33';
import * as thirtyfour from './34';
import * as thirtyfive from './35';
import * as thirtysix from './36';
import * as thirtyseven from './37';
import * as thirtyeight from './38';
import * as thirtynine from './39';
import * as forty from './40';
import * as fortyone from './41';
import * as fortytwo from './42';
// import * as fortythree from './43';


const masterArray = [
  // seventeen,
  // eighteen,
  // ninteen,
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
  // fortythree
]

const teenagers = teens.teens.forEach((el) => {
  masterArray.push({ blockcode: el.blockcode, question: el.question })
})
console.log(teenagers)


export { masterArray };
