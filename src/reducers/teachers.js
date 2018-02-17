const teachersReducerDefaultState = []

export default (state = teachersReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TEACHER":
            return [
                ...state,
                action.teacher
            ]
    
        default:
            return state;
    }
}