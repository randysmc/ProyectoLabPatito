console.log("Registro de personas");

function registrarPaciente(){
    //console.log("Hola bienvenido usuario que se quiere registrar");
    const registro = document.getElementById('registro-px');
    let CUI = registro['CUI'];
    let nombre = registro['nombre'];
    let apellido= registro['apellido']
    let edad = registro['edad'];
    let fechaNacimiento = registro['fechaNacimiento'];
    let genero = registro['genero'];
    let direccion = registro['direccion'];
    


    if((CUI.value == '') ||(nombre.value == '') || (apellido.value == '') || (edad.value == '') ||
     (fechaNacimiento.value == '') || (genero.value == '') ||(direccion.value == '')){
        console.log('no se pudo crear al usuario')
    }
    else{
        console.log('Usuario creado con exito!');
        console.log('Bienvenido: ' +nombre.value + ' ' + apellido.value);
    }

/*
    if(contrasenia.value == confContrasenia.value){
        console.log("Bienvenido, usuario creado correctamente");
        let saludo = "Hola " + nombre.value + " Bienvenido, has ingresado correctamente tu usuario";
        console.log(saludo);

    }
    else if(contrasenia != confContrasenia){
        console.log("Las contraseñas no son iguales, intente de nuevo");
    }*/
    //document.getElementById('mensaje').innerHTML = saludo;
}