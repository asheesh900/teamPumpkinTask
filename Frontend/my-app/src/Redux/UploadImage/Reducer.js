import {
    POST_IMAGE_REQUEST,
    POST_IMAGE_SUCCESS,
    POST_IMAGE_FAILURE,
} from './Action'

const initialState = {
    isRequest: false,
    msg: "",
    error: ""
}

const uploadImageReducer = (state = initialState, action) => {

    switch(action.type) {
        case POST_IMAGE_REQUEST:
            return {
                ...state,
                isRequest: true,
            }

        case POST_IMAGE_SUCCESS:
            return {
                ...state,
                msg: action.data.message,
            }

        case POST_IMAGE_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        default:
            return state
    }
}

export default uploadImageReducer;