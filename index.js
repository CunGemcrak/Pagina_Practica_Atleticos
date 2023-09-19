import express from "express";
import {dirname, join} from 'path'; // Identificamos directorio padre
import { fileURLToPath } from 'url';
import indexRouter from 'Servidor/router/routes.js'; 


const app = express();
const port = 1000;
const __dirname = dirname(fileURLToPath(import.meta.url)); //ruta absoluta
console.log(__dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'ejs');
// llamamos las rutas de acceso a cada pagina de mi app 

//app.use(express.static(join(__dirname, 'public')));//el join me permite dar una ruta de acceso y la fuciono con la carpeta que necesito que es public la de los css 
//const d= join(__dirname, 'public');
//console.log(d);
//pp.use(indexRouter); 


app.listen(port,()=>{
console.log("http://localhost:"+port);
 })
