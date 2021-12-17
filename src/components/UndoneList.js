import TodoGroup from "./TodoGroup";
import { useSelector } from "react-redux";
import { AlertOutlined } from "@ant-design/icons"

function UndoneList() {
    const undoneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === false));

    return (
        <div className="undone-list">
            <h1><AlertOutlined />   Undone List</h1>
            <div className="todo-group">
            {
                undoneList.length !== 0 ? <TodoGroup todoList={undoneList}></TodoGroup> : <p id="message">No undone items.</p>
            }
            </div>
        </div>
    );
}

export default UndoneList;