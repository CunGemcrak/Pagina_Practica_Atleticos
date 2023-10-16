const envio_registrar = document.getElementById("envio_registrar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const celular = document.getElementById("celular");
const corr = document.getElementById("correo");
const keyusuario = document.getElementById("key");
const caracteres = document.getElementById("caracteres");
const mayuscula = document.getElementById("mayuscula");
const especial = document.getElementById("especial");
const numero = document.getElementById("numero");
var val_name=false;
var val_apecelularll=false;
var val_cel = false;
var val_cor=false;
var val_key=false;


envio_registrar.disabled = true;


nombre.addEventListener("input", function(e){
        if(campoVacio(nombre.value)===false){
            nombre.style.border = "2px solid red";
            nombre.style.borderRadius = "10px";
            nombre.title ="Esto no es un correo";
            val_name= false;
        }else{
            nombre.style.border = "2px solid green";
            nombre.style.borderRadius = "10px";
            nombre.title ="Esto no es un correo";
            val_name= true;
        }
        btn_Validar();

});

apellido.addEventListener("input", function(e){
    if(campoVacio(apellido.value)===false){
        apellido.style.border = "2px solid red";
        apellido.style.borderRadius = "10px";
        apellido.title ="Esto no es un correo";
        val_apell= false;
    }else{
        apellido.style.border = "2px solid green";
        apellido.style.borderRadius = "10px";
        apellido.title ="Esto no es un correo";
        val_apell= true;
    }
    btn_Validar();
});



celular.addEventListener("input", function(e){
     celular.value = celular.value.replace(/[^0-9]/g, '')
    if(campoVacio(celular.value)===false){
        celular.style.border = "2px solid red";
        celular.style.borderRadius = "10px";
        celular.title ="Campo vacio";
        val_cel= false;
        
    }else
    if(soloNumero(celular.value)===false){
        celular.style.border = "2px solid red";
        celular.style.borderRadius = "10px";
        celular.title ="Esto no es un numero de celular";
        val_cel= false;
    }else
    if(celular.value.length<8){
        celular.style.border = "2px solid red";
        celular.style.borderRadius = "10px";
        celular.title ="Esto no es un numero de celular";
        val_cel= false;
    }else
         {
        celular.style.border = "2px solid green";
        celular.style.borderRadius = "10px";
        celular.title ="Esto no es un correo";
        
        val_cel= true;
        
    }
    btn_Validar();

});


corr.addEventListener("input", function(e){
    if(campoVacio(corr.value)===false){
        corr.style.border = "2px solid red";
        corr.style.borderRadius = "10px";
        corr.title ="Campo vacio";
        val_cor= false;
        
    }else
    if(correo(corr.value)===false){
        corr.style.border = "2px solid red";
        corr.style.borderRadius = "10px";
        corr.title ="Campo vacio";
        val_cor= false;
    }else
    {
        corr.style.border = "2px solid green";
        corr.style.borderRadius = "10px";
        corr.title ="Esto no es un correo";
        val_cor= true;
        
    }

    btn_Validar();

});

keyusuario.addEventListener("input", function(e){
    keyusuario.value = keyusuario.value.trim();
    const caracter = /[^a-zA-Z0-9\s]/;
    const patronNumeros = /\d/;
    const expresionRegularMayuscula = /[A-Z]/g;

    if(keyusuario.value.length> 7){
        
        caracteres.style.color ="green";
        caracteres.classList.remove("icon-cancel-circle");
        caracteres.classList.add("icon-checkmark");
    }else{
        caracteres.style.fontSize ="10px";
        caracteres.style.fontStyle ="italic";
        caracteres.style.fontWeight = "bold";
        caracteres.style.border ="none";
        caracteres.style.color =" rgb(211, 207, 207)";
        caracteres.classList.remove("icon-checkmark");
        caracteres.classList.add("icon-cancel-circle");

    }
    letrasMayusculas =keyusuario.value.match(expresionRegularMayuscula);
    
    if(letrasMayusculas!==null){

        mayuscula.style.color = "green";
        mayuscula.classList.remove("icon-cancel-circle");
        mayuscula.classList.add("icon-checkmark");
    }else{
        mayuscula.style.fontSize ="10px";
        mayuscula.style.fontStyle ="italic";
        mayuscula.style.fontWeight = "bold";
        mayuscula.style.border ="none";
        mayuscula.style.color =" rgb(211, 207, 207)";
        mayuscula.classList.remove("icon-checkmark");
        mayuscula.classList.add("icon-cancel-circle");
    }
    
    if(caracter.test(keyusuario.value)===false){
        especial.style.fontSize ="10px";
        especial.style.fontStyle ="italic";
        especial.style.fontWeight = "bold";
        especial.style.border ="none";
        especial.style.color =" rgb(211, 207, 207)";
        especial.classList.remove("icon-checkmark");
        especial.classList.add("icon-cancel-circle");
        
    }else{
        especial.style.color = "green";
        especial.classList.remove("icon-cancel-circle");
        especial.classList.add("icon-checkmark");
    }
    

if(patronNumeros.test(keyusuario.value)===false){
    numero.style.fontSize ="10px";
    numero.style.fontStyle ="italic";
    numero.style.fontWeight = "bold";
    numero.style.border ="none";
    numero.style.color =" rgb(211, 207, 207)";
    numero.classList.remove("icon-checkmark");
    numero.classList.add("icon-cancel-circle");

}else{
    numero.style.color = "green";
    numero.classList.remove("icon-cancel-circle");
    numero.classList.add("icon-checkmark");
}





    if(letrasMayusculas===null){
        keyusuario.style.border = "2px solid red";
        keyusuario.style.borderRadius = "10px";
        keyusuario.title ="Campo vacio";
        val_key= false;
    }else

    if(caracter.test(keyusuario.value)===false){
        keyusuario.style.border = "2px solid red";
        keyusuario.style.borderRadius = "10px";
        keyusuario.title ="Campo vacio";
        val_key= false;
    }else
    if(patronNumeros.test(keyusuario.value)===false){
        keyusuario.style.border = "2px solid red";
        keyusuario.style.borderRadius = "10px";
        keyusuario.title ="Campo vacio";
        val_key= false;
    }else
    if(keyusuario.value.length<8){
        keyusuario.style.border = "2px solid red";
        keyusuario.style.borderRadius = "10px";
        keyusuario.title ="Campo vacio";
        val_key= false;

        
    }else{
        keyusuario.style.border = "2px solid green";
        keyusuario.style.borderRadius = "10px";
       keyusuario.title ="Esto no es un correo";
        val_key= true;
    }


    btn_Validar();
   
});

function ver_key(){
    
    const button_name = document.getElementById('ver');


    // Función para mostrar u ocultar la contraseña


    if ((keyusuario.type == "password") && (keyusuario.value.trim() != '')) {

        keyusuario.type = 'text';
        button_name.classList.remove('icon-eye'); // Primero removemos la clase vieja
        button_name.classList.add('icon-eye-blocked');


    } else {
        keyusuario.type = 'password';
        button_name.classList.remove('icon-eye-blocked'); // Primero removemos la clase vieja
        button_name.classList.add('icon-eye');
    }
    return false;
}






//function validar boton de registro
function btn_Validar(){
if(val_name==false || val_apell ==false || val_cel ==false || val_cor==false || val_key==false){
    envio_registrar.disabled = true;
}else{
    envio_registrar.disabled = false;
}
}
