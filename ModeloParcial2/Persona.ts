namespace entidades{
    export class Persona{
        public name:string;
        public lastname:string;
        public age:number;
        public id:number;
        
        constructor(id:number, name:string, lastname:string, age:number){
            
            this.id = id;
            this.name = name;
            this.lastname = lastname;
            this.age = age;
        }
        /*
        setName(name:string):void{
            this.name = name;
        }

        setLastname(lastname:string):void{
            this.lastname = lastname;
        }*/

    }
}
