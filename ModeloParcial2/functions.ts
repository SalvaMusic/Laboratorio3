
namespace entidades{
    
    var lista:Array<Persona> = new Array<Persona>();
    export function modificar(){
        
    }

    export function eliminar(){
       /* $("#nomInput").val();*/
    }

    export function agregar(){
        let id:number = Number($("#idInput").val());
        let nom:string = String($("#nomInput").val());
        let ape:string = String($("#apeInput").val());
        let edad:number = Number($("#edadInput").val());
        let per:Persona;
        if($("#tipoInput").val() == "Profesor"){
           per = new Profesor(id, nom, ape, edad);
        } else {
            per = new Alumno(id, nom, ape, edad);
        }
        console.log($("#tipoInput").val()); 
        
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let ntd1 = document.createTextNode(per.name);
        let ntd = document.createTextNode(String(per.id));
        let td2 = document.createElement("td");
        let ntd2 = document.createTextNode(per.lastname);
        let td3 = document.createElement("td");
        let ntd3 = document.createTextNode(String(per.age));
        let td4 = document.createElement("td");
       
        let str ="";

        if(per instanceof Profesor){
            str = "Profesor";
        } else {
            str = "Alumno";
        }

        
        
        let ntd4 = document.createTextNode(str);
        
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

    /*export function makeSounds():void{
        var miGato:Cat = new Cat("Garffield");
        var miPerro:Dog = new Dog("Tody");
        
        
        var lista : Array<Animal> = new Array<Animal>();
        
        lista.push(miGato);
        lista.push(miPerro);
        
        lista.forEach(function(animal){
            animal.makeSound();
        })
    }*/
}

