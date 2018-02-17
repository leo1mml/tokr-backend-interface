const classesReducerDefaultState = []

export default (state = classesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_CLASS":
            return [
                ...state,
                action.class
            ]
        default:
            return state;
    }
}