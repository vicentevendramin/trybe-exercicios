# 🚀 Exercícios - objetos e for/in

Usando o objeto abaixo, faça os exercícios a seguir:

```JavaScript
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe `meuObjeto.chave`. Valor esperado no console:

```JavaScript
Bem-vinda, Margarida
```

- Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe `meuObjeto['chave'] = valor`. Valor esperado no console:

```JavaScript
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

- Faça um `for/in` que mostre todas as chaves do objeto. Valor esperado no console:

```
personagem
origem
nota
recorrente
```

- Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

# 🚀 Leitura de Objetos

Usando o objeto abaixo, faça os exercícios a seguir:

```JavaScript
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

- Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um `console.log` no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

- Adicione um novo livro favorito na chave `livrosFavoritos`, que é um `array`. Atribua a essa chave um objeto contendo as seguintes informações:

```JavaScript
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

- Acesse as chaves `nome` e `livrosFavoritos` e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

# 🚀 Exercícios - funções

Spoiler-alert: para os exercícios do dia, os métodos `split`, `join` e `reverse` podem ser muito úteis.

- Crie uma função que receba uma string e retorne true se for um [palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo), ou false, se não for.
  - Exemplo de palíndromo: _arara_
  - `verificaPalindrome('arara')`
    - Retorno esperado: `true`
  - `verificaPalindrome('desenvolvimento')`
    - Retorno esperado: `false`

- Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.
  - Array de teste: `[2, 3, 6, 7, 10, 1];`.
  - Valor esperado no retorno da função: `4`.

- Crie uma função que receba um `array` de inteiros e retorne o índice do menor valor.
  - Array de teste: `[2, 4, 6, 7, 10, 0, -3];`.
  - Valor esperado no retorno da função: `6`.

- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  - Array de teste: `['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];`.
  - Valor esperado no retorno da função: `Fernanda`.

- Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.
  - Array de teste: `[2, 3, 2, 5, 8, 2, 3];`.
  - Valor esperado no retorno da função: `2`.

- Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
  - Valor de teste: `N = 5`.
  - Valor esperado no retorno da função: 1+2+3+4+5 = `15`.

- Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a `string ending` sempre será menor que a `string word`.
  - Valor de teste: `'trybe' e 'be'`
  - Valor esperado no retorno da função: `true`
  - `verificaFimPalavra('trybe', 'be')`;
    - Retorno esperado: `true`
  - `verificaFimPalavra('joaofernando', 'fernan')`;
    - Retorno esperado: `false`