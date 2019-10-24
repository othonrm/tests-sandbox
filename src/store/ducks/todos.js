/**
 * Types
 */

export const Types = {
    ADD: 'todos/ADD',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
    data: [],
}

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { data: [...state.data, action.payload.data] }
        default:
            return state;
    }
}

/**
 * Actions
 */

export const Creators = {
    addTodo: data => ({ 
        type: Types.ADD,
        payload: { data }
    }),
}