// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes;
var _a = void 0, batman = _a[0], superman = _a[1];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var fuerzas;
(function (fuerzas) {
    fuerzas[fuerzas[5] = 0] = 5;
    fuerzas[fuerzas[100] = 1] = 100;
    fuerzas[fuerzas[1] = 2] = 1;
    fuerzas[fuerzas[0] = 3] = 0;
})(fuerzas || (fuerzas = {}));
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
