import * as actionTypes from '../actions/actionTypes';

export interface CenterInitialState {
    logo: any | null;
    bg: any | null;
    pdf: any | null;
    center: any[];
    formSumbitStart: boolean;
    formSumbitError: any | null;
    centerDetail: any[];
    centerFetchStart: boolean;
    centerFetchError: any | null;
}

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

/**
 * this reducer manages the state of the centers
 * @param state 
 * @param action 
 * @returns 
 */
const reducer: (state: CenterInitialState, action: any) => {} = (state = initialState, action) => {
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