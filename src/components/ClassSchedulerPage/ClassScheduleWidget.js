import React from 'react'
import SmallTeacherListItem from './SmallTeacherListItem'
import SmallStudentListItem from './SmallStudentListItem'

class ClassScheduleWidget extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <p>Professor Selecionado</p>
                <div>
                    {!!this.props.teacher ? <SmallTeacherListItem key={this.props.teacher._id} {...this.props.teacher}/> : 
                    <div className="sm-list-item-container">
                        <p className="warning-role-empty">Nenhum Professor Selecionado</p>
                    </div>
                    
                    }
                </div>
                <p>Aluno Selecionado</p>
                <div>
                    {!!this.props.student ? <SmallStudentListItem key={this.props.student._id} {...this.props.student}/> : 
                        <div className="sm-list-item-container">
                            <p className="warning-role-empty">Nenhum Professor Selecionado</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ClassScheduleWidget