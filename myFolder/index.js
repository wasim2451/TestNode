// Understanding Node
console.log("Hello World from Node ");
//Understanding process
console.log(process.pid);
console.log(process.memoryUsage());
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.uptime());

//understanding global object 

globalThis.console.log("This is a console log accessing through Global ");
console.log(global);

//understanding __dirname
console.log(__dirname);
//understanding __filrname
console.log(__filename);

const path=require('path');
const newpublicPath=path.join(__dirname,'public','new.txt');
console.log(newpublicPath);
