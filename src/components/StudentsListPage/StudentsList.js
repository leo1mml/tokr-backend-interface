import React from 'react'
import { connect } from 'react-redux';
import {startFetchStudents} from '../../actions/students'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectExpenses from '../../selectors/users'
import StudentListItemDetail from './StudentListItemDetail';
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';

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
                <button className="new-user-button">Aulas</button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    students: selectExpenses(state.students, state.filters.textStudent)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);