window.addEventListener("load",function(){
    var btn = $("btnGua");
    //var btnAgregar = $("btnAgree");
    //var btnCerrar = $("btnClose");
    btn.addEventListener("click",Guardar);
    mostrarGET();
    //btnAgregar.addEventListener("click",Abrir);
    //btnCerrar.addEventListener("click",Cerrar);
    //btnAgregar.hidden = false;
 
})

function mostrarPOST()
    {
        var name = $("nom");
        var lastName = $("ape");
        var fecha = $("fec");
        var tel = $("tel");
        var http = new XMLHttpRequest();
        var jsonString = {"nombre":name.value,"apellido":lastName.value,"fecha":fecha.value,"telefono":tel.value};

        http.onreadystatechange = function() {
            if (http.readyState === 4)  {
                if(http.status === 200)  {
                console.log(http.responseText);
                }
            }
        }

        http.open("POST","http://localhost:3000/nuevaPersona");
        //Tipo en el que viaja la información
        http.setRequestHeader("Content-type","application/Json");
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
  /*  e.preventDefault();
    
    var tagA = e.target;
    var tr = tagA.parentNode.parentNode;
    if(document.getElementById("contAgregar").hidden = true)
    {
        document.getElementById("contAgregar").hidden = false;
        
    }
    e.borrar(tr);
    e.Guardar();
    */
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

