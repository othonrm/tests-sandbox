import todosReducer, { Creators as TodoActions } from './../../store/ducks/todos';

describe('Todos Reducer', () => {
    it('should be able to add todos', () => {
        const state = todosReducer({ data: [] }, TodoActions.addTodo("Task 1"));

        expect(state.data[0]).toBe("Task 1");
    })
});
