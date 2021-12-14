import { ADD_TODOITEM, UPDATE_STATUS } from "../constants/constants"

const initState = { todoList: [] };

const todoItemReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TODOITEM:
            return { ...state, todoList: [ ...state.todoList, action.payload ] };
        case UPDATE_STATUS:
            state.todoList.map((item) => {
                if (item.id == action.payload) {
                    item.done = !item.done;
                }
            });
            return { ...state, todoList: [ ...state.todoList ] };
        default:
            return state;
    }
};

export default todoItemReducer;