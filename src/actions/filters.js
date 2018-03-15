// SET_TEXT_FILTER
export const setTextFilter = (textStudent = '', textTeacher = '', textClass = '') => ({
    type: 'SET_TEXT_FILTER',
    textStudent,
    textTeacher,
    textClass
});

export const setStatusFilter = (studentStatus = '', teacherStatus = '') => {
    console.log('studentStatus: ', studentStatus);
    console.log('teacherStatus: ', teacherStatus);
    return ({
        type: 'SET_STATUS_FILTER',
        studentStatus,
        teacherStatus
    })
}