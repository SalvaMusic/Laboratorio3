namespace animales{
    export abstract class Animal{
        name:string;
        
        constructor(name:string){
            this.name = name
        }

        makeSound(){};
    }
}
