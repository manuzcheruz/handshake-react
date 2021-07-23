export interface MessageInitialState {
    message: string;
    startPost: boolean;
    error: boolean;
}

const initialState: MessageInitialState = {
    message: '',
    startPost: false,
    error: false
}

/**
 * this reducer handles the state of messaging and chat
 * @param state 
 * @param action 
 * @returns 
 */
const messageReducer: (state: MessageInitialState, action: any) => {} = (state = initialState, action) => {
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

export default messageReducer;