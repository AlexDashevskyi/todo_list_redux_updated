import React, {useState} from 'react';
import {connect} from 'react-redux'

function Dashboard(props) {

    const {done, id, title} = props;

    const [updateTodo, setUpdateTodo] = useState(props.todos.title);
    const [editMode, setEditMode] = useState(false);

    const titleStyle = done ? {textDecoration: 'line-through'} : {};

    const saveButtonHandler = (todoId) => {
        props.editTodo(todoId, updateTodo)
        setEditMode(false);
        setUpdateTodo(props.todos.title)
    };

    if (editMode) {
        return (
            <div>
                <input type='text' value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)}/>
                <button onClick={() => saveButtonHandler(id)}>save</button>
            </div>
        );
    } else {
        return (
            <div>
                <span style={titleStyle}>
                {title}
                <input type='checkbox' checked={done} onChange={() => props.toggleTodo(id, done)}/>
                <button onClick={() => setEditMode(true)}>edit</button>
                <button onClick={() => props.deleteTodo(id)}>X</button>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    editTodo: (todoId, newTitle) => dispatch({type: 'EDIT_TODO', payload: {todoId, newTitle}}),
    toggleTodo: (todoId) => dispatch({type: 'TOGGLE_TODO', payload: todoId})
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);