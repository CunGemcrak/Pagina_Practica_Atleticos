const bdusuario = {
    pnombre:"Luis",
    snombre:"Alberto",
    papellido:"Buelvas",
    sapellido:"Cogollo",
    correo1:"labc.1021@gmail.com",
    correo2:"luisbuelvasc@correo.unicrodoba.edu.co",
    correo3:"luis.buelvascco@cun.edu.co",
    key:"Geminis12345*",
    celular: "3012282338",
}
const ingresar = document.getElementById("ingresar");
const usuario = document.getElementById('usuario');
const clave_login = document.getElementById('clave');
const general_si = document.getElementById('general_si');
var validar = false;
var validar2 = false;

ingresar.disabled = true; 

usuario.addEventListener("input", function(e){
 
   
  const input_usuario = document.getElementById("input_usuario");

        if(campoVacio(usuario.value)===false){
        input_usuario.style.border = "2px solid red";
        input_usuario.style.borderRadius = "10px";
        usuario.title ="Este campo no puede estar vacio";
        validar = false;
        }else
        
        if(correo(usuario.value)===false){
        input_usuario.style.border = "2px solid red";
        input_usuario.style.borderRadius = "10px";
        usuario.title ="Esto no es un correo valido";
        validar = false;
        }else{
            input_usuario.style.border = "2px solid green";
            validar=true;
            
        }


        activar();

});



clave_login.addEventListener("input", function(e){
    const input_clave = document.getElementById('input_clave');
    clave_login.value = clave_login.value.trim();
    const caracter = /[^a-zA-Z0-9\s]/;
    const patronNumeros = /\d/;
   

    if(clave_login.value.length < 4 ){
        
        input_clave.style.border = "2px solid red";
        input_clave.style.borderRadius = "10px";
        input_clave.title ="Este campo no puede estar vacio";
        validar2 = false;
    }else 
    if(caracter.test(clave_login.value)===false){
        input_clave.style.border = "2px solid red";
        input_clave.style.borderRadius = "10px";
        input_clave.title ="Este campo no puede estar vacio";
        validar2 = false;
    }else 
    if(patronNumeros.test(clave_login.value)===false){
        input_clave.style.border = "2px solid red";
        input_clave.style.borderRadius = "10px";
        input_clave.title ="Este campo no puede estar vacio";
        validar2 = false;
    }else
    if(contieneMayuscula(clave_login.value)===false){
        input_clave.style.border = "2px solid red";
        input_clave.style.borderRadius = "10px";
        input_clave.title ="Este campo no puede estar vacio";
        validar2 = false;
    }   
    else{
        input_clave.style.border = "2px solid green";
        validar2 = true;
       
    }

    activar();


});

function activar(){
    if(validar ===true && validar2===true){
        ingresar.disabled = false; 
        general_si.border="2px solid green";
    }else{
        ingresar.disabled = true; 
        general_si.border="2px solid black";
    }
} 

//pedir cambio de key
function recupera_key(){
    const key = document.getElementById("recuperar");
    const validar = new Validar_registro();
    alert(key.value);
    if(validar.campoVacio(key.value)===false){
        alert("Digita un correo electronico");
        return false;
    }

    if(validar.correo(key.value)===false){
        alert("Esto no es un correo");
        return false;
    }
    return false;
}

function login(){
    if(bdusuario.correo1 == usuario.value && bdusuario.key==clave_login.value){
        alert("Dato enviado correctametne"); 
        return true;
    }
    alert("Usuario o contraseña incorrectos");
    return false;
}
/*
const boton = document.getElementById("envio_registrar");
//boton.disabled = true;
const dato = document.getElementById("key");
dato.addEventListener("input", function () {

    const caracteres = document.getElementById("caracteres");
    const mayuscula = document.getElementById("mayuscula");
    const especial = document.getElementById("especial");
    const numero = document.getElementById("numero");
    
    const caracter = /[^a-zA-Z0-9\s]/;
    const patronNumeros = /\d/;
    dato.value = dato.value.trim();
    const cont = 0;

    //alert(contieneMayuscula(dato.value));
  
    if(dato.value.length<7){
        caracteres.classList.remove("form-control");
        caracteres.classList.add("error_key");   
    }else{
        caracteres.classList.add("form-control");
        caracteres.classList.add("icon-checkmark");
        caracteres.classList.remove("error_key");   
    }


    if(!caracter.test(dato.value)){
        especial.classList.remove("form-control ");
        especial.classList.add("error_key");
      
    }else{
        especial.classList.add("form-control");
        especial.classList.add("icon-checkmark");
        especial.classList.remove("error_key"); 
       
    }
 
    


    if(contieneMayuscula(dato.value)===false){
        mayuscula.classList.remove("form-control");
        mayuscula.classList.add("error_key"); 
        
    }else{
        mayuscula.classList.add("form-control");
        mayuscula.classList.add("icon-checkmark");
        mayuscula.classList.remove("error_key"); 
    
    }




    if(patronNumeros.test(dato.value) ===false){
        numero.classList.remove("form-control");
        numero.classList.add("error_key"); 
       
    }else{
        numero.classList.add("form-control");
        numero.classList.add("icon-checkmark");
        numero.classList.remove("error_key");
    
    }

    boton.disabled = false;
    
   
 

});



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


*/