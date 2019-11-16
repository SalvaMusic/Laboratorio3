var animales;
(function (animales) {
    function makeSounds() {
        var miGato = new animales.Cat("Garffield");
        var miPerro = new animales.Dog("Tody");
        var lista = new Array();
        lista.push(miGato);
        lista.push(miPerro);
        lista.forEach(function (animal) {
            animal.makeSound();
        });
    }
    animales.makeSounds = makeSounds;
})(animales || (animales = {}));
