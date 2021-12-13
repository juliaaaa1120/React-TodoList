import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoGroup(props) {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList(props.todoList);
    }, [props.todoList]);

    return (
        <div>
            {
                todoList.map((item) => (
                    <TodoItem item={item}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;