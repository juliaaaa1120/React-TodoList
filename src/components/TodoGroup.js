import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {
    const todoList = useSelector(state => state.todoList);

    return (
        <div className="todo-group">
            {
                todoList.length !== 0 ? 
                todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem}></TodoItem>
                )) : <p>No todo items. Please create one!</p>
            }
        </div>
    );
}

export default TodoGroup;