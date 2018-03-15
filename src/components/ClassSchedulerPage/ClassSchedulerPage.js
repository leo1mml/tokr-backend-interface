import React from 'react'
import { connect } from 'react-redux';
import selectUsers from '../../selectors/users'
import {startFetchStudents} from '../../actions/students'
import {startFetchTeachers} from '../../actions/teachers'
import TeachersSearchBox from './TearchersSearchBox'
import StudentsSearchBox from './StudentsSearchBox'
import SmallTeacherListItem from './SmallTeacherListItem'
import ClassScheduleWidget from './ClassScheduleWidget'
import SmallStudentListItem from './SmallStudentListItem';


class ClassSchedulerPage extends React.Component {

    state = {
        selectedTeacher: undefined,
        selectedStudent: undefined
    }

    componentWillMount(){
        console.log(this.props);
        this.props.startFetchTeachers()
        this.props.startFetchStudents()
    }

    clickedTeacher = (selectedTeacher) => {
        this.setState(() => ({selectedTeacher}))
    }
    clickedStudent = (selectedStudent) => {
        this.setState(() => ({selectedStudent}))
    }

    render() {
        return (
            <div className="major-container">
                <div className="sub-container">
                    <div>
                        <p className="title-role">Professores</p>
                        <div className="sm-list-container">
                            <TeachersSearchBox/>
                            <div className="user-list-sm">
                                {this.props.teachers.map((teacher, index) => {
                                    return (
                                        <div key={teacher._id + "div"} onClick={() => this.clickedTeacher(teacher)}>
                                            <SmallTeacherListItem key={teacher._id} {...teacher}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sub-container">
                    <div className="classes-input-container">
                        <ClassScheduleWidget teacher={this.state.selectedTeacher} student={this.state.selectedStudent}/>
                    </div>

                </div>
                <div className="sub-container">
                    <p className="title-role">Alunos</p>
                    <div className="sm-list-container">
                        <StudentsSearchBox/>
                        <div className="user-list-sm">
                            {this.props.students.map((student, index) => {
                                return (
                                    <div key={student._id + "div"} onClick={() => this.clickedStudent(student)}>
                                        <SmallStudentListItem key={student._id} {...student}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        students: selectUsers(state.students, state.filters.textStudent),
        teachers: selectUsers(state.teachers, state.filters.textTeacher)
    }
}

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents()),
    startFetchTeachers: () => dispatch(startFetchTeachers())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ClassSchedulerPage);