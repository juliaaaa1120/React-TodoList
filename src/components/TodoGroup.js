import TodoItem from "./TodoItem";

function TodoGroup(props) {
    return (
        <>
            {
                props.todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem}></TodoItem>
                ))
            }
        </>
    );
}

export default TodoGroup;