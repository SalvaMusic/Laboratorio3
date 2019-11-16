var animales;
(function (animales) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.makeSound = function () { };
        ;
        return Animal;
    }());
    animales.Animal = Animal;
})(animales || (animales = {}));
