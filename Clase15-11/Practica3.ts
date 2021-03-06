
// Objetos
var batimovil: {carroceria: string, modelo: string, antibalas: boolean, pasajeros: number} = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

var bumblebee: {carroceria: string, modelo: string, antibalas: boolean, pasajeros: number, disparar:() => void } = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
var villanos:{nombre: string, edad: number, mutante:boolean}[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type mutante1 = {
  poder:string,
  estatura:number
} 

type mutante2 = {
  lider:boolean,
  miembros:string[]
} 

var charles : mutante1 = {
  poder:"psiquico",
  estatura: 1.78
};

var apocalipsis: mutante2 = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique:mutante2|mutante1;

mystique = charles;
mystique = apocalipsis;
