const idade = 19
// idade = 20
let nome = 'Lucas'
let liEdital = false

// Expressões artiméticas
//Operadores aritméticos
// +, -, /, *, %, **

let soma = 6 + 9
/*
console.log(3 + 6)
console.log(8 - 6)
console.log(10 / 5)
console.log(3 * 7)
console.log(8 % 2)
console.log(3 ** 4)
*/

//Expressões lógicas
// Operadores relacionais
// ==, !=, >, <, >=, <=, ===, !===

/*console.log(5 == 3) //false
console.log(5 != 3) //true
console.log(5 > 3) //true
console.log(5 < 3) //false
console.log(5 >= 3) //true
console.log(5 <= 3) //false
console.log(5 === 3) //false
console.log(5 !== 3) //true
*/

/*
console.log(5 == 5) //true
console.log(5 == "5") //true
*/
/*
console.log(5 === 5) //true
console.log(5 === "5") //false
*/

let nota = 7

//Operadores lógicos 
// &&, ||, !
console.log(`1) ${2 * 4 == 24 / 3}`)
console.log(`2) ${15 % 4 < 19 % 6}`)
console.log(`3) ${2 + 8 % 7 >= 3 * 6 - 15}`)


//1) 2 * 4 == 24 / 3 => 8 == 8 => true
//2) 15 % 4 < 19 % 6 => 3 < 1 => false
//3) 2 + 8 % 7 >= 3 * 6 - 15 => 10 % 7 >= 3 => 3 >= 3 => true
//4)    !true || 3 ** 2 / 3 < 15 - 35 % 7
//      false || 9 /3 < 15 - 0
//      false || 3 < 15 => true
//      false || true => true

const a = 3
const b = 5
const potencia = a ** b
console.log(`${a} elevado a ${b} é: ${potencia}`)