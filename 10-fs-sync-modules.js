const { readFileSync, writeFileSync, writeFile} = require('fs');

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')


writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second} \n`,
    {flag: 'a'}
)

console.log('Done with this task')
console.log('Starting the next one')