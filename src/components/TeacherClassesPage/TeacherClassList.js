import React from 'react'
import ClassTeacherListItem from './ClassTeacherListItem'
import TeacherClassesListFilters from './TeacherClassesListFilters'

export default (props) => {
    let state = {
        selectedIndex: 0
    }

    let setSelectIndex = (index) => {
        this.selectedIndex = index
    }



    return (
        <div className="user-list-container">
            <TeacherClassesListFilters/>
            <div className="user-list">
                {props.classes.map((lecture, index) => {
                    return (
                        <div key={lecture._id + "div"} onClick={() => props.clickedClass(lecture)}>
                            <ClassTeacherListItem 
                                key={lecture._id} 
                                {...lecture} 
                                studentName={props.students.find((student) => lecture._studentId === student._id).name} 
                                isSelected={this.state.selectedIndex===index} 
                                onClick={this.setSelectIndex(index)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}