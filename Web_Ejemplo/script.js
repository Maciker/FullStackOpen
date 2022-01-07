console.log('Probando Javascript')

let firstName = 'Iker'
let isDeveloper = true

if (isDeveloper) {
    console.log('Hola ' + firstName.toUpperCase())
}

const persona = {
    firstName: 'Iker',
    secondName:'Macaya',
    age: 36,
    isDeveloper: true
}

const field = 'age'

if (persona.isDeveloper) {
    console.log('Hola ' + persona.firstName + ' ' + persona.secondName)
    console.log('Tu edad es: ' + persona[field])
}

const suma = (a, b) => {
    return a + b
}

const numero_1 = 100

const numero_2 = 400

console.log(suma(10, 100))

function resta(a, b) {
    return a - b
}

console.log('La suma de ' + numero_1 + ' + ' + numero_2 + ' es: ' + suma(numero_1, numero_2))

console.log('La resta de ' + numero_2 + ' - ' + numero_1 + ' es: ' + resta(numero_2, numero_1))