const campo = document.getElementById("recuperar");
const contorno_input = document.getElementById("contorno_input");
const  btn_recuperar = document.getElementById("btn_recuperar");

btn_recuperar.disabled = true; 

campo.addEventListener("input", function (e){
if(correo(campo.value)===false){
    contorno_input.style.border = "2px solid red";
    contorno_input.style.borderRadius = "10px";
    contorno_input.title ="Esto no es un correo";
    btn_recuperar.disabled = true;
    }else{
        contorno_input.style.border = "2px solid green";
        contorno_input.style.borderRadius = "10px";
        contorno_input.title ="Esto no es un correo";
        btn_recuperar.disabled =false;
    }
});