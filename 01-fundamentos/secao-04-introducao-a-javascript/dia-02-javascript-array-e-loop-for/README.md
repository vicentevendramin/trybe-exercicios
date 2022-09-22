# 🚀 Lidando com Arrays

Iremos utilizar esse array para realizar os próximos exercícios.

``` javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Percorra o array imprimindo todos os valores nele contidos com a função `console.log()`;

- Some todos os valores contidos no array e imprima o resultado;

- Calcule e imprima a média aritmética dos valores contidos no array;
  - A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

- Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

- Utilizando `for`, descubra qual o maior valor contido no array e imprima-o;

- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

- Utilizando `for`, descubra qual o menor valor contido no array e imprima-o;

- Utilizando `for`, crie um array que vá de 1 até 25 e imprima o resultado;

- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por `2`.

# Bônus - Ordenação Bubble Sort

Para os próximos dois exercícios [leia este artigo](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) e tente entender o que está acontecendo no código abaixo:

``` javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

Com base na leitura que fez, faça os exercícios:

- Ordene o array `numbers` em ordem crescente e imprima seus valores;

``` javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Ordene o array `numbers` em ordem decrescente e imprima seus valores;

``` javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Agora, crie um novo array a partir do array `numbers`, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array `numbers` multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o `for` e o método `push`. O resultado deve ser o array abaixo:

``` javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

``` javascript
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```