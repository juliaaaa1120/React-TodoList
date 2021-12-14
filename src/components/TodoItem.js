import { useDispatch } from "react-redux";
import { UPDATE_STATUS } from "../constants/constants";

function TodoItem(props) {
    const dispatch = useDispatch();

    function updateStatus() {
        dispatch({ type: UPDATE_STATUS, payload: props.item.id });
    }

    return (
        <div className="todoItem">
            <p className={
                props.item.done == true ? "lineThrough" : ""
            } onClick={updateStatus}>
                {props.item.text}
            </p>
        </div>
    );
}

export default TodoItem;