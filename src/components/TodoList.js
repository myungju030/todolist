import React from "react";
import TodoItem from "./TodoItem";
import "./css/TodoList.css"
const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangSelectedTodo }) => {
    return <div className="TodoList">{todos.map(todo => (<TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangSelectedTodo={onChangSelectedTodo} />))}</div>
}
export default TodoList;