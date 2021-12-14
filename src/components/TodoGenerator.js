import { useState } from "react";

function TodoGenerator(props) {
    const [todoItem, setTodoItem] = useState("");

    function addTodo() {
        if (todoItem.trim() != "") {
            props.updateList(todoItem.trim());
            setTodoItem("");
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