import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {startFetchTeachers} from '../../actions/teachers'
import TeacherListItem from './TeacherListItem'
import TeachersListFilters from './TeachersListFilters'
import selectTeachers from '../../selectors/users'
import TeacherListItemDetail from './TeacherListItemDetail';
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';

export class TeachersList extends React.Component{

    state = {
        selectedTeacher: undefined
    }

    componentWillMount(){
        this.props.startFetchTeachers()
    }

    clickedUser = (selectedTeacher) => {
        this.setState(() => ({selectedTeacher}))
    }

    render() {
        if(this.props.teachers.length == 0){
            return (<ProgressSpinner/>)
        }

        return (
            <div className="major-list-container">
                <div className="user-list-container">
                    <TeachersListFilters/>
                    <div className="user-list">
                        {this.props.teachers.map((teacher) => {
                            return (
                                <div key={teacher._id + "div"} onClick={() => this.clickedUser(teacher)}>
                                    <TeacherListItem key={teacher._id} {...teacher}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="user-list-item-detail-container">
                    <TeacherListItemDetail teacher={this.state.selectedTeacher}/>
                </div>
                <button className="new-user-button">Novo Professor</button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    teachers: selectTeachers(state.teachers, state.filters.textTeacher)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchTeachers: () => dispatch(startFetchTeachers())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(TeachersList);