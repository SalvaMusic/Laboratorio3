/// <reference path="Vehiculo.ts" />
namespace entidades{
    export class Camioneta extends Vehiculo {
        public cuatroXCuatro:boolean;
        
        constructor(id:number, modelo:string, marca:string, precio:number, cuatroXCuatro:boolean){
            super(id,modelo,marca,precio);
            this.cuatroXCuatro = cuatroXCuatro;
        }
    }
}