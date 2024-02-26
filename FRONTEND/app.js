// prueba de peticion asincrona con fetch a la ruta q devuelve el saludo en el server 

// fetch('https://localhost:3000/saludos')
// .then(res => res.json())
// .then (datos => console.log(datos))



const button = document.querySelector("button");
button.addEventListener("click", () => {
    const servidor = document.querySelectorAll("input")[0].value;
    const username = document.querySelectorAll("input")[1].value;
    const contraseña = document.querySelectorAll("input")[2].value;
    const baseDatos = document.querySelectorAll("input")[3].value;


    // falta mi validacion de esos datos-

    const url = "http://localhost:3000/conexion"
    fetch(url,{
        method:"post",
        body: JSON.stringify({
            servidor,
            username,
            contraseña,
            baseDatos
        }),
        headers: {'Content-Type': 'application/json'}
    })
    // respuesta
     .then(res => res.json())
     .then (mensaje => {document.querySelector("div").innerHTML = mensaje;})
});