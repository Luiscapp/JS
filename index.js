const logger = require('./logger')

// console.log("Hola estoy saliendo en pantalla")
console.info("Esto es un ejemplo de informacion")
console.debug("Esto es un ejemplo de debug")
console.warn("Esto es un ejemplo de advertencia")
console.error("Esto es un ejemplo de error")

const funcion = val => {
    if (typeof val === "string")
    throw new Error("Debes introducir un nombre")
}

const nombre = "Luis"

try {
    console.log("Esta ejecutandose de manera correcta")
    const nom = funcion(nombre)
} catch(e) {
    console.error("ERROR! Introduce un nombre")
}