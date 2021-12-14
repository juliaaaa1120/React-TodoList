import TodoItem from "./TodoItem";

function TodoGroup(props) {

    return (
        <div>
            {
                props.todoList.map((item) => (
                    <TodoItem item={item}></TodoItem>
                ))
            }
        </div>
    );
}

export default TodoGroup;