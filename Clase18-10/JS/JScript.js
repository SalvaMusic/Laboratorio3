$(document).ready(function(){
    
/*})
suplanto -----> window.addEventListener("load",function(){*/
    
  //  console.log(document.getElementById("parrafo").innerHTML);
    /*  Busca por tag
    console.log($("btn"));
        Busca por clase
    console.log($(".btn"));
    /* Busca por id
    console.log($("#btn"));*/
   // console.log($("#parrafo").html());
    // Setea, no agrega.
  //  console.log($("#parrafo").html("Agrega"));
    /*document.getElementById("btn1").addEventListener("click",saludar)*/
  //  $("#btn1").click(saludar);

    // devuelve el valor de atributo
    console.log($("#txt").attr("id"));
    
    // setea el valor de atributo
    console.log($("#txt").attr("id","nuevo"));
    Console.log($("#txt").val());

    $("#txt").val("Nuevo valor");
})

function saludar()
{
    alert("Hola");
}



