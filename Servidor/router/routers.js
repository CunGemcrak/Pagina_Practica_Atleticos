import { Router } from 'express';


const router = Router();
router.get('/index', (req, res) => res.render('index', {title:'inicio'})); //Ruta visitada



export default router;
