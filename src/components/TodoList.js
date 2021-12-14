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
            <h1>Todo List</h1>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator updateList={updateTodoList}></TodoGenerator>
        </>
    );
}

export default TodoList;