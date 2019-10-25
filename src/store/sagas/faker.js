import { call, put } from 'redux-saga/effects';

import { Creators as FakerActions } from './../ducks/faker';

import api from './../../services/api';

export function* getFaker() {

    try
    {
        const response = yield call(api.get, '/todos/1');

        // console.log(response.data);

        yield put(FakerActions.getSuccess(response.data));
    }
    catch (error)
    {
        // console.log(error);

        yield put(FakerActions.getFailure(error));
    }

}