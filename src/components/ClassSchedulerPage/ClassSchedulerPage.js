import React from 'react'
import { connect } from 'react-redux';
import selectStudents from '../../selectors/students'
import selectTeachers from '../../selectors/teachers'
import {startFetchStudents} from '../../actions/students'
import {startFetchTeachers} from '../../actions/teachers'
import {ProgressSpinner} from 'primereact/components/progressspinner/ProgressSpinner';


class ClassSchedulerPage extends React.Component {



    render() {
        // if(!this.props.students || !this.props.teachers) {
        //     return (
        //         <div className="loading-spinner">
        //             <ProgressSpinner/>
        //         </div>
        //     )
        // }
        return (
            <div className="major-container">
                <div className="sub-container">
                    <div>
                        <p>Professores</p>
                        <div className="sm-list-container">

                        </div>
                    </div>

                </div>
                <div className="sub-container">
                    <div className="classes-input-container">

                    </div>

                </div>
                <div className="sub-container">
                    <p>Alunos</p>
                    <div className="sm-list-container">

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    students: selectStudents(state.students, state.filters)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents()),
    startFetchTeachers: () => dispatch(startFetchTeachers())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ClassSchedulerPage);