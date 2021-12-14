import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO, RESET_INPUT } from "../constants/constants";

function TodoGenerator(props) {
    const [todoItem, setTodoItem] = useState("");
    const dispatch = useDispatch();

    function addTodo() {
        if (todoItem.trim() != "") {
            dispatch({ type: ADD_TODO, payload: todoItem.trim() });
            // setTodoItem("");
        }
    }

    return (
        <div className="todoGenerator">
            <input value={todoItem} type="text" onChange={event => setTodoItem(event.target.value)}></input>
            <button type="submit" onClick={addTodo}>add</button>
        </div>
    );
}

export default TodoGenerator;