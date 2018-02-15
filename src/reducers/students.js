const studentsReducerDefaultState = []

export default (state = studentsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [
                ...state,
                action.student
            ]
            break;
    
        default:
            return state;
    }
}