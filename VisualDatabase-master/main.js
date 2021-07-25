if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();
//localStorage.setItem('Diego', 'Visual');
//console.log(localStorage.getItem('Diego'))


var con;

 
 function valida() {
     const usu =document.getElementById('id1').value;
     const contra = document.getElementById('id2').value
     if (usu=='usuario' && contra=='12345') {
         if(process.env.host != null || process.env.host != ''){
             location.href='./vista3.html';
         }
         else{
            location.href='./index.html';
         }

     } else {
         alert('datos erroneos')
     }
 }

 function sendParams() {
    con=require('./connect');
    localStorage.setItem('con', con);
    //addData();
}


function addData() {
    //con=localStorage.getItem('con')
    con=require('./connect');
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const idpersona=0;
    const nombre =document.getElementById('nombre').value;
    const ap_pat =document.getElementById('ap_pat').value;
    const ap_mat =document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (idpersona, nombre, ap_Pat, ap_Mat, edad) VALUES (" ${idpersona}","${nombre}","${ap_pat}","${ap_mat}","${edad}")`;
    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err)
            return;
        }

        console.log("Query exitoso", rows);
        alert(rows)
        
    });
    Tabla();
   // con.end(function () {
        // Conexión Finalizada 
  //  });

    // Input data conection database
}
function Tabla() {
    document.getElementById('table').style="overflow:visible;";
    $query = 'select * from persona';
    con.query($query, function(err,rows, fields) {
        if(err){
            console.log('Error Query');
            console.log(err);
            alert(err)
            return;
        }
        let html='';
        html="<tr><td>"+rows[rows.length-1].idpersona+"</td> <td>"+rows[rows.length-1].nombre+"</td> <td>"+rows[rows.length-1].ap_pat+"</td> <td>"+rows[rows-length-1].ap_mat+"</td> <td>"+rows[rows.length-1].edad+"</td></tr>"
        document.getElementById('table').innerHTML+=html;
    });
}
