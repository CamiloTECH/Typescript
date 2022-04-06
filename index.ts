//Datos primitivos 
let variable:string="121212"
variable="ewwe"
let numero:number=0.5
let boleano:boolean=false

//Objetos
let arrayNumber: number[]=[1212,1212,12234,4,4,4,4,4,4]
let objeto={
  hola:"hola",
  numero:121313
}
interface Datos { //Molde de los datos que debe llevar el objeto que se le asigne la interface
  hola:string,
  numero:number,
  otro?:boolean //Si se el pone el signo de interrogacion, significa que ese dato es opcional
}
let objeto2: Datos={
  hola:"dfdf",
  numero:12,
  otro:true
}

//Clases

class Primera {
  protected nombre:string
  private edad:number
  constructor(nombre:string,edad:number) {
    this.nombre=nombre,
    this.edad=edad
  }
}

//Funciones
//En las funciones tabmein se debe de poner el tipo de valor que devuleve la funcion 
//si es numero, string etc.., si al funcion no devulve nada se le pone tipo void
//si el la funcion devuelve un error de pone tipo never

function PrimeraFuncion(a:number, b:number, c?:number): number {
    return a+b

}

function Voidfunction():void{
  console.log("funcion void")
}

function errorFuntion():never{
  throw new Error("Error never ");
  
}

//Generic function
function generatorFunction<Type>(a:Type):Type{
    return a
}
let result=generatorFunction([1,4,"ff"])

//Function overloads
function suma(a:string, b:string):string{
  
}