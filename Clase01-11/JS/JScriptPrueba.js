$(document).ready(function(){
    
    $("#btnO").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);    
    })
   
    $("#btnM").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);    
    })

    $("div").click(function(){
        // En Jquery el 'this' de la function es el objeto del evento que se ejecuto.  
       $(this).hide();
        //$(this).slow();
    });

});

/*
$.ajax({
    url: "http//....",
    type: "POST", //GET es por defecto.
    data: {
        nombre: "Marcos",
        apellid: "Lopez",
        id: 1,
        localidad: { nombre: "Varela", id:1 } // Json compuesto
    },
    success: function(result){
        console.log(result); //Respuesta del servidor bien o error.
    },
    error: function(error){
        console.log("error: "+error); //Respuesta del servidor error.
    },

    contentType: "application/Json" // vamos a pasar un Json.
})


$.get("http.....", function(data, status){
    for(var i= 0; i<data.lenght;i++)
    {
        console.log(data[i]);
    }
    
})

$.post("http.....",
    {
       //Objeto Json 
        }, function(data, status){
    
    
})
*/




/*
var penson1 = {
    name = 'Generico',
    lastName = 'Generico'
}

var penson2 = {
    name = 'Juan',
    lastName = 'Lopez'
}


var printName = function(){
    console.log(this.name+' '+this.lastName);
}

printName.apply(person1);*/