const http=require("http");


const myServer=http.createServer((req,res)=>{
    console.log("New Request Received");
    res.end("Hello World!");
});
myServer.listen(8001,()=>console.log("server started"));