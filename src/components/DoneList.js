import { useSelector } from "react-redux";
import { GET_DONE_LIST } from "../constants/constants";

function DoneList() {
    const doneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === true));

    return (
        <div className="done-list">
            <h1>Done List</h1>
            {
                (doneList.length !== 0) ? doneList.map(todoItem => <p>{todoItem.text}</p>) : <p>No done items.</p>
            }
        </div>
    );
}

export default DoneList;