import { useState } from "react";

function TodoGenerator(props) {
    const [todo, setTodo] = useState("");

    function addTodo() {
        if (document.getElementById("newTodo").value.trim() != "") {
            props.updateList(document.getElementById("newTodo").value);
            document.getElementById("newTodo").value = "";
        }
    }

    return (
        <div className="todoGenerator">
            <input id="newTodo" type="text"></input>
            <button type="submit" onClick={addTodo}>add</button>
        </div>
    );
}

export default TodoGenerator;