import React, {useState} from 'react';
import {connect} from 'react-redux';
import {deleteTodo, toggleTodo, editTodo} from "./redux/action";


const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>);

const editBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd"
          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>);


function Dashboard(props) {

    const {done, _id, index, title, length} = props;

    const [updateTodo, setUpdateTodo] = useState('');
    const [editMode, setEditMode] = useState(false);

    const titleStyle = done ? {textDecoration: 'line-through'} : {};

     const inputHandler = (e) => {
        setUpdateTodo(e.target.value)
    };

    const saveButtonHandler = (todoId) => {
        props.editTodo(todoId, updateTodo)
        setEditMode(false);
        setUpdateTodo(props.todos.name)
    };
    const moveUp = (index) => {
        props.moveUp(index)
    };
    const moveDown = (index) => {
        props.moveDown(index)
    };

    if (editMode) {
        return (
            <div>
                <input type='text' value={updateTodo} onChange={inputHandler}/>
                <button onClick={() => saveButtonHandler(_id)}>save</button>
            </div>
        );
    } else {
        return (
            <div>
                <span style={titleStyle}>
                {title}
                    <input type='checkbox' checked={done} onChange={() => props.toggleTodo(_id, done)}/>
                <span className='mr-2 ml-1' onClick={() => setEditMode(true)}>{editBtn}</span>
                <span onClick={() => props.deleteTodo(_id)}>{deleteBtn}</span>
                    <button className="btn btn-light" onClick={() => moveUp(index)} disabled={index === 0}>↑</button>
                    <button className="btn btn-light" onClick={() => moveDown(index)}
                            disabled={index === length - 1}>↓</button>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    editTodo: (todoId, newTitle) => dispatch(editTodo(todoId, newTitle)),
    // editTodo: (todoId, newTitle) => dispatch({type: 'EDIT_TODO', payload: {todoId, newTitle}}),
    // toggleTodo: (todoId) => dispatch({type: 'TOGGLE_TODO', payload: todoId}),
    toggleTodo: (todoId, done) => dispatch(toggleTodo(todoId, done)),
    moveUp: (index) => dispatch({type: 'MOVE_UP', payload: index}),
    moveDown: (index) => dispatch({type: 'MOVE_DOWN', payload: index}),

});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);