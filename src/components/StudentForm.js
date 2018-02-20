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
    this.setState(() => ({ cpf }));
  };
  onEmailChange = (e) => {
    const cpf = e.target.value;
    this.setState(() => ({ cpf }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
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
            placeholder="CPF"
            value={this.state.cpf}
            onChange={this.onCpfChange}
          >
          </input>
          <h1>Custom Checkboxes</h1>
          <label className="container-checkbox">Violão <input type="checkbox"/> <span class="checkmark"></span></label>
          <label className="container-checkbox">Guitarra <input type="checkbox"/> <span class="checkmark"></span></label>
          <label className="container-checkbox">Baixo <input type="checkbox"/> <span class="checkmark"></span></label>
          <label className="container-checkbox">Teclado <input type="checkbox"/> <span class="checkmark"></span></label>
          <label className="container-checkbox">Ukulele <input type="checkbox"/> <span class="checkmark"></span></label>
          <button>Salvar</button>
        </form>
      </div>
    )
  }
}
