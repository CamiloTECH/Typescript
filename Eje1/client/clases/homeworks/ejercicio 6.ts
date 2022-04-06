function Suma(a: number | string, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "number") {
    b = b.toString();
    return a + b;
  } else if (typeof b === "string" && typeof a === "number") {
    a = a.toString();
    return a + b;
  } else if (typeof b === "number" && typeof a === "number") {
    return a + b;
  } else if (typeof b === "string" && typeof a === "string") {
    return a + b;
}
}
//que pasa si yo quisiera concatenar strings con esta funcion?

let result = Suma(12, 12);
