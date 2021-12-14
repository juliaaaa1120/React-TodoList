import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODOITEM } from "../constants/constants";

function TodoGenerator() {
    const [id, setId] = useState(0);
    const [content, setContent] = useState("");
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();

    function addTodoItem() {
        if (content.trim() != "") {
            let todoItem = { id: id, text: content, done: status };
            dispatch({ type: ADD_TODOITEM, payload: todoItem });
            setId(id + 1);
            setContent("");
        }
    }

    return (
        <div className="todoGenerator">
            <input value={content} type="text" onChange={event => setContent(event.target.value)}></input>
            <button type="submit" onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;