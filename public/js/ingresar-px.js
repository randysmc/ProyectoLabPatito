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
    //document.getElementById('mensaje').innerHTML = saludo;
}

function tipoUsuario(){
    const tipoUser = document.getElementById('tipoUsuario');
    let cargo = tipoUser['cargo'];
    let usuario = tipoUser['usuario'];
    let contrasenia = tipoUser['contrasenia'];

    console.log(cargo.value);

    if((cargo.value == '') || (usuario.value == '')){
        console.log('Por favor rellene todos los campos');
    }
    else{
        if(cargo.value == 'Administrador'){
            console.log('Bienvenido: ' + usuario.value + ' Tiene el cargo de administrador');
        }
        else if(cargo.value == 'Secretaria'){
            console.log('Bienvenido: ' + usuario.value + ' Tiene el cargo de Secretaria');
        }
        else{
            console.log('Bienvenido: ' + usuario.value + ' Tiene el cargo de Laboratorista');
        }
    }

}