import TodoGroup from "./TodoGroup";
import { useSelector } from "react-redux";
import { SmileOutlined } from "@ant-design/icons"

function DoneList() {
    const doneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === true));

    return (
        <div className="done-list">
            <h1><SmileOutlined />   Done List</h1>
            {
                doneList.length !== 0 ? <TodoGroup todoList={doneList}></TodoGroup> : <p>No done items.</p>
            }
        </div>
    );
}

export default DoneList;