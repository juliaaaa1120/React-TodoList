import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODOITEM } from "../constants/constants";

function TodoGenerator() {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function addTodoItem() {
        if (content.trim() != "") {
            const todoItem = { id: uuidv4(), text: content, done: false };
            dispatch({ type: ADD_TODOITEM, payload: todoItem });
            setContent("");
        }
    }

    return (
        <div className="todo-generator">
            <input value={content} placeholder="please input todo item ..." type="text" onChange={event => setContent(event.target.value)}></input>
            <button type="submit" onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;