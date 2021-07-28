import { createStore, combineReducers } from 'redux';
import { setStateToCookie, getStateFromCookie } from '../cookies/cookieHelper';
import AuthReducer from '../reducers/authReducer';

import { composeWithDevTools } from 'redux-devtools-extension'

import { loadState, saveState } from '../localstorage/localstorageHelper';

const configStore = () => {

    let persistedStateCookie = getStateFromCookie();
    let persistedStateLocalstorage = {}
    if (persistedStateCookie && persistedStateCookie.auth && persistedStateCookie.auth.isLogin) {
        persistedStateLocalstorage = loadState();
    } else {
        saveState(persistedStateCookie)
        persistedStateLocalstorage = persistedStateCookie
    }

    const store = createStore(
        combineReducers({
            auth: AuthReducer,
        }),
        persistedStateLocalstorage,
        composeWithDevTools()
    );

    store.subscribe(() => {
        setStateToCookie(store.getState())
        saveState(store.getState())
    })
    return store;
};

export default configStore;