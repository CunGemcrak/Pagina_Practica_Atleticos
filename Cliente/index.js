import express from "express";
import {dirname, join} from 'path'; // Identificamos directorio padre
import { fileURLToPath } from 'url'; //identificamos ubicacion de pad




import indexRouter from './Server/rutes/routes.js';

const app = express();
const port = 1000; // epuerto para hacer la conexion 
const __dirname = dirname(fileURLToPath(import.meta.url)); // ahora si tengo la ruta absoluta

app.listen(process.env.PORT || port);//Escuchando el servidor 
console.log('http://localhost:'+port)
console.log('server is listen on port ', process.env.PORT || port );


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname);
app.set('views',join(__dirname,'views')); //ruta absoluta para ver las paginas 
app.use(indexRouter); // llamamos las rutas de acceso a cada pagina de mi app 