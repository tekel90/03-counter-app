const nombre = "Jonathan";
const apellido = "Tekel";

const nombreCompleto = `${nombre}${apellido}${1 + 1}`;

export function getSaludo(nombre = "Carlos") {
  return "Hola " + nombre + "!";
}
