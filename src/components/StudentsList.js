import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {startFetchStudents} from '../actions/students'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectExpenses from '../selectors/students'
import {Paginator} from 'primereact/components/paginator/Paginator';
import '../styles/tables/commonTable.css'
import '../styles/titles/list-titles.css'
import '../styles/top-widget-container/top-widget.css'
import '../styles/tables/table-container.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

export class StudentsList extends React.Component{

    constructor() {
        super();
        this.state = {first: 0, rows: 10};
    }

    onPageChange = (event) => {
        this.setState({
            first: event.first,
            rows: event.rows
        })
    }

    componentWillMount(){
        this.props.startFetchStudents()
    }

    render() {
        return (
            <div className="list-container">
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
  