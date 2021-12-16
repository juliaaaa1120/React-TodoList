import { useSelector } from "react-redux";
import { List } from 'antd';
import { AlertOutlined } from "@ant-design/icons"

function UndoneList() {
    const undoneList = useSelector(state => state.todoList.filter(todoItem => todoItem.done === false));

    return (
        <div className="undone-list">
            <h1><AlertOutlined />   Undone List</h1>
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