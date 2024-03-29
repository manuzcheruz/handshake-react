import { AnyAction, Dispatch } from 'redux';
import { CenterInitialState } from '../reducers/centers';
import * as actionTypes from './actionTypes';

const formSumbitStart: () => AnyAction = () => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_START
    }
}

const formSumbitSuccess: (center: CenterInitialState) => AnyAction = (center) => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_SUCCESS,
        data: center
    }
}

const formSumbitFail: (error: CenterInitialState) => AnyAction = (error) => {
    return {
        type: actionTypes.CENTER_FORM_SUBMIT_FAIL,
        error: error
    }
}

export const initCenterForm: (center: CenterInitialState) => {} = (center) => {
    return (dispatch: Dispatch) => {
        // we have started sumiting the form here
        dispatch(formSumbitStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/centers.json'
        fetch(url, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(center)
        })
        .then(res => {
            // if successfull then use the data above to load the page for efficiency
            dispatch(formSumbitSuccess(center));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(formSumbitFail(err.message));
        })
    }
}

export const logoTemp: (logo: CenterInitialState) => {} = (logo) => {
    return {
        type: actionTypes.CENTER_FORM_LOGO,
        logo: logo
    }
}

export const bgTemp: (bg: CenterInitialState) => {} = (bg) => {
    return {
        type: actionTypes.CENTER_FORM_BG,
        bg: bg
    }
}

export const pdfUpload: (pdf: CenterInitialState) => {} = (pdf) => {
    return {
        type: actionTypes.CENTER_FORM_PDF,
        pdf: pdf
    }
}

// CENTER detail page
const centerFetchStart: () => AnyAction = () => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_START
    }
}

const centerFetchSuccess: (center: CenterInitialState) => AnyAction = (data) => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_SUCCESS,
        data: data
    }
}

const centerFetchError: (error: any) => AnyAction = (error) => {
    return {
        type: actionTypes.CENTER_DETAIL_FETCH_FAIL,
        error: error
    }
}

export const initCenterDetailFetch: (dispatch?: any) => {} = (dispatch) => {
    return (dispatch: Dispatch) => {
        dispatch(centerFetchStart());

        const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/centers.json'
        fetch(url)
        .then((res: any) => {
            const newData = res.data.slice(-1);
            dispatch(centerFetchSuccess(newData));
        })
        .catch(err => {
            // if unsuccessfull then just post an error message 
            dispatch(centerFetchError(err.message));
        })
    }
}