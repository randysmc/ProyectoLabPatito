//cte express que requiere libreria express
const express = require('express');
const path = require('path');

//genero una constante app, instancia de express
const app = express();

//require('dotenv').config()
//variables de entorno
const port = process.env.PORT || 5000;
//app.set('view engine', 'engine')

//modulo para las clases
app.use(express.static('public'));

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));
//endpoints reglas, punto a conectarse en una api
app.get('/' , (req , res)=>{

   console.log();
   res.status(201).sendFile(path.join(__dirname,'../views/index.html'));
});

app.get('/hola', (req, res)=>{

   //res.send('hello from simple server :)')
   res.status(201).json({
    res: "Hola"
})
    
});

//escuchanod en el puerto
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))