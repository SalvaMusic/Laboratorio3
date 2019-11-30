
/// <reference path="Auto.ts" />
/// <reference path="Camioneta.ts" />
namespace entidades{
    
    var lista:Array<Vehiculo> = new Array<Vehiculo>();

    function tomaDatos(){
        let veh;
        let id:number = Number($("#idInput").val());
        let mar:string = String($("#marInput").val());
        let mod:string = String($("#modInput").val());
        let pre:number = Number($("#preInput").val());
     
        if($("#tipoInput").val() == "Auto"){
            let cant = Number($("#cantInput").val());
            veh = new Auto(id, mar, mod, pre, cant);
        } else {
            veh = new Camioneta(id, mar, mod, pre, $("#chk1").prop('checked'));
        }
        return veh
    }
    


    function creaTr(veh){

        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let ntd1 = document.createTextNode(veh.marca);
        let ntd = document.createTextNode(String(veh.id));
        let td2 = document.createElement("td");
        let ntd2 = document.createTextNode(veh.modelo);
        let td3 = document.createElement("td");
        let ntd3 = document.createTextNode(String(veh.precio));
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let str ="";
        let strb ="";

        if (veh instanceof Auto){ 
            str = "Auto"; 
            strb = String(veh.cantidadPuertas+" Puertas");
        } else { 
            str = "Camioneta";
            if(veh.cuatroXCuatro === true){
                strb = "4 X 4";
            } else {
                strb = " - ";
            }
        }

        let ntd4 = document.createTextNode(str);
        let ntd5 = document.createTextNode(strb);

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

    export function limpiar(){
        $("#idInput").val("");
        $("#marInput").val("");
        $("#modInput").val("");
        $("#preInput").val("");
    }

    export function agregar(){
        
        let veh = tomaDatos();

        lista.push(veh);
    }

    function cargarVeh(veh){

        let tr = creaTr(veh);            
        $("tbody").append(tr);
    }

    function calcular(){
        let n  = lista.reduce(
            function(total,item){
                    return total = total+item.precio;
                
            },0);
        return n;    
    }

    export function calcularPromedio(){
        
        let str = String(calcular()/lista.length);
        console.log(str);
     
    }

    export function cargarTabla(){
        lista.forEach(aux => {
            cargarVeh(aux);
        });
    }
}

