import { Router } from "express";

const rutas = Router();


rutas.get('/', (req, res) => res.render('index', {title:'Cambiar Contraseña'})); //Ruta 3 visitada


export default rutas;