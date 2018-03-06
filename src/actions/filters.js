// SET_TEXT_FILTER
export const setTextFilter = (textStudent = '', textTeacher = '') => ({
    type: 'SET_TEXT_FILTER',
    textStudent,
    textTeacher
});