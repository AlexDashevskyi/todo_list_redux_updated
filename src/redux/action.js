import axios from 'axios';

export function getTodos() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo')
            .then(result => {
                console.log(result.data)
                dispatch({
                    type: 'GET_TODO',
                    payload: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function addTodo(newName){
    return (dispatch) => {
        axios.post('http://localhost:5000/todo',{name: newName})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function deleteTodo(todoId){
    return (dispatch) => {
        axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function toggleTodo(todoId, done){
    return (dispatch) => {
        axios.put(`http://localhost:5000/todo/${todoId}`, {done: !done})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function editTodo(todoId, newTodo){
    return (dispatch) => {
        axios.patch(`http://localhost:5000/todo/${todoId}`, {name: newTodo})
            .then(result => {
                console.log(result.data)
                dispatch(getTodos())
            })
            .catch(error => {
                console.log(error)
            })
    }
}