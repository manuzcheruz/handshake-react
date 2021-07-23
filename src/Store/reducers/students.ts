import * as actionTypes from '../actions/actionTypes';


export interface StudentInitialState {
    logo: null | any;
    bg: null | any;
    pdf: null | any;
    student: any[];
    formSumbitStart: boolean;
    formSumbitError: null | any;
    studentDetail: any[];
    studentFetchStart: boolean;
    studentFetchError: null | any;
}

const initialState: StudentInitialState = {
    logo: null,
    bg: null,
    pdf: null,
    student: [],
    formSumbitStart: false,
    formSumbitError: null,
    studentDetail: [],
    studentFetchStart: false,
    studentFetchError: null
}

const reducer: (state: StudentInitialState, action: any) => {} = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STUDENT_FORM_LOGO:
            return {
                ...state,
                logo: action.logo
            }
        case actionTypes.STUDENT_FORM_BG:
            return {
                ...state,
                bg: action.bg
            }
        case actionTypes.STUDENT_FORM_PDF:
            return {
                ...state,
                pdf: action.pdf
            }
        case actionTypes.STUDENT_FORM_SUBMIT_START:
            return {
                ...state,
                formSumbitStart: true
            }
        case actionTypes.STUDENT_FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                student: action.data,
                formSumbitStart: false
            }
        case actionTypes.STUDENT_FORM_SUBMIT_FAIL:
            return {
                ...state,
                formSumbitError: action.error,
                formSumbitStart: false
            }
        case actionTypes.STUDENT_DETAIL_FETCH_START:
            return {
                ...state,
                studentFetchStart: true
            }
        case actionTypes.STUDENT_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                studentDetail: action.data,
                studentFetchStart: false
            }
        case actionTypes.STUDENT_DETAIL_FETCH_FAIL:
            return {
                ...state,
                studentFetchError: action.error,
                studentFetchStart: false
            }
        default:
            return state
    }
}

export default reducer;