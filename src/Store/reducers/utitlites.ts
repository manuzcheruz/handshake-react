export interface UtilityInitialState {
    nightMode: boolean;
}

const initialState = {
    nightMode: false
}

const utilityreducer: (state: UtilityInitialState, action: any) => {} = (state = initialState, action) => {
    switch (action) {
        case 'TOGGLE_NIGHT_MODE':
            return {
                ...state,
                nightMode: !state.nightMode
            }
        default:
            return state
    }
}

export default utilityreducer;