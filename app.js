// npm - global command, comes with node
//npm -version

// local dependency - use it in this particular project
// npm i <packageName>

//global dependencies - use it in any project
// npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
// npm init -y (skip steps)



const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
console.log(items)

const newItems = _.flattenDeep(items)
console.log(newItems)
