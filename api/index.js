//cte express que requiere libreria express
const express = require('express');
const path = require('path');

//genero una constante app, instancia de express
const app = express();


//variables de entorno
const port = process.env.PORT || 5000;
//app.set('view engine', 'engine')

//modulo para las clases
app.use(express.static('public'));

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));
//endpoints reglas, punto a conectarse en una api


//esta es nuestra ruta inicial
app.get('/' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/index.html'));
});

//esta ruta nos muestra el login
app.get('/login' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/login.html'));
});

//esta ruta nos muestra el formulario para ingresar paciente
app.get('/ingresar-px' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/ingresar-px.html'));
});

//esta ruta nos muestra el formulario para ingresar resultados de un examen
app.get('/ingresar-resultados' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/ingresar-resultados.html'));
});

//esta ruta nos muestra el formulario para una solicitud de examen
app.get('/solicitud-examen' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/solicitud-examen.html'));
});


//escuchando en el puerto
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))