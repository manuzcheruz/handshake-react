import * as actionTypes from './actionTypes';

const authSuccess = (id, token, expiryDate) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: id,
        token: token,
        expiryDate: expiryDate
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const authLogout = (expiryTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiryTime * 1000);
    }
}

export const auth = (data, cat, isSignUp) => {
    return dispatch => {
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
                dispatch(authSuccess(response.localId, response.idToken, expiryDate));
                dispatch(authLogout(response.expiresIn));
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

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

// utility method to help us login and logout users from the root app
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate => new Date()) {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(userId, token));
                dispatch(authLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout())
            }
        }
    }
}