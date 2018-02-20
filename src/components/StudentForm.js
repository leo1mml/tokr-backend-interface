import React from 'react';
import '../styles/forms/form.css'

export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.student ? props.student.name : '',
      cpf: props.student ? props.student.cpf : '',
      email: props.student ? props.student.email : '',
      address: props.student ? props.student.address : [],
      instruments: props.student ? props.student.instruments : [],
      musicStyles: props.student ? props.student.musicStyles : [],
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onCpfChange = (e) => {
    const cpf = e.target.value;
    if(!cpf || cpf.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/))
    this.setState(() => ({ cpf }));
    
    
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onSubmit = (e) => {
    e.preventDefault();

  };
  render() {
    return (
      <div className="center">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Nome"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="text"
            placeholder="CPF"
            value={this.state.cpf}
            onChange={this.onCpfChange}
          >
          </input>
          <div>
            <select name="estados-brasil">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                </select>
                <input
                    type="text"
                    placeholder="CEP(Só numeros)"
                />
                <input
                    type="text"
                    placeholder="Cidade"
                />
                <input
                    type="text"
                    placeholder="Endereço"
                />
                <input
                    type="text"
                    placeholder="Complemento"
                />
          </div>
          <div>
            <h3>Instrumentos</h3>
            <label className="container-checkbox">Violão <input type="checkbox"/> <span className="checkmark"></span></label>
            <label className="container-checkbox">Guitarra <input type="checkbox"/> <span className="checkmark"></span></label>
            <label className="container-checkbox">Baixo <input type="checkbox"/> <span className="checkmark"></span></label>
            <label className="container-checkbox">Teclado <input type="checkbox"/> <span className="checkmark"></span></label>
            <label className="container-checkbox">Ukulele <input type="checkbox"/> <span className="checkmark"></span></label>
          </div>
          
          <input type="submit" value="Salvar"/>
        </form>
      </div>
    )
  }
}
