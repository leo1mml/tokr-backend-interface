import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {startFetchStudents} from '../../actions/students'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectExpenses from '../../selectors/students'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';
import StudentListItemDetail from './StudentListItemDetail';

export class StudentsList extends React.Component{

    state = {
        selectedStudent: undefined
    }

    componentWillMount(){
        this.props.startFetchStudents()
    }

    clickedUser = (selectedStudent) => {
        this.setState(() => ({selectedStudent}))
    }

    render() {
        if(!this.props.students){
            return (<ProgressSpinner/>)
        }

        return (
            <div className="major-list-container">
                <div className="user-list-container">
                    <StudentsListFilters/>
                    <div className="user-list">
                        {this.props.students.map((student) => {
                            return (
                                <div key={student._id + "div"} onClick={() => this.clickedUser(student)}>
                                    <StudentListItem key={student._id} {...student}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="user-list-item-detail-container">
                    <StudentListItemDetail student={this.state.selectedStudent}/>
                </div>
                <button className="new-user-button">Novo Aluno</button>
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
  

{/* <div className="list-container">
                <h1 className="list-title">Alunos Tokr</h1>
                <div className="list-header">
                    <StudentsListFilters/>
                    <Link to="/addStudent"><button className="add-button">Adicionar Aluno</button></Link>
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
                            this.props.students.slice(this.state.first, this.state.first + this.state.rows).map((student) => {
                                return <StudentListItem key={student._id} {...student} />;
                            })
                        }
                        </tbody>

                    </table>
                    <Paginator first={this.state.first} rows={this.state.rows} totalRecords={this.props.students.length} onPageChange={this.onPageChange}></Paginator>
                </div>
                
            </div> */}