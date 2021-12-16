import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INIT_TODO_LIST } from "../constants/constants";
import { getTodos } from "../apis/todos";
import { ScheduleOutlined } from "@ant-design/icons"

function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList);

    useEffect(() => {
        getTodos().then((response) => {
            dispatch({type: INIT_TODO_LIST, payload: response.data});
        });
    });

    return (
        <div className="todo-list">
            <h1><ScheduleOutlined />    Todo List</h1>
            <TodoGenerator></TodoGenerator>
            {
                todoList.length !== 0 ? <TodoGroup todoList={todoList}></TodoGroup> : <p>No todo items. Please create one!</p>
            }
        </div>
    );
}

export default TodoList;