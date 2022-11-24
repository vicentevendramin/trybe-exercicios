# 🚀 Exercício - criando um componente de imagem

Crie uma aplicação React na sua máquina via `create-react-app` com o nome `exercise-image-component`.

Após isso, crie um arquivo `Image.js` no diretório `src` do projeto e copie para esse arquivo o código escrito abaixo. Realizada todas as solicitações, responda:

``` JavaScript
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
```

1. Qual é o nome do componente declarado acima?
2. Chame o componente `Image` dentro do componente `App`, de forma que seja mostrada esta imagem ou o texto: `Cute cat staring`, caso a imagem não consiga ser carregada.