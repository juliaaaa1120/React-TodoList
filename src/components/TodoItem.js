function TodoItem(props) {
    return (
        <div className="todoItem">
            <span>{props.item}</span>
        </div>
    );
}

export default TodoItem;