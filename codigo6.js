const compra = ["Queso", "Leche", "Huevos", "Pan", "Jamon"]
compra.push("Aceite de Girasol")
console.log(compra)
compra.pop()
console.log(compra)

const peliculas = [
    { titulo: "The Avengers", director: "Joss Whedon", fecha: 2012},
    { titulo: "Volver al Futuro 2", director: "Robert Zemeckis", fecha: 1989},
    { titulo: "Iron Man", director: "Jon Favreau", fecha: 2008}
]

const posterior = peliculas.filter(obj => {
    if (obj.fecha < 2010) {
        return true
    } else {
        return false
    }
})
console.log(posterior)

const director = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(director)

const titulo = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(director)

const nuevaLista = director.concat(titulo)
console.log(nuevaLista)

const nuevaLista2 = [...director, ... titulo]
console.log(nuevaLista2)