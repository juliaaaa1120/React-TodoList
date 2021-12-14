import { ADD_TODOITEM, UPDATE_STATUS, REMOVE_TODOITEM } from "../constants/constants"

const todoItemReducer = (state = { todoList: [] }, action) => {
    switch(action.type) {
        case ADD_TODOITEM:
            return { ...state, todoList: [ ...state.todoList, action.payload ] };
        case UPDATE_STATUS:

            return { ...state, todoList: state.todoList.map((item) => {
                if (item.id == action.payload) {
                    item.done = !item.done;
                }
                return item;
            })};
        case REMOVE_TODOITEM:
            return { ...state, todoList: state.todoList.filter((item) =>
                item.id !== action.payload
            )};
        default:
            return state;
    }
};

export default todoItemReducer;