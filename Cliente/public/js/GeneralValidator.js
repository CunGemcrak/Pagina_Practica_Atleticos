function general(datos){
    
}



function contieneMayuscula(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] >= 'A' && cadena[i] <= 'Z') {
            return true; // Se encontró al menos una letra mayúscula
        }
    }
    return false; // No se encontró ninguna letra mayúscula
}





function ver_key(){
    const passwordInput = document.getElementById('clave');
    const button_name = document.getElementById('ver');


    // Función para mostrar u ocultar la contraseña


    if ((passwordInput.type == "password") && (passwordInput.value.trim() != '')) {

        passwordInput.type = 'text';
        button_name.classList.remove('icon-eye'); // Primero removemos la clase vieja
        button_name.classList.add('icon-eye-blocked');


    } else {
        passwordInput.type = 'password';
        button_name.classList.remove('icon-eye-blocked'); // Primero removemos la clase vieja
        button_name.classList.add('icon-eye');
    }
    return false;
}


// ------------------------------------------------------------


   function campoVacio(campo){ //Campos Vacios
        campo = campo.trim();
        
        if(campo === null || campo ===''){
            return false;
        }
        return true;

    }

    function  soloNumero(campo){ //Campos con solo numero
        return /^[0-9]+$/.test(campo);

    }

    function correo(campo){
        
        const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const valor = patronCorreo.test(campo);
        
        return valor;
    }


    function caracter_especial(campo){
        const patron = /[^a-zA-Z0-9\s]/;

        return patron.test(campo);

    }


