import React from 'react'
import { connect } from 'react-redux';
import {startFetchStudents} from '../../actions/students'
import {setStatusFilter} from '../../actions/filters'
import StudentListItem from './StudentListItem'
import StudentsListFilters from './StudentsListFilters'
import selectStudents from '../../selectors/users'
import StudentListItemDetail from './StudentListItemDetail';

export class StudentsList extends React.Component{

    state = {
        selectedStudent: undefined,
        selectedStatus: 'pendente'
    }

    componentWillMount(){
        this.props.startFetchStudents()
    }

    clickedUser = (selectedStudent) => {
        this.setState(() => ({selectedStudent}))
    }

    clickedStatus = (id) => {
        let pendentButton = document.getElementById('pendente')
        let activeButton = document.getElementById('ativo')
        let inactiveButton = document.getElementById('inativo')
        console.log(this.state);

        //Handle state of selected status
        if(this.props.studentFilter === id){
            this.props.setStatusFilter('')
        }else {
            this.props.setStatusFilter(id)
        }

        //handle underline indicator
        switch (id) {
            case 'pendente':
                pendentButton.style.textDecoration = pendentButton.style.textDecoration === "underline" ? "none" : "underline"
                activeButton.style.textDecoration = "none"
                inactiveButton.style.textDecoration = "none"
                break;
            case 'ativo':
                pendentButton.style.textDecoration = "none"
                activeButton.style.textDecoration = activeButton.style.textDecoration === "underline" ? "none" : "underline"
                inactiveButton.style.textDecoration = "none"
                break;
            case 'inativo':
                pendentButton.style.textDecoration = "none"
                activeButton.style.textDecoration = "none"
                inactiveButton.style.textDecoration = inactiveButton.style.textDecoration === "underline" ? "none" : "underline"
                break;
        
            default:
                break;
        }
    }

    render() {
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
                <div style={styles.statusButtonsContainer}>
                    <button id="pendente" style={styles.orangeBottomBtn} onClick={() => this.clickedStatus('pendente')}>Pendentes</button>
                    <button id="ativo" style={styles.purpleBottomBtn} onClick={() => this.clickedStatus('ativo')}>Ativos</button>
                    <button id="inativo" style={styles.redBottomBtn} onClick={() => this.clickedStatus('inativo')}>Inativos</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    studentFilter: state.filters.studentStatus,
    students: selectStudents(state.students, state.filters.textStudent, state.filters.studentStatus)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchStudents: () => dispatch(startFetchStudents()),
    setStatusFilter: (text) => dispatch(setStatusFilter(text))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);


const styles = {
    statusButtonsContainer: {
        position: 'absolute',
        marginLeft: '700px',
        marginTop: '70px',
        width: '402px',
        height: '70px',
        display: 'flex',
        borderRadius: '10px'
    },
    orangeBottomBtn : {
        width: '134px',
        border: 'none',
        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: '900',
        backgroundColor: '#F98726',
        color: 'white',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px'
    },
    purpleBottomBtn: {
        width: '134px',
        border: 'none',
        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: '900',
        backgroundColor: '#8812BF',
        color: 'white'
    },
    redBottomBtn: {
        width: '134px',
        border: 'none',
        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: '900',
        backgroundColor: '#BF1248',
        color: 'white',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px'
    }
}