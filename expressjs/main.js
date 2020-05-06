const express =require("express");
const app =express();
var myMiddleware = require('./my-middleware.js')
app.use('/abc', express.static('public'));

var Validation= function(req,res,next){
    console.log('Middleware Working');
    next();
}

var userValidation= function(req,res,next){
    if(req.params.username =='jitendra')
    console.log('User Validate ');
    else
    console.log("Not Authorized User");
    next();
}

// app.use(Validation);

app.use(myMiddleware({ option1: '1', option2: '2' }));
app.use(userValidation);
app.get('/',Validation,(req,res)=>{
    res.send("Hello world in nepal");
});

app.get('/users/:username',(req,res)=>{
    res.send("Users Profile");
});


/*
app.get('/ab(*)cd/',(req, res)=>{
    console.log(req.params);
    res.send('Hello World: ');
});
 
app.get("/users/:Id?",(req, res)=>{

    if(req.params.Id ==undefined)
        res.send("All Users Data accessed");
    else
    res.send("Users Data accessed: "+ req.params.Id);
});

app.get("/flights/:From?.:To?",(req, res)=>{

    console.log(req.params)
    res.send("Search for flights: " + "From: "+ req.params.From + " To: "+ req.params.To);
});

app.post("/users/profile",(req, res)=>{
    res.send("Users Profile Data accessed");
});
*/

app.listen(3000,()=>console.log("Server running on port:3000"));