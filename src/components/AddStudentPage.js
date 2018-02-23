import React from 'react'
import { connect } from 'react-redux';
import {startAddStudent} from '../actions/students'
import StudentForm from './StudentForm'

export class AddStudentpage extends React.Component{

    goToStudentsPage = () => {
        this.props.history.push("/")
    }

    onSubmit = (student) => {
        this.props.startAddStudent()
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <h1 className="list-title">Adicionar Aluno</h1>
                <div>
                    <StudentForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddStudent: (student) => dispatch(startAddStudent(student))
  });
  
export default connect(undefined, mapDispatchToProps)(AddStudentpage);

