var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var entidades;
(function (entidades) {
    var Alumno = (function (_super) {
        __extends(Alumno, _super);
        function Alumno() {
            _super.apply(this, arguments);
        }
        return Alumno;
    })(entidades.Persona);
    entidades.Alumno = Alumno;
})(entidades || (entidades = {}));
