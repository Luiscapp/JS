const datos = {
    nombre: "Luis",
    apellido: "Pinto",
    edad: 21,
    altura: 168,
    desarrollador : "true"
}

let edad2 = datos.edad

const datos2 = {
    nombre: "Angel",
    apellido: "Varela",
    edad: 23,
    altura: 170,
    desarrollador : "false"
}

const datos3 = {
    nombre: "Yvan",
    apellido: "Varela",
    edad: 19,
    altura: 174,
    desarrollador : "false"
}

const datos4 = {
    nombre: "Maria",
    apellido: "Baptista",
    edad: 20,
    altura: 160,
    desarrollador : "false"
}

const datos5 = [datos, datos2, datos3, datos4]

datos5.sort((a, b) => a.edad - b.edad)