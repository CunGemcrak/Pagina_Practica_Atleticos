//importar msql
import mysql2 from 'mysql2';

//creamos la conexion 

const conexion = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'atleticos',
       
});

// Verificar la conexión
conexion.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL:', err.stack);
      return;
    }
    console.log('Conexión exitosa a MySQL.'+ conexion.threadId);
  });
  
  export {conexion};