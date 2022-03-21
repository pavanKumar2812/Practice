
   
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./names')
const sayHi = require('./function')
const data = require('./alternative-flavor')
require('./mind-grenade')
sayHi('susan')
sayHi(names.pavan)
sayHi(names.peter)
console.log(data);