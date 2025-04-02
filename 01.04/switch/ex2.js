// Faça um programa que receba dois números e execute as operações listadas a
// seguir de acordo com a escolha do usuário:
// 1 - Média entre os números digitados
// 2 - Diferença entre os números
// 3 - Produtos entre os números digitados
// 4 - Divisão do primeiro pelo segundo
const numero1 = 20
const numero2 = 2

const opcao = 4

switch (opcao) {
  case 1:
    const media = (numero1 + numero2) / 2
    console.log(`A média aritmética entre ${numero1} e ${numero2} é ${media}`)
    break
  case 2:
    console.log(
      `A diferença entre ${numero1} e ${numero2} é  ${
        numero1 > numero2 ? numero1 - numero2 : numero2 - numero1
      }`
    )
    break
  case 3:
    console.log(
      `O produto entre ${numero1} e ${numero2} é  ${numero1 * numero2}`
    )
    break
  default:
    console.log(
      `A divisão de ${numero1} por ${numero2} é  ${numero1 / numero2}`
    )
}
