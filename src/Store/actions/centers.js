import * as actionTypes from './actionTypes';

const formSumbitStart = () => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_START
    }
}

const formSumbitSuccess = (data) => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_SUCCESS,
        data: data
    }
}

const formSumbitFail = (error) => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_FAIL,
        error: error
    }
}

export const initCenterForm = (data, dispatch) => {
    return dispatch => {
        // we have started sumiting the form here
        dispatch(formSumbitStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/centers.json'
        fetch(url, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        })
        .then(res => {
            // if successfull then use the data above to load the page for efficiency
            dispatch(formSumbitSuccess(data));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(formSumbitFail(err.message));
        })
    }
}

export const logoTemp = (logo) => {
    return {
        type: actionTypes.CENTER_FORM_LOGO,
        logo: logo
    }
}

export const bgTemp = (bg) => {
    return {
        type: actionTypes.CENTER_FORM_BG,
        bg: bg
    }
}

export const pdfUpload = (pdf) => {
    return {
        type: actionTypes.CENTER_FORM_PDF,
        pdf: pdf
    }
}

// CENTER detail page
const centerFetchStart = () => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_START
    }
}

const centerFetchSuccess = (data) => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_SUCCESS,
        data: data
    }
}

const centerFetchError = (error) => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_FAIL,
        error: error
    }
}

export const initCenterDetailFetch = (dispatch) => {
    return dispatch => {
        dispatch(centerFetchStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/centers.json'
        fetch(url)
        .then(res => {
            const newData = res.data.slice(-1);
            dispatch(centerFetchSuccess(newData));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(centerFetchError(err.message));
        })
    }
}