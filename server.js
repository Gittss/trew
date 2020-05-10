const express=require('express')
const exphand=require('express-handlebars')
const path=require('path')

var app=express()
app.set('views',path.join(__dirname,'/views/'));    
app.engine('hbs',exphand({extname:'hbs', defaultLayout:'mainlayout', layoutsDir:__dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use(express.static('public'))
app.use('/',express.static(__dirname+'/public'));

app.listen(3000,()=>{
    console.log('express server started at port 3000')
})

app.get('/',(req,res)=>{
    res.render("home")
})