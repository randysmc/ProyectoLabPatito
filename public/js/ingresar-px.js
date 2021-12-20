console.log("Registro de personas");

function registrar(){
    //console.log("Hola bienvenido usuario que se quiere registrar");
    const registro = document.getElementById('registro-px');
    let nombre = registro-px['nombre'];
    let apellido = registro-px['apellido'];
    let usuario = registro-px['usuario']
    let correoElectronico = registro-px['correoElectronico'];
    let constrasenia = registro-px['contrasenia'];
    let confContrasenia = registro-px['contraseniaConfirmar']

    if(contrasenia.value == confContrasenia.value){
        console.log("Bienvenido, usuario creado correctamente");
        let saludo = "Hola " + nombre.value + " Bienvenido, has ingresado correctamente tu usuario";
        console.log(saludo);

    }
    else if(contrasenia != confContrasenia){
        console.log("Las contraseñas no son iguales, intente de nuevo");
    }

    document.getElementById('mensaje').innerHTML = saludo;
}