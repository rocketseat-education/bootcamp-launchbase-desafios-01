const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

console.log(imc.toFixed(2));


function calcularImc(nome,peso,altura){
    return console.log(` Olá ${nome}, seu IMC é =${peso / (altura * altura).toFixed(2)}`)
}


calcularImc('Eurico',84,1.88)