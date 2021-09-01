import { AnyAction, Dispatch } from 'redux';
import { AuthInitialState } from '../reducers/auth';
import * as actionTypes from './actionTypes';

const authSuccess: ({ userId, token, expiryDate }: AuthInitialState) => AnyAction = ({ userId, token, expiryDate}) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token,
        expiryDate: expiryDate
    }
}

const authFail: (error: AuthInitialState) => AnyAction = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

const authStart: () => AnyAction = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const logout: () => AnyAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

//this function and its related uses is proving to be a handful
// const authLogout: (expiryTime: number) => AnyAction = (expiryTime) => {
//     return (dispatch: Dispatch) => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expiryTime * 1000);
//     }
// }

export const auth = (data: any, cat: any, isSignUp: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASOm_aUV9fSkVX820e-nef0Gi8u6C9w70';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASOm_aUV9fSkVX820e-nef0Gi8u6C9w70';
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                console.log(response);
                const expiryDate = new Date(new Date().getTime() + response.expiresIn * 1000);
                let { localId, idToken} = response;
                let userId = localId; 
                let token = idToken;
                dispatch(authSuccess({userId, token, expiryDate}));
                // dispatch(authLogout(response.expiresIn));
                // new request to store the user category
                const newUrl = 'https://fanaka-sasa-default-rtdb.firebaseio.com/userCategory.json'
                fetch(newUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: response.localId,
                        category: 'student'
                    })
                })
            })
            .catch(error => {
                console.log(error.message);
                dispatch(authFail(error.message))
            })
    }
}

export const setAuthRedirectPath: (authRedirectPath: AuthInitialState) => AnyAction = authRedirectPath => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: authRedirectPath
    }
}

/**
 * utility method to help us login and logout users from the root app
 * @returns 
 */
export const authCheckState: () => {} = () => {
    return (dispatch: Dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            let expiry: any; //look at this later
            if (localStorage.getItem('expirationDate')){
                expiry = localStorage.getItem('expirationDate');
            }
            const expirationDate = new Date(expiry);
            if (expirationDate >= new Date()) {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess({userId, token}));
                // dispatch(authLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout());
            }
        }
    }
}