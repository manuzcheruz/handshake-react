import { AnyAction, Dispatch } from 'redux';
import * as actionTypes from './actionTypes';

const formSumbitStart: () => AnyAction = () => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_START
    }
}

const formSumbitSuccess: (data: any) => AnyAction = (data) => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_SUCCESS,
        data: data
    }
}

const formSumbitFail: (error: any) => AnyAction = (error) => {
    return {
        type: actionTypes.STUDENT_FORM_SUBMIT_FAIL,
        error: error
    }
}

export const initStudentForm: (data: any, dispatch: any) => {} = (data, dispatch) => {
    return (dispatch: Dispatch) => {
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

export const logoTemp: (logo: any) => AnyAction = (logo) => {
    return {
        type: actionTypes.STUDENT_FORM_LOGO,
        logo: logo
    }
}

export const bgTemp: (bg: any) => AnyAction = (bg) => {
    return {
        type: actionTypes.STUDENT_FORM_BG,
        bg: bg
    }
}

export const pdfUpload: (pdf: any) => AnyAction = (pdf) => {
    return {
        type: actionTypes.STUDENT_FORM_PDF,
        pdf: pdf
    }
}

// student detail page
const studentFetchStart: () => AnyAction = () => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_START
    }
}

const studentFetchSuccess: (data: any) => AnyAction = (data) => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_SUCCESS,
        data: data
    }
}

const studentFetchError: (error: any) => AnyAction = (error) => {
    return {
        type: actionTypes.STUDENT_DETAIL_FETCH_FAIL,
        error: error
    }
}

export const initStudentDetailFetch: (dispatch: any) => {} = (dispatch) => {
    return (dispatch: Dispatch) => {
        dispatch(studentFetchStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/students.json'
        fetch(url)
        .then((res: any) => {
            const newData = res.data.slice(-1);
            dispatch(studentFetchSuccess(newData));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(studentFetchError(err.message));
        })
    }
}