window.addEventListener("load",Inicializar);
//window.onload =  Inicializar;


function Inicializar()
{
    var btnEnviar = $("btn");
    btn.addEventListener("click",ValidateUser);
}
function ValidateUser()
{
    var u = "ddipietro";
    var p = "Bl4ck3n3d";
    
    var user = $("usr");
    var pass = $("pwd");

    if(user.value.toLowerCase() === u && pass.value === p)
    {
        var msg = "Acceso permitido!!";
    }
    else
    {
        var msg = "Acceso denegado!!";
    }
    BoShowMessage(msg);
}

function BoShowMessage(str)
{
    alert(str);
}

function $(id)
{
    return document.getElementById(id);
}