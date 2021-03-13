import * as actionTypes from '../actions/actionTypes';

const initialState = {
    student: [],
    formSumbitStart: false,
    formSumbitError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STUDENT_FORM_SUBMIT_START:
            return {
                ...state,
                formSumbitStart: true
            }
        case actionTypes.STUDENT_FORM_SUBMIT_SUCCESS:
            console.log(action.data);
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
        default:
            return state
    }
}

export default reducer;