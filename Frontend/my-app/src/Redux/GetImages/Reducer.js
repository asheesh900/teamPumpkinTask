import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
} from './Action';

const initialState = {
    isRequest: false,
    isData: false,
    data: [],
    error: "",
}

const getImagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGES_REQUEST:
            return {
                ...state,
                isRequest: true,
            }

        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                isData: true,
                data: action.data
            }

        case FETCH_IMAGES_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        default:
            return state
    }
}

export default getImagesReducer