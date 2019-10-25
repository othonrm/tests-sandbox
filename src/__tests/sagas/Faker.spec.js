import { runSaga } from 'redux-saga';

import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import { getFaker } from './../../store/sagas/faker';
import { Creators as FakerActions } from './../../store/ducks/faker';

const apiMock = new MockAdapter(api);

describe('Faker Saga', () => {

    it('should be able to fetch lorem ipsun faker api', async () => {
        const dispatched = [];

        const mockResponse = ["Todo 1", "Todo 2"];

        apiMock.onGet('/todos/1').reply(200, mockResponse);

        await runSaga({ dispatch: action => dispatched.push(action) }, getFaker).toPromise();

        expect(dispatched).toContainEqual(FakerActions.getSuccess(mockResponse));
    });

    it('should fail to fetch faker api', async () => {
        const dispatched = [];
        
        apiMock.onGet('/todos/1').reply(400);

        await runSaga({ dispatch: action => dispatched.push(action) }, getFaker).toPromise();

        expect(dispatched).toContainEqual(FakerActions.getFailure());
    });
    
})
