import { ADD_TODO_ITEM, UPDATE_STATUS, REMOVE_TODO_ITEM } from "../constants/constants"

const todoItemReducer = (state = { todoList: [] }, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {todoList: [ ...state.todoList, action.payload ] };
        case UPDATE_STATUS:
            return {todoList: state.todoList.map((item) => {
                if (item.id === action.payload) {
                    item.done = !item.done;
                }
                return item;
            })};
        case REMOVE_TODO_ITEM:
            return {todoList: state.todoList.filter((item) =>
                item.id !== action.payload
            )};
        default:
            return state;
    }
};

export default todoItemReducer;