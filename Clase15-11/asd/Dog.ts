namespace animales{
    export class Dog extends Animal {
   
        makeSound(){
            console.log("Guau!! "+ super.name)
        }
    }
}