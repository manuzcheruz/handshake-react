import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import messageReducer from './reducers/message';
import utilityReducer from './reducers/utitlites';
import studentReducer from './reducers/students';
import centerReducer from './reducers/centers';
import authReducer from './reducers/auth';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = compose(
//   (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : (f: any) => f
// );

const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    // company: companyReducer,
    center: centerReducer,
    // job: jobReducer,
    message: messageReducer,
    utility: utilityReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)