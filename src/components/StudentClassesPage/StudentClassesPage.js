import React from 'react'
import { connect } from 'react-redux';
import PhotoName from './PhotoName';
import TextComponent from './TextComponent'
import StudentClassList from './StudentClassList'
import {Rating} from 'primereact/components/rating/Rating';
import selectClasses from '../../selectors/classes'
import {startFetchClassesByStudentId}  from '../../actions/classes'
import {startFetchStudents} from '../../actions/students'
import {startFetchTeachers} from '../../actions/teachers'
import StudentClassesListFilters from './StudentClassesListFilters'
import ClassStudentListItem from './ClassStudentListItem'

class StudentClassesPage extends React.Component {

    state = {
        selectedClass: undefined
    }

    componentDidMount(nextProps) {
        if(this.props.student){
            console.log(this.props.student._id);
            this.props.startFetchClassesByStudentId(this.props.student._id)
            this.props.startFetchStudents()
            this.props.startFetchTeachers()
        }
    }

    clickedClass = (selectedClass) => {
        this.setState(() => ({selectedClass}))
    }

    getTeacherNameForClass = (lecture) => {

        const teacher = this.props.teachers.find((teacher) => lecture._teacherId === teacher._id)
        if(teacher){
            return teacher.name
        }
        return ''
    }

    render () {
        return (
            <div className="page-container">
                <div className="left-container">
                    <div>
                        {
                            this.props.student?
                            (<PhotoName name={this.props.student.name} profilePhotoUrl={this.props.student.profilePhotoUrl}/>)
                            :
                            (<PhotoName name="Sem Aluno" profilePhotoUrl=""/>)
                        }
                        
                    </div>
                    <div>
                        <h3>Feedback do aluno</h3>
                        {
                            this.state.selectedClass ? 
                            (
                                <div>
                                    <div className="rating-container">
                                        <Rating value={this.state.selectedClass.teacherGrade} cancel={false}/>
                                        <p className="grade">{this.state.selectedClass.teacherGrade}</p>
                                    </div>
                                    <div>
                                        <TextComponent text={this.state.selectedClass.studentNote}/>
                                    </div>
                                </div>
                            )
                                 :
                            (
                                <div>
                                    <div className="rating-container">
                                        <Rating value={0} cancel={false}/>
                                        <p className="grade">?</p>
                                    </div>
                                    <div>
                                        <TextComponent text="Selecione Uma Aula"/>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                        <h3>Feedback do professor</h3>
                        {
                            this.state.selectedClass ? 
                            (
                                <div>
                                    <div className="rating-container">
                                        <Rating value={this.state.selectedClass.studentGrade} cancel={false}/>
                                        <p className="grade">{this.state.selectedClass.studentGrade}</p>
                                    </div>
                                    <div>
                                        <TextComponent text={this.state.selectedClass.teacherNote}/>
                                    </div>
                                </div>
                            )
                                 :
                            (
                                <div>
                                    <div className="rating-container">
                                        <Rating value={0} cancel={false}/>
                                        <p className="grade">?</p>
                                    </div>
                                    <div>
                                        <TextComponent text="Selecione Uma Aula"/>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                <div className="right-container">
                    <div>
                        <div className="user-list-container">
                            <StudentClassesListFilters/>
                            <div className="user-list">
                                {this.props.classes.map((lecture) => {
                                    return (
                                        <div key={lecture._id + "div"} onClick={() => this.clickedClass(lecture)}>
                                            <ClassStudentListItem key={lecture._id} {...lecture} teacherName={this.getTeacherNameForClass(lecture)}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )

    }
}


const mapStateToProps = (state, props) => ({
    classes: selectClasses(state.classes, state.filters.textClass, state.teachers, state.students),
    student: state.students.find((student) => student._id === props.match.params.id),
    teachers: state.teachers
})

const mapDispatchToProps = (dispatch) => ({
    startFetchClassesByStudentId: (id) => dispatch(startFetchClassesByStudentId(id)),
    startFetchTeachers: () => dispatch(startFetchTeachers()),
    startFetchStudents: () => dispatch(startFetchStudents())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentClassesPage);