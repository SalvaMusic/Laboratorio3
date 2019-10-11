window.addEventListener("load",function(){

    $("newPost").addEventListener("click", newPost);

})

function enviarPOST()
    {
        var email = $("email");
        var pass = $("pass");
        var http = new XMLHttpRequest();
        var jsonString = {"email":email.value,"password":pass.value,};

        http.onreadystatechange = function() {
            if (http.readyState === 4)  {
                if(http.status === 200)  {
                console.log(http.responseText);
                var json = JSON.parse(http.responseText);
                    if(json["autenticado"] === "si")  {
                        window.location.replace("index.html?email=email&pass=pass");
                    }
                }
            }
        }
        
        http.open("POST","http://localhost:1337/login");
        //Tipo en el que viaja la información
        //http.setRequestHeader("Content-type","application/Json");
        http.send(JSON.stringify(jsonString));
 
    }

function mostrarGET()
    {
        var http = new XMLHttpRequest();

        http.onreadystatechange = function() {
             
            if (http.readyState === 4 && http.status === 200)  {
                
                var string = http.response;
                var lista = JSON.parse(string);

                lista.forEach(aux => {
                    agregar(aux["nombre"],aux["apellido"], aux["fecha"], aux["telefono"]);
                    
                });
            }
        }

        http.open("GET","http://localhost:3000/personas",true);
        http.send();
 
    }
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

function newPost()
{
    var div = $("divPost");
    if(div.hidden == true)
    {
        if (!div.hasChildNodes())
        {
            // Creo los nodos
            var titulo = document.createElement("h2");
            var tPTitle = document.createTextNode("Post Title");
            var txtPTitle = document.createElement("input");
            var tPHeader = document.createTextNode("Post Header");
            var txtPHeader = document.createElement("input");
            var tPText = document.createTextNode("Post Text");
            var txtPText = document.createElement("input");
            var btnPost = document.createElement("input");
            var br1 = document.createElement("br");
            var br2 = document.createElement("br");
            var br3 = document.createElement("br");
            var br4 = document.createElement("br");
            var br5 = document.createElement("br");
            var br6 = document.createElement("br");
            
            // Agrego atributos a los nodos
            titulo.innerHTML = "Write your new post";
            txtPTitle.setAttribute("type", "text");
            txtPTitle.setAttribute("id", "txtTitle");
            txtPHeader.setAttribute("type", "text");
            txtPHeader.setAttribute("id", "txtHeader");
            txtPText.setAttribute("type", "text");
            txtPText.setAttribute("id", "txtText");
            btnPost.setAttribute("type", "button");
            btnPost.setAttribute("value", "POST");
            
            // Agrego los nodos al div
            div.appendChild(titulo);
            div.appendChild(tPTitle);
            div.appendChild(br1);
            div.appendChild(txtPTitle);
            div.appendChild(br2);
            div.appendChild(tPHeader);
            div.appendChild(br3);
            div.appendChild(txtPHeader);
            div.appendChild(br4);
            div.appendChild(tPText);
            div.appendChild(br5);
            div.appendChild(txtPText);
            div.appendChild(br6);
            div.appendChild(btnPost);
        
            // Agrego el event al boton 
            btnPost.addEventListener("click", postButon);
        }

        div.hidden = false;
    }else {
        div.hidden = true;
        
    }
    
}

function postButon()
{
    $("divPost").hidden = true;
 
   // Creo los nodos
   var div = document.createElement("div");
   var title = document.createElement("h3");
   var header = document.createElement("h4");
   var text = document.createElement("p");
   var piePost = document.createElement("p");

   // Agrego atributos a los nodos
   title.innerHTML = $("txtTitle").value;
   header.innerHTML = $("txtHeader").value;
   text.innerHTML = $("txtText").value;
   
   
   // Agrego los nodos al div
   div.appendChild(title);
   div.appendChild(header);
   div.appendChild(text);
   $("section").appendChild(div);

    console.log($("txtTitle").value);
    console.log($("txtHeader").value);
    console.log($("txtText").value);
    $("txtTitle").value = "";
    $("txtHeader").value = "";
    $("txtText").value = "";
    
    
}


function Guardar()
{
    var name = $("nom");
    var lastName = $("ape");
    var fecha = $("fec");
    var tel = $("tel");

    if(Equals(name.value,""))
    {
        BoShowMessage("Debe ingresar un nombre!!");
        name.className = "Error";
        return;
    }

    if(Equals(lastName.value,""))
    {
        BoShowMessage("Debe ingresar un apellido!!");
        lastName.className = "Error";
        return;
    }

    if(confirm("Esta seguro que desea agregar una Persona a la lista??"))
    {
        mostrarPOST();
        //Tomar la tabla y agregarle tBody
        var tbody = $("tbody");
        tbody.innerHTML += "<tr><td>"+name.value+"</td><td>"+lastName.value+"</td><td>"+fecha.value+"</td><td>"+tel.value+
        "<td><a href='' onClick = 'borrar(event)'>Borrar"+
        "<a href='' onClick = 'editar(event)'>Editar";
        name.value = "";
        lastName.value = "";
        tel.value = "";
        fecha.value = "";
        fecha.className = "sinError";
        tel.className = "sinError";
        name.className = "sinError";
        lastName.className = "sinError";
    }
}

function agregar(nom, ape, fecha, telefono)
{
    var tbody = $("tbody");
        tbody.innerHTML += "<tr><td>"+nom+"</td><td>"+ape+"</td><td>"+fecha+"</td><td>"+telefono+
        "<td><a href='' onClick = 'borrar(event)'>Borrar"+
        "<a href='' onClick = 'editar(event)'>Editar";
}
function editar(e)
{
    e.preventDefault();
    
    var tagA = e.target;
    var tr = tagA.parentNode.parentNode;
    if(document.getElementById("contAgregar").hidden = true)
    {
        document.getElementById("contAgregar").hidden = false;
        
    }
    e.borrar(e);
    e.Guardar();
    
}

function borrar(e)
{
    e.preventDefault();
    //console.log(e);
    //console.log(e.target);
    var tagA = e.target;
    var tr = tagA.parentNode.parentNode;
    console.log(tr);
    tr.innerHTML = "";
    //var body = tr.parentNode;
    //var tabla = body.parentNode;
    //BoShowMessage(body.id);
    //tabla.RemoveChildren(tr);
}

function mostrar()
{
    document.getElementById("contAgregar").hidden = false;
}

function cerrar()
{
    document.getElementById("contAgregar").hidden = true;
}

function $(id)
{
    return document.getElementById(id);
}

function Equals(val1, val2)
{
    return val1 === val2;
}

