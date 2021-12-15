import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INIT_TODO_LIST } from "../constants/constants";
import { getTodos } from "../apis/todos";

function TodoList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch({type: INIT_TODO_LIST, payload: response.data});
        });
    });

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    );
}

export default TodoList;