import React from 'react'
import { connect } from 'react-redux';
import {startFetchStudents} from '../actions/students'
import StudentListItem from './StudentListItem'

export class StudentsList extends React.Component{

    componentWillMount(){
        this.props.startFetchStudents()
    }

    render() {
        return (
            <div>
                <h1>Lista de alunos</h1>
                {console.log('ESTAADOOOOO',this.props)}
                {
                    this.props.students.length === 0 ? (
                        <p>Sem alunos</p>
                    ) : (
                        this.props.students.map((student) => {
                            return <StudentListItem key={student._id} {...student} />;
                        })
                    )
                }
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
  