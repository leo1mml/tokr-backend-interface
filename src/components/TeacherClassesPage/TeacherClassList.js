import React from 'react'
import ClassTeacherListItem from './ClassTeacherListItem'
import TeacherClassesListFilters from './TeacherClassesListFilters'

export default (props) => (
    <div className="user-list-container">
        <TeacherClassesListFilters/>
        <div className="user-list">
            {props.classes.map((lecture) => {
                return (
                    <div key={lecture._id + "div"} onClick={() => props.clickedClass(lecture)}>
                        <ClassTeacherListItem key={lecture._id} {...lecture}/>
                    </div>
                )
            })}
        </div>
    </div>
)