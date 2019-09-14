window.addEventListener("load",Inicializar);

function Inicializar()
{
    var btn = $("btnSum");
    btn.addEventListener("click",Sumar); 

    var btnSumGua = $("btnSumGuar");
    btnSumGua.addEventListener("click",Guardar);
}

function Sumar()
{
   console.log("Sumando...");
   var num1 = $("num1");
   var num2 = $("num2");
   var res = $("result");
   
   var resultado = parseInt(num1.value) + parseInt(num2.value);
   res.value = resultado;   
}

function Guardar()
{
    var num1 = $("num1");
    var num2 = $("num2");
    var res = $("result");
    
    var tabla = $("table");
    var tbody = $("tbody");
    //innerHTML todo lo que esta entre el tag de apertura y cierre

    //Armar el String!! <td>1</td><td>2</td><td>3</td>
    tbody.innerHTML += "<td>"+num1.value+"</td><td>"+num2.value+"</td><td>"+res.value+"</td>";
}

function BoShowMessage(str)
{
    alert(str);
}

function $(id)
{
    return document.getElementById(id);
}