// Filters Reducer

const filtersReducerDefaultState = {
    textStudent: '',
    textTeacher: '',
    studentStatus: '',
    teacherStatus: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
          return {
            ...state,
              textStudent: action.textStudent,
              textTeacher: action.textTeacher
          };
        case 'SET_STATUS_FILTER':
          return {
            ...state,
            studentStatus: action.studentStatus,
            teacherStatus: action.teacherStatus
          }
        default:
          return state;
      }
}