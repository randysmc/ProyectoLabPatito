class ExamenSangre{

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

class ExamenOrina{

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

class ExamenHeces{

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