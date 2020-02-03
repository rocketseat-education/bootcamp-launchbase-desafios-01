<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 1-1: Primeiros passos com JS
</h3>

<blockquote align="center">“Querer vencer significa já ter percorrido metade do caminho.”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:

- **Variáveis**;
- **Condicionais**;
- **Operadores**.

### Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o `nome`, `peso`, `altura` e `sexo` de uma pessoa, por exemplo:

```js
const nome = "Carlos";
const peso = 84;
const altura = 1.88;
```

A partir desses dados armazene em uma constante chamada `imc` o cálculo do índice de massa corporal definido pela fórmula abaixo:

```js
peso / (altura * altura);
```

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

- `SE` o `IMC` maior ou igual a `30`: Carlos você está acima do peso;
- `SE` o `IMC` menor que `29.9`: Carlos você não está acima do peso;

### Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

_Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)_

Comece criando constantes para armazenar `nome`, `sexo`, `idade` e `contribuicao`(em anos), por exemplo:

```js
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
```

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
- `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;

_Dica: Você pode unir duas condições, veja o exemplo abaixo_

```js
if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
```

## :calendar: Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver um exemplo de solução [aqui](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/tree/codigos). Após concluí-lo, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
