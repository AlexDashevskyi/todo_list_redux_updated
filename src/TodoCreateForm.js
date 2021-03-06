import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './redux/action'

const createBtn = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-plus" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
            <path fillRule="evenodd"
                  d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
            <path fillRule="evenodd" d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
        </svg>);

function TodoCreateForm(props) {
    const [newTodo, setNewTodo] =useState('')
    
    const addButtonHandler = () => {
      props.addTodo(newTodo)
        setNewTodo('')
    };

    return (
        <div>
            TODO LIST
            <div className='mt-2'>
                Create new todo(s);
                <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} type='text'/>
                <span onClick={addButtonHandler}>{createBtn}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (newName) => dispatch(addTodo(newName)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateForm);