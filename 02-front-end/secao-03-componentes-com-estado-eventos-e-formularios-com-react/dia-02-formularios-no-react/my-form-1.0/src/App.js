import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      palavraChaveFavorita: '',
      email: '',
      nome: '',
      estadoFavorito: '',
      vaiComparecer: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <label>
              Escolha sua palavra chave favorita:
              <select name="palavraChaveFavorita" onChange={ this.handleChange }>
                <option value="Estado">Estado</option>
                <option value="Evento">Evento</option>
                <option value="Props">Props</option>
                <option value="Hooks">Hooks</option>
              </select>
            </label>

            <label>
              Email
              <input name="email" type="email" value={ this.state.email } onChange={ this.handleChange } />
            </label>

            <label>
              Nome
              <input name="nome" type="text" value={ this.state.nome } onChange={ this.handleChange } />
            </label>

          </fieldset>

          <fieldset>
            <legend>Outras informações</legend>

            <label>
              Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
              <textarea name="estadoFavorito" value={ this.state.estadoFavorito } onChange={ this.handleChange } />
            </label>

            <label>
              Vai comparecer?
              <input name="vaiComparecer" type="checkbox" value={ this.state.vaiComparecer } onChange={ this.handleChange } />
            </label>

            <input type="file" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
