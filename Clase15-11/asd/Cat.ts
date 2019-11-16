namespace animales{
    export class Cat extends Animal {

        makeSound(){
            console.log("Miau!! "+ super.name)
        }
    }
}
