function login(){
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