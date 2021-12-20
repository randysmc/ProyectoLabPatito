console.log("Aplicacion de control de personas desde js");

function saludar(){
    const login = document.getElementById('login');
    let nombre = login['nombre'];
    let correoElectronico = login['correoElectronico'];
    let constrasenia = login['contrasenia'];
    let saludo = "Hola " + nombre.value + " Bienvenido";
    console.log(saludo);
    document.getElementById('mensaje').innerHTML = saludo;
}