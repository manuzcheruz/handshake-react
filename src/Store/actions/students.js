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