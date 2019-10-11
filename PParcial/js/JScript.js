window.addEventListener("load",function(){

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
                    agregar(aux["id"], aux["nombre"],aux["apellido"], aux["sexo"]);
                    
                });
            }
        }

        http.open("GET","http://localhost:3000/personas",true);
        http.send();
 
    }

    function editar()
    {
        var div =  document.createElement("div");
        var btn = document.createElement("input")
        var tNombre = document.createTextNode("Nombre");
        var txtNombre = document.createElement("input");
        var tApellido = document.createTextNode("Apellido");
        var txtApellido = document.createElement("input");
        var tSexo = document.createTextNode("Sexo");
        var tMasculino = document.createTextNode("Masculino");
        var tFemenino = document.createTextNode("Femenino");
        var rSexoM = document.createElement("input");
        var rSexoF = document.createElement("input");
        var br = document.createElement("br");
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var br4 = document.createElement("br");
        var br5 = document.createElement("br");
        var br6 = document.createElement("br");
        var br7 = document.createElement("br");
            
            // Agrego atributos a los nodos

        btn.setAttribute("type", "button");
        btn.setAttribute("value", "X");
        btn.setAttribute("id","btnClosed");
        btn.addEventListener("click", cerrar);
        txtNombre.setAttribute("type", "text");
        txtApellido.setAttribute("type", "text");
        rSexoM.setAttribute("type", "radio");
        rSexoF.setAttribute("type", "radio");
        
        
        div.appendChild(btn);
        div.appendChild(br);
        div.appendChild(tNombre);
        div.appendChild(br1);
        div.appendChild(txtNombre);
        div.appendChild(br2);
        div.appendChild(tApellido);
        div.appendChild(br3);
        div.appendChild(txtApellido);
        div.appendChild(br4);
        div.appendChild(tSexo);
        div.appendChild(br5);
        div.appendChild(rSexoF);
        div.appendChild(tFemenino);
        div.appendChild(br6);
        div.appendChild(rSexoM);
        div.appendChild(tMasculino);
        div.appendChild(br7);

        div.setAttribute("id", "cuadro");



        $("body").appendChild(div);
    }

    function agregar(id, nom, ape, sex)
    {
        var div = document.createElement("div");
        var nombre = document.createElement("p");
        var apellido = document.createElement("p");
        var sexo = document.createElement("p");
        
     
        // Agrego atributos a los nodos
        nombre.innerHTML = nom;
        apellido.innerHTML = ape;
        sexo.innerHTML  = sex;

        
        
        // Agrego los nodos al div
        div.appendChild(nombre);
        div.appendChild(apellido);
        div.appendChild(sexo);
        div.addEventListener("click", editar);
        $("section").appendChild(div);
    }









function cerrar()
{
    $("cuadro").hidden = true;
}

function $(id)
{
    return document.getElementById(id);
}

