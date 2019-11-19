const nome = 'Silvana'
const sexo = 'M'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

if (sexo == 'M') {
    if (sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else { 
        console.log(`${nome}, você não pode se aposentar!`)
    }
  } else {
    if (contribuicao >= 30 && calculoContribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
  }