
const postMessageStart = () => {
    return {
        type: 'POST_MESSAGE_START'
    }
}

const postMessageSuccess = (data) => {
    return {
        type: 'POST_MESSAGE_SUCCESS',
        data: data
    }
}

const postMessageFail = (error) => {
    return {
        type: 'POST_MESSAGE_FAIL',
        error: error
    }
}

export const initMessages = (data) => {
    return dispatch => {
        postMessageStart()
        fetch('', {
            method: 'POST',
            body: {
                data
            }
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            postMessageSuccess(res.data)
        })
        .catch(error => {
            postMessageFail(error)
        })
    }
}