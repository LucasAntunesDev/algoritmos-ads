// Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
// a. Carioca
// b. Paulista
// c. Mineiro
// d. Outros estados.

const estado = 'RS'

switch (estado) {
  case 'RJ':
    console.log('Carioca')
    break
  case 'SP':
    console.log('Paulista')
    break
  case 'MG':
    console.log('Mineiro')
    break
  default:
    console.log('Outros estados')
}
