// CommonJS, every file is module (by default)
// Modules - encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('Jack')
sayHi(names.Tomas)
sayHi(names.ahmed)   