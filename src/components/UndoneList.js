import { useSelector } from "react-redux";

function UndoneList() {
    const undoneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === false));

    return (
        <div className="undone-list">
            <h1>Undone List</h1>
            {
                (undoneList.length !== 0) ? undoneList.map(todoItem => <p>{todoItem.text}</p>) : <p>No undone items.</p>
            }
        </div>
    );
}

export default UndoneList;