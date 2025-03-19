// Uma revendedora de carros paga a seus funcionários, um salário fixo por mês, mais
// uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas
// por eles efetuadas. Escrever um algoritmo que lê o nome do vendedor, o número de
// carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
// recebe por carro vendido e calcula o salário mensal do vendedor, escrevendo-o
// juntamente com o seu nome.

let nomeVendedor = 'Alan Patrick'
let numerosDeCarrosVendidos = 6
let valorTotalDasVendas = 1000
let salarioFixo = 7000
let comissao = 500

const salarioMensal = salarioFixo + comissao + (1000 * 0.5)

console.log(`O salário mensal de ${nomeVendedor} é: ${salarioMensal}`)