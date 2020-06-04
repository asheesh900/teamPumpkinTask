import axios from "axios";

// action types
export const POST_IMAGE_REQUEST = "POST_IMAGE_REQUEST";
export const POST_IMAGE_SUCCESS = "POST_IMAGE_SUCCESS";
export const POST_IMAGE_FAILURE = "POST_IMAGE_FAILURE";

// action creators
export const postRequest = () => {
    return {
        type: POST_IMAGE_REQUEST,
    }
}

export const postSuccess = data => {
    return {
        type: POST_IMAGE_SUCCESS,
        data: data,
    }
}

export const postFailure = error => {
    return {
        type: POST_IMAGE_FAILURE,
        error: error,
    }
}

// action to post the file
export const uploadImage = (data, token) => {
    const url = `http://localhost:5000/uploader`;
    return dispatch => {
        dispatch(postRequest());
        return axios
            .post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                alert(res.data.message)
                dispatch(postSuccess(res.data))
            })
            .catch(err => dispatch(postFailure(err)))

    }
}