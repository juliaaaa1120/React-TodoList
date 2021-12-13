import { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    function updateTodoList(todoItem) {
        setTodoList([...todoList, todoItem]);
    }

    return (
        <>
            <p>Todo List</p>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator updateList={updateTodoList}></TodoGenerator>
        </>
    );
}

export default TodoList;