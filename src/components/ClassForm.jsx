import React from 'react';

import '../styles/form.css';

export class ClassForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      newsletter: false
    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  // ou então

  // state = {
  //   // e aqui dentro coloco o que você quiser guardar no estado do seu componente
  // }

  handleSubmitForm(event) {
    console.log(this.state);
    event.preventDefault();
  }


  render() {
    return (
      <form className='form-container' onSubmit={ this.handleSubmitForm }>
        <label>
          Nome
          <input
            type="text"
            onChange={ ({target}) => this.setState({ nome: target.value})}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            onChange={ ({target}) => this.setState({ email: target.value})}
          />
        </label>

        <label>
          Telefone
          <input
            type="number"
            onChange={ ({target}) => this.setState({ telefone: target.value})}
          />
        </label>

        <label>
          <select onChange={ ({target}) => this.setState({ cidade: target.value})}>
            <option value='cidade 1'>Cidade 1</option>
            <option value='cidade 2'>Cidade 2</option>
            <option value='cidade 3'>Cidade 3</option>
          </select>
        </label>

        <label>
          <input
            type="checkbox"
            value={this.state.newsletter}
            onClick={() => this.setState(prev => ({ newsletter: !prev.newsletter}))}
          />
          Desejo receber Newsletter no meu Email
        </label>

        <button>ENVIAR</button>
      </form>
    )
  }
};
