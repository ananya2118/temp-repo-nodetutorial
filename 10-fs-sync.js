const {readFileSync,writeFileSync, read} =require('fs');
const { log } = require('util');
console.log('start');
const first=readFileSync('./content/first.txt','utf-8')
console.log(first);

const second=readFileSync('./content/second.txt','utf-8')
console.log(second);

writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{flag:'a'})
console.log("done with the task");
console.log("start with next one");