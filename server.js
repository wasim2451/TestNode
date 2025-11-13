const fs=require('fs');
// FS Module Learn 
fs.readFile('notes.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log("Async Test 1 Read File Async");

const data=fs.readFileSync('notes2.txt','utf-8');
console.log(data);
console.log("Blocked Code -- Now Executing");
// Similartly Write File and others 

//Create HTTP Server
const http=require('http');
const server=http.createServer((req,res)=>{
   const{method,url}=req;
   if(url=='/'&&method==='GET'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>Home Page</h1>")
   }
});
server.listen(3000,()=>{
    console.log("Server Running");
})