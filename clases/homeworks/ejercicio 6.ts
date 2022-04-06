function Suma(a: number|string, b: string|number): string|number{
    if(typeof a === "string") {
        a = parseInt(a)
    }
    if(typeof b === "string") {
        b = parseInt(b)
    }
    return a + b
}
 //que pasa si yo quisiera concatenar strings con esta funcion?

let result=Suma(12,12)
