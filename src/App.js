import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoCreateForm from './TodoCreateForm';
import Dashboard from "./Dashboard";
import {getTodos} from "./redux/action";


function App(props) {

    useEffect(() => {
        props.getList();
    }, [])

    return (

        <div className="App">

            <TodoCreateForm/>
            {props.todos.map((el, i) =>
                <Dashboard
                    title={el.name}
                    _id={el._id}
                    index={i}
                    done={el.done}
                    key={Math.random()}
                    length={props.todos.length}
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
    getList: () => dispatch(getTodos())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
