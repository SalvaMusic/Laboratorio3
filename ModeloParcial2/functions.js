var entidades;
(function (entidades) {
    var lista = new Array();
    function modificar(e) {
        var per = tomaDatos();
        var tr = creaTr(per);
        e.preventDefault();
        $(this).closest('tr').replaceWith(tr);
    }
    entidades.modificar = modificar;
    function eliminar(e) {
        var s;
        e.preventDefault();
        $(this).closest('tr').replaceWith(s);
    }
    entidades.eliminar = eliminar;
    function tomaDatos() {
        var per;
        var id = Number($("#idInput").val());
        var nom = String($("#nomInput").val());
        var ape = String($("#apeInput").val());
        var edad = Number($("#edadInput").val());
        if ($("#tipoInput").val() == "Profesor") {
            per = new entidades.Profesor(id, nom, ape, edad);
        }
        else {
            per = new entidades.Alumno(id, nom, ape, edad);
        }
        return per;
    }
    function creaTr(per) {
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
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        var btnMod = document.createElement("input");
        var btnBor = document.createElement("input");
        btnMod.setAttribute("type", "button");
        btnMod.setAttribute("value", "Modificar");
        btnMod.setAttribute("class", "btn btn-outline-warning");
        btnMod.setAttribute("id", "btnMod");
        btnMod.addEventListener("click", modificar);
        btnBor.setAttribute("type", "button");
        btnBor.setAttribute("value", "Borrar");
        btnBor.setAttribute("class", "btn btn-outline-danger");
        btnBor.setAttribute("id", "btnBor");
        btnBor.addEventListener("click", eliminar);
        var str = "";
        if (per instanceof entidades.Profesor) {
            str = "Profesor";
        }
        else {
            str = "Alumno";
        }
        var ntd4 = document.createTextNode(str);
        td5.setAttribute("value", "TD 5");
        td.appendChild(ntd);
        td1.appendChild(ntd1);
        td2.appendChild(ntd2);
        td3.appendChild(ntd3);
        td4.appendChild(ntd4);
        td5.appendChild(btnMod);
        td6.appendChild(btnBor);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        return tr;
    }
    function limpiar() {
        $("#idInput").val("");
        $("#nomInput").val("");
        $("#apeInput").val("");
        $("#edadInput").val("");
    }
    entidades.limpiar = limpiar;
    function agregar() {
        var per = tomaDatos();
        var tr = creaTr(per);
        $("tbody").append(tr);
        lista.push(per);
    }
    entidades.agregar = agregar;
})(entidades || (entidades = {}));
