const express = require('express'); // importamos el paqueteexpress
const mysql = require('mysql'); // importo el paquete my sql
const cors = require("cors");


const app = express(); // se define la variable para poder usar sus funciones
const port = 3000; // se define el PUERTO del servidor. 

// configuracion  para los jasons
app.use(express.json());
app.use(cors());



// ahora para que veamos algo habra q definir rutas. 
//// Metodo get: Método HTTP 
// que se utiliza para requerir (leer) recursos del servidor

app.get('/saludo', (req, res) => { // esa seria la ruta SALUDO q me devuelve un arhcivo texto.
    res.send('Hello World!') // cuando ponga saludo en la url de mi navegador recibirá ese mensaje de hola mundo.
  })

  // rutas para el jason
app.get("/saludos", (req, res) => {
    res.json({
      "saludo": "Hola mundo!",
      "despedida": "Adios"
    });
  });
  
//ahora vamos a crear otra ruta,
//  para asegurar q la conexion Mysql funciona y q devuelva algun mensaje.


app.post('/conexion',(req,res) =>{
 
  const datos = req.body;


  const connection = mysql.createConnection({
      host: datos.servidor,
      user: datos.username,
      password : datos.contraseña,
      database : datos.baseDatos
  });
  connection.connect ((err) => {
      if (err){
          res.json('Error en la conexion con Mysql' + err)
      }
      else{res.json('Conexion correcta');
  }});


});

  // para levantar el servidor. siempre tiene q estar, siempre al final.

  app.listen(port, () => {
    console.log(`El servidor funciona y escucha por el puerto ${port}`)
  })
  