import { Router } from "express";

const rutas = Router();


rutas.get('/', (req, res) => res.render('index', {title:'inicio'})); //Ruta visitada
rutas.get('/recuperacontrasena', (req, res) => res.render('recuperacontrasena', {title:'Recupera Contraseña'})); //Ruta visitada
rutas.get('/registrar', (req, res) => res.render('registrar', {title:'Club Atleticos'}));

export default rutas;