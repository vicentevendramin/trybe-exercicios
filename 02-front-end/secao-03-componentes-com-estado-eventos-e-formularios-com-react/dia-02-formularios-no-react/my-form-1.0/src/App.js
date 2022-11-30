import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      palavraChaveFavorita: '',
      email: '',
      nome: '',
      estadoFavorito: '',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ palavraChaveFavorita: event.target.value });
  }

  handleInputEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleInputName(event) {
    this.setState({ nome: event.target.value });
  }

  handleTextArea(event) {
    this.setState({ estadoFavorito: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" onChange={ this.handleSelectChange }>
              <option value="Estado">Estado</option>
              <option value="Evento">Evento</option>
              <option value="Props">Props</option>
              <option value="Hooks">Hooks</option>
            </select>
          </label>

          <label>
            Email
            <input name="email" type="email" value={ this.state.email } onChange={ this.handleInputEmail } />
          </label>

          <label>
            Nome
            <input name="nome" type="text" value={ this.state.nome } onChange={ this.handleInputName } />
          </label>

          <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name="estadoFavorito" value={ this.state.estadoFavorito } onChange={ this.handleTextArea } />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
