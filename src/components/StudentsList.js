import React from 'react'
import { connect } from 'react-redux';
import {startFetchStudents} from '../actions/students'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectExpenses from '../selectors/students'
import '../styles/tables/commonTable.css'
import '../styles/titles/list-titles.css'
import '../styles/top-widget-container/top-widget.css'
import '../styles/tables/table-container.css'

export class StudentsList extends React.Component{

    componentWillMount(){
        this.props.startFetchStudents()
    }

    render() {
        return (
            <div className="list-container">
                <h1 className="list-title">Alunos Tokr</h1>
                <div className="list-header">
                    <StudentsListFilters/>
                    <button className="add-button">Adicionar Aluno</button>
                </div>
                <div className="table-container">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>E-mail</th>
                                <th>Endereço</th>
                                <th>Instrumentos</th>
                                <th>Estilos Musicais</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.students.map((student) => {
                                return <StudentListItem key={student._id} {...student} />;
                            })
                        }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    students: selectExpenses(state.students, state.filters)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
  