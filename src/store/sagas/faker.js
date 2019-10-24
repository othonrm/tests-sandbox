import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { Creators as FakerActions } from './../ducks/faker';

export function* getFaker() {

    try
    {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/1');

        console.log(response.data);

        yield put(FakerActions.getSuccess(response.data));        
    }
    catch (error)
    {
        console.log(error);

        yield put(FakerActions.getFailure(error));
    }

}