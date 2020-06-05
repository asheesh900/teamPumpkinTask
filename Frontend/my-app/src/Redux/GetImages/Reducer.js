import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    FILTER_CATEGORY,
} from './Action';

const initialState = {
    isRequest: false,
    isData: false,
    data: [],
    displayArr: [],
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
                data: action.data,
                displayArr: action.data.image_record,
            }

        case FETCH_IMAGES_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        case FILTER_CATEGORY:
            let category = action.category
            let arr = state.data.image_record.filter((ele) => {
                if(category === "all") {
                    return ele
                }
                else if(ele.image_category === category) {
                    return ele
                }
            })
            return {
                ...state,
                displayArr: arr,

            }

        default:
            return state
    }
}

export default getImagesReducer