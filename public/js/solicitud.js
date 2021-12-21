function registrarSolicitud(){

    const solicitud = document.getElementById('solicitudExamen');
    let CUI = document.getElementById('CUI-User')
    let nombre = solicitud['nombre'];
    let fecha= solicitud['fechaGeneracion'];
    let tipoExamen = solicitud['tipoExamen'];
    
    console.log(nombre.value);
    console.log(tipoExamen.value);
    console.log(CUI.value);
    if((CUI.value == '')||(nombre.value == '') || (fecha.value == '')){
        console.log('Rellene todos los campos')

    }
    else{
        console.log("Se ha procesado la solicitud para el px: " +nombre.value );
        
    }
}