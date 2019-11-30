namespace entidades{
    export class Vehiculo{
        public modelo:string;
        public marca:string;
        public precio:number;
        public id:number;
        
        constructor(id:number, modelo:string, marca:string, precio:number){
            
            this.id = id;
            this.modelo = modelo;
            this.marca = marca;
            this.precio = precio;
        }
        // revwi id +1.
        // calcular promedio mostrar en pop up.
        // 2 array json modelo y promedio del precio.
        // filtrado llama al metodo carga.
        // select con lista de los modelos que estan cargados.


    }
}
