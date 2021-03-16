import * as actionTypes from './actionTypes';

const formSumbitStart = () => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_START
    }
}

const formSumbitSuccess = (data) => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_SUCCESS,
        data: data
    }
}

const formSumbitFail = (error) => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_FAIL,
        error: error
    }
}

export const initStudentForm = (data, dispatch) => {
    return dispatch => {
        // we have started sumiting the form here
        dispatch(formSumbitStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/students.json'
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
        type: actionTypes.STUDENT_FORM_LOGO,
        logo: logo
    }
}

export const bgTemp = (bg) => {
    return {
        type: actionTypes.STUDENT_FORM_BG,
        bg: bg
    }
}

export const pdfUpload = (pdf) => {
    return {
        type: actionTypes.STUDENT_FORM_PDF,
        pdf: pdf
    }
}

// student detail page
const studentFetchStart = () => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_START
    }
}

const studentFetchSuccess = (data) => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_SUCCESS,
        data: data
    }
}

const studentFetchError = (error) => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_FAIL,
        error: error
    }
}

export const initStudentDetailFetch = (dispatch) => {
    return dispatch => {
        dispatch(studentFetchStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/students.json'
        fetch(url)
        .then(res => {
            const newData = res.data.slice(-1);
            dispatch(studentFetchSuccess(newData));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(studentFetchError(err.message));
        })
    }
}