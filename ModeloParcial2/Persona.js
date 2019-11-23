var entidades;
(function (entidades) {
    var Persona = (function () {
        function Persona(id, name, lastname, age) {
            this.id = id;
            this.name = name;
            this.lastname = lastname;
            this.age = age;
        }
        return Persona;
    })();
    entidades.Persona = Persona;
})(entidades || (entidades = {}));
