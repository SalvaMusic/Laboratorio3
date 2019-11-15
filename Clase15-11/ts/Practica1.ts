// Tipos
var batman : String = "Bruce";
var superman : String = "Clark";

var existe : boolean = false;

// Tuplas
var parejaHeroes: [var] = [batman,superman];
var villano: [String, Number, boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados : String [] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerzas {5, 100, 1, 0 }

// Retorno de funciones
function activar_batiseñal():String{
  return "activada";
}

function pedir_ayuda(): void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log( largoDelPoder );
