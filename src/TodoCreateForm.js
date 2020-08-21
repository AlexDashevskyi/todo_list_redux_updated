import React, {useState} from 'react';
import {connect} from 'react-redux'

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
                <button onClick={addButtonHandler}>create</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateForm);