//cte express que requiere libreria express
const express = require('express');
const path = require('path');
//const morgan = require('morgan');

const myConnection = require('express-myconnection');

//genero una constante app, instancia de express
const app = express();


//variables de entorno
const port = process.env.PORT || 5000;
//app.set('view engine', 'engine')

//modulo para las clases
/*app.use(myConnection(mysql, {
   host:'localhost',
   user: 'root',
   password: '26931294',
   port: 3306,
   database: 'bdLabPatito'
}, 'single'))
*/
app.use(express.static('public'));

const mysqlhost = process.env.MYSQLHOST || '127.0.0.1'; 
const mysqluser = process.env.MYSQLUSER || 'root2';
const mysqlpass = process.env.MYSQLPASS || 'root12345';

const mysql = require('mysql');

/*const con = mysql.createConnection({
   host: mysqlhost,
   user: mysqluser,
   password: mysqlpass
});*/

//console.log(`serving ${publico}`);

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));
//endpoints reglas, punto a conectarse en una api

/*app.get('/api/saludo', async (req, res)=>{
   await setTimeout(()=>{
      console.log('entrando .. . .. ');

      const con2 = mysql.createConnection({
         host: mysqlhost,
         user: mysqluser,
         password: mysqlpass
      })
   })
})*/
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

app.get('/imprimir-resultados' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/imprimir.html'));
});

//ruta que nos manda a la secretaria
app.get('/secretaria' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/secretaria.html'));
});

//ruta que nos manda a laboratorista
app.get('/laboratorista' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/laboratorista.html'));
});

//ruta que nos manda a administrador
app.get('/administrador' , (req , res)=>{

   res.status(201).sendFile(path.join(__dirname,'../views/administrador.html'));
});

//escuchando en el puerto
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))