class Validar {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(P_NOMBRE,S_NOMBRE, P_APELLIDO,S_APELLIDO,GENERO,FECHA_NACIMIENTO, FECHA_CREACION,NIT_USUARIO, CLAVE){
       this.P_NOMBRE = P_NOMBRE;
       this.S_NOMBRE = S_NOMBRE;
       this.P_APELLIDO = P_APELLIDO;
       this.S_APELLIDO = S_APELLIDO;
       this.GENERO = GENERO;
       this.FECHA_NACIMIENTO = FECHA_NACIMIENTO;
       this.FECHA_CREACION = FECHA_CREACION;
       this.NIT_USUARIO = NIT_USUARIO;
       this.CLAVE = CLAVE;
 
    }

    camoVacio(campo){ //Campos Vacios
        campo = campo.trim();
        if(campo === null || campo ===''){
            return false;
        }
        return true;

    }

    soloNumero(campo){ //Campos con solo numero
        return /^[0-9]+$/.test(campo);

    }

    correo(campo){
        const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patronCorreo.test(campo);
    }

    validacion(){
        return {
            P_NOMBRE: this.P_NOMBRE,
            S_NOMBRE: this.S_NOMBRE,
            P_APELLIDO: this.P_APELLIDO,
            S_APELLIDO: this.S_APELLIDO,
            GENERO: this.GENERO,
            FECHA_NACIMIENTO: this.FECHA_NACIMIENTO,
            FECHA_CREACION: this.FECHA_CREACION,
            NIT_USUARIO: this.NIT_USUARIO,
            CLAVE: this.CLAVE 
          };
    }
 }