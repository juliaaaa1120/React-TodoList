import { useSelector } from "react-redux";
import { List } from 'antd';

function UndoneList() {
    const undoneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === false));

    return (
        <div className="undone-list">
            <h1>Undone List</h1>
            <List
                size="large"
                bordered
                dataSource={undoneList}
                renderItem={undoneItem => <List.Item>{undoneItem.text}</List.Item>}
                locale={{ emptyText: "No undone items."}}>
            </List>
        </div>
    );
}

export default UndoneList;