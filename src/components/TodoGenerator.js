import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO_ITEM } from "../constants/constants";
import { addTodo } from "../apis/todos";
import { Input, Button } from 'antd';

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
            <Input.Group compact>
                <Input style={{ width: 'calc(100% - 240px)', textAlign: "left"}} value={text} placeholder="Please input todo item ..." 
                onChange={e => setText(e.target.value)}></Input>
                {console.log({text})}
                <Button type="primary" size="large" onClick={addTodoItem}>Add</Button>
            </Input.Group>
        </div>
    );
}

export default TodoGenerator;