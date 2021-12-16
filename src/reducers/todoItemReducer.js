import { ADD_TODO_ITEM, UPDATE_TODO_ITEM, REMOVE_TODO_ITEM, INIT_TODO_LIST } from "../constants/constants"

const todoItemReducer = (state = { todoList: [] }, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {todoList: [ ...state.todoList, action.payload ] };
        case UPDATE_TODO_ITEM:
            return { todoList: state.todoList.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload;
                }
                return item;
            })};
        case REMOVE_TODO_ITEM:
            return { todoList: state.todoList.filter((item) =>
                item.id !== action.payload
            )};
        case INIT_TODO_LIST:
            return { todoList: action.payload };
        default:
            return state;
    }
};

export default todoItemReducer;