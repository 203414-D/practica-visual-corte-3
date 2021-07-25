const mysql = require('mysql2');
require('dotenv').config();
//const { setTimeout } = require('timers/promises');

// Agregamos los parametros de conexión 
    const host = process.env.host// document.getElementById('host').value;
   const user = process.env.user//document.getElementById('user').value;
   const password =process.env.password// document.getElementById('password').value;
   const database =process.env.database// document.getElementById('database').value;
   const port = process.env.port//document.getElementById('port').value;
const connection = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database,
    port:port
});
// Conectamos al manejador de base de datos 
connection.connect(function (err) {
    if (err) {
        document.getElementById('txtData').value = err.code+'\n'+err.fatal+'error'
      //  console.log(err.code);
       //  console.log(err.fatal);
    } else {
        setTimeout(function(){location.href='./vista3.html'});
       //document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port} \nconexion exitosa`;
       
    }
});

module.exports = connection //Exportamos la conexón para que cualquier clase la pueda requerir