import React from 'react'
import SmallTeacherListItem from './SmallTeacherListItem'
import SmallStudentListItem from './SmallStudentListItem'
import {Calendar} from 'primereact/components/calendar/Calendar';
import { connect } from 'react-redux';
import {startAddClass} from '../../actions/classes'


class ClassScheduleWidget extends React.Component {
    state = {
        date: new Date(),
        instrument: 'guitarra'
    }

    prepareToAddClass = () => {
        if(!this.props.student || !this.props.teacher || this.state.instrument === ''){
            console.log('nao foi nao vei', this.state);
            console.log(this.props.student);
            console.log(this.props.teacher);
            return
        }

        let lecture = {
            date: this.state.date,
            _studentId: this.props.student? this.props.student._id : '',
            _teacherId: this.props.teacher? this.props.teacher._id : '',
            instrument: this.state.instrument
        }
        this.props.startAddClass(lecture)
    }

    onInstrumentSelect = (e) => {
        let instrument = e.target.value
        this.setState(() => ({instrument}))
    }

    render () {
        let br = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
            dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
            dayNamesMin: ["D", "S", "T", "QUA", "QUI", "SEX", "SAB"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
        };

        return (
            <div>
                <p className="selected-role-title">Professor Selecionado</p>
                <div>
                    {!!this.props.teacher ? <SmallTeacherListItem key={this.props.teacher._id} {...this.props.teacher}/> : 
                    <div className="sm-list-item-container">
                        <p className="warning-role-empty">Nenhum Professor Selecionado</p>
                    </div>
                    
                    }
                </div>
                <p className="selected-role-title">Aluno Selecionado</p>
                <div>
                    {!!this.props.student ? <SmallStudentListItem key={this.props.student._id} {...this.props.student}/> : 
                        <div className="sm-list-item-container">
                            <p className="warning-role-empty">Nenhum Aluno Selecionado</p>
                        </div>
                    }
                </div>
                <div className="date-picker-container">
                    <Calendar 
                        showTime={true} 
                        hourFormat="24" 
                        value={this.state.date} 
                        onChange={(e) => this.setState({date: e.value})}
                        dateFormat="dd/mm/yy"
                        locale={br}
                    ></Calendar>
                </div>
                <div>
                    <select className="instrument-selector" name="instrumentSelector" id="instrument" onChange={this.onInstrumentSelect}>
                        <option value="guitarra">Guitarra</option>
                        <option value="violao">Violão</option>
                        <option value="ukulele">Ukulele</option>
                        <option value="teclado">Teclado</option>
                        <option value="baixo">Baixo</option>
                    </select>
                </div>
                <button className="schedule-class-btn" onClick={this.prepareToAddClass}>Agendar</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddClass: (lecture) => dispatch(startAddClass(lecture))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ClassScheduleWidget);