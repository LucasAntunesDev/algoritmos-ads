// Faça um algoritmo que leia o peso do usuário e calcule o IMC. Escreva a situação de
// acordo com a seguinte relação:
//* Condição Situação
//* IMC < 20 Abaixo do peso
//* 20 >= IMC < 25 Peso normal
//* 25 >= IMC < 30 Sobre peso
//* 30 >= IMC < 40 Obeso
//* IMC >= 40 Obeso mórbido

// dividindo o peso em quilos pela altura em metros ao quadrado
const pesoEmKilos = 55

const alturaEmMetros = 1.68

const IMC = pesoEmKilos / alturaEmMetros ** 2

// console.log(Math.round(IMC * 100) / 100)

if (IMC < 20) {
  console.log('Você esta Abaixo do peso')
} else if (IMC >= 20 && IMC < 25) {
  console.log('Você esta com peso normal')
} else if (IMC >= 25 && IMC < 30) {
  console.log('Você está sobre peso ')
} else if (IMC >= 30 && IMC < 40) {
  console.log('Você está obeso')
} else {
  console.log('Você está obeso mórbido')
}
