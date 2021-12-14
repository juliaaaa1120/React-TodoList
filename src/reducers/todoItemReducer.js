import { ADD_TODOITEM } from "../constants/constants"

const initState = { todoList: [] };

const todoItemReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TODOITEM:
            return { ...state, todoList: [ ...state.todoList, action.payload ] };
        default:
            return state;
    }
};

export default todoItemReducer;