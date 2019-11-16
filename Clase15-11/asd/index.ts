namespace animales{
    export function makeSounds():void{
        var miGato:Cat = new Cat("Garffield");
        var miPerro:Dog = new Dog("Tody");
        
        
        var lista : Array<Animal> = new Array<Animal>();
        
        lista.push(miGato);
        lista.push(miPerro);
        
        lista.forEach(function(animal){
            animal.makeSound();
        })
    }
}

