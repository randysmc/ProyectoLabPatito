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


class Cliente extends Persona{
    constructor(DPI, nombre, apellido,telefono, correo, direccion, NIT){
        super(DPI, nombre, apellido);
        this._telefono = telefono;
        this._correo = correo;
        this._direccion = direccion;
        this._NIT = NIT;
        
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un cliente' ;
    }
}

class Empleado extends Persona{
    constructor(DPI, nombre, apellido, tipoPuesto, usuario, password, id){
        super(DPI, nombre, apellido);
        this._tipoPuesto = tipoPuesto;
        this._usuario = usuario;
        this.password = password;

        
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un empleado' ;
    }
}

class Medico extends Persona{
    constructor(DPI, nombre, apellido,colegiado, id){
        super(DPI, nombre, apellido);
        this._colegiado = colegiado;
        this._id = id;

        
    }

    //Sobreescritura, modifica el comportamiento de una funcion de clase padre
    nombreCompleto(){
        return super.nombreCompleto()+ ' Soy un medico' ;
    }
}



