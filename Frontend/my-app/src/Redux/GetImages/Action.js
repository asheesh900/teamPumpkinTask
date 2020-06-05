import axios from 'axios';

// action types
export const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_FAILURE = "FETCH_IMAGES_FAILURE";

// action creators
export const getRequest = () => {
    return {
        type: FETCH_IMAGES_REQUEST,
    }
}

export const getSuccess = data => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        data: data,
    }
}

export const getFailure = error => {
    return {
        type: FETCH_IMAGES_FAILURE,
        error: error,
    }
}

// action to fetch the data
export const getData = token => {
    const url = `http://localhost:5000/records`
    return dispatch => {
        dispatch(getRequest())
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                // console.log(res.data)
                dispatch(getSuccess(res.data))
            })
            .catch(err => {
                alert(err)
                dispatch(getFailure(err))})

    }
}

// filter category

// action type
export const FILTER_CATEGORY = "FILTER_CATEGORY";

// action creator
export const filterCategory = (category) => {
    return {
        type: FILTER_CATEGORY,
        category: category
    }
}