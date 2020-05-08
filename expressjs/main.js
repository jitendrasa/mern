const express =require("express");
const app =express();
app.use('/abc', express.static('public'));
app.set('view engine', 'twig');
app.set('views','./public/views');

app.get('/',(req,res)=>{

    res.render('index',{title:"Tutorialswebsite",message:'Tutorials website is an learningportal'});
});


app.listen(3000,()=>console.log("Server running on port:3000"));