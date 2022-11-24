# Exercício - renderizando usuários

Crie uma aplicação React na sua máquina via `create-react-app` com o nome `exercise-listing-components`, crie os componentes `Image` e `UserProfile` mostrados abaixo. Além disso, altere o componente `App` conforme segue:

``` JavaScript
// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
```

``` JavaScript
// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
```

``` JavaScript
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
      </div>
    );
  }
}

export default App;
```

O componente `App` possui dois componentes `UserProfile` como filhos. Que tal gerarmos esses componentes dinamicamente? Isso pode ser feito utilizando a HOF `map`, da seguinte forma:

``` JavaScript
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
      }
    ];

    return (
      <div className="App">
        {users.map((user) => <UserProfile user={ user } />)}
      </div>
    );
  }
}

export default App;
```

Entretanto, a geração dinâmica dos componentes está incompleta, pois é preciso passar uma `key` para `UserProfile`. Se você copiar o código acima no seu projeto, executar o comando `npm start` para inicializar o programa e acessar o `console` do seu navegador, você notará a existência de um `warning` levantado pelo React, justamente por estar faltando o atributo `key`.

Dito isso, altere a chamada do componente de `UserProfile` de forma que a lista seja gerada dinamicamente de maneira adequada.