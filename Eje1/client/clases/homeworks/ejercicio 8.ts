//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<Type>(arreglo:Type[], prop:Type) {
    return arreglo.map((object) => {
        return object[prop]
    }) 
}