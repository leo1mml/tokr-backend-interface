import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputMask} from 'primereact/components/inputmask/InputMask';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';

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
    const email = e.target.value;
    this.setState(() => ({ email }));
  };



  onSubmit = (e) => {
    e.preventDefault();
    

  };

  onChangeBasic = (e) => {
    this.setState({ val1: e.value });
  }

  render() {
    var instruments = [
      {label: 'Guitarra', value: 'Guitarra'},
      {label: 'Violão', value: 'Violao'},
      {label: 'Ukulele', value: 'Ukulele'},
      {label: 'Teclado', value: 'Teclado'},
      {label: 'Baixo', value: 'Baixo'}
    ];
    var musicStyles = [
      {label: 'Rock', value: 'Rock'},
      {label: 'Samba', value: 'Samba'},
      {label: 'Classica', value: 'Classica'},
      {label: 'Sertanejo', value: 'Sertanejo'},
      {label: 'Pop', value: 'Pop'}
    ];
    return (
      <div className="center">
        {this.state.error && <p>{this.state.error}</p>}
        <div className="form-container">
        <form onSubmit={this.onSubmit}>

            <span className="ui-float-label text-box">
                <InputText required={true} id="float-input" type="text" size="30" />
                <label htmlFor="float-input">Nome</label>
            </span>
            <span className="ui-float-label text-box">
                <InputMask 
                    mask="999.999.999-99" 
                    value={this.state.val1} 
                    placeholder="CPF" 
                    onChange={this.onChangeBasic}
                    required
                >
                </InputMask>
            </span>
            <span className="ui-float-label text-box">
                <InputText required={true} id="float-input" type="text" size="30" />
                <label htmlFor="float-input">E-mail</label>
            </span>
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
            <span className="ui-float-label text-box">
              <InputText required={true} id="float-input" type="text" size="30" />
              <label htmlFor="float-input">Cidade</label>
            </span>
            <span className="ui-float-label text-box">
              <InputText required={true} id="float-input" type="text" size="30" />
              <label htmlFor="float-input">Endereço</label>
            </span>
            <h4>Instrumentos</h4>
            <SelectButton value={this.state.instruments} multiple={true} options={instruments} onChange={(e) => this.setState({instruments: e.value})}></SelectButton>
            <h4>Estilos Musicais</h4>
            <SelectButton value={this.state.musicStyles} multiple={true} options={musicStyles} onChange={(e) => this.setState({musicStyles: e.value})}></SelectButton>

          <input type="submit" value="Salvar"/>
        </form>
        </div>
      </div>
    )
  }
}
