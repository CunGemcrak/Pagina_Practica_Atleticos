import express from "express";
import {dirname, join} from 'path'; // Identificamos directorio padre
import { fileURLToPath } from 'url'; //identificamos ubicacion de pad
import { body, validationResult } from 'express-validator';
import {conexion} from './Server/conexion/conexion.js';







import indexRouter from './Server/rutes/routes.js';

const app = express();
const port = 1800; // epuerto para hacer la conexion 
const __dirname = dirname(fileURLToPath(import.meta.url)); // ahora si tengo la ruta absoluta

app.listen(process.env.PORT || port);//Escuchando el servidor 
console.log('http://localhost:'+port)
console.log('server is listen on port ', process.env.PORT || "185.31.40.24:"+port );


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname);
app.set('views',join(__dirname,'views')); //ruta absoluta para ver las paginas 
app.use(express.static(join(__dirname, 'public')));
app.use(indexRouter); // llamamos las rutas de acceso a cada pagina de mi app 


//ingreso del login 
app.post('/inicio', [
        body('usuario').isLength({min:1}).withMessage('Campo Nombre de usuario vacio'),
        body('clave').isLength({min:5}).withMessage('La contraseña debe tener almenos 5 datos'),
], (req, res)=>{
   
   
    const inf = validationResult(req);
    if(!inf.isEmpty()){
        res.render('index', {title:'inicio'});
        console.log(inf.array() );
        return false;
    
        

       
    }else{

        const  datos = req.body;
    
        res.render('inicio', {title:'inicio', usuario:datos});
     
}

});

//Recuperar contraseña
app.post('/registrar', [
    body('recuperar').isLength({min:1}).withMessage('El correo esta vacio'),
    body('recuperar').isLength({min:5}).withMessage('Esto no es un correo'),
], (req, res)=>{


const inf = validationResult(req);
if(!inf.isEmpty()){
    res.render('index', {title:'inicio'});
    console.log(inf.array() );
    return false;
    
}else{

    
    return res.send('!validacion correcta');
}

});