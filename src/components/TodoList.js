import { useSelector } from "react-redux";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

function TodoList() {
    const todoList = useSelector(state => state.todoList);

    return (
        <>
            <h1>Todo List</h1>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </>
    );
}

export default TodoList;