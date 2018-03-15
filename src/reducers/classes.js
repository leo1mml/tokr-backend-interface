const classesReducerDefaultState = []

export default (state = classesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_CLASS":
            return [
                ...state,
                action.class
            ]
        case "SET_CLASSES":
        {
            return action.classes
        }
            
        default:
            return state;
    }
}