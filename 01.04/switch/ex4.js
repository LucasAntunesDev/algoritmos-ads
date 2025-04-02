// Escreva um programa que leia o código de um determinado produto e mostre a sua
// classificação. Utilize a tabela abaixo como referência:
// 1 - Alimento não-perecível
// 2 - Alimento perecível
// 3 - Vestuário
// 4 - Limpeza

const productCode = 1

switch (productCode) {
  case 1:
    console.log('Alimento não-perecível')
    break
  case 2:
    console.log('Alimento perecível')
    break
  case 3:
    console.log('Vestuário')
    break
  default:
    console.log('Limpeza')
}
