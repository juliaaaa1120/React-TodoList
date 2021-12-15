import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {
    const todoList = useSelector(state => state.todoList);

    return (
        <div className="todo-group">
            {
                todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;