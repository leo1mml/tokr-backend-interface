import React from 'react'
import { connect } from 'react-redux';
import {startFetchTeachers} from '../../actions/teachers'
import {setStatusFilter} from '../../actions/filters'
import TeacherListItem from './TeacherListItem'
import TeachersListFilters from './TeachersListFilters'
import selectTeachers from '../../selectors/users'
import TeacherListItemDetail from './TeacherListItemDetail';

export class TeachersList extends React.Component{

    state = {
        selectedTeacher: undefined,
        selectedStatus: 'pendente'
    }

    componentWillMount(){
        this.props.startFetchTeachers()
    }

    clickedUser = (selectedTeacher) => {
        this.setState(() => ({selectedTeacher}))
    }

    clickedStatus = (id) => {
        let pendentButton = document.getElementById('pendente')
        let activeButton = document.getElementById('ativo')
        let inactiveButton = document.getElementById('inativo')
        console.log(this.state);

        //Handle state of selected status
        if(this.state.selectedStatus === id){
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
    teachers: selectTeachers(state.teachers, state.filters.textTeacher,  state.filters.teacherStatus)
})

const mapDispatchToProps = (dispatch) => ({
    startFetchTeachers: () => dispatch(startFetchTeachers()),
    setStatusFilter: (text) => dispatch(setStatusFilter(undefined, text))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(TeachersList);

const styles = {
    statusButtonsContainer: {
        position: 'absolute',
        right: '150px',
        top: '650px',
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