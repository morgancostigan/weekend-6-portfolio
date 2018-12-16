import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjects() {
    try {
        // console.log('fetchProjects saga triggered');
        //AXIOS GET
        const projectsResponse = yield call(axios.get, '/api/project')
        yield dispatch({ type: 'SET_PROJECTS', payload: projectsResponse });
        // console.log(projectsResponse);
        // console.log('end of fetchProjects');
    } catch (error) {
        console.log('error', error);
    }
}// end fetchProjects

function* postProject(action) {
    try {
        // console.log('here is the action in postProject', action);
        yield call(axios.post, '/api/project', action.payload)
        yield dispatch({ type: 'GET_PROJECTS' })
        // console.log('end of postProject');
    } catch (error) {
        console.log('error', error);
    }
}// end postProject

// this is the saga that will watch for actions
function* watcherSaga() {
    yield takeEvery('GET_PROJECTS', fetchProjects);
    yield takeEvery('ADD_PROJECT', postProject);
}

export default watcherSaga;