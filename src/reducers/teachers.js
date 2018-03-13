const teachersReducerDefaultState = []

export default (state = teachersReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TEACHER":
            return [
                ...state,
                action.teacher
            ]
        case "SET_TEACHERS":
            return action.teachers
        case "SET_TEACHER":
            return action.teacher
    
        default:
            return state;
    }
}