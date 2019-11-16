// Funciones Básicas

let sumar= (a: number, b: number):number => a+b;

var contar = ( heroes: Array<string> ) => heroes.length;

var superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean=true ): void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ): string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ) : void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco = noHaceNada(3,"sda", true, Array[""]);
