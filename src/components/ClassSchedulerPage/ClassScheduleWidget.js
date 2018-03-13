import React from 'react'
import SmallTeacherListItem from './SmallTeacherListItem'
import SmallStudentListItem from './SmallStudentListItem'
import {Calendar} from 'primereact/components/calendar/Calendar';


class ClassScheduleWidget extends React.Component {
    state = {
        date: new Date()
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
                <button className="schedule-class-btn">Agendar</button>
            </div>
        )
    }
}

export default ClassScheduleWidget