import { runSaga } from 'redux-saga';

import { getFaker } from './../../store/sagas/faker';
import { Creators as FakerActions } from './../../store/ducks/faker';

const response = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

describe('Faker Saga', () => {

    it('should be able to fetch lorem ipsun faker api', async () => {
        const dispatched = [];

        await runSaga({
            dispatch: action => dispatched.push(action)
        }, getFaker).toPromise();

        expect(dispatched).toContainEqual(FakerActions.getSuccess(response));
    })
    
})
