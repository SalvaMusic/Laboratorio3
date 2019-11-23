var entidades;
(function (entidades) {
    var lista = new Array();
    function modificar() {
    }
    entidades.modificar = modificar;
    function eliminar() {
        /* $("#nomInput").val();*/
    }
    entidades.eliminar = eliminar;
    function agregar() {
        var id = Number($("#idInput").val());
        var nom = String($("#nomInput").val());
        var ape = String($("#apeInput").val());
        var edad = Number($("#edadInput").val());
        var per;
        if ($("#tipoInput").val() == "Profesor") {
            per = new entidades.Profesor(id, nom, ape, edad);
        }
        else {
            per = new entidades.Alumno(id, nom, ape, edad);
        }
        console.log($("#tipoInput").val());
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var ntd1 = document.createTextNode(per.name);
        var ntd = document.createTextNode(String(per.id));
        var td2 = document.createElement("td");
        var ntd2 = document.createTextNode(per.lastname);
        var td3 = document.createElement("td");
        var ntd3 = document.createTextNode(String(per.age));
        var td4 = document.createElement("td");
        var str = "";
        if (per instanceof entidades.Profesor) {
            str = "Profesor";
        }
        else {
            str = "Alumno";
        }
        var ntd4 = document.createTextNode(str);
        td.appendChild(ntd);
        td1.appendChild(ntd1);
        td2.appendChild(ntd2);
        td3.appendChild(ntd3);
        td4.appendChild(ntd4);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        $("tbody").append(tr);
        lista.push(per);
    }
    entidades.agregar = agregar;
})(entidades || (entidades = {}));
