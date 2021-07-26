
const postMessageStart: () => {} = () => {
    return {
        type: 'POST_MESSAGE_START'
    }
}

const postMessageSuccess: (data: any) => {} = (data) => {
    return {
        type: 'POST_MESSAGE_SUCCESS',
        data: data
    }
}

const postMessageFail: (error: any) => {} = (error) => {
    return {
        type: 'POST_MESSAGE_FAIL',
        error: error
    }
}

export const initMessages: (data: any) => {} = (data) => {
    return dispatch => {
        postMessageStart()
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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