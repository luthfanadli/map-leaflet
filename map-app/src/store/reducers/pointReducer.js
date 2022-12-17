import { FETCH_POINT } from '../actionTypes'

const initialState = {
    point: []
}

function pointReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POINT:
            return {
                ...state,
                point: action.payload
            }
        default:
            return state
    }
}

export default pointReducer;