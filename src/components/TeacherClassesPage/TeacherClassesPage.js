import React from 'react'
import { connect } from 'react-redux';
import PhotoName from '../StudentClassesPage/PhotoName';
import TextComponent from '../StudentClassesPage/TextComponent'
import TeacherClassList from './TeacherClassList'
import {Rating} from 'primereact/components/rating/Rating';
import selectClasses from '../../selectors/classes'
import {startFetchClassesByTeacherId}  from '../../actions/classes'
import {startFetchStudents} from '../../actions/students'
import {startFetchTeachers} from '../../actions/teachers'
import ClassTeacherListItem from './ClassTeacherListItem'
import TeacherClassesListFilters from './TeacherClassesListFilters'

class TeacherClassesPage extends React.Component {

    state = {
        selectedClass: this.props.classes ? this.props.classes[0] : undefined
    }

    componentDidMount(nextProps) {
        if(this.props.teacher){
            this.props.startFetchClassesByTeacherId(this.props.teacher._id)
            this.props.startFetchStudents()
            this.props.startFetchTeachers()
        }
    }

    clickedClass = (selectedClass) => {
        this.setState(() => ({selectedClass}))
    }

    getStudentNameForClass = (lecture) => {

        const student = this.props.students.find((student) => lecture._studentId === student._id)
        if(student){
            return student.name
        }
        return ''
    }

    render () {
        return (
            <div className="page-container">
                <div className="left-container">
                    <div>
                        {
                            this.props.teacher?
                            (<PhotoName name={this.props.teacher.name} profilePhotoUrl={this.props.teacher.profilePhotoUrl}/>)
                            :
                            (<PhotoName name="Sem Aluno" profilePhotoUrl=""/>)
                        }
                        
                    </div>
                    <div>
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
                        <h3>Descrição da aula</h3>
                    {
                        this.state.selectedClass ? 
                        (
                            <div>
                                <div>
                                    <TextComponent text={this.state.selectedClass.description}/>
                                </div>
                            </div>
                        )
                                :
                        (
                            <div> 
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
                            <TeacherClassesListFilters/>
                            <div className="user-list">
                                {this.props.classes.map((lecture, index) => {
                                    return (
                                        <div key={lecture._id + "div"} onClick={() => this.clickedClass(lecture)}>
                                            <ClassTeacherListItem 
                                                key={lecture._id} 
                                                {...lecture} 
                                                studentName={this.getStudentNameForClass(lecture)}
                                                isSelected={this.state.selectedClass ? (this.state.selectedClass._id === lecture._id) : false}
                                                />
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
    teacher: state.teachers.find((teacher) => teacher._id === props.match.params.id),
    students: state.students
})

const mapDispatchToProps = (dispatch) => ({
    startFetchClassesByTeacherId: (id) => dispatch(startFetchClassesByTeacherId(id)),
    startFetchTeachers: () => dispatch(startFetchTeachers()),
    startFetchStudents: () => dispatch(startFetchStudents())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TeacherClassesPage);