import {uuid} from 'uuidv4';

const initialState = {
    todos: [
        {
            title: 'First todo',
            done: false,
            id: uuid()
        }, {
            title: 'Second todo',
            done: false,
            id: uuid()
        }, {
            title: 'Third todo',
            done: false,
            id: uuid()
        }, {
            title: 'Fourth todo',
            done: false,
            id: uuid()
        }
    ],
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, {title: action.payload, done: false, id: uuid()}]
            };

        case 'DELETE_TODO':
            let newTodos = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: newTodos
            };
        case 'DELETE_ALL':
            return {
                ...state,
                todos: []
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(el => {
                    if (el.id === action.payload)
                        return ({...el, done: !el.done})
                    return el;
                })
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(el => {
                    if (el.id === action.payload.todoId)
                        return ({...el, title: action.payload.newTitle})
                    return el;
                })
            }
        default:
            return state;
    }
};

export default todo;
