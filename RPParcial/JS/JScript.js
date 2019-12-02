$(document).ready(function(){
    
    mostrarGET();

})

function mostrarGET()
{
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
             
        if (http.readyState === 4 && http.status === 200)  {
                
            var string = http.response;
            var lista = JSON.parse(string);

            lista.forEach(aux => {
                agregar(aux["id"], aux["nombre"],aux["apellido"], aux["localidad"], aux["sexo"]);
            });
        }
    }

    http.open("GET","http://localhost:3000/personas",true);
    http.send();
}

    
    function agregar(id, nom, ape, loc, sex){

        var tbody = $("#tbody");
        var data = [ id, nom, ape, loc, sex];
        console.log(data);

        var fila = document.createElement('tr');
        for(var i in data)
        {
            var celda = document.createElement('td');
            if (i == 3){    var dato = document.createTextNode(data[i].nombre); }         
            else{   var dato = document.createTextNode(data[i]);    }                    
                
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tbody.append(fila);
     
        $("#table").append(tbody);
    }

