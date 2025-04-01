// Faça um algoritmo que leia um número inteiro e escreva a raiz dele se ele for positivo ou o
// quadrado dele se for negativo.
const numero = Number(-9);

if (numero > 0) {
  console.log(Math.sqrt(numero));
} else if (numero < 0) {
  console.log(numero ** 2);
}
