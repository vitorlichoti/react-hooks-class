import { useState } from "react";

export const FunctionalForm = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState();
  const [cidade, setCidade] = useState('');
  const [newsletter, setNewsLetter] = useState(false);

  // ou fazer em um unico state

  // const [estadoUnico, setEstadoUnico] = useState({
  //   nome: '',
  //   email: '',
  //   telefone: 0,
  //   cidade: '',
  //   newsletter: false
  // });

  const handleSubmitForm = (event) => {
    console.log({nome, email, telefone, cidade, newsletter});
    event.preventDefault();
  }

  return (
    <form onSubmit={ handleSubmitForm }>
        <label>
          Nome
          <input
            type="text"
            onChange={ ({target}) => setNome(target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            onChange={ ({target}) => setEmail(target.value)}
          />
        </label>

        <label>
          Telefone
          <input
            type="number"
            onChange={ ({target}) => setTelefone(target.value)}
          />
        </label>

        <label>
          Cidade
          <select onChange={ ({target}) => setCidade(target.value)}>
            <option value='cidade 1'>Cidade 1</option>
            <option value='cidade 2'>Cidade 2</option>
            <option value='cidade 3'>Cidade 3</option>
          </select>
        </label>

        <label>
          Desejo receber Newsletter no meu Email
          <input
            type="checkbox"
            value={this.state.newsletter}
            onClick={() => setNewsLetter(!newsletter)}
          />
        </label>

        <button>ENVIAR</button>
      </form>
  );
};
