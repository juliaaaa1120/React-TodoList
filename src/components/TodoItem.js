import { useDispatch } from "react-redux";
import { UPDATE_STATUS, REMOVE_TODO_ITEM } from "../constants/constants";
import { updateStatus, removeTodo } from "../apis/todos";

function TodoItem(props) {
    const dispatch = useDispatch();

    function toggleTodoItem() {
        updateStatus({id: props.todoItem.id, done: !props.todoItem.done}).then(() => {
            dispatch({ type: UPDATE_STATUS, payload: props.todoItem });
        });
    }

    function removeTodoItem() {
        removeTodo(props.todoItem.id).then(() => {
            dispatch({ type: REMOVE_TODO_ITEM, payload: props.todoItem.id });
        });
    }

    return (
        <div className="todo-item">
            <span onClick={toggleTodoItem}>
                <p className={
                props.todoItem.done ? "line-through" : ""
            }>{props.todoItem.text}</p>
            </span>
            <button id="delete" onClick={removeTodoItem}>x</button>
        </div>
    );
}

export default TodoItem;