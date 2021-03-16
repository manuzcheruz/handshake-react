import * as actionTypes from '../actions/actionTypes';

const initialState = {
    logo: null,
    bg: null,
    pdf: null,
    center: [],
    formSumbitStart: false,
    formSumbitError: null,
    centerDetail: [],
    centerFetchStart: false,
    centerFetchError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CENTER_FORM_LOGO:
            return {
                ...state,
                logo: action.logo
            }
        case actionTypes.CENTER_FORM_BG:
            return {
                ...state,
                bg: action.bg
            }
        case actionTypes.CENTER_FORM_PDF:
            return {
                ...state,
                pdf: action.pdf
            }
        case actionTypes.CENTER_FORM_SUBMIT_START:
            return {
                ...state,
                formSumbitStart: true
            }
        case actionTypes.CENTER_FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                center: action.data,
                formSumbitStart: false
            }
        case actionTypes.CENTER_FORM_SUBMIT_FAIL:
            return {
                ...state,
                formSumbitError: action.error,
                formSumbitStart: false
            }
        case actionTypes.CENTER_DETAIL_FETCH_START:
            return {
                ...state,
                centerFetchStart: true
            }
        case actionTypes.CENTER_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                centerDetail: action.data,
                centerFetchStart: false
            }
        case actionTypes.CENTER_DETAIL_FETCH_FAIL:
            return {
                ...state,
                centerFetchError: action.error,
                centerFetchStart: false
            }
        default:
            return state
    }
}

export default reducer;