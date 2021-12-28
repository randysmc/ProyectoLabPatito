class Persona{

    static contadorObjetosPersona = 0;
    
    constructor(DPI, nombre, apellido){
        this._DPI = DPI;
        this._nombre = nombre;
        this._apellido = apellido;
        //contadorObjetosPersona++;
    }

    get DPI(){
        return this._DPI;
    }

    set DPI(DPI){
        this._DPI = DPI;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde metodo static");
    }

    static saludar2(persona){
        console.log("Hola " +persona.nombre + " " + persona.apellido);
    }
    
}


//Administrador


class Administrador extends Persona{
    constructor(DPI, nombre, apellido,){
        super(DPI, nombre, apellido);
        this._departamento = departamento;
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un admin' ;
    }
}


//Secretaria

class Secretaria extends Persona{
    constructor(DPI, nombre, apellido,){
        super(DPI, nombre, apellido);
        this._departamento = departamento;
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy una Secretaria' ;
    }
}


//Medico
class Medico extends Persona{
    constructor(DPI, nombre, apellido,colegiado){
        super(DPI, nombre, apellido);
        this._colegiado = colegiado;
    }

    get colegiado(){
        return this._colegiado;
    }

    set colegiado(colegiado){
        this._colegiado = colegiado;
    }


    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un medico, mi colegiado es: '+ this._colegiado ;
    }
}


//
class laboratorista extends Persona{
    constructor(DPI, nombre, apellido){
        super(DPI, nombre, apellido);
        
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un laboratorista' ;
    }
}

class Paciente extends Persona{
    static contadorPacientes=0;
    constructor(DPI, nombre, apellido, id, edad, departamento, fechaNacimiento, genero, telefono ){
        super(DPI, nombre, apellido);
        this._edad = edad;
        this._departamento = departamento;
        this._fechaNacimiento = fechaNacimiento;
        this._genero = genero;
        this._telefono =telefono;
        id = ++contadorPacientes;

    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    get genero(){
        return this._genero;
    }

    set genero(genero){
        this._genero = genero ;
    }
    get telefono(){
        return this._telefono;
    }

    set telefono(telefono){
        this._telefono = telefono;
    }
}