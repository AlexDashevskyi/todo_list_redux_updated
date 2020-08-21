import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoCreateForm from './TodoCreateForm';
import Dashboard from "./Dashboard";
import { uuid } from 'uuidv4';


function App(props) {

    return (

        <div className="App">

            <TodoCreateForm/>
            {props.todos.map((el, i) =>
                <Dashboard
                    title={el.title}
                    id={el.id}
                    done={el.done}
                    key={uuid()}
            />)}
            <button onClick={() => props.deleteAll()}>delete all</button>
        </div>
    );
}
const mapStateToProps = (state) => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
    deleteAll: (todo) => dispatch({type: 'DELETE_ALL', payload: todo}),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
