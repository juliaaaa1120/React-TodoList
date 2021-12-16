import TodoItem from "./TodoItem";

function TodoGroup(props) {
    return (
        <div className="todo-group">
            {
                props.todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;