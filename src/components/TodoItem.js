import { useDispatch } from "react-redux";
import { UPDATE_STATUS, REMOVE_TODOITEM } from "../constants/constants";

function TodoItem(props) {
    const dispatch = useDispatch();

    function updateStatus() {
        dispatch({ type: UPDATE_STATUS, payload: props.item.id });
    }

    function removeTodoItem() {
        dispatch({ type: REMOVE_TODOITEM, payload: props.item.id });
    }

    return (
        <div className="todo-item">
            <span onClick={updateStatus}>
                <p className={
                props.item.done ? "line-through" : ""
            }>{props.item.text}</p>
            </span>
            <button id="delete" onClick={removeTodoItem}>x</button>
        </div>
    );
}

export default TodoItem;