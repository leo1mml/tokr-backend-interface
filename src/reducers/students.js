const studentsReducerDefaultState = []

export default (state = studentsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [
                ...state,
                action.student
            ]
        case "SET_STUDENTS": {
            return action.students
        }
    
        default:
            return state;
    }
}