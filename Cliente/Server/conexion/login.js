app.post(
    '/ingreso', [
        body('nombre').isLength({min:1}).withMessage('Campo Nombre de usuario vacio'),
        body('nombre').isEmail().withMessage('Esto no es un correo electronico'),
        body('key').exists().withMessage('Campo Contraseña de usuario vacio'),
        body('key').isLength({min:5}).withMessage('La contraseña debe tener almenos 5 datos'),
], (req, res)=>{
   
   
    const inf = validationResult(req);
    if(!inf.isEmpty()){
        
        const valores = req.body;
        const validaciones = inf.array();
        console.log(validaciones)
        console.log(valores)
        res.render('login', {title:'login', validaciones: validaciones, valores:valores})
    }else{

        
        return res.send('!validacion correcta');
    }

})