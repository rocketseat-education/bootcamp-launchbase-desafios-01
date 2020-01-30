# Desafio 01-2. Lidando com objetos e vetores

Desafios para fortalecer os conhecimentos obtidos até aqui.

## Construção e impressão de objetos

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`. Os dados a serem armazenados são:

- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:
  - Rua: Rua Guilherme Gembala
  - Número: 260
  
*Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:*

const empresa= { nome:'RocketSeat', cor:'roxo', foco:'programacao', endereco: Rua: 'guilherme gembala, numero:260,
}

Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:

```
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```

console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereco+ empresa.numero}

*Obs. Para imprimir em tela utilize o formato de template strings, por exemplo*

```js
console.log(`O nome do usuário é ${usuario.nome}`);
```

## Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha. 

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array. 

As tecnologias também devem ser objetos contendo `nome` e `especialidade`, use as tecnologias abaixo:

const programador ={
nome:'programador',
idade: 27,
tecnologias :['Js, Css, Html]
}

Por exemplo:

```js
const objeto = {
  propriedade: [
    { nome: 'C++', especialidade: 'Desktop' }, 
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
```

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

```
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
```
console.log(`O usuario ${programador.nome} tem ${programador.idade} e suas tecnologias sao ${programador.tecnologias[0]`
