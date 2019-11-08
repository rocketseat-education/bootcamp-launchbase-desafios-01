# Desafio 01-3. Funções e estruturas de repetição

Desafios para fortalecer os conhecimentos obtidos até aqui.

## Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias` (novo array), por exemplo:

```js
const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
```

Percorra a lista de usuários com uma estrutura de repetição imprimimndo em tela as informações dos usuários:

```
Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
```

## Busca por tecnologia

Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.

Por exemplo:

```js
function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
```

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

```js
for (usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario)

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`)
  }
}
```
