import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO_ITEM } from "../constants/constants";
import { addTodo } from "../apis/todos";

function TodoGenerator() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function addTodoItem() {
        if (text.trim() !== "") {
            addTodo({text, done: false}).then((response) => {
                dispatch({ type: ADD_TODO_ITEM, payload: response.data });
            });
            setText("");
        }
    }

    return (
        <div className="todo-generator">
            <input value={text} placeholder="please input todo item ..." type="text" onChange={event => setText(event.target.value)}></input>
            <button type="submit" onClick={addTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;