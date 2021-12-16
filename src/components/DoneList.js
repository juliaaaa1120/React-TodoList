import { useSelector } from "react-redux";
import { List } from 'antd';

function DoneList() {
    const doneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === true));

    return (
        <div className="done-list">
            <h1>Done List</h1>
            <List
                size="large"
                bordered
                dataSource={doneList}
                renderItem={doneItem => <List.Item>{doneItem.text}</List.Item>}
                locale={{ emptyText: "No done items."}}>
            </List>
        </div>
    );
}

export default DoneList;