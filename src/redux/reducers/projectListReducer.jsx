import { combineReducers } from "redux";

const projectList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            console.log('SET_PROJECTS', action.payload);
            return action.payload
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    projectList
})

export default rootReducer;