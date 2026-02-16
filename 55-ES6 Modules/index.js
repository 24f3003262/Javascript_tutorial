//ES6 Modules= external file contains reusable code which can be imported into other JS files. Write reusable code for many different apps.
// Can contain functions, variables, classes, functions ... and more introduced as part of ECMAScript 2015 update

import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);
const circumeferece=getCircumference(5);
const area=getArea(5);
const volume=getVolume(5);
console.log(`${circumeferece.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);