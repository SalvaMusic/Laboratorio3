var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Persona.ts" />
var entidades;
(function (entidades) {
    var Profesor = /** @class */ (function (_super) {
        __extends(Profesor, _super);
        function Profesor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Profesor;
    }(entidades.Persona));
    entidades.Profesor = Profesor;
})(entidades || (entidades = {}));
