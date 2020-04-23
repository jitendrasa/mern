const fs= require("fs");
// console.log(fs);

// fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{

//    console.log(data);

// });

try{
    const data= fs.readFileSync(__dirname+"/hello.txt","utf8");

    console.log(data);
}catch(e){
    console.log(e);
}

console.log("File Endede Successfuly");

