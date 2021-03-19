import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Shared/utilities';

const initialState = {
    token: null,
    userId: null,
    expiryDate: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true})
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        expiryDate: action.expiryDate,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        expiryDate: null
    })
}

const setAuthRedirect = (state, action) => {
    return updateObject(state, {
        authRedirectPath: action.path
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirect(state, action)
        default:
            return state
    }
}

export default reducer;