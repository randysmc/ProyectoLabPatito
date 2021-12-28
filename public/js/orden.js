class Orden{
    constructor(id, fechaGeneracion, fechaEntrega, Empleado, Cliente, Medico){
        this._id = id;
        this._fechaGeneracion = fechaGeneracion;
        this._fechaEntrega - fechaEntrega;
        this._Empleado = Empleado;
        this._Cliente = Cliente;
        this._Medico = Medico;
    }

    get fechaGeneracion(){
        return this._fechaGeneracion;
    }

    set fechaGeneracion(fechaGeneracion){
        this._fechaGeneracion = fechaGeneracion;
    }
}

class OrdenExamen{
    constructor(id, idOrden, idExamen, costoFinal){
        this._id = id;
        this._idOrden = idOrden;
        this._idExamen = idExamen;
        this._costoFinal = costoFinal;

    }
}

class detalleOrdenExamen{
    constructor(id, Resultado, Empleado, idOrdenExamen){
        this._id = id;
        this._Resultado = Resultado;
        this._Empleado = Empleado;
        this._idOrdenExamen = idOrdenExamen;

    }
}

class Examen{
    constructor(id, nombreExamen, descripcion, costo){
        this._id = id;
        this._nombreExamen = nombreExamen;
        this._descripcion = descripcion;
        this._costo = costo;


    }
}

class parametroExamen{
    constructor(id, idExamen, nombre){
        this._id = id;
        this._idExamen = idExamen;
        this._nombre = nombre;
    }
}

class ResultadoParametro{
    constructor(id, idParametroExamen, idDetalleOrden, valorResultado){
        this._id = id;
        this._idParametroExamen = idParametroExamen;
        this._idDetalleOrden = idDetalleOrden;
        this._valorResultado = valorResultado;
    }
}