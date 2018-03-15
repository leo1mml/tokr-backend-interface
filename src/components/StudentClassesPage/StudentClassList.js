import React from 'react'
import ClassStudentListItem from './ClassStudentListItem'
import StudentClassesListFilters from './StudentClassesListFilters'

export default (props) => (
    <div className="user-list-container">
        <StudentClassesListFilters/>
        <div className="user-list">
            {props.classes.map((lecture) => {
                return (
                    <div key={lecture._id + "div"} onClick={() => props.clickedClass(lecture)}>
                        <ClassStudentListItem key={lecture._id} {...lecture}/>
                    </div>
                )
            })}
        </div>
    </div>
)