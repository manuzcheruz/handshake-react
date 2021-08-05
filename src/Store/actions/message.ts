import { Dispatch, AnyAction } from "redux";

const postMessageStart: () => AnyAction = () => {
    return {
        type: 'POST_MESSAGE_START'
    }
}

const postMessageSuccess: (data: any) => AnyAction = (data) => {
    return {
        type: 'POST_MESSAGE_SUCCESS',
        data: data
    }
}

const postMessageFail: (error: any) => AnyAction = (error) => {
    return {
        type: 'POST_MESSAGE_FAIL',
        error: error
    }
}

export const initMessages: (data: any) => void = (data) => {
    return (dispatch: Dispatch) => {
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