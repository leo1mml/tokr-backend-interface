// Filters Reducer

const filtersReducerDefaultState = {
    textStudent: '',
    textTeacher: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
          return {
            ...state,
              textStudent: action.textStudent,
              textTeacher: action.textTeacher
          };
        default:
          return state;
      }
}