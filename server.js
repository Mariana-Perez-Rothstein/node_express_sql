const express = require('express'); // importamos el paqueteexpress
const mysql = require('mysql'); // importo el paquete my sql



const app = express(); // se define la variable para poder usar sus funciones
const port = 3000; // se define el PUERTO del servidor. 

// ahora para que veamos algo habra q definir rutas. 
//// Metodo get: Método HTTP 
// que se utiliza para requerir (leer) recursos del servidor

app.get('/saludo', (req, res) => { // esa seria la ruta SALUDO
    res.send('Hello World!') // cuando ponga saludo en la url de mi navegador recibirá ese mensaje de hola mundo.
  })

//ahora vamos a crear otra ruta,
//  para asegurar q la conexion Mysql funciona y q devuelva algun mensaje.

app.get('/conexion',(req,res) =>{
    try{
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'MYDATABASE'
});
connection.connect ((err) => {
    if (err){
        res.send('Error en la conexion con Mysql')
    }
    else{res.send('Conexion correcta');
}});
}catch(error){
    res.send("Error en la conexion con el servidor MySql")
}
});

  // para levantar el servidor. 

  app.listen(port, () => {
    console.log(`El servidor funciona y escucha por el puerto ${port}`)
  })
  