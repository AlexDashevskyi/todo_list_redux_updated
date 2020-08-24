import React, {useState} from 'react';
import {connect} from 'react-redux'

function Dashboard(props) {

    const {done, id, index, title, length} = props;

    const [updateTodo, setUpdateTodo] = useState(props.todos.title);
    const [editMode, setEditMode] = useState(false);

    const titleStyle = done ? {textDecoration: 'line-through'} : {};

    const saveButtonHandler = (todoId) => {
        props.editTodo(todoId, updateTodo)
        setEditMode(false);
        setUpdateTodo(props.todos.title)
    };
    const moveUp = (index) => {
        props.moveUp(index)
    };
    const moveDown = (index) => {
        props.moveDown(index)
    };
    const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>);

    const editBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
        <path fill-rule="evenodd"
              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
    </svg>);


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
                <span className='mr-2 ml-1' onClick={() => setEditMode(true)}>{editBtn}</span>
                <span onClick={() => props.deleteTodo(id)}>{deleteBtn}</span>
                    <button className="btn btn-light" onClick={() => moveUp(index)} disabled={index === 0}>↑</button>
                    <button className="btn btn-light" onClick={() => moveDown(index)} disabled={index === length - 1}>↓</button>
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
    toggleTodo: (todoId) => dispatch({type: 'TOGGLE_TODO', payload: todoId}),
    moveUp: (index) => dispatch({type: 'MOVE_UP', payload: index}),
    moveDown: (index) => dispatch({type: 'MOVE_DOWN', payload: index})
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);