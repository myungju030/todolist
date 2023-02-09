import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './css/TodoItem.css'
const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangSelectedTodo }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? <MdCheckBox onClick={() => onCheckToggle(id)} /> : <MdCheckBoxOutlineBlank onClick={() => onCheckToggle(id)} />}
                <div className="text" onClick={() => { onChangSelectedTodo(todo); onInsertToggle(); }}>{text}</div>
            </div>
        </div>
    )
};

export default TodoItem;