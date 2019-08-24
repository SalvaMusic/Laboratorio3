    var nombre;
        nombre = "Salvador";
        nombre = 12;
        if(nombre === "12")
        {
            alert("El nombre es 12");
        }else
        {
            alert("No es 12");
            }
            console.log(sumar(1,2));

            function sumar(num1,num2)
            {
                return num1+num2;
            }

    function mostrar()
    {
        var inputUsr = document.getElementById("usr");
        var inputPsw = document.getElementById("psw");

        console.log("Usuario: "+inputUsr.value);
        console.log("Id: "+inputUsr.id);
        console.log("Nombre: "+inputUsr.name);
        console.log("Password: "+inputPsw.psw);
        // if(document.getElementById("usr").value == "yes" && document.getElementById("psw").value == "1234")
        // {
        //     alert("Usuario y conrtaseña correctos");
        // }else
        // {
        //     alert("Usuario o contraseña incorrectos");
        // }

        // alert("Se hizo click desde la función mostrar");
    }
