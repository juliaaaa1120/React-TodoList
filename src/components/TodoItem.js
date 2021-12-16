import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { UPDATE_TODO_ITEM, REMOVE_TODO_ITEM } from "../constants/constants";
import { updateTodo, removeTodo } from "../apis/todos";
import { Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import TextArea from 'antd/lib/input/TextArea';

function TodoItem(props) {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(props.todoItem.text);

    function showModal() {
        setIsModalVisible(true);
      };
    
    function handleOk() {
        setIsModalVisible(false);
        if (editText.trim() !== "") {
            updateTodo({id: props.todoItem.id, text: editText}).then((response) => {
                dispatch({ type: UPDATE_TODO_ITEM, payload: response.data });
            });
        }
      };
    
    function handleCancel() {
        setIsModalVisible(false);
        setEditText(props.todoItem.text);
    };

    function updateStatus() {
        updateTodo({id: props.todoItem.id, done: !props.todoItem.done}).then((response) => {
            dispatch({ type: UPDATE_TODO_ITEM, payload: response.data });
        });
    }

    function removeTodoItem() {
        removeTodo(props.todoItem.id).then(() => {
            dispatch({ type: REMOVE_TODO_ITEM, payload: props.todoItem.id });
        });
    }

    return (
        <>
            <Modal title="Edit Todo Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Confirm">
                <TextArea placeholder="Edit todo item here ..." value={editText} onChange={e => setEditText(e.target.value)}></TextArea>
            </Modal>
            <div className={ props.todoItem.done ? "todo-item-done" : "todo-item-undone" }>
                <span onClick={updateStatus} className={ props.todoItem.done ? "line-through" : "normal-text" }>
                    {props.todoItem.text}
                </span>
                <span className="todo-item-button" id="remove" onClick={removeTodoItem}><DeleteOutlined /></span>
                <span className="todo-item-button" id="edit" onClick={showModal}><EditOutlined /></span>
            </div>
        </>
    );
};

export default TodoItem;