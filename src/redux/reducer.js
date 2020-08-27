

const initialState = {
    todos: [
        // {
        //     title: 'First todo',
        //     done: false,
        //     id: Math.random()
        // }, {
        //     title: 'Second todo',
        //     done: false,
        //     id: Math.random()
        // }, {
        //     title: 'Third todo',
        //     done: false,
        //     id: Math.random()
        // }, {
        //     title: 'Fourth todo',
        //     done: false,
        //     id: Math.random()
        // }
    ],
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODO':
            return {
                ...state,
                todos: action.payload
            }
        // case 'TODO_ADD':
        //     return {
        //         ...state,
        //         todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]
        //     };

        // case 'DELETE_TODO':
        //     let newTodos = state.todos.filter(el => el.id !== action.payload)
        //     return {
        //         ...state,
        //         todos: newTodos
        //     };
        case 'DELETE_ALL':
            return {
                ...state,
                todos: []
            }

        // case 'TOGGLE_TODO':
        //     return {
        //         ...state,
        //         todos: state.todos.map(el => {
        //             if (el.id === action.payload)
        //                 return ({...el, done: !el.done})
        //             return el;
        //         })
        //     }
        // case 'EDIT_TODO':
        //     return {
        //         ...state,
        //         todos: state.todos.map(el => {
        //             if (el.id === action.payload.todoId)
        //                 return ({...el, title: action.payload.newTitle})
        //             return el;
        //         })
        //     }
        case 'MOVE_UP':
            let newUpList = [...state.todos]
            let firstUpIndex = newUpList[action.payload];
            let secondUpIndex = newUpList[action.payload - 1];
            newUpList[action.payload] = secondUpIndex;
            newUpList[action.payload - 1] = firstUpIndex
            // [firstUpIndex, secondUpIndex] = [secondUpIndex, firstUpIndex];
            return {
                ...state,
                todos: [...newUpList]
            }
        case 'MOVE_DOWN':
            let newDownList = [...state.todos]
            let firstDownIndex = newDownList[action.payload];
            let secondDownIndex = newDownList[action.payload + 1];
            newDownList[action.payload] = secondDownIndex;
            newDownList[action.payload + 1] = firstDownIndex
            // [newUpList[action.payload], newUpList[action.payload + 1]] = [newUpList[action.payload + 1], newUpList[action.payload]];
            return {
                ...state,
                todos: [...newDownList]
            }
        default:
            return state;
    }
};

export default todo;
