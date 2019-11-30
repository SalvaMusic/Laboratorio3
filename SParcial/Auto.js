var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Vehiculo.ts" />
var entidades;
(function (entidades) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(id, modelo, marca, precio, cantidadPuertas) {
            var _this = _super.call(this, id, modelo, marca, precio) || this;
            _this.cantidadPuertas = cantidadPuertas;
            return _this;
        }
        return Auto;
    }(entidades.Vehiculo));
    entidades.Auto = Auto;
})(entidades || (entidades = {}));
