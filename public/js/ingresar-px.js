/*console.log("Registro de personas");

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
}*/


const pacientes = [
    new Persona(123, 'Juan', 'Perez'),
    new Persona(456, 'Matias', 'BUozo')

];

function mostrarPaciente(){
    let texto ='';
    for(let paciente of pacientes){
        console.log(paciente);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('').innerHTML = texto;
    
}

function registrarPaciente(){
    const registro = document.getElementById('registro-px');
    let CUI = registro['CUI'];
    let nombre = registro['nombre'];
    let apellido= registro['apellido']
    let edad = registro['edad'];
    let telefono = registro['telefono'];
    let fechaNacimiento = registro['fechaNacimiento'];
    let genero = registro['genero'];
    let direccion = registro['direccion'];

    const paciente = new Paciente(CUI.value, nombre.value, apellido.value, edad.value, telefono.value, fechaNacimiento.value, genero.value, direccion.value);
    pacientes.push(persona);
}
