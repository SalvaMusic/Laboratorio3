var entidades;
(function (entidades) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(id, modelo, marca, precio) {
            this.id = id;
            this.modelo = modelo;
            this.marca = marca;
            this.precio = precio;
        }
        return Vehiculo;
    }());
    entidades.Vehiculo = Vehiculo;
})(entidades || (entidades = {}));
