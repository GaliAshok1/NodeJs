const fs=require("fs");
const os=require("os");
console.log(os.cpus().length);

//Sync...c= Blocking operation
fs.writeFileSync('./test.txt','Hey there Sync');

//Async...Non Blocking operation
fs.writeFile('./test.txt','Welcome to NodeJS Async',(err)=>{});


// const result=fs.readFileSync("./node.txt","utf-8");
// console.log(result);

// const result=fs.readFile("./node.txt","utf-8",(err,result)=>{
//     if(!err)
//         console.log(result);
//     else
//         console.log("Error",err);
// });

//append data to existing data
//fs.appendFileSync('./test.txt', `${Date.now()} welcome to nodejs\n`);

//copy existing data to new file
//fs.cpSync('./test.txt','./copy.txt');

//delete
//fs.unlinkSync('./copy.txt');

//console.log(fs.statSync('./test.txt').isFile());

//fs.mkdirSync("AshWebDev/typeScript/Angular",{recursive:true});




