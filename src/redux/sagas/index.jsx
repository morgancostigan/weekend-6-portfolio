//index.jsx is responsible for loading all sagas and smashing them together

import elementsSaga from './elementsSaga';
import { all } from 'redux-saga/effects';

//root SAGA
//this is like the master saga
//will be imported into the apps index.js as rootSaga

function* rootSaga() {
    yield all({
        //these are all the sagas, only the one but still...
        projectsSaga()
    })
}


export default rootSaga;