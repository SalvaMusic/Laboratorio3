window.addEventListener("load",function(){
    var btn = $("btnGua");
    //var btnAgregar = $("btnAgree");
    //var btnCerrar = $("btnClose");
    btn.addEventListener("click",Guardar);
    //btnAgregar.addEventListener("click",Abrir);
    //btnCerrar.addEventListener("click",Cerrar);
    //btnAgregar.hidden = false;
})

function Guardar()
{
    var name = $("nom");
    var lastName = $("ape");

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
        //Tomar la tabla y agregarle tBody
        var tbody = $("tbody");
        tbody.innerHTML += "<tr><td>"+name.value+"</td><td>"+lastName.value+"</td><td><a href='' onClick = 'Borrar(event)'>Borrar</a></td></tr>";
        name.value = "";
        lastName.value = "";
        name.className = "sinError";
        lastName.className = "sinError";
    }
}


function Borrar(e)
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

/*
//Boton listener para el evento para remover la propiedad hidden
function Abrir()
{
    var contenedor = $("contAgregar");
    contenedor.hidden = false;
    //delay(4000);
}


function Cerrar()
{
    var contenedor = $("contAgregar");
    contenedor.hidden = true;
}

function Guardar()
{
    var name = $("nom");
    var lastName = $("ape");
    
    var tabla = $("table");
    
    //innerHTML todo lo que esta entre el tag de apertura y cierre

    //Armar el String!! <td>1</td><td>2</td><td>3</td>
    
}*/

function BoShowMessage(str)
{
    alert(str);
}

function $(id)
{
    return document.getElementById(id);
}

function Equals(val1, val2)
{
    return val1 === val2;
}

