const initialState = {
    nightMode: false
}

const utilityreducer = (state = initialState, action) => {
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

export default utilityreducer