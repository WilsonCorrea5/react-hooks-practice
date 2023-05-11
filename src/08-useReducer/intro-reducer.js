const initialState = [{
    id: 1,
    todo: 'tarea 1 😀',
    done: false,
}];

const todoReducer = ( state = initialState, action={}) => {

    if (action.type === '[TODO] Add todo'){
        return [...state, action.payload];
    }
    
    return state;
};

const newTodo = {
    id: 2,
    todo: 'tarea 2 😁',
    done: false,
}

const addTodo = {
    type: '[TODO] Add todo',
    payload: newTodo
}

let todos = todoReducer();


todos = todoReducer(todos, addTodo)
console.log({state: todos})