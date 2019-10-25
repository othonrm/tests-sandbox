import fakerReducer, { Creators as FakerActions } from './../../store/ducks/faker';

describe('Faker Reducer', () => {
    it('should be able to return initial state', () => {
        const state = fakerReducer({ data: ["Some initial value"] }, FakerActions.getRequest());

        expect(state.data).toEqual(["Some initial value"]);
    });
});
