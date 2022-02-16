import { FETCH_POINT } from "../actionTypes";

const baseUrl = 'http://localhost:3001'

export const pointFetchSuccess = (payload) => {
    return {
        type: FETCH_POINT,
        payload
    }
}

export const fetchPoint = () => {
    return (dispatch) => {
        fetch(`${baseUrl}/point`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to Fetch Point')
                }
            })
            .then((data) => {
                dispatch(pointFetchSuccess(data))
            })
    }
}