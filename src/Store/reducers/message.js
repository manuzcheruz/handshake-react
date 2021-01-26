const initialState = {
    message: '',
    startPost: false,
    error: false
}

const messageReducer = (state = initialState, action) => {
    switch (action) {
        case 'POST_MESSAGE_START':
            return {
                ...state,
                startPost: true
            }
        case 'POST_MESSAGE_SUCCESS':
            return {
                ...state,
                message: action.data,
                startPost: false
            }
        case 'POST_MESSAGE_FAIL':
            return {
                ...state,
                error: action.error,
                startPost: false
            }
        default :
            return state
    }
}

export default messageReducer