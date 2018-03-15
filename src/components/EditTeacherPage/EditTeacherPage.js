import React from 'react'
import { connect } from 'react-redux';
import {startPatchTeacherById} from '../../actions/teachers'
import {InputMask} from 'primereact/components/inputmask/InputMask'
import {createDateFromStringBR, createStringFromDateBR} from '../../helpers/DateHelper'
import {NotificationManager} from 'react-notifications';

class EditTeacherPage extends React.Component {

    constructor(props) {
        super(props)
        

        this.state = {
            guitarra: props.teacher ? props.teacher.instruments.includes("guitarra") : false,
            violao: props.teacher ? props.teacher.instruments.includes("violao") : false,
            baixo: props.teacher ? props.teacher.instruments.includes("baixo") : false,
            ukulele: props.teacher ? props.teacher.instruments.includes("ukulele") : false,
            teclado: props.teacher ? props.teacher.instruments.includes("teclado") : false,
            name: props.teacher ? props.teacher.name : '',
            cpf: props.teacher ? props.teacher.cpf : '',
            cellPhone: props.teacher ? props.teacher.cellPhone : '',
            birthDate: props.student ? createStringFromDateBR(props.student.birthDate) : '',
            status: props.teacher ? props.teacher.status : '',
            countryState: props.teacher ? props.teacher.address[0] : '',
            city: props.teacher ? props.teacher.address[1] : '',
            address: props.teacher ? props.teacher.address[2] : '',
            operationalArea: props.teacher? props.teacher.operationalArea : '',
            instruments: props.teacher? (props.teacher.instruments ? props.teacher.instruments : []) : []
        }
    }

    createNotification = (type, message, title) => {
        switch (type) {
        case 'info':
            NotificationManager.info(message);
            break;
        case 'success':
            NotificationManager.success(message, title);
            break;
        case 'warning':
            NotificationManager.warning(message, title, 3000);
            break;
        case 'error':
            NotificationManager.error(message, 'Click me!', 5000, () => {
            alert('callback');
            });
            break;
        default:
            return
        }
    }

    selectInstrument = (id) => {
        this.setState(() => ({
            instruments: !this.state.instruments.includes(id) ? this.state.instruments.concat(id) : this.state.instruments.filter((instrument) => {
                return instrument !== id
            })
        }))

        switch( id ){
            case 'guitarra':
                this.setState(() => ({
                    guitarra: !this.state.guitarra
                }))
                break
            case 'violao':
                this.setState(() => ({
                    violao: !this.state.violao
                }))
                break
            case 'ukulele':
                this.setState(() => ({
                    ukulele: !this.state.ukulele
                }))
                break
            case 'teclado':
                this.setState(() => ({
                    teclado: !this.state.teclado
                }))
                break
            case 'baixo':
                this.setState(() => ({
                    baixo: !this.state.baixo
                }))
                break
            default:
                break;
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }
    onCpfChange = (e) => {
        const cpf = e.value.match(/\d/g).map(Number).join('');
        this.setState(() => ({ cpf }));
    }

    onCellPhoneChange = (e) => {
        const cellPhone = e.value.match(/\d/g).map(Number).join('');
        this.setState(() => ({ cellPhone }));
    }

    onBirthDateChange = (e) => {
        
        const birthDate = e.value
        this.setState(() => ({ birthDate }));
    }

    onStatusChange = (e) => {
        const status = e.target.value
        this.setState(() => ({status}))
    }

    onUFChange = (e) => {
        const countryState = e.target.value
        this.setState(() => ({countryState}))
    }

    onCityChange = (e) => {
        const city = e.target.value
        this.setState(() => ({city}))
    }

    onAddresChange = (e) => {
        const address = e.target.value
        this.setState(() => ({address}))
    }
    onOperationalAreaChange = (e) => {
        const operationalArea = e.target.value
        this.setState(() => ({operationalArea}))
    } 

    prepareToSave = () => {

        let shouldSave = true
        let birthDate = undefined
        if(this.state.status === '' || !this.state.status){
            this.createNotification('warning', 'Escolha o status', 'Campos faltando')
            shouldSave = false
        }

        let address = [this.state.countryState, this.state.city, this.state.address]
        if(this.state.birthDate){
            birthDate = createDateFromStringBR(this.state.birthDate)
        }else {
            this.createNotification('warning', 'Escolha a data de nascimento', 'Campos faltando')
            shouldSave = false
        }
        if(shouldSave){
            let alteredTeacher = {
                name: this.state.name,
                cpf: this.state.cpf,
                cellPhone: this.state.cellPhone,
                birthDate: birthDate,
                status: this.state.status,
                address,
                operationalArea: this.state.operationalArea,
                instruments: this.state.instruments
            }
            this.props.startPatchTeacherById(this.props.teacher._id, alteredTeacher)
        }
    }

    render () {
        return (
            <div>
                <div style={styles.superContainer}>
                <h2 style={styles.title}>Professor</h2>
                <div style={styles.formsContainer}>
                    <div style={styles.formsLeftContainer}>
                        
                        <input style={styles.input} placeholder="Nome" value={this.state.name} onChange={this.onNameChange} type="tel"/>
                        <InputMask mask="999.999.999-99" style={styles.input} placeholder="CPF" value={this.state.cpf} onChange={this.onCpfChange} type="text"/>
                        <InputMask mask="(99) 99999-9999" style={styles.input} placeholder="Celular" value={this.state.cellPhone} onChange={this.onCellPhoneChange} type="text"/>
                        <InputMask mask="99/99/9999" style={styles.input} placeholder="Data de Nascimento" value={this.state.birthDate} onChange={this.onBirthDateChange} type="text"/>
                        <select style={styles.select} name="user-status" id="user-status" placeholder="Status" defaultValue={this.state.status ? this.state.status : ""} onChange={this.onStatusChange}>
                            <option value="" disabled hidden>Status</option>
                            <option value="pendente">Pendente</option>
                            <option value="ativo">Ativo</option>
                            <option value="inativo">Inativo</option>
                        </select>
                    </div>
                    <div style={styles.formsRightContainer}>
                        <select style={styles.select} name="estados-brasil" defaultValue={this.state.countryState ? this.state.countryState : "UF"} onChange={this.onUFChange}>
                            <option value="UF" disabled hidden>Estado(UF)</option>
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
                        <input style={styles.input} placeholder="Cidade" value={this.state.city} type="text" onChange={this.onCityChange}/>
                        <input style={styles.input} placeholder="Endereço" value={this.state.address} type="text" onChange={this.onAddresChange}/>
                        <input style={styles.input} placeholder="Área Operacional" value={this.state.operationalArea} type="text" onChange={this.onOperationalAreaChange}/>
                    </div>
                    <div style={styles.buttonsContainer}>
                        <div style={styles.buttonsFirstLine}>
                            <button id="violao" onClick={() => this.selectInstrument('violao')} style={this.state.violao ? styles.buttonSelected : styles.button}> Violão </button>
                            <button id="guitarra" onClick={() => this.selectInstrument('guitarra')} style={this.state.guitarra ? styles.buttonSelected : styles.button}>Guitarra</button>
                            <button id="baixo" onClick={() => this.selectInstrument('baixo')} style={this.state.baixo ? styles.buttonSelected : styles.button}>Baixo</button>
                        </div>
                        <div style={styles.buttonsSecondLine}>
                            <button id="teclado" onClick={() => this.selectInstrument('teclado')} style={this.state.teclado ? styles.buttonSelected : styles.button}>Teclado</button>
                            <button id="ukulele" onClick={() => this.selectInstrument('ukulele')} style={this.state.ukulele ? styles.buttonSelected : styles.button}>Ukulele</button>
                        </div>
                    </div>
                </div>
                <button style={styles.saveButton} onClick={this.prepareToSave}>Salvar</button>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    teacher: state.teachers.find((teacher) => teacher._id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    startPatchTeacherById: (id, body) => dispatch(startPatchTeacherById(id, body))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(EditTeacherPage);

const styles = {
    formsContainer: {
        height: '600px',
        position: 'absolute',
        margin: 'auto',
        top: '50px',
        left: '150px',
        width: '1000px',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
    formsLeftContainer: {
        height: '400px',
        position: 'absolute',
        margin: 'auto',
        top: '40px',
        left: '50px',
        width: '40%',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
    formsRightContainer: {
        height: '400px',
        position: 'absolute',
        margin: 'auto',
        top: '40px',
        right: '50px',
        width: '40%',
        backgroundColor: 'white',
        borderRadius: '10px',
    },

    title: {
        fontStyle: 'italic',
        fontSize: '30px',
        position: 'absolute',
        top: '0px',
        left: '200px',
        fontWeight: '900',
        zIndex: '1'
    },

    input: {
        border: 'none',
        height: '50px',
        width: '350px',
        position: 'relative',
        backgroundColor: '#FBFBFB',
        borderRadius: '10px',
        display: 'block',
        fontWight: 'lighter',
        fontSize: '14px',
        paddingLeft: '20px',
        marginBottom: '20px'
    },

    select: {
        border: 'none',
        fontWight: 'lighter',
        fontSize: '14px',
        height: '50px',
        marginBottom: '20px'
    },

    buttonsContainer: {
        height: '100px',
        width: '50%',
        backgroundColor: 'white',
        bottom: '80px',
        left: '25%',
        position: 'absolute',
    },

    buttonsFirstLine: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '15%',
        paddingRight: '15%',
        height: '30px',
        marginBottom: '20px'
    },
    buttonsSecondLine: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '30%',
        paddingRight: '30%',
    },
    button: {
        height: '30px',
        width: '80px',
        borderRadius: '10px',
        backgroundColor: '#FBFBFB',
        fontSize: '15px',
        border: 'none'
    },
    buttonSelected: {
        height: '30px',
        width: '80px',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: '#EC8328',
        fontSize: '15px',
        border: 'none'
    },
    saveButton: {
        height: '70px',
        width: '300px',
        borderRadius: '10px',
        backgroundColor: '#8812BF',
        border: 'none',
        color: 'white',
        position: 'absolute',
        zIndex: '5',
        top: '615px',
        left: '500px',
        fontSize: '30px',
        fontWeight: '900',
        fontStyle: 'italic'
    },
    superContainer: {
        position: 'relative',
        color: 'black',
        height: '700px',
        width: '100%',
    }
}