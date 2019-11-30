/// <reference path="Auto.ts" />
/// <reference path="Camioneta.ts" />
var entidades;
(function (entidades) {
    var lista = new Array();
    function tomaDatos() {
        var veh;
        var id = Number($("#idInput").val());
        var mar = String($("#marInput").val());
        var mod = String($("#modInput").val());
        var pre = Number($("#preInput").val());
        if ($("#tipoInput").val() == "Auto") {
            var cant = Number($("#cantInput").val());
            veh = new entidades.Auto(id, mar, mod, pre, cant);
        }
        else {
            veh = new entidades.Camioneta(id, mar, mod, pre, $("#chk1").prop('checked'));
        }
        return veh;
    }
    function creaTr(veh) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var ntd1 = document.createTextNode(veh.marca);
        var ntd = document.createTextNode(String(veh.id));
        var td2 = document.createElement("td");
        var ntd2 = document.createTextNode(veh.modelo);
        var td3 = document.createElement("td");
        var ntd3 = document.createTextNode(String(veh.precio));
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var str = "";
        var strb = "";
        if (veh instanceof entidades.Auto) {
            str = "Auto";
            strb = String(veh.cantidadPuertas + " Puertas");
        }
        else {
            str = "Camioneta";
            if (veh.cuatroXCuatro === true) {
                strb = "4 X 4";
            }
            else {
                strb = " - ";
            }
        }
        var ntd4 = document.createTextNode(str);
        var ntd5 = document.createTextNode(strb);
        td.appendChild(ntd);
        td1.appendChild(ntd1);
        td2.appendChild(ntd2);
        td3.appendChild(ntd3);
        td4.appendChild(ntd4);
        td5.appendChild(ntd5);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        return tr;
    }
    function limpiar() {
        $("#idInput").val("");
        $("#marInput").val("");
        $("#modInput").val("");
        $("#preInput").val("");
    }
    entidades.limpiar = limpiar;
    function agregar() {
        var veh = tomaDatos();
        lista.push(veh);
    }
    entidades.agregar = agregar;
    function cargarVeh(veh) {
        var tr = creaTr(veh);
        $("tbody").append(tr);
    }
    function calcular() {
        var n = lista.reduce(function (total, item) {
            return total = total + item.precio;
        }, 0);
        return n;
    }
    function calcularPromedio() {
        var str = String(calcular() / lista.length);
        console.log(str);
    }
    entidades.calcularPromedio = calcularPromedio;
    function cargarTabla() {
        lista.forEach(function (aux) {
            cargarVeh(aux);
        });
    }
    entidades.cargarTabla = cargarTabla;
})(entidades || (entidades = {}));
