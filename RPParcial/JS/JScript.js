$("document").ready(function(){
    
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

    
    function agregar(id, nom, ape, loc, sex)
    {

        var tbody = document.createElement("tbody");
        tbody.innerHTML +="<tr><td>"+id+"</td><td>"+nom+"</td><td>"
        +ape+"</td><td>"+loc+"</td><td>"+sex+"</td>";

        console.log(tbody.innerHTML);
      /*
        var tr = document.createElement("tr");
        var tbI = document.createElement("tb");
        var tbA = document.createElement("tb");
        var tbL = document.createElement("tb");
        var tbS = document.createElement("tb");
        var tbN = document.createElement("tb");
        var idNode = document.createElement("p");
        var nombre = document.createElement("p");
        var apellido = document.createElement("p");
        var localidad = document.createElement("p");
        var sexo = document.createElement("p");
        
     
        // Agrego atributos a los nodos
        idNode.innerHTML = id;
        nombre.innerHTML = nom;
        apellido.innerHTML = ape;
        localidad.innerHTML = loc;
        sexo.innerHTML  = sex;
        
        // Agrego los nodos 
        tbI.appendChild(idNode);
        tbN.appendChild(nombre);
        tbA.appendChild(apellido);
        tbL.appendChild(localidad);
        tbS.appendChild(sexo);
        tr.appendChild(tbI);
        tr.appendChild(tbN);
        tr.appendChild(tbA);
        tr.appendChild(tbL);
        tr.appendChild(tbS);

        tbody.append(tr);*/ 
        $("#table").append(tbody);
    }

