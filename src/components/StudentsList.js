import React from 'react'
import { connect } from 'react-redux';
import {startFetchStudents} from '../actions/students'
import StudentListItem from './StudentListItem'
import '../styles/tables/commonTable.css'
import '../styles/titles/list-titles.css'
import '../styles/top-widget-container/top-widget.css'

export class StudentsList extends React.Component{

    componentWillMount(){
        this.props.startFetchStudents()
    }

    render() {
        return (
            <div className="list-container">
                <h1 className="list-title">Alunos Tokr</h1>
                <div className="list-header">
                    <p>
                        Buscar: 
                        <input type="text"/>
                    </p>
                    <button className="add-button">Adicionar Aluno</button>
                </div>
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
        )
    }
}

const mapStateToProps = (state, props) => ({
    students: state.students
})

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
  