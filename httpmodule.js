const http =require("http");
const server=http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"});
// res.writeHead(200,{"content-type":"text/plain"});
  res.write("<h1>Node Js Tutorials Running</h1>");
  res.write("<h1>Node Package installed and Running</h1>");
res.end();
}).listen(3000,()=>console.log("Server Running on port 3000 "));
