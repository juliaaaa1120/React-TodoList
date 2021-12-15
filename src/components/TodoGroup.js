import TodoItem from "./TodoItem";

function TodoGroup(props) {

    return (
        <div className="todo-group">
            {
                props.todoList.map((item) => (
                    <TodoItem key={item.id} item={item}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;