/**
 * Types
 */

export const Types = {
    GET_REQUEST: 'todos/REQUEST',
    GET_SUCCESS: 'todos/SUCCESS',
    GET_FAILURE: 'todos/FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
    data: [],
}

export default function faker(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

/**
 * Actions
 */

export const Creators = {
    getRequest: () => ({ 
        type: Types.GET_REQUEST,
    }),

    getSuccess: (data) => ({ 
        type: Types.GET_SUCCESS,
        payload: { data }
    }),

    getFailure: () => ({ 
        type: Types.GET_FAILURE,
    }),
}