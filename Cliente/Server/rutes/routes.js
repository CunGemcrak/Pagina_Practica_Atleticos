import { Router } from "express";

const rutas = Router();


rutas.get('/', (req, res) => res.render('index', {title:'inicio'})); //Ruta visitada


export default rutas;