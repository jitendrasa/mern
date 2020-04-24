const express =require("express");
const app =express();
app.use('/abc', express.static('public'));
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

app.listen(3000,()=>console.log("Server running on port:3000"));