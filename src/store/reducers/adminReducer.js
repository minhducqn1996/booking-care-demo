import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    position: [],
    role: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let allState = {...initialState}
            allState.gender = action.data;
            return {
                ...allState
            }
        case actionTypes.FETCH_GENDER_FAILD:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;