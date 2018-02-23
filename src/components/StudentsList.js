import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {startFetchStudents} from '../actions/students'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectExpenses from '../selectors/students'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';

export class StudentsList extends React.Component{

    componentWillMount(){
        this.props.startFetchStudents()
    }

    hideLoupe = () => {
        document.getElementById("loupe").style.visibility="hidden"
    }

    showLoupe = () => {
        document.getElementById("loupe").style.visibility="visible"
    }

    render() {
        if(!this.props.students){
            return (<ProgressSpinner/>)
        }

        return (
            <div className="user-list-container">
                <div className="user-list-search-box">
                    <img id="loupe" className="search-icon" src={require("../assets/icons/lupa.png")} alt="icone de pesquisa"/>
                    <input type="text" className="search-input" onBlur={this.showLoupe}
                        onFocus={this.hideLoupe}/>
                </div>
                <div className="user-list">
                    {this.props.students.map((student) => {
                        return (
                            <StudentListItem key={student._id} {...student}/>
                        )
                    })}
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