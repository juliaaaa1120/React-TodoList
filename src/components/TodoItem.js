function TodoItem(props) {
    return (
        <div className="todoItem">
            <span>{props.item.text}</span>
        </div>
    );
}

export default TodoItem;