import TodoItem from "./TodoItem";

function TodoGroup(props) {

    return (
        <div className="todoGroup">
            {
                props.todoList.map((item) => (
                    <TodoItem item={item}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;