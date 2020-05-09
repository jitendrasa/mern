const express =require("express");
const bodyParser = require('body-parser');
const app =express();
app.use('/abc', express.static('public'));
app.set('view engine', 'twig');
app.set('views','./public/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{

    res.render('index',{title:"Login Form",message:'Enter Username and Password'});
});

app.post('/',(req,res)=>{

    res.render('login',{title:"User Details",username:req.body.username, password:req.body.password});
});

app.get('/about/:a-:b',(req,res)=>{

    res.render('about',{title:"About",
        sum:parseInt(req.params.a) + parseInt(req.params.b), 
        sub:parseInt(req.params.a) - parseInt(req.params.b), 
        mul:parseInt(req.params.a) * parseInt(req.params.b), 
        div:parseInt(req.params.a) / parseInt(req.params.b)});
});

app.listen(3000,()=>console.log("Server running on port:3000"));
