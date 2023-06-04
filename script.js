
var resultados = document.getElementById("resultados");
var conexion1;


document.addEventListener("DOMContentLoaded", function(event) {
    //código a ejecutar cuando existe la certeza de que el DOM está listo para recibir acciones
    //document.getElementById("buscar").focus();
    conexion1=new XMLHttpRequest();
    conexion1.onreadystatechange = procesarEventos;
    conexion1.open('GET','data.json', true);
    conexion1.send();
});


function procesarEventos()
{
  if(conexion1.readyState == 4)
  {
  var datos=JSON.parse(conexion1.responseText);
  dibuja(datos);
  }
}



const input = document.querySelector('#buscar')
input.addEventListener('keyup', e => {
  var q = input.value.toLowerCase();
  procesarEventos();
  console.log( q);
  }
);




function dibuja(datos) {
  var salida='';
  for(var f=0;f<datos.length;f++)
  {
      if (datos[f].nombre.indexOf(input.value.toUpperCase()) >=0 ){
      salida += '<div class="caja">';
      salida += '<h4>'+datos[f].nombre+"</h4>";
      salida += '<h5>'+datos[f].cargo+"</h5>";
      salida += '<h5>'+datos[f].correo+"</h5>";
      salida += '<h1>'+datos[f].anexo+"</h1>";
      salida += '</div>';
    }
  }
  resultados.innerHTML = salida;
  
}