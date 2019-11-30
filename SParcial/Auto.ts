/// <reference path="Vehiculo.ts" />
namespace entidades{
    export class Auto extends Vehiculo {
        public cantidadPuertas:number;
        
        constructor(id:number, modelo:string, marca:string, precio:number, cantidadPuertas:number){
            super(id,modelo,marca,precio);
            this.cantidadPuertas = cantidadPuertas;
        }
       
    }
}